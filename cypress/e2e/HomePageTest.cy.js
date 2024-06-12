/* eslint-disable no-undef */

describe("首頁", () => {
  // 在每個測試之前訪問應用程式
  beforeEach(() => {
    // 訪問應用程式
    cy.visit("http://localhost:5173");
  });

  describe("畫面", () => {
    it("點擊START 按鈕 , 能看見count 的畫面,而且count 預設為0", () => {
      // 使用xpath 找到START 按鈕
      cy.xpath("//button[text()='START']").should("exist").click();
      // cy.get("button").contains("START").should("exist").click();
      // 確認count 的畫面出現, 並且count 預設為0
      cy.get("[data-testid='cypress-card']").should("exist");
      cy.get("[data-testid='cypress-count']")
        .should("exist")
        .contains("count: 0");
    });
  });

  describe("功能", () => {
    it("點擊 +1按鈕, count 增加", () => {
      //先點擊 START按鈕以顯示count 畫面
      cy.get("button").contains("START").should("exist").click();

      // 點擊+1 count為1
      cy.get("button").contains("+1").should("exist").click();
      cy.get("[data-testid='cypress-count']")
        .should("exist")
        .contains("count: 1");
    });

    it("點擊 +1按鈕, count 增加, 點擊 Alert 按鈕, 顯示 alert 彈出框, alert 框則顯示 1 ", () => {
      // 先點擊 START 按鈕以顯示 count 畫面
      cy.get("button").contains("START").should("exist").click();

      // 點擊+1 count為1
      cy.get("button").contains("+1").should("exist").click();
      cy.get("[data-testid='cypress-count']")
        .should("exist")
        .contains("count: 1");

      // 設置一個 spy 來捕捉 alert 事件
      const stub = cy.stub(); //創建代理函數
      cy.on("window:alert", stub);

      // 點擊 Alert 按鈕
      cy.get("button")
        .contains("Alert")
        .should("exist")
        .click()
        .then(() => {
          // 預期呼叫1次,alert 彈出框內容會是1
          expect(stub.getCall(0)).to.be.calledWith(1); // 檢查 alert 的內容
        });
    });

    it("input 填寫 Hi!", () => {
      // 先點擊 START 按鈕以顯示 count 畫面
      cy.get("button").contains("START").should("exist").click();

      cy.get("[data-testid='cypress-input']").type("Hi!");
    });

    it("點擊BACK 按鈕回到 主畫面", () => {
      //先點擊 START按鈕以顯示count 畫面
      cy.get("button").contains("START").should("exist").click();

      //點擊BACK
      cy.get("button").contains("BACK").should("exist").click();

      //確認 Cypress Test有在畫面上
      cy.get("[data-testid='cypress-title']")
        .should("exist")
        .should("have.text", "Cypress Test");
    });
  });
});
