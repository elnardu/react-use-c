import React from "react";
import ReactDOM from "react-dom";

// I haven't used any of this bs in a year, hopefully it still the same

/// Look mum! I am so cool, I put strings into a different file
function css(strings) {
  let style = document.getElementById("css-in-js-style-thing");
  if (!style) {
    style = document.createElement("style");
    style.id = "css-in-js-style-thing";
    document.head.appendChild(style);
  }

  const randomClassId = Math.random().toString(36).slice(2);
  style.textContent += `
.${randomClassId} {
${strings[0]}
}`;
  return randomClassId;
}

async function runC(code) {
  const res = await fetch("/rpc/exec", {
    method: "POST",
    body: JSON.stringify({code: code}),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
}

const appStyles = css`
  margin: 3rem auto;
  max-width: 600px;
  padding: 0 1rem;
`;

const App = () => (
  <div className={appStyles}>
    <h1>Hello, world!</h1>
    <BigButton />
  </div>
);

const BigButton = () => (
  <button onClick={() => {
    "use c";
    #include <stdio.h>

    int main() {
      printf("Hello!\n");
      return 0;
    }
  }}>
    Click me!
  </button>
);

ReactDOM.render(<App />, document.getElementById("app"));
