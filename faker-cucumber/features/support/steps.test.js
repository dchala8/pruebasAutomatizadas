const PageObject = require("../../pageObject.js");
const { When, Then, Given, } = require("cucumber")
const puppeteer = require("puppeteer")
var { setDefaultTimeout } = require('cucumber');
const { genVar } = require("../../generalVariables.js");
var fs = require('fs');
const { faker } = require('@faker-js/faker');

let caseToUse = 'case1';
const pageObject = new PageObject();

setDefaultTimeout(600 * 1000);

let browser, page, page2
let caseFolder
let tagName
let publication
let userName
let tituloPost
let siteTitle
let personalURL
let designElementValue
let siteLanguage
let siteCode
let codeArea
let tituloPage
let userEmail

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

Given('User visits ghost for {string}', async function (string) {
    caseToUse = string

    caseFolder = `../resemble-c/V2/${caseToUse}`
    if (!fs.existsSync(caseFolder)) {
        fs.mkdirSync(caseFolder);
    }

    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();

    await page.goto(`http://localhost:${genVar.port}/ghost`);
    await new Promise(r => setTimeout(r, 100));
    await page.screenshot({ path: `${caseFolder}/${genVar.port}-i1.png` })


    console.log("-------------------------------" + caseToUse + "-------------------------------")

});

Given('User is visiting ghost for {string}', async function (string) {
    caseToUse = string

    caseFolder = `../resemble-c/V2/${caseToUse}`
    if (!fs.existsSync(caseFolder)) {
        fs.mkdirSync(caseFolder);
    }

    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });

    await page.goto(`http://localhost:${genVar.port}/ghost`);
    await new Promise(r => setTimeout(r, 100));
    await page.screenshot({ path: `${caseFolder}/${genVar.port}-i1.png` })


    console.log("-------------------------------" + caseToUse + "-------------------------------")

});



When('User creates a new post', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a Posts
    await pageObject.goToPost(page, caseToUse);
    //Ingresar a Crear posts
    await pageObject.goToCreatePost(page);
    //Crear Nuevo Post
    this.tituloPost = await faker.name.findName();
    await pageObject.createPost(page, this.tituloPost, this.tituloPost);
});


Then('validate if post was created', async function () {
    //Validar que si se creo el nuevo post
    const grabItems = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    },this.tituloPost)
    //Se imprime el resultado de las pruebas
    console.log("WAS THE POST CREATED AND PUBLISHED?")
    console.log(grabItems)
    await browser.close();
});

When('User creates a new post and User deletes the new post', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a Posts
    await pageObject.goToPost(page, caseToUse);
    //Ingresar a Crear posts
    await pageObject.goToCreatePost(page, caseToUse);
    //Crear Nuevo Post
    this.tituloPost = await faker.name.findName();
    await pageObject.createPost(page, this.tituloPost, this.tituloPost);
    // va en 7
    //Validar que si se creo el nuevo post
    const grabItems = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    },this.tituloPost)

    console.log("WAS THE POST CREATED?");
    console.log(grabItems);

    //Ingreso al post para eliminarlo
    await pageObject.goToSpecificPost(page, this.tituloPost, 8);

    //Elimino el post
    await pageObject.deletePost(page, caseToUse);

    await new Promise(r => setTimeout(r, 100));
    await page.screenshot({ path: `${caseFolder}/${genVar.port}-i12.png` })
});

Then('Validate if the post was deleted', async function () {
    //Validar que si se elimino el nuevo post
    const grabItems2 = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item");
        let isItContained = false;

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a");
            const firstElement = actualPublication[0];
            const title = firstElement.querySelector("h3");
            if (title.innerHTML.includes(selector)) {
                isItContained = true;
            }
        })

        return !isItContained;
    })
    console.log("WAS THE POST DELETED?")
    console.log(grabItems2)
    await browser.close();
},this.tituloPost);


When('User creates a new post as a draft', async function () {

    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a Posts
    await pageObject.goToPost(page, caseToUse);
    //Ingresar a Crear posts
    await pageObject.goToCreatePost(page, caseToUse);
    //Crear Nuevo Post como Draft
    this.tituloPost = await faker.name.findName();
    await pageObject.draftPost(page, this.tituloPost);

    //THEN
    //Validar que si se creo el nuevo post
    const grabItems = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    },this.tituloPost)

    console.log("WAS THE POST PUBLISHED?")
    console.log(grabItems)
    //Validar que si se creo draft del post
    const grabItems2 = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("DRAFT")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    },this.tituloPost)

    console.log("WAS THE POST DRAFTED?")
    console.log(grabItems2)

});

Then('publish the draft and validate it was published', async function () {

    //Ingreso al post para publicarlo
    await pageObject.goToSpecificPost(page, this.tituloPost, 6);
    //Publico el post
    await pageObject.publishDraftPost(page, caseToUse);
    //Valido si se publico el post
    const grabItems3 = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })
        return isItContained;
    },this.tituloPost)

    console.log("WAS THE POST PUBLISHED?")
    console.log(grabItems3)
    await browser.close();
});

When('User creates a new post and shcedules it', async function () {
    // Write code here that turns the phrase above into concrete actions
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a Posts
    await pageObject.goToPost(page, caseToUse);
    //Ingresar a Crear posts
    await pageObject.goToCreatePost(page, caseToUse);
    //Schedule Nuevo Post 
    this.tituloPost = await faker.name.findName();
    await pageObject.schedulePost(page, this.tituloPost);
});

Then('wait five minutes and validate if it was published', async function () {
    const grabItems = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("SCHEDULED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    },this.tituloPost)

    console.log("WAS THE POST SCHEDULED?")
    console.log(grabItems)
    //Wait 5 minutes and reaload page
    await new Promise(r => setTimeout(r, 305000));
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    //Validate if post was Published
    await new Promise(r => setTimeout(r, 3000));
    const grabItems2 = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    },this.tituloPost)
    console.log("WAS THE POST PUBLISHED?")
    console.log(grabItems2)
    await page.screenshot({ path: `${caseFolder}/${genVar.port}-i8.png` })

    //...
    await browser.close();
    return;
});

