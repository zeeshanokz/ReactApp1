// import { useEffect, useState } from "react";
// import "./App.css";
// import React from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [advice, setAdvice] = useState("");

//   async function fetchAdvice() {
//     const response = await fetch("https://api.adviceslip.com/advice");
//     const data = await response.json();
//     setAdvice(data.slip.advice);
//     setCount((c) => c + 1);
//   }
//   useEffect(function () {
//     fetchAdvice();
//   }, []);
//   return (
//     <>
//       <h2>{advice}</h2>
//       <button onClick={fetchAdvice}>Get Advice</button>
//       <p>{count}</p>
//     </>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";

// export default function App() {
//   const [advice, setAdvice] = useState("");
//   const [count, setCount] = useState(0);

//   async function getAdvice() {
//     const res = await fetch("https://api.adviceslip.com/advice");
//     const data = await res.json();
//     setAdvice(data.slip.advice);
//     setCount((c) => c + 1);
//   }
//   useEffect(() => {
//     getAdvice();
//   }, []);

//   return (
//     <div>
//       <h1>{advice}</h1>
//       <button onClick={getAdvice}>Get advice</button>
//       <Message count={count} />
//     </div>
//   );
// }

// function Message(props) {
//   return (
//     <p>
//       You have read <strong>{props.count}</strong> pieces of advice
//     </p>
//   );
// }

import { useEffect, useState } from "react";
import React from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function getAdvice() {
      try {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount((c) => c + 1);
      } catch (error) {
        console.error("Failed to fetch advice", error);
      }
    }

    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={() => window.location.reload()}>Get advice</button>
      <Message count={count} />
    </div>
  );
}

function Message({ count }) {
  return (
    <p>
      You have read <strong>{count}</strong> pieces of advice
    </p>
  );
}
