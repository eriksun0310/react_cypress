# 在原有的專案中引入 Cypress 流程

1. npm i cypress --save-dev 

2. npm run dev (啟動本地伺服器)

> 以下為運行 Cypress 測試 
3. npx cypress open ( 自動開啟cypress畫面)
3. npx cypress run (直接在 terminal run)

4. 選擇 E2E 、Component Testing

5. 選擇Borwer (Chrome)

6. 創建新的 '測試' 頁面


# E2E（End-to-End）
『模仿使用者操作流程』 需要run server </br>
> 這種測試涵蓋了應用程式的整個流程，包括前端和後端，通常會在真實的瀏覽器環境中執行。


- 畫面測試
  -  點擊START 按鈕 , 能看見count 的畫面,而且count 預設為0


- 功能測試
  -  點擊 +1按鈕, count 增加
  -  點擊 +1按鈕, count 增加, 點擊 Alert 按鈕, 顯示 alert 彈出框, alert 框則顯示 1
  -  input 填寫 Hi!
  -  點擊BACK 按鈕回到 主畫面



# Component Testing
『組件測試』 不需要run server 直接 npx cypress open


- 組件測試
  -  stepper 的count 值預設為0
  -  stepper 按下 + 的按鈕, count為1
  -  stepper 按下 - 的按鈕, count為 -1
  -  stepper 的參數測試
  -  onChange 至少執行過一次
