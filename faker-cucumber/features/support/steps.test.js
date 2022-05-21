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
    await pageObject.goToCreatePost(page, caseToUse);
    //Crear Nuevo Post
    await pageObject.createPost(page, caseToUse, caseToUse, caseToUse);
});


Then('validate if post was created', async function () {
    //Validar que si se creo el nuevo post
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes('case1')) {
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    })
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
    await pageObject.createPost(page, caseToUse, caseToUse, caseToUse);
    // va en 7
    //Validar que si se creo el nuevo post
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes("case2")) {
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    })

    console.log("WAS THE POST CREATED?");
    console.log(grabItems);

    //Ingreso al post para eliminarlo
    await pageObject.goToSpecificPost(page, caseToUse, 8);

    //Elimino el post
    await pageObject.deletePost(page, caseToUse);

    await new Promise(r => setTimeout(r, 100));
    await page.screenshot({ path: `${caseFolder}/${genVar.port}-i12.png` })
});

Then('Validate if the post was deleted', async function () {
    //Validar que si se elimino el nuevo post
    const grabItems2 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item");
        let isItContained = false;

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a");
            const firstElement = actualPublication[0];
            const title = firstElement.querySelector("h3");
            if (title.innerHTML.includes("case2")) {
                isItContained = true;
            }
        })

        return !isItContained;
    })
    console.log("WAS THE POST DELETED?")
    console.log(grabItems2)
    await browser.close();
});


When('User creates a new post as a draft', async function () {

    //Autenticar
    await pageObject.loggin(page, caseToUse);
    //Ingresar a Posts
    await pageObject.goToPost(page, caseToUse);
    //Ingresar a Crear posts
    await pageObject.goToCreatePost(page, caseToUse);
    //Crear Nuevo Post como Draft
    await pageObject.draftPost(page, caseToUse);

    //THEN
    //Validar que si se creo el nuevo post
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes("case3")) {
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    })

    console.log("WAS THE POST PUBLISHED?")
    console.log(grabItems)
    //Validar que si se creo draft del post
    const grabItems2 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes("case3")) {
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("DRAFT")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    })

    console.log("WAS THE POST DRAFTED?")
    console.log(grabItems2)

});

Then('publish the draft and validate it was published', async function () {

    //Ingreso al post para publicarlo
    await pageObject.goToSpecificPost(page, caseToUse, 6);
    //Publico el post
    await pageObject.publishDraftPost(page, caseToUse);
    //Valido si se publico el post
    const grabItems3 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes("case3")) {
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })
        return isItContained;
    })

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
    await pageObject.schedulePost(page, caseToUse);
});

Then('wait five minutes and validate if it was published', async function () {
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes("case4")) {
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("SCHEDULED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    })

    console.log("WAS THE POST SCHEDULED?")
    console.log(grabItems)
    //Wait 5 minutes and reaload page
    await new Promise(r => setTimeout(r, 305000));
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    //Validate if post was Published
    await new Promise(r => setTimeout(r, 3000));
    const grabItems2 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes("case4")) {
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    })
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
    await pageObject.createPost(page, caseToUse, caseToUse, caseToUse);
    //va en 7


    //THEN
    //Validar que si se creo el nuevo post
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes("case5")) {
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })
        return isItContained;
    })

    console.log("WAS THE POST PUBLISHED?")
    console.log(grabItems)

    //Ingreso al post para marcarlo como Draft
    await pageObject.goToSpecificPost(page, caseToUse, 8);
    //Se marca el post como draft
    await pageObject.setPostAsDraft(page, caseToUse, 9);
});

Then('validate if the post was drafted', async function () {
    //Validamos si el post esta Publicado
    const grabItems2 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes("case5")) {
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })
        return isItContained;
    })

    console.log("WAS THE POST PUBLISHED?")
    console.log(grabItems2)
    //Validamos si el post esta se guardo como Draft
    const grabItems3 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes("case5")) {
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("DRAFT")) {
                    isItContained = true
                }
            }
        })
        return isItContained;
    })
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
    await pageObject.createNewPage(page, caseToUse, caseToUse, caseToUse);
});

