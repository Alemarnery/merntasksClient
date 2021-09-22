/// <reference types="cypress" />

describe("<Formularios/>", () => {
  it("<Login/>  - Verificar pantalla de inicio", () => {
    cy.visit("/");

    //Probar el texto
    cy.get("[data-cy=titulo]").invoke("text").should("equal", "Iniciar Sesión");

    //Revisar que el formulario exista
    cy.get("[data-cy=form-login]").should("exist");

    //Resivar los 2 inputs
    cy.get("[data-cy=email-input]").should("exist");
    cy.get("[data-cy=password-input]").should("exist");

    cy.get("[data-cy=submit-login]")
      .should("exist")
      .should("have.value", "Iniciar Sesión")
      .should("have.class", "btn-primario");

    cy.get("[data-cy=nueva-cuenta]")
      .should("exist")
      .should("have.prop", "tagName")
      .should("eq", "A");

    cy.get("[data-cy=nueva-cuenta]")
      .should("have.attr", "href")
      .should("eq", "/nueva-cuenta");

    cy.visit("/nueva-cuenta");
  });

  it("<NuevaCuenta/> - Verificar Obtener una Cuenta", () => {
    //Probar el texto
    cy.get("[data-cy=titulo]")
      .invoke("text")
      .should("equal", "Obtener una cuenta");

    //Revisar que el formulario exista
    cy.get("[data-cy=usuario-form]").should("exist");

    //Revisar los inputs
  });
});
