describe('login Form tests', function () {
   it('Correct login, correct password', function () {
        cy.visit('https://login.qa.studio'); // visited the site
        cy.get('#mail').type('german@dolnikov.ru'); // entered the e-mail
        cy.get('#pass').type('iLoveqastudio1'); // entered the password
        cy.get('#loginButton').click(); // clicked the button
        cy.get('#messageHeader').should('be.visible'); // The text is visible
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // x icon is present
        cy.get('#messageHeader').contains('Authorization was successful'); // text matches
    })

    it('password recovery', function () {
        cy.visit('https://login.qa.studio'); // visited the site
        cy.get('#mail').type('german@dolnikov.ru'); // entered the e-mail
        cy.get('#forgotEmailButton').click(); // clicked the Forgot Email button
        cy.get('#forgotForm > .header').should('be.visible'); // The text is visible
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); // text matches
        cy.get('#mailForgot').type('german@dolnikov.ru'); // entered  the e-mail
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); // x icon is present
        cy.get('#restoreEmailButton').click(); // clicked the button
        
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // text match
     })

     it('Correct login - incorrect password', function () {
        cy.visit('https://login.qa.studio'); // visited the site
        cy.get('#mail').type('german@dolnikov.ru'); // entered the e-mail
;       cy.get('#pass').type('incorrectpassword');
        cy.get('#loginButton').click(); // clicked the button
    
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
      })

      it('Incorrect login - correct password', function () {
        cy.visit('https://login.qa.studio'); // visited the site
        cy.get('#mail').type('incorrect login'); // entered the e-mail
;       cy.get('#pass').type('iloveqastudio1');
        cy.get('#loginButton').click(); // clicked the button
    
        cy.get('#messageHeader').should('be.visible'); // The text is visible
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // x icon is present
        cy.get('#messageHeader').contains('Authorization was successful'); // text matches
      })

})