When('User publishes a new post and then unpublishes it', async function () {
    //WHEN
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a Posts
    await pageObject.goToPost(page, caseToUse);
    //Ingresar a Crear posts
    await pageObject.goToCreatePost(page, caseToUse);
    //Crear Nuevo Post
    this.tituloPost = await faker.name.findName();
    await pageObject.createPost(page, this.tituloPost, this.tituloPost);
    //va en 7


    //THEN
    //Validar que si se creo el nuevo post
    const grabItems = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })
        return isItContained;
    },this.tituloPost)

    console.log("WAS THE POST PUBLISHED?")
    console.log(grabItems)

    //Ingreso al post para marcarlo como Draft
    await pageObject.goToSpecificPost(page, this.tituloPost, 8);
    //Se marca el post como draft
    await pageObject.setPostAsDraft(page, this.tituloPost, 9);
});

Then('validate if the post was drafted', async function () {
    //Validamos si el post esta Publicado
    const grabItems2 = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })
        return isItContained;
    },this.tituloPost)

    console.log("WAS THE POST PUBLISHED?")
    console.log(grabItems2)
    //Validamos si el post esta se guardo como Draft
    const grabItems3 = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("DRAFT")) {
                    isItContained = true
                }
            }
        })
        return isItContained;
    },this.tituloPost)
    console.log("WAS THE POST DRAFTED?")
    console.log(grabItems3)
    //...
    await browser.close();
    return;
});

When('User creates a new page', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a Paginas
    await pageObject.goToPages(page, caseToUse);
    //Ingresar a Crear Pages
    await pageObject.goToNewPages(page, caseToUse);
    //Crear Nuevo Page
    this.tituloPage = await faker.name.findName();
    await pageObject.createNewPage(page, this.tituloPage, this.tituloPage);
});

Then('validate if page was created', async function () {
    //Validar que si se Publico la nueva Page
    const grabItems = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    },this.tituloPage)

    console.log("WAS THE PAGE PUBLISHED?")
    console.log(grabItems)
    //...
    await browser.close();
    return;
});

When('User creates a new page and User deletes the new page', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a Paginas
    await pageObject.goToPages(page, caseToUse);
    //Ingresar a Crear Pages
    await pageObject.goToNewPages(page, caseToUse);
    //Crear Nuevo Page=
    this.tituloPage = await faker.name.findName();
    await pageObject.createNewPage(page, this.tituloPage, this.tituloPage);
    // screenshot va en 7
    //Validar que si se publico la nueva pagina
    const grabItems = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    },this.tituloPage)

    console.log("WAS THE PAGE CREATED?")
    console.log(grabItems)
    //Ingreso a la pagina para eliminarla
    await pageObject.goToSpecificPage(page, this.tituloPage, 8);
    //Elimino a la pagina
    await pageObject.deletePage(page, this.tituloPage, 9);


    await new Promise(r => setTimeout(r, 100));
    await page.screenshot({ path: `${caseFolder}/${genVar.port}-i10.png` })
});

Then('Validate if the page was deleted', async function () {

    //Validar que si se elimino la nueva pagina
    const grabItems2 = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                isItContained = true;
            }
        })

        return !isItContained;
    },this.tituloPage)


    console.log("WAS THE PAGE DELETED?")
    console.log(grabItems2)

    //...
    await browser.close();
    return;
});

When('User creates a new page as a draft', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a Paginas
    await pageObject.goToPages(page, caseToUse);
    //Ingresar a Crear Pages
    await pageObject.goToNewPages(page, caseToUse);
    //Crear Nueva Pagina como draft
    this.tituloPage = await faker.name.findName();
    await pageObject.draftPage(page, this.tituloPage);
    //screenshot va en 5


    //Validar que si se Publico la nueva pagina
    const grabItems = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    },this.tituloPage)

    console.log("WAS THE PAGE PUBLISHED?")
    console.log(grabItems)


    //Validar que si se creo draft de la Pagina
    const grabItems2 = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("DRAFT")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    },this.tituloPage)

    console.log("WAS THE PAGE DRAFTED?")
    console.log(grabItems2)
});

Then('publish the draft page and validate it was published', async function () {
    //Ingreso a la pagina para publicarla
    await pageObject.goToSpecificPage(page, this.tituloPage, 6);


    //Publico la pagina
    await pageObject.publishDraftedPage(page, this.tituloPage, 7);
    //Valido si se publico la Pagina
    const grabItems3 = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    },this.tituloPage)

    console.log("WAS THE PAGE PUBLISHED?")
    console.log(grabItems3)

    //...
    await browser.close();
    return;

});

When('User creates a new page and shcedules it', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a Paginas
    await pageObject.goToPages(page, caseToUse);
    //Ingresar a Crear Pages
    await pageObject.goToNewPages(page, caseToUse);
    //Crear Nuevo Page
    this.tituloPage = await faker.name.findName();
    await pageObject.schedulePage(page, this.tituloPage);
    //screenshot va en 7
    //Validar que si se programo para release la nueva Page 5 minutos despues de la hora de creacion
    const grabItems = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("SCHEDULED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    },this.tituloPage)

    console.log("WAS THE PAGE SCHEDULED?")
    console.log(grabItems)

});

Then('wait five minutes and validate if the page was published', async function () {
    //Wait 5 minutes and reaload page
    await new Promise(r => setTimeout(r, 305000));
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

    //Validate if page was Published
    await new Promise(r => setTimeout(r, 3000));
    const grabItems2 = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    },this.tituloPage)

    console.log("WAS THE PAGE PUBLISHED?")
    console.log(grabItems2)

    await page.screenshot({ path: `${caseFolder}/${genVar.port}-i8.png` })

    //...
    await browser.close();
    return;
});

When('User publishes a new page and then unpublishes it', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a Paginas
    await pageObject.goToPages(page, caseToUse);
    //Ingresar a Crear Pages
    await pageObject.goToNewPages(page, caseToUse);
    //Crear Nuevo Page
    this.tituloPage = await faker.name.findName();
    await pageObject.createNewPage(page, this.tituloPage, this.tituloPage);
    // screenshot va en 7


    //Validar que si se creo la nueva pagina
    const grabItems = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })
        return isItContained;
    },this.tituloPage)

    console.log("WAS THE PAGE PUBLISHED?")
    console.log(grabItems)

    //Ingreso a la page para marcarlo como Draft
    await pageObject.goToSpecificPage(page, this.tituloPage, 8)

    //Se marca la pagina como draft
    await pageObject.setPageAsDraft(page, this.tituloPage, 9);
});

Then('validate if the page was drafted', async function () {
    //Validamos si la pagina esta Publicado
    const grabItems2 = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })
        return isItContained;
    },this.tituloPage)

    console.log("WAS THE PAGE PUBLISHED?")
    console.log(grabItems2)


    //Validamos si la page esta se guardo como Draft
    const grabItems3 = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("DRAFT")) {
                    isItContained = true
                }
            }
        })
        return isItContained;
    },this.tituloPage)

    console.log("WAS THE PAGE DRAFTED?")
    console.log(grabItems3)



    //...
    await browser.close();
    return;
});


