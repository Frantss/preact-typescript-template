describe('Example', () => {
  it('visits google.com', () => {
    cy.google()
      .url()
      .should(url => expect(url).contain('google.com'));
  });
});
