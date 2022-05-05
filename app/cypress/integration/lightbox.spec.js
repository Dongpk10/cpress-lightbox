/// <reference types="cypress" />
describe('lightbox', () => {
    beforeEach(() => {
        cy.visit('../../lightbox.html');
    });
    it('p should open lightbox,click on image', () => {
        //cy.get('input[name=cypher-key]').clear().type(3);
        //cy.get('textarea').type("Hello Word");
        cy.get('[data-cy=cypher-openimage]').click();
        //cy.get("#result").should('have.text','D');

        //cy.get('[data-cy=cypher-closeimage1]').click();
        cy.get('[data-cy=cypher-like]').click();
        cy.get('[data-cy=cypher-unlike]').click();
        cy.get('[data-cy= cypher-comment]').type("Awesome");
        cy.get('[data-cy= cypher-publish]').click();
        cy.get('[data-cy= cypher-comment]').type("");
        cy.get('[data-cy= cypher-publish]').click();


    });

});