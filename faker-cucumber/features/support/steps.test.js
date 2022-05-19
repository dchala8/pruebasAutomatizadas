const PageObject = require("../../pageObject.js");
const { When, Then, Given, } = require("cucumber")
const puppeteer = require("puppeteer")
var { setDefaultTimeout } = require('cucumber');
const { genVar } = require("../../generalVariables.js");
var fs = require('fs');

let caseToUse = 'case1';
const pageObject = new PageObject();

setDefaultTimeout(600 * 1000);

let browser, page
let caseFolder
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

When('User creates a tag, a post with tag and publishes it', async function () {
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

Then('validate post with tag', async function () {
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