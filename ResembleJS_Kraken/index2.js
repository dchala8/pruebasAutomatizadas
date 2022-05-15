const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');
const { isStringObject } = require('util/types');


const { viewportHeight, viewportWidth, browsers, options } = config;
const dir = './results/Ghost_4_29';

async function executeTest(){  

  var files = fs.readdirSync(dir);
  let scenario = config.scenario;
  let resultInfo = {}
  let datetime = new Date().toISOString().replace(/:/g,".");
  if (!fs.existsSync(`./results/${datetime}`)){
    fs.mkdirSync(`./results/${datetime}`, { recursive: true });
  }

  let executionResults = [];
  for (let i = 0; i < scenario.length; i++) {
    var steps = files.filter(p => String(p).startsWith("screenshotScenario"+scenario[i]))

    let currentScenario = {
      "scenarioID": scenario[i],
      "results": []
    }
    
    for (let index = 1; index < steps.length + 1; index++) {
      
      const data = await compareImages(
        fs.readFileSync(`./results/Ghost_4_29/screenshotScenario${scenario[i]}_StepNumber${index}.png`),
        fs.readFileSync(`./results/Ghost_4_41/screenshotScenario${scenario[i]}_StepNumber${index}.png`),
        options
      );
  
      resultInfo = {
        isSameDimensions: data.isSameDimensions,
        dimensionDifference: data.dimensionDifference,
        rawMisMatchPercentage: data.rawMisMatchPercentage,
        misMatchPercentage: data.misMatchPercentage,
        diffBounds: data.diffBounds,
        analysisTime: data.analysisTime,
        "stepNumber": index
      }
      //let execution = executionResults.find(executionResults => executionResults.scenarioID === scenario[i]);
      currentScenario.results.push(resultInfo);
    
      fs.copyFile(`./results/Ghost_4_29/screenshotScenario${scenario[i]}_StepNumber${index}.png`,
      `./results/${datetime}/screenshotScenario${scenario[i]}_before${index}.png`, (err)=>{
        if(err)throw err;
        });
    
      fs.copyFile(`./results/Ghost_4_41/screenshotScenario${scenario[i]}_StepNumber${index}.png`,
      `./results/${datetime}/screenshotScenario${scenario[i]}_after${index}.png`, (err)=>{
        if(err)throw err;
        });
    
      fs.writeFileSync(`./results/${datetime}/screenshotScenario${scenario[i]}_compare${index}.png`, data.getBuffer());
      
    }
    executionResults.push(currentScenario);
    
  } 
  
  fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, executionResults));
  fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;  
  }
(async ()=>console.log(await executeTest()))();

function browser(info, scenarioID){
    htmlResult = `<div class=" browser" id="test0">`;
    for(let i=0; i < info.length; i++){
      let infoI = info[i];
      let stepNumber = infoI["stepNumber"];
      htmlResult = htmlResult+`<div class=" btitle">
                  <h2>Step: ${stepNumber}</h2>
                  <h3>Results</h3>
                  <p>Is same dimensions?: ${infoI.isSameDimensions}</p>
                  <p>Dimensions difference: ${JSON.stringify(infoI.dimensionDifference)}</p>
                  <p>Missmatch: ${infoI.misMatchPercentage}%</p>
                  <p>Difference bounds: ${JSON.stringify(infoI.diffBounds)}</p>
                  <p>Analysis time: ${infoI.analysisTime}</p>
                  </div>
                  <div class="imgline">
                    <div class="imgcontainer">
                      <span class="imgname">Reference</span>
                      <img class="img2" src="screenshotScenario${scenarioID}_before${stepNumber}.png" id="refImage" label="Reference">
                    </div>
                    <div class="imgcontainer">
                      <span class="imgname">Test</span>
                      <img class="img2" src="screenshotScenario${scenarioID}_after${stepNumber}.png" label="Test">
                    </div>
                  </div>
                  <div class="imgline">
                    <div class="imgcontainer">
                      <span class="imgname">Diff</span>
                      <img class="imgfull" src="screenshotScenario${scenarioID}_compare${stepNumber}.png" id="diffImage" label="Diff">
                    </div>
                  </div>
                </div>`
    }
    return htmlResult;
}

function createReport(datetime, executionResults){
  let htmlResult = `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>`
  for(index=0; index < executionResults.length; index++){
    let scenarioID = executionResults[index]["scenarioID"];
    let results = executionResults[index]["results"];
    htmlResult = htmlResult+`<h1>Report forScenario: ${scenarioID}</h1>
                    <p>Executed: ${datetime}</p>
                    <div id="visualizer">
                        ${config.browsers.map(b=>browser(results, scenarioID))}
                    </div>`
  } 
  htmlResult = htmlResult + `</body>
  </html>`
                 
  return htmlResult;
}