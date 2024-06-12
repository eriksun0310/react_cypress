/* eslint-disable no-undef */
import React from "react";
import Stepper from "./Stepper";

describe("<Stepper />", () => {
  beforeEach(() => {
    cy.mount(<Stepper />);
  });

  it("stepper 的count 值預設為0", () => {
    cy.get("[data-cy='counter']").should("have.text", 0);
  });

  it("stepper 按下 + 的按鈕, count為1", () => {
    cy.get("[data-cy='increment']").click();
    cy.get("[data-cy='counter']").should("have.text", 1);
  });

  it("stepper 按下 - 的按鈕, count為 -1", () => {
    cy.get("[data-cy='decrement']").click();
    cy.get("[data-cy='counter']").should("have.text", -1);
  });

  it("stepper 的參數測試", () => {
    cy.mount(<Stepper count={100} />);
    cy.get("[data-cy='counter']").should("have.text", 100);

    cy.get("[data-cy='increment']").click();
    cy.get("[data-cy='counter']").should("have.text", 101);

    cy.get("[data-cy='decrement']").click();
    cy.get("[data-cy='counter']").should("have.text", 100);
  });


  it("onChange 至少執行過一次", ()=>{
      const onChangeSpy = cy.spy().as('onChangeSpy')
      cy.mount(<Stepper onChange={onChangeSpy} />);

      cy.get("[data-cy='increment']").click();
      cy.get("@onChangeSpy").should("have.been.calledWith", 1)

  })
});
