import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // 顯示count
  const [showCount, setShowCount] = useState(false);

  return (
    <>
      {showCount ? (
        <>
          <div className="card" data-testid="cypress-card">
            <h1
              id="cypress-count"
              name="cypress-count"
              data-testid="cypress-count"
            >
              count:&nbsp;{count}
            </h1>
            <div className="flex">
              <button
                style={{
                  background: "#e94e55",
                }}
                onClick={() => {
                  setShowCount(() => !showCount);
                  setCount(0);
                }}
              >
                BACK
              </button>
              &emsp;
              <button
                style={{
                  background: "#6dce85",
                }}
                onClick={() => setCount((count) => count + 1)}
              >
                +1
              </button>
              &emsp;
              <button
                style={{
                  background: "#64a1f1",
                }}
                onClick={() => alert(count)}
              >
                Alert
              </button>
            </div>
          </div>

          <div>
            <input  data-testid="cypress-input"/>
          </div>
        </>
      ) : (
        <>
          <h1 data-testid="cypress-title">Cypress Test</h1>
          <button
            style={{
              background: "#ffee00",
            }}
            onClick={() => setShowCount(() => !showCount)}
          >
            START
          </button>
        </>
      )}
    </>
  );
}

export default App;
