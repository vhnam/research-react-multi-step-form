import getCypressAttribute from '../plugins/getCypressAttribute';

describe('E2E Testing', function() {
  it('Visits the Registration link', function() {
    cy.visit('http://localhost:3000');
  });

  it('Enter input on Step 1', function() {
    cy.get(getCypressAttribute('name')).type('Nam Vo');
    cy.get(getCypressAttribute('password')).type('123456789');
    cy.get(getCypressAttribute('email')).type('nam.vo@gmail.com');

    cy.get(getCypressAttribute('btn-save')).click();
  });

  it('Enter input on Step 2', function() {
    cy.get('[type="radio"]').check('18-26');
    cy.get('[type="checkbox"]').check(['Trumpet', 'Trombone']);

    cy.get(getCypressAttribute('btn-save')).click();
  });

  it('Confirming', function() {
    cy.get(getCypressAttribute('btn-confirm')).click();
  });
});
