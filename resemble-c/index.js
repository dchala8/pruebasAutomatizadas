const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const { genVar } =  require('../PruebasPuppeteer/generalVariables.js');
const fs = require('fs');

const { viewportHeight, viewportWidth, browsers, options } = config;

async function executeTest() {
    if (browsers.length === 0) {
        return;
    }
    let resultInfo = []
    let datetime = new Date().toISOString().replace(/:/g, ".");
    const casesAndImages = [
        [6, 7]
        ,[7,12]
        ,[8,9]
        ,[9,8]
        ,[10,9]
    ]

    for (cai of casesAndImages) {
        let c = cai[0];
        
        if (!fs.existsSync(`./results/resCase${c}`)) {
            fs.mkdirSync(`./results/resCase${c}`, { recursive: true });
        }

        for (let im = 1; im <= cai[1]; im++) {
            // resultInfo.push("hi")
            let route1 = `./Case${c}/${genVar.port1}-i${im}.png`
            let route2 = `./Case${c}/${genVar.port2}-i${im}.png`
            const data = await compareImages(
                // Images need to be names starting with v1- or v2- and followed by letter i and the numer of the image starting by 1
                fs.readFileSync(route1),
                fs.readFileSync(route2),
                options
            );
            let caseString = `case${c}-Image${im}`
            resultInfo.push([caseString, {
                isSameDimensions: data.isSameDimensions,
                dimensionDifference: data.dimensionDifference,
                rawMisMatchPercentage: data.rawMisMatchPercentage,
                misMatchPercentage: data.misMatchPercentage,
                diffBounds: data.diffBounds,
                analysisTime: data.analysisTime
            }, route1, route2])

            fs.writeFileSync(`./results/resCase${c}/compare-${caseString}.png`, data.getBuffer());
        }

        fs.writeFileSync(`./results/resCase${c}/report.html`, createReport(datetime, resultInfo));
        fs.copyFileSync('./index.css', `./results/resCase${c}/index.css`);
        resultInfo =[]
    }


    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the reports under the results folder")
    return resultInfo;
}
(async () => console.log(await executeTest()))();

function caseImage(info) {
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Case: ${info[0]}</h2>
        <p>Data: ${JSON.stringify(info[1])}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="../../${info[2]}" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="../../${info[3]}" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${info[0]}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(datetime, resInfo) {
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${resInfo.map(x => caseImage(x))}
            </div>
        </body>
    </html>`
}