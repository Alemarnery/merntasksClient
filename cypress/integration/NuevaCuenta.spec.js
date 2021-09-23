/// <reference types="cypress" />

describe("<NuevaCuenta/>", () => {
  it("<NuevaCuenta/> - Validacion,Alertas y Crear una Cuenta", () => {
    cy.visit("/nueva-cuenta");

    cy.get("[data-cy=btn-input]").click();
    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("eq", "Todos los campos son obligatorios");

    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    //Llenado de Formularios
    cy.get("[data-cy=nombre-input]").type("Alemar");
    cy.get("[data-cy=email-input]").type("Alemaaafr@gmail.com");
    cy.get("[data-cy=password-input]").type("1234");
    cy.get("[data-cy=repetir-password-input]").type("1234");

    cy.get("[data-cy=btn-input]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "El password debe ser de al menos 6 caracteres");

    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    cy.get("[data-cy=password-input]").clear().type("123456");
    cy.get("[data-cy=repetir-password-input]").clear().type("1234589");

    cy.get("[data-cy=btn-input]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("eq", "Los passwords no son iguales");

    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    cy.get("[data-cy=password-input]").clear().type("123456");
    cy.get("[data-cy=repetir-password-input]").clear().type("123456");
    cy.get("[data-cy=btn-input]").click();

    cy.get("[data-cy=selecciona]")
      .should("exist")
      .invoke("text")
      .should("equal", "Selecciona un proyecto");

    cy.get("[data-cy=cerrar-sesion]").click();
  });

  it("<NuevaCuenta/> - Revisar usuarios Duplicados", () => {
    cy.visit("/nueva-cuenta");

    //Llenado de Formularios
    cy.get("[data-cy=nombre-input]").type("Alemar");
    cy.get("[data-cy=email-input]").type("usuario@gmail.com");
    cy.get("[data-cy=password-input]").type("123456");
    cy.get("[data-cy=repetir-password-input]").type("123456");

    cy.get("[data-cy=btn-input]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("eq", "El usuario ya existe");

    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");
  });
});