Then('validate if page was created', async function () {
    //Validar que si se Publico la nueva Page
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes("case6")) {
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    })

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
    //Crear Nuevo Page
    await pageObject.createNewPage(page, caseToUse, caseToUse, caseToUse);
    // screenshot va en 7
    //Validar que si se publico la nueva pagina
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes("case7")) {
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    })

    console.log("WAS THE PAGE CREATED?")
    console.log(grabItems)
    //Ingreso a la pagina para eliminarla
    await pageObject.goToSpecificPage(page, caseToUse, 8);
    //Elimino a la pagina
    await pageObject.deletePage(page, caseToUse, 9);


    await new Promise(r => setTimeout(r, 100));
    await page.screenshot({ path: `${caseFolder}/${genVar.port}-i10.png` })
});

Then('Validate if the page was deleted', async function () {

    //Validar que si se elimino la nueva pagina
    const grabItems2 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes("case7")) {
                isItContained = true;
            }
        })

        return !isItContained;
    })


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
    await pageObject.draftPage(page, caseToUse);
    //screenshot va en 5


    //Validar que si se Publico la nueva pagina
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes("case8")) {
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    })

    console.log("WAS THE PAGE PUBLISHED?")
    console.log(grabItems)


    //Validar que si se creo draft de la Pagina
    const grabItems2 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes("case8")) {
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("DRAFT")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    })

    console.log("WAS THE PAGE DRAFTED?")
    console.log(grabItems2)
});

Then('publish the draft page and validate it was published', async function () {
    //Ingreso a la pagina para publicarla
    await pageObject.goToSpecificPage(page, caseToUse, 6);


    //Publico la pagina
    await pageObject.publishDraftedPage(page, caseToUse, 7);
    //Valido si se publico la Pagina
    const grabItems3 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes("case8")) {
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    })

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
    await pageObject.schedulePage(page, caseToUse);
    //screenshot va en 7
    //Validar que si se programo para release la nueva Page 5 minutos despues de la hora de creacion
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes("case9")) {
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("SCHEDULED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    })

    console.log("WAS THE PAGE SCHEDULED?")
    console.log(grabItems)

});

Then('wait five minutes and validate if the page was published', async function () {
    //Wait 5 minutes and reaload page
    await new Promise(r => setTimeout(r, 305000));
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

    //Validate if page was Published
    await new Promise(r => setTimeout(r, 3000));
    const grabItems2 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes("case9")) {
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })

        return isItContained;
    })

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
    await pageObject.createNewPage(page, caseToUse, caseToUse, caseToUse);
    // screenshot va en 7


    //Validar que si se creo la nueva pagina
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes("case10")) {
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })
        return isItContained;
    })

    console.log("WAS THE PAGE PUBLISHED?")
    console.log(grabItems)

    //Ingreso a la page para marcarlo como Draft
    await pageObject.goToSpecificPage(page, caseToUse, 8)

    //Se marca la pagina como draft
    await pageObject.setPageAsDraft(page, caseToUse, 9);
});

Then('validate if the page was drafted', async function () {
    //Validamos si la pagina esta Publicado
    const grabItems2 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes("case10")) {
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("PUBLISHED")) {
                    isItContained = true
                }
            }
        })
        return isItContained;
    })

    console.log("WAS THE PAGE PUBLISHED?")
    console.log(grabItems2)


    //Validamos si la page esta se guardo como Draft
    const grabItems3 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false

        elements.forEach((publication) => {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if (title.innerHTML.includes("case10")) {
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if (span.innerText.includes("DRAFT")) {
                    isItContained = true
                }
            }
        })
        return isItContained;
    })

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
        console.log("Yes, the correctly logged ing with original password")
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