// case 11
When('User creates a tag, a post with tag and publishes it', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a tags
    await pageObject.goToTags(page, caseToUse);
    //Crear Nuevo tag
    tagName = faker.lorem.slug()
    await pageObject.createNewTag(page, caseToUse, tagName);
    //Crear Nuevo Page
    await pageObject.createNewPostWithTag(page, caseToUse, tagName);
    await pageObject.goToPublishedPost(page, caseToUse, tagName);
    // screenshot va en 7
});

Then('validate post with tag', async function () {
    let pages = await browser.pages()
    page2 = await pages[2]
    await page2.setViewport({ width: 1366, height: 768 });
    await page.screenshot({path: `${caseFolder}/${genVar.port}-i9.png`})
    await new Promise(r => setTimeout(r, 500));

    console.log("Case 11")
    console.log("Was the post created with the Tag: "+ tagName+"?")
    const [toTagsmain] = await page2.$x("//a[contains(., '"+tagName+"')]");
    if (toTagsmain) {
        console.log("Yes, it was")
    }else{
        console.log("No, it was not")
    }
    await browser.close()
    await browser.close();
    return;
});

// case 12
When('User creates a tag, a post with tag, publishes it and deletes the tag', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a tags
    await pageObject.goToTags(page, caseToUse);
    //Crear Nuevo tag
    tagName = faker.lorem.slug()
    await pageObject.createNewTag(page, caseToUse,tagName);
    //Crear Nuevo Page
    await pageObject.createNewPostWithTag(page, caseToUse, tagName);
    await pageObject.goToPublishedPost(page, caseToUse, tagName);

    //Post validation 1/2
    let pages = await browser.pages()
    page2 = await pages[2]
    await page2.setViewport({ width: 1366, height: 768 });
    await page.screenshot({path: `${caseFolder}/${genVar.port}-i8.png`})
    await delay(500)
    
    console.log("Case 12")
    console.log("Was the post created with the Tag: "+ tagName+"?")
    const [toTagsmain] = await page2.$x("//a[contains(., '"+tagName+"')]");
    if (toTagsmain) {
        console.log("Yes, it was")
    }else{
        console.log("No, it was not")
    }
    // screenshot va en 7
    await pageObject.removeTag(page, caseToUse, tagName);
});

Then('validate post with no tag', async function () {
    await page2.bringToFront()
    await page2.reload()
    await page.screenshot({path: `${caseFolder}/${genVar.port}-i100.png`})
    console.log("Was the tag removed?")
    const [toTagsmain2] = await page2.$x("//a[contains(., '"+tagName+"')]");
    if (toTagsmain2) {
        console.log("No, it was not")
    }else{
        console.log("Yes, it was")
    }
    await browser.close()
    return;
});

//case 13
When('User creates a tag, a post with tag, publishes it and modifies the tag', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a tags
    await pageObject.goToTags(page, caseToUse);
    //Crear Nuevo tag
    tagName = faker.lorem.slug()
    await pageObject.createNewTag(page, caseToUse, tagName);
    //Crear Nuevo Page
    await pageObject.createNewPostWithTag(page, caseToUse, tagName);
    await pageObject.goToPublishedPost(page, caseToUse, tagName);
    //Post validation 1/2
    let pages = await browser.pages()
    page2 = await pages[2]
    await page2.setViewport({ width: 1366, height: 768 });
    await page.screenshot({path: `${caseFolder}/${genVar.port}-i8.png`})
    await delay(500)
    
    console.log("Case 12")
    console.log("Was the post created with the Tag: "+ tagName+"?")
    const [toTagsmain] = await page2.$x("//a[contains(., '"+tagName+"')]");
    if (toTagsmain) {
        console.log("Yes, it was")
    }else{
        console.log("No, it was not")
    }
    // screenshot va en 7
    tagName = await pageObject.modifyTag(page, caseToUse, tagName);
});

Then('validate post with modified tag', async function () {
    await page2.bringToFront()
    await page2.reload()
    console.log("Was the tag updated?")
    const [toTagsmain2] = await page2.$x("//a[contains(., '"+tagName+"')]");
    await page.screenshot({path: `${caseFolder}/${genVar.port}-i100.png`})
    if (toTagsmain2) {
        console.log("Yes, it was")
    }else{
        console.log("No, it was not")
    }
    await browser.close()
    return;
});

// case 14
When('User creates a tag, a post with tag,and filter posts with tag', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a tags
    await pageObject.goToTags(page, caseToUse);
    //Crear Nuevo tag
    tagName = faker.lorem.slug()
    await pageObject.createNewTag(page, caseToUse, tagName);
    //Crear Nuevo Page
    publication = await pageObject.createNewPostWithTag(page, caseToUse, tagName);
});

Then('validate post with tag on list', async function () {
    await page.goto(genVar.url+'posts?tag='+tagName.toLowerCase())
    await delay(1000)
    console.log("Case 14")
    console.log("Is the post in the tag filtered list?")
    const [toTagsmain2] = await page.$x("//h3[contains(., '"+publication.titulo+"')]");
    await page.screenshot({path: `${caseFolder}/${genVar.port}-i100.png`})
    if (toTagsmain2) {
        console.log("Yes, it is")
    }else{
        console.log("No, it is not")
    }
    await browser.close()
    return;
});

// case 15
When('User creates a member and modifies the member', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a usuario
    await pageObject.goToMembers(page, caseToUse);
    //Crear Nuevo usuario
    userName = faker.name.findName()
    await pageObject.newMember(page, caseToUse, userName);
    //User validation 1/2
    const [toMembers2] = await page.$x("//a[contains(., 'Members')]");
    if (toMembers2) {
        await toMembers2.click();
    }

    await delay(1000)
    console.log("Case 15 1/2")
    console.log("Is the user in list?")
    const [UserInlist] = await page.$x("//h3[contains(., '"+userName+"')]");
    await page.screenshot({ path: caseFolder + '7-New-user-in-list.jpg' })
    if (UserInlist) {
        console.log("Yes, it is")
        UserInlist.click()
    }else{
        console.log("No, it is not")
    }

    userName = await pageObject.userUpdate(page, caseToUse);
});

