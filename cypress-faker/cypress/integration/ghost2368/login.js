const { faker } = require('@faker-js/faker');

describe( `Filling example form`, function() {
    it(`Visits jotform and fills an example form`, function() { 
        cy.visit('http://localhost:2368/ghost/#/dashboard')
        cy.get('#ember7').scrollIntoView().focus().type("morandres.carlos@gmail.com")
        cy.get('input[name="password"]').scrollIntoView().focus().type("carlosmora345{enter}")
        cy.wait(1000)
        cy.get('a[title="New post"]').scrollIntoView().focus().click()
        cy.get('.gh-editor-title').type(faker.company.companyName())
        cy.get('.koenig-editor__editor.__mobiledoc-editor.__has-no-content').type(faker.lorem.paragraph())
        cy.screenshot('post-image')
        cy.wait(1000)
    })
})