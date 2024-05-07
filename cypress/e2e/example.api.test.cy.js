/// <reference types="cypress" />

describe("Validate Header", () => {
  it("API Test - Validate Header", () => {
    cy.request("http://pokeapi.co/api/v2/pokemon/25").as("pokemon");
    cy.get("@pokemon").its("headers").its("content-type").should("include", "application/json; charset=utf-8");
  });
  it("Assertion - 1", () => {
    cy.request("GET", "http://pokeapi.co/api/v2/pokemon").then((response) => {
      expect(response.body).to.not.be.empty;
      // expect(response.body.results).to.be.an("array").that.is.not.empty;

      // const pokemonNames = ["bulbasaur"];

      // response.body.results.forEach((pokemon) => {
      //   expect(pokemonNames).to.include(pokemon.name);
      // });
    });
  });
});
