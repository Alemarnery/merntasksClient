/// <reference types="cypress" />

describe("<Login/>", () => {
  it("<Login/> - Autenticar Usuario", () => {
    cy.visit("/");

    cy.get("[data-cy=submit-login]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("eq", "Todos los campos son obligatorios");

    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    //Probar que un usuario no existe
    cy.get("[data-cy=email-input]").type("email@email.com");
    cy.get("[data-cy=password-input]").type("123");

    cy.get("[data-cy=submit-login]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("eq", "El usuario no existe");

    //Probando un password incorrecto
    cy.get("[data-cy=email-input]").clear().type("Alemaaafr@gmail.com");
    cy.get("[data-cy=password-input]").clear().type("123");

    cy.get("[data-cy=submit-login]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("eq", "Password Incorrecto");

    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    //Autenticar Usuario
    cy.get("[data-cy=email-input]").clear().type("Alemaaafr@gmail.com");
    cy.get("[data-cy=password-input]").clear().type("123456");

    cy.get("[data-cy=submit-login]").click();

    //Desde el dashboard de Administracion
    cy.get("[data-cy=selecciona]")
      .should("exist")
      .invoke("text")
      .should("equal", "Selecciona un proyecto");

    cy.get("[data-cy=cerrar-sesion]").click();
  });
});
