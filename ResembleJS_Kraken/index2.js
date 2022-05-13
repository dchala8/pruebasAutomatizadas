const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');


const { viewportHeight, viewportWidth, browsers, options } = config;
const dir = './results/Ghost_4_29';

async function executeTest(){  

  var files = fs.readdirSync(dir);
  let scenario = 10;
  let resultInfo = {}
  for (let index = 1; index < files.length; index++) {    

    const data = await compareImages(
      fs.readFileSync(`./results/Ghost_4_29/screenshotScenario${scenario}_StepNumber0${index}.png`),
      fs.readFileSync(`./results/Ghost_4_41/screenshotScenario${scenario}_StepNumber0${index}.png`),
      options
  );

  resultInfo = {
    isSameDimensions: data.isSameDimensions,
    dimensionDifference: data.dimensionDifference,
    rawMisMatchPercentage: data.rawMisMatchPercentage,
    misMatchPercentage: data.misMatchPercentage,
    diffBounds: data.diffBounds,
    analysisTime: data.analysisTime
  }

  fs.copyFile(`./results/Ghost_4_29/screenshotScenario${scenario}_StepNumber0${index}.png`,
  `./results/VTR/screenshotScenario${scenario}_before${index}.png`, (err)=>{
    if(err)throw err;
    });

  fs.copyFile(`./results/Ghost_4_41/screenshotScenario${scenario}_StepNumber0${index}.png`,
  `./results/VTR/screenshotScenario${scenario}_after${index}.png`, (err)=>{
    if(err)throw err;
    });

  fs.writeFileSync(`./results/VTR/screenshotScenario${scenario}_compare${index}.png`, data.getBuffer());
    
  }

  fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, resultInfo));
  fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;  
  }
(async ()=>console.log(await executeTest()))();

function browser(b, info){
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Browser: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="before-${b}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="after-${b}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${b}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(datetime, resInfo){
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
                ${config.browsers.map(b=>browser(b, resInfo[b]))}
            </div>
        </body>
    </html>`
}