Then('validate member was updated', async function () {
    const [toMembers3] = await page.$x("//a[contains(., 'Members')]");
    if (toMembers3) {
        await toMembers3.click();
    }

    await delay(1000)
    console.log("Case 15 2/2")
    console.log("Is the user in list updated?")
    const [UserInlist2] = await page.$x("//h3[contains(., '"+userName+"')]");
    await page.screenshot({ path: caseFolder + '9-New-user-in-list-updated.jpg' })
    if (UserInlist2) {
        console.log("Yes, it is updated")
    }else{
        console.log("No, it is not")
    }
    await browser.close()
    return;
});

// case 16
When('User modifies principal member', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a usuario
    await pageObject.toMainUser(page, caseToUse);
    //Crear Nuevo usuario
    userName = faker.name.findName()
    await pageObject.updateMainUser(page, caseToUse, userName);
});

Then('validate principal member was updated', async function () {
    await page.waitForSelector('.gh-post-list-title')
    let element = await page.$('.gh-post-list-title')
    let value = await page.evaluate(el => el.textContent, element)
    console.log("Case 16")
    console.log("Is the user name updated?")
    if(value.includes(userName)){
        console.log("Yes, it is updated")
    }else{
        console.log("No, it is not")
    }
    await browser.close()
    return;
});

// case 17
When('User updates password', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a usuario
    await pageObject.toMainUser(page, caseToUse);
    //Crear Nuevo usuario
    await pageObject.updatePassword(page, caseToUse,"temp");
    await pageObject.logOut(page, caseToUse);
});

Then('validate can not login', async function () {
    await page.goto(genVar.url+'signin')
    await page.screenshot({path: `${caseFolder}/${genVar.port}-i22.png`})
    await page.type('#ember7', genVar.user)
    await page.type('#ember9', genVar.password)
    await page.click('#ember11')
    await page.screenshot({path: `${caseFolder}/${genVar.port}-i23.png`})
    await page.waitForSelector('.main-error')
    let element = await page.$('.main-error')
    let value = await page.evaluate(el => el.textContent, element)
    console.log("Case 17")
    console.log("Login error?")
    if(value.includes("Your password is incorrect.")){
        console.log("Yes, the password is incorrect as expected")
    }else{
        console.log("No, there seems to be adifferent error")
    }
    await browser.close()
    return;
});

// case 18
When('User updates password to old one', async function () {
    //Autenticar
    await pageObject.loggin2(page, caseToUse);
    //Ingresar a usuario
    await pageObject.toMainUser(page, caseToUse);
    //Crear Nuevo usuario
    await pageObject.updatePassword(page, caseToUse,"old");
    await pageObject.logOut(page, caseToUse);
});

Then('validate can login with old password', async function () {
    await page.goto(genVar.url+'signin')
    await page.screenshot({ path: caseFolder + '6-login3.jpg' })
    await page.type('#ember7', genVar.user)
    await page.type('#ember9', genVar.password)
    await page.click('#ember11')
    await page.waitForSelector('.gh-nav  ', { timeout: 5000 }).catch(err => {
        console.error("The login information is probably incorrect, please update the information to continue with the test")
    })
    await page.screenshot({ path: caseFolder + '3-home.jpg' })
    let element = await page.$('.gh-nav')
    console.log("Case 18")
    console.log("Correctly logged in?")
    if(element){
        console.log("Yes, the correctly logged in with original password")
    }else{
        console.log("No, there was a problem")
    }
    await browser.close()
    return;
});

// case 19
When('User creates post and modifies it', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);

    tituloPost = await pageObject.createNewPost(page, caseToUse);
    
    //Post validation
    let pages = await browser.pages()
    const page2 = await pages[2]
    await page2.setViewport({ width: 1366, height: 768 });
    await page2.screenshot({ path: caseFolder + '9-Post-page.jpg' })
    await delay(500)
    
    console.log("Case 19 1/2")
    console.log("Was the post created with the title: "+ tituloPost+"?")
    const [articleTitle] = await page2.$x("//h1[contains(., '"+tituloPost+"')]");
    if (articleTitle) {
        console.log("Yes, it was")
    }else{
        console.log("No, it was not")
    }
    tituloPost = await pageObject.modifyPostTitle(page, caseToUse);
});

Then('validate modified post', async function () {
    let pages = await browser.pages()
    const page2 = await pages[2]
    await page2.bringToFront()
    await page2.reload()

    console.log("Case 19 2/2")
    console.log("Was the post updated with the title: "+ tituloPost+"?")
    const [articleTitle2] = await page2.$x("//h1[contains(., '"+tituloPost+"')]");
    if (articleTitle2) {
        console.log("Yes, it was")
    }else{
        console.log("No, it was not")
    }
    await browser.close()
    return;
});

// case 20
When('User updates site name', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a usuario
    await pageObject.goToSettings(page, caseToUse);
    siteTitle = await pageObject.modifySiteTitle(page, caseToUse);
    
});

Then('validate modified site name', async function () {
    await page.reload()
    await page.waitForSelector('.gh-nav-menu-details-sitetitle')
    let element = await page.$('.gh-nav-menu-details-sitetitle')
    let obtainedNewTitle = await page.evaluate(el => el.textContent, element)

    console.log("Case 20")
    console.log("Was the site title updated to: "+ siteTitle+"?")
    if (obtainedNewTitle == siteTitle) {
        console.log("Yes, it was")
    }else{
        console.log("No, it was not")
    }

    await browser.close()
    return;
});

// case 41
When('User sets incorrect profile url', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    personalURL = faker.lorem.words(5)
    await pageObject.toMainUser(page, caseToUse, personalURL);
    //Ingresar a usuario
    await pageObject.updateURL(page, caseToUse, personalURL);
    siteTitle = await pageObject.modifySiteTitle(page, caseToUse);
    
});

Then('validate url was not updated', async function () {
    await page.reload()
    await page.waitForSelector('#user-website')
    let url = await page.evaluate(() => document.getElementById('user-website').value)
    await page.waitForSelector('.gh-nav-menu-details-sitetitle')
    

    console.log("Case 41")
    console.log("Was the personal url prevented to be updated to : "+ personalURL+"?")
    if (personalURL != url) {
        console.log("Yes, it was")
    }else{
        console.log("No, it was not, error found")
    }

    await browser.close()
    return;
});

// case 42
When('User sets correct profile url', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    personalURL = faker.internet.url()
    await pageObject.toMainUser(page, caseToUse, personalURL);
    //Ingresar a usuario
    await pageObject.updateURL(page, caseToUse, personalURL);
    siteTitle = await pageObject.modifySiteTitle(page, caseToUse);
    
});

