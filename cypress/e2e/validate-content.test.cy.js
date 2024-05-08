describe("Validate Limber", () => {
  it("Successfully Validate Limber", () => {
    cy.request('GET', 'http://pokeapi.co/api/v2/ability/7').then((response) => {
      expect(response.body.name).to.eq('limber');
    });
  });
});
