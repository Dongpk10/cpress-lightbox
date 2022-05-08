/// <reference types="cypress" />

describe('lightbox', () => {

    beforeEach(() => {
        cy.visit('../../lightbox.html')
    })

    // 1
    it('should open lightbox, click on image', () => {
        cy.dataCy('lightbox-overlay').click();
        cy.dataCy('lightbox').should('be.visible');
    });
    // 2
    it('should close light box by  clicking outside of lightbox', () => {
        cy.dataCy('lightbox-overlay').click();
        cy.get("body").click(0,0);
        cy.dataCy('lightbox').should('not.be.visible');
    });
    // 3
    it('should add a like and update counters', () => {
        cy.dataCy('lightbox-overlay').click();
        cy.dataCy('lightbox').scrollTo('bottom');
        cy.dataCy('like').click();
        //chech svg visible

        cy.dataCy('unlike').should('be.visible');
        cy.dataCy('like').should('not.be.visible');
         //check counter-lightbox
        cy.dataCy('like-counter').should('have.text',1);

        //check overlay-counter
        cy.get("body").click(0,0);
        cy.dataCy('lightbox-overlay').trigger('mouseover');
        cy.dataCy('lightbox-overlay-like_count').should('have.text',1);

    });
    // 4
    it('should add, then delete a like and update counters', () => {
        cy.dataCy('lightbox-overlay').click();
        cy.dataCy('lightbox').scrollTo('bottom');
        cy.dataCy('like').click();
        cy.dataCy('unlike').click();

        //chech svg visible

        cy.dataCy('unlike').should('not.be.visible');
        cy.dataCy('like').should('be.visible');
        //check counter-lightbox
        cy.dataCy('like-counter').should('have.text',0);

        //check overlay-counter
        cy.get("body").click(0,0);
        cy.dataCy('lightbox-overlay').trigger('mouseover');
        cy.dataCy('lightbox-overlay-like_count').should('have.text',0);

    });

    // 5
    it('should add a comment', () => {
        cy.dataCy('lightbox-overlay').click();
        cy.dataCy('lightbox').scrollTo('bottom');
        cy.dataCy('add-comment').type("Awsesome");
        cy.dataCy('publish').click();

        //check presence of comment
        cy.dataCy('comment').should('have.text',"Awsesome");
        cy.dataCy("author").should('have.text',"johndoe");
        //check comment counter lightbox
        cy.dataCy('comment-counter').should('have.text',"Hide 1 comment");
        //counter overlay-lightbox
        cy.get("body").click(0,0);
        cy.dataCy('lightbox-overlay').trigger('mouseover');
        cy.dataCy('comment-count_overlay').should('have.text',1);

    });
    // 6
    it('should not add an empty comment, publish button disabled', () => {
        cy.dataCy('lightbox-overlay').click();
        cy.dataCy('lightbox').scrollTo('bottom');
        cy.dataCy("publish").should("be.disabled");
    });

})