Then('validate url updated', async function () {
    await page.reload()
    await page.waitForSelector('#user-website')
    let url = await page.evaluate(() => document.getElementById('user-website').value)
    await page.waitForSelector('.gh-nav-menu-details-sitetitle')
    

    console.log("Case 41")
    console.log("Was the personal url updated to : "+ personalURL+"?")
    if (personalURL == url) {
        console.log("Yes, it was")
    }else{
        console.log("No, it was not, error found")
    }

    await browser.close()
    return;
});

// case 43
When('User updates with empty password', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a usuario
    await pageObject.toMainUser(page, caseToUse);
    //Crear Nuevo usuario
    await pageObject.updatePassword(page, caseToUse,"emp");
    await pageObject.logOut(page, caseToUse);
});

Then('validate password is not updated', async function () {
    await page.goto(genVar.url+'signin')
    await page.screenshot({ path: caseFolder + '6-login3.jpg' })
    await page.type('#ember7', genVar.user)
    await page.type('#ember9', genVar.password)
    await page.click('#ember11')
    await page.waitForSelector('.gh-nav  ', { timeout: 5000 }).catch(err => {
        console.error("The login information is probably incorrect, please update the information to continue with the test")
    })
    await page.screenshot({ path: caseFolder + '3-home.jpg' })
    let element = await page.$('.gh-nav')
    console.log("Correctly logged in?")
    if(element){
        console.log("Yes, the correctly logged in with original password, no incorrect update")
    }else{
        console.log("No, there was a problem")
    }
    await browser.close()
    return;
});

// case 44
When('User updates with empty confirmation password', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a usuario
    await pageObject.toMainUser(page, caseToUse);
    //Crear Nuevo usuario
    await pageObject.updatePassword(page, caseToUse,"empConf");
    await pageObject.logOut(page, caseToUse);
});

// case 45
When('User updates with different confirmation password', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a usuario
    await pageObject.toMainUser(page, caseToUse);
    //Crear Nuevo usuario
    await pageObject.updatePassword(page, caseToUse,"diffConf");
    await pageObject.logOut(page, caseToUse);
});

// case 46
When('User updates with out original password', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a usuario
    await pageObject.toMainUser(page, caseToUse);
    //Crear Nuevo usuario
    await pageObject.updatePassword(page, caseToUse,"noCurretP");
    await pageObject.logOut(page, caseToUse);
});


// case 47
When('User updates site description short', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    
    await pageObject.goToDesign(page, caseToUse);

    await delay(500)
    await pageObject.openDesignElement(page, caseToUse, "Brand");

    designElementValue = faker.company.catchPhrase()
    
    await pageObject.updateDesignElementById(page, caseToUse, "site-description", designElementValue);
    
});

Then('validate updated description', async function () {
    await page.goto(`http://localhost:${genVar.port}`);
    await page.waitForSelector('.site-header-content', { timeout: 5000 }).catch(err => {
        console.error("The login information is probably incorrect, please update the information to continue with the test")
    })
    let headerContent = await page.$('div.site-header-content')
    let descriptionP = await headerContent.$('p')
    descriptionText = await page.evaluate(el => el.textContent, descriptionP)
    console.log("Case 47")
    console.log("Description correctly updated?")
    console.log(designElementValue)
    console.log(descriptionText)
    if(descriptionText == designElementValue){
        console.log("Yes, description was updated")
    }else{
        console.log("No, there was a problem")
    }
    await browser.close()
    return;
});

// case 48
When('User updates site description empty', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    
    await pageObject.goToDesign(page, caseToUse);

    await delay(500)
    await pageObject.openDesignElement(page, caseToUse, "Brand");

    designElementValue = ""
    
    await pageObject.updateDesignElementById(page, caseToUse, "site-description", designElementValue);
    
});

// case 49
When('User updates site description over 200 char', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    
    await pageObject.goToDesign(page, caseToUse);

    await delay(500)
    await pageObject.openDesignElement(page, caseToUse, "Brand");

    let i = 25
    let words
    do {
        words = faker.lorem.words(i)
        i++
    } while (words.length < 200);
    designElementValue = words.substring(0, 200);
    await pageObject.updateDesignElementById(page, caseToUse, "site-description", designElementValue);
    
});

Then('validate description not updated', async function () {
    await page.goto(`http://localhost:${genVar.port}`);
    await page.waitForSelector('.site-header-content', { timeout: 5000 }).catch(err => {
        console.error("The login information is probably incorrect, please update the information to continue with the test")
    })
    let headerContent = await page.$('div.site-header-content')
    let descriptionP = await headerContent.$('p')
    descriptionText = await page.evaluate(el => el.textContent, descriptionP)
    console.log("Case 49")
    console.log("Description correctly updated?")
    if(descriptionText == designElementValue){
        console.log("This is a problem, should not let update")
    }else{
        console.log("All ok, description was not updated")
    }
    await browser.close()
    return;
});

// case 50
When('User updates accent color', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    
    await pageObject.goToDesign(page, caseToUse);

    await delay(500)
    await pageObject.openDesignElement(page, caseToUse, "Brand");
    let hexNum = faker.datatype.hexadecimal(6)
    designElementValue = hexNum.substring(2,8)
    
    await pageObject.updateDesignElementById(page, caseToUse, "accent-color", designElementValue);
    
});

Then('validate accent color updated', async function () {
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    await pageObject.openDesignElement(page, caseToUse, "Brand");
    await delay(500)
    await page.waitForSelector('.input-color', { timeout: 5000 }).catch(err => {
        console.error("problem with selector input/color")
    })

    const attr = await page.$eval(
        'input[id="accent-color"]', el => getComputedStyle(el).getPropertyValue('--accent-color')
    )
    let value = attr.substring(2,8)

    console.log("Case 50")
    console.log("Accent color correctly updated?")
    if(value == designElementValue){
        console.log("Yes, accent color was updated")
    }else{
        console.log("No, there was a problem")
    }
    await browser.close()
    return;
});

// case 51
When('User updates accent color incorrectly', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    
    await pageObject.goToDesign(page, caseToUse);

    await delay(500)
    await pageObject.openDesignElement(page, caseToUse, "Brand");
    let hexNum = faker.datatype.string(5)+'z'
    designElementValue = hexNum.substring(2,8)
    
    await pageObject.updateDesignElementById(page, caseToUse, "accent-color", designElementValue);
    
});

