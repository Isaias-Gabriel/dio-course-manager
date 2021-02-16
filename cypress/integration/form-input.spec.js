describe('Form input', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Visits the app', () => {
        cy.focused().should('have.id', 'cypress-input')
    });

    it.only('Accepts input', () => {
        cy.get('#cypress-input').type('gi').should('have.value', 'gi');
    });
});