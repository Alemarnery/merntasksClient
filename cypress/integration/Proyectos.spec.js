/// <reference types="cypress" />

describe("<Administrador/>", () => {
  it("<Login/>", () => {
    cy.visit("/");

    //Llenar el formulario
    cy.get("[data-cy=email-input]").type("Alemaaafr@gmail.com");
    cy.get("[data-cy=password-input]").type("123456");

    cy.get("[data-cy=submit-login]").click();
  });

  it("<Proyectos/> -Validar Proyectos", () => {
    cy.get("[data-cy=btn-nuevo-proyecto]").click();
    cy.get("[data-cy=submit-nuevo-proyecto]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("eq", "El nombre del Proyecto es obligatorio");

    cy.get("[data-cy=alerta]").should("have.class", "mensaje error");
  });

  it("<Proyectos/> -Validar Proyectos", () => {
    cy.get("[data-cy=input-nuevo-proyecto]").type("Tienda Virtual");
    cy.get("[data-cy=submit-nuevo-proyecto]").click();

    //Seleccionar el proyecto
    cy.get("[data-cy=listado-proyectos] li:nth-child(1) button").click();
  });

  it("<Tareas/> -Validacion y Creacion de Tareas", () => {
    cy.get("[data-cy=submit-tarea]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("eq", "El nombre de la tarea es obligatorio");

    cy.get("[data-cy=alerta]").should("have.class", "mensaje error");

    //creacion de tarea
    cy.get("[data-cy=input-tarea]").type("Definir Diseno");
    cy.get("[data-cy=submit-tarea]").click();

    cy.get("[data-cy=input-tarea]").type("Definir tipografia");
    cy.get("[data-cy=submit-tarea]").click();

    cy.get("[data-cy=input-tarea]").type("Definir Colores");
    cy.get("[data-cy=submit-tarea]").click();
  });

  it("<Tareas/> - Completar, Descompletar, Editar y Eliminar", () => {
    //Selecciona la primera tarea y la marca como completa
    cy.get("[data-cy=tarea]:nth-child(1) data-cy=tarea-incompleta]").click();
    cy.get("[data-cy=tarea]:nth-child(1) data-cy=tarea-completa]").should(
      "have.class",
      "completo"
    );

    //Selecciona la primera tarea y la desmarca como completa
    cy.get("[data-cy=tarea]:nth-child(1) data-cy=tarea-completa]").click();
    cy.get("[data-cy=tarea]:nth-child(1) data-cy=tarea-incompleta]").should(
      "have.class",
      "incompleto"
    );

    //Edicion
    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=btn-editar]").click();
    cy.get("[data-cy=input-tarea]").clear().type("TAREA ACTUALIZADA");
    cy.get("[data-cy=submit-tarea]").click();

    //Elimintar tarea
    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=btn-eliminar]").click();
    cy.get("[data-cy=tarea]:nth-child(1)")
      .invoke("text")
      .should("not.equal", "TAREA ACTUALIZADA");
  });
});