Then('validate accent color is not updated', async function () {
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    await pageObject.openDesignElement(page, caseToUse, "Brand");
    await delay(500)
    await page.waitForSelector('.input-color', { timeout: 5000 }).catch(err => {
        console.error("problem with selector input-color")
    })

    const attr = await page.$eval(
        'input[id="accent-color"]', el => getComputedStyle(el).getPropertyValue('--accent-color')
    )
    let value = attr.substring(2,8)

    // console.log("Case 51 52")
    console.log("Accent color not updated?")
    if(value == designElementValue){
        console.log("there was a problem, accent color was updated")
    }else{
        console.log("Correct, accent color NOT updated")
    }
    await browser.close()
    return;
});

// case 52
When('User updates accent color as empty', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    
    await pageObject.goToDesign(page, caseToUse);

    await delay(500)
    await pageObject.openDesignElement(page, caseToUse, "Brand");
   
    designElementValue = " "
    
    await pageObject.updateDesignElementById(page, caseToUse, "accent-color", designElementValue);
    
});

// case 53
When('User updates header button background', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    
    await pageObject.goToDesign(page, caseToUse);

    await delay(500)
    await pageObject.openDesignElement(page, caseToUse, "Site-wide");
    let hexNum = faker.datatype.hexadecimal(6)
    designElementValue = hexNum.substring(2,8)
    console.log(designElementValue)
    await pageObject.updateDesignElementByName(page, caseToUse, "headerButtonBackground", designElementValue);
    
});

Then('validate header button background updated', async function () {
    // await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    await page.goto(`http://localhost:${genVar.port}`);
    await delay(500)
    await page.waitForSelector('.gh-head-button', { timeout: 5000 }).catch(err => {
        console.error("problem with selector input-color")
    })

    const attr = await page.$eval(
        '.gh-head-button', el => getComputedStyle(el).getPropertyValue('--button-bg-color')
    )
    console.log(attr)
    delay(2000)
    let value = attr.substring(2,8)

    console.log("Case 53")
    console.log("Accent color correctly updated?")
    if(value == designElementValue){
        console.log("Yes, accent color was updated")
    }else{
        console.log("No, there was a problem")
    }
    await browser.close()
    return;
});

// case 54
When('User incorrectly updates header button background', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    
    await pageObject.goToDesign(page, caseToUse);

    await delay(500)
    await pageObject.openDesignElement(page, caseToUse, "Site-wide");
    let hexNum = faker.datatype.string(5)+'z'
    designElementValue = hexNum.substring(2,8)
    await pageObject.updateDesignElementByName(page, caseToUse, "headerButtonBackground", designElementValue);
    
});

Then('validate header button background NOT updated', async function () {
    // await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    await page.goto(`http://localhost:${genVar.port}`);
    await delay(500)
    await page.waitForSelector('.gh-head-button', { timeout: 5000 }).catch(err => {
        console.error("problem with selector input-color")
    })

    const attr = await page.$eval(
        '.gh-head-button', el => getComputedStyle(el).getPropertyValue('--button-bg-color')
    )
    console.log(attr)
    delay(2000)
    let value = attr.substring(2,8)

    console.log("Case 54")
    console.log("Accent color NOT updated?")
    if(value != designElementValue){
        console.log("Correct, accent color was NOT updated")
    }else{
        console.log("There was a problem, the color was updated")
    }
    await browser.close()
    return;
});

// case 55
When('User incorrectly updates header button background as empty', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    
    await pageObject.goToDesign(page, caseToUse);

    await delay(500)
    await pageObject.openDesignElement(page, caseToUse, "Site-wide");
    designElementValue = ' '
    await pageObject.updateDesignElementByName(page, caseToUse, "headerButtonBackground", designElementValue);    
});

// case 56
When('User updates publication language correctly', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a usuario
    let languages = genVar.validLanguages
    siteLanguage = languages[Math.floor(Math.random()*languages.length)];
    await pageObject.goToSettings(page, caseToUse);
    await pageObject.modifySiteLanguage(page, caseToUse, siteLanguage);
    
});

Then('validate publication language updated', async function () {
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    await delay(500)
    //open publication language
    const [pubLan] = await page.$x("//h4[contains(., 'Publication Language')]");
    if (pubLan) {
        const example_parent = (await pubLan.$x('..'))[0];
        const example_siblings = await example_parent.$x('following-sibling::*');
        await example_siblings[0].click();
    }
    await delay(200)
    //select input and its value
    let fieldHandle = await page.$('.ember-text-field')
    let value = await page.evaluate(x => x.value, fieldHandle)

    console.log("Case 56")
    console.log("Language updated?")
    if(value == siteLanguage){
        console.log("Yes, language was updated")
    }else{
        console.log("There was a problem, the language was not updated")
    }
    await browser.close()
    return;
});

// case 57
When('User updates publication language INcorrectly', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a usuario
    siteLanguage = faker.lorem.words(2)
    await pageObject.goToSettings(page, caseToUse);
    await pageObject.modifySiteLanguage(page, caseToUse, siteLanguage);
    
});

Then('validate publication language was NOT updated', async function () {
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    await delay(500)
    //open publication language
    const [pubLan] = await page.$x("//h4[contains(., 'Publication Language')]");
    if (pubLan) {
        const example_parent = (await pubLan.$x('..'))[0];
        const example_siblings = await example_parent.$x('following-sibling::*');
        await example_siblings[0].click();
    }
    await delay(200)
    //select input and its value
    let fieldHandle = await page.$('.ember-text-field')
    let value = await page.evaluate(x => x.value, fieldHandle)

    console.log("Case 58")
    console.log("Language updated?")
    if(value == siteLanguage){
        console.log("There is a problem, the language was updated")
    }else{
        console.log("All good, language was not updated")
    }
    await browser.close()
    return;
});

// case 58
When('User updates publication language as empty', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a usuario
    siteLanguage = " "
    await pageObject.goToSettings(page, caseToUse);
    await pageObject.modifySiteLanguage(page, caseToUse, siteLanguage);
    
});

// case 61
When('User updates header code with incorrect information', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    
    await pageObject.goToNavigation(page, caseToUse);

    await delay(500)
    codeArea ='header'
    siteCode = faker.lorem.sentences(1)
    await pageObject.updateCode(page, caseToUse, siteCode,codeArea);
    
});


Then('validate code was not updated', async function () {
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    await delay(500)
    let codeText = await page.evaluate((codeArea) => {
        let elements = document.getElementsByClassName('CodeMirror-sizer');
        let strCode
        if(codeArea =='header'){
            strCode = elements[0].textContent
        }
        else
            strCode = elements[1].textContent
        return strCode;
    }, codeArea);

    console.log("Case 61")
    console.log("Header correctly prevented to be updated?")
    codeText = codeText.substring(12)
    console.log(siteCode)
    console.log(codeText)
    // xxxxxxxxxx 1Inventore ratione iste ut minus sed est.
    if(siteCode != codeText){
        console.log("Yes, it was prevented")
    }else{
        console.log("No, it was updated")
    }
    // await browser.close()
    return;
});

// case 62
When('User updates footer code with incorrect information', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    
    await pageObject.goToNavigation(page, caseToUse);

    await delay(500)
    codeArea ='footer'
    siteCode = faker.lorem.sentences(1)
    await pageObject.updateCode(page, caseToUse, siteCode,codeArea);
});


When('User creates a new tag and then saves it', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a tags
    await pageObject.goToTagsMov(page, caseToUse);
    //Crear Nuevo tag
    this.tagName = faker.lorem.slug()
    await pageObject.createNewTag(page, caseToUse, this.tagName);
    await pageObject.goToTagsMov(page, caseToUse);
});


Then('validate if the tag was created', async function () {
    const grabItems = await page.evaluate((selector) => {
        const elements = document.querySelectorAll(".gh-list-row.gh-tags-list-item")
        let isItContained = false
        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes(selector)) {
                isItContained = true
            }
        })

        return isItContained;
    },this.tagName)
    //Se imprime el resultado de las pruebas
    console.log("WAS THE TAG CREATED?")
    console.log(grabItems)
    await browser.close();
});


When('User creates a new tag with less than six characters then saves it', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a tags
    await pageObject.goToTagsMov(page, caseToUse);
    //Crear Nuevo tag
    this.tagName = faker.lorem.slug()
    let colorCode = faker.random.number({min:10000, max:99999});
    console.log(colorCode)
    await pageObject.createNewTagWithColor(page, caseToUse, this.tagName,colorCode.toString());
    console.log("WAS THE TAG CREATED WITH A COLOR OF LESS THAN 6?")
});


When('User creates a new tag with more than six characters then saves it', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a tags
    await pageObject.goToTagsMov(page, caseToUse);
    //Crear Nuevo tag
    this.tagName = faker.lorem.slug()
    let colorCode = faker.random.number({min:1000000, max:9999999});
    console.log(colorCode)
    await pageObject.createNewTagWithColor(page, caseToUse, this.tagName,colorCode.toString());
    console.log("WAS THE TAG CREATED WITH A COLOR OF MORE THAN 6?")
});


When('User creates a new tag with exactly six characters then saves it', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a tags
    await pageObject.goToTagsMov(page, caseToUse);
    //Crear Nuevo tag
    this.tagName = faker.lorem.slug()
    let colorCode = faker.random.number({min:100000, max:999999});
    console.log(colorCode)
    await pageObject.createNewTagWithColor(page, caseToUse, this.tagName,colorCode.toString());
    console.log("WAS THE TAG CREATED WITH A COLOR OF EXACTLY 6?")
});


Then('validate if the tag was allowed', async function () {
    await pageObject.validateIfColorAllowed(page, caseToUse);
});


When('User creates a new tag with more than fivehundred characters as a description, then saves it', async function () {
     //Autenticar
     await pageObject.loggin(page, caseToUse);
     //Ingresar a tags
     await pageObject.goToTagsMov(page, caseToUse);
     //Crear Nuevo tag
     this.tagName = faker.lorem.slug()
     let description = faker.lorem.words(78);
     console.log(description)
     await pageObject.createNewTagWithDescription(page, caseToUse, this.tagName,description);
     console.log("WAS THE TAG CREATED WITH A DESCRIPTION OF MORE THAN 500?")
});


When('User creates a new tag with less than fivehundred characters as a description, then saves it', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a tags
    await pageObject.goToTagsMov(page, caseToUse);
    //Crear Nuevo tag
    this.tagName = faker.lorem.slug();
    let description = faker.lorem.words(74);
    console.log(description)
    await pageObject.createNewTagWithDescription(page, caseToUse, this.tagName,description);
    console.log("WAS THE TAG CREATED WITH A DESCRIPTION OF LESS THAN 500?")
});


When('User creates a new tag with exactly five hundred characters as a description, then saves it', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a tags
    await pageObject.goToTagsMov(page, caseToUse);
    //Crear Nuevo tag
    this.tagName = faker.lorem.slug()
    let description = faker.random.words(80);
    console.log(description)
    await pageObject.createNewTagWithDescription(page, caseToUse, this.tagName,description.substring(0,500));
    console.log("WAS THE TAG CREATED WITH A DESCRIPTION OF EXACTLY 6?")
});


When('User creates a new member, by defining a valid name and email, and tried to save it', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a usuario
    await pageObject.goToMembersMov(page, caseToUse);
    //Crear Nuevo usuario
    let userName = faker.name.findName()
    let useremail = faker.internet.email()
    await pageObject.createMember(page, caseToUse, userName, useremail);
    console.log("WAS THE MEMBER CREATED WITH VALID EMAILS AND NAMES?")
});


When('User creates a new member, by defining a valid name and no email, and tried to save it', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a usuario
    await pageObject.goToMembersMov(page, caseToUse);
    //Crear Nuevo usuario
    let userName = faker.name.findName()
    let useremail = faker.internet.email()
    await pageObject.createMember(page, caseToUse, userName, "");
    console.log("WAS THE MEMBER CREATED?")
});


When('User creates a new member, by defining a valid name and a invalid email, and tried to save it', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a usuario
    await pageObject.goToMembersMov(page, caseToUse);
    //Crear Nuevo usuario
    let userName = faker.name.findName()
    let useremail = faker.name.findName()
    await pageObject.createMember(page, caseToUse, userName, useremail);
    console.log("WAS THE MEMBER CREATED?")
});


When('User creates a new member, by defining a valid name and email, set a note with less than fivehundred characters and try to save it', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a usuario
    await pageObject.goToMembersMov(page, caseToUse);
    //Crear Nuevo usuario
    let userName = faker.name.findName();
    let useremail = faker.internet.email();
    let notes = faker.lorem.words(200);
    await pageObject.createMemberWithNotes(page, caseToUse, userName, useremail,notes.substring(0,450));
    console.log("WAS THE MEMBER CREATED?")
});


When('User creates a new member, by defining a valid name and email, set a note with exactly fivehundred characters and try to save it', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a usuario
    await pageObject.goToMembersMov(page, caseToUse);
    //Crear Nuevo usuario
    let userName = faker.name.findName();
    let useremail = faker.internet.email();
    let notes = faker.lorem.words(200);
    await pageObject.createMemberWithNotes(page, caseToUse, userName, useremail,notes.substring(0,500));
    console.log("WAS THE MEMBER CREATED?")
});


When('User creates a new member, by defining a valid name and email, set a note with more than fivehundred characters and try to save it', async function () {
    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a usuario
    await pageObject.goToMembersMov(page, caseToUse);
    //Crear Nuevo usuario
    let userName = faker.name.findName();
    let useremail = faker.internet.email();
    let notes = faker.lorem.words(200);
    await pageObject.createMemberWithNotes(page, caseToUse, userName, useremail,notes.substring(0,501));
    console.log("WAS THE MEMBER CREATED?")
});


When('User goes to his profile, deletes its name and tries to save', async function () {
    await pageObject.loggin(page,caseToUse);
    await new Promise(r => setTimeout(r, 100));
    await pageObject.toMainUserMov(page,caseToUse);
    await new Promise(r => setTimeout(r, 150));
    await pageObject.setUserNameEmpty(page,caseToUse);
});


Then('validate if the new profile was allowed to save', async function () {
    console.log("was the member updated?")
    await pageObject.validateIfUserNameAllowed(page,caseToUse);
    await new Promise(r => setTimeout(r, 100));
    await browser.close();
});

    
Then('validate if the new member was allowed', async function () {
    console.log("was the member updated?")
    await pageObject.validateIfMemberAllowed(page, caseToUse);
    await browser.close();
});


When('User goes to his profile, defines a new UserName saves.', async function () {
    await pageObject.loggin(page,caseToUse);
    await new Promise(r => setTimeout(r, 100));
    await pageObject.toMainUserMov(page,caseToUse);
    await new Promise(r => setTimeout(r, 150));
    this.userName = await page.evaluate(() => document.getElementById('user-name').value);
    console.log("ORIGINAL NAME: "+this.userName);
    let userName2 = faker.name.findName();
    console.log("NEW NAME: "+this.userName2);
    await new Promise(r => setTimeout(r, 150));
    await page.click('.content-cover.ember-view');
    await pageObject.setUserName(page,caseToUse,userName2);
    await new Promise(r => setTimeout(r, 150));
    await pageObject.validateIfUserNameAllowed(page,caseToUse);
});


Then('returns to its original name and validate if the new profile was allowed to save', async function () {
    await pageObject.setUserName(page,caseToUse,this.userName);
    await new Promise(r => setTimeout(r, 150));
    console.log("Was the profile updated?");
    await pageObject.validateIfUserNameAllowed(page,caseToUse);
    await browser.close();
    
});


When('User goes to his profile, defines a new Email saves.', async function () {
    await pageObject.loggin(page,caseToUse);
    await new Promise(r => setTimeout(r, 100));
    await pageObject.toMainUserMov(page,caseToUse);
    await new Promise(r => setTimeout(r, 150));
    this.userEmail = await page.evaluate(() => document.getElementById('user-email').value);
    console.log("ORIGINAL EMAIL: "+this.userEmail);
    let email2 = faker.internet.email();
    console.log("NEW EMAIL: "+email2);
    await new Promise(r => setTimeout(r, 150));
    await page.click('.content-cover.ember-view');
    await pageObject.setEmail(page,caseToUse,email2);
    await new Promise(r => setTimeout(r, 150));
    await pageObject.validateIfUserNameAllowed(page,caseToUse);
});


Then('returns to its original email and validate if the new profile was allowed to save', async function () {
    await pageObject.setEmail(page,caseToUse,this.userEmail);
    await new Promise(r => setTimeout(r, 150));
    console.log("Was the profile updated?");
    await pageObject.validateIfUserNameAllowed(page,caseToUse);
    await browser.close();
});


When('User goes to his profile, defines a new invalid Email saves.', async function () {
    await pageObject.loggin(page,caseToUse);
    await new Promise(r => setTimeout(r, 100));
    await pageObject.toMainUserMov(page,caseToUse);
    await new Promise(r => setTimeout(r, 150));
    let email2 = faker.name.findName();
    console.log("NEW EMAIL: "+email2);
    await new Promise(r => setTimeout(r, 150));
    await page.click('.content-cover.ember-view');
    await pageObject.setEmail(page,caseToUse,email2);
    await new Promise(r => setTimeout(r, 150));
});


Then('Validate if the new profile was allowed to save', async function () {
    console.log("Was the profile updated?");
    await pageObject.validateIfUserNameAllowed(page,caseToUse);
    await browser.close();
});


When('User goes to his profile, defines a new biography of twohundred characters and saves.', async function () {
    await pageObject.loggin(page,caseToUse);
    await new Promise(r => setTimeout(r, 100));
    await pageObject.toMainUserMov(page,caseToUse);
    await new Promise(r => setTimeout(r, 150));
    let bio = faker.random.words(70).substring(0,200);
    await new Promise(r => setTimeout(r, 150));
    await page.click('.content-cover.ember-view');
    await pageObject.setBio(page,caseToUse,bio);
    await new Promise(r => setTimeout(r, 150));
});


When('User goes to his profile, defines a new biography of less than twohundred characters and saves.', async function () {
    await pageObject.loggin(page,caseToUse);
    await new Promise(r => setTimeout(r, 100));
    await pageObject.toMainUserMov(page,caseToUse);
    await new Promise(r => setTimeout(r, 150));
    let bio = await faker.random.words(70).substring(0,150);
    await new Promise(r => setTimeout(r, 150));
    await page.click('.content-cover.ember-view');
    await pageObject.setBio(page,caseToUse,bio);
    await new Promise(r => setTimeout(r, 150));
});


When('User goes to his profile, defines a new biography of more than twohundred characters and saves.', async function () {
    await pageObject.loggin(page,caseToUse);
    await new Promise(r => setTimeout(r, 100));
    await pageObject.toMainUserMov(page,caseToUse);
    await new Promise(r => setTimeout(r, 150));
    let bio = await faker.random.words(70).substring(0,250);
    await new Promise(r => setTimeout(r, 150));
    await page.click('.content-cover.ember-view');
    await pageObject.setBio(page,caseToUse,bio);
    await new Promise(r => setTimeout(r, 150));
});