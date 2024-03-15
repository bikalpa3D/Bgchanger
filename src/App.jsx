import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-screen h-screen px-2 py-2 flex justify-center "
      style={{ background: color }}
    >
      <div className="w-2/3 h-16 px-1 py-2 rounded-lg border border-zinc-700 bg-white flex justify-center items-center gap-2 flex-wrap">
        <button
          onClick={() => setColor("red")}
          className="bg-red-300 px-4 py-2"
        >
          red
        </button>
        <button
          onClick={() => setColor("Green")}
          className="bg-green-300 px-4 py-2"
        >
          Green
        </button>
        <button
          onClick={() => setColor("Blue")}
          className="bg-blue-300 px-4 py-2"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("white")}
          className="bg-white text-black px-4 py-2"
        >
          White
        </button>
        <button
          onClick={() => setColor("black")}
          className="bg-black px-4 py-2"
        >
          Black
        </button>
        <button
          onClick={() => setColor("#450a0a")}
          className="bg-red-950 px-4 py-2"
        >
          brown
        </button>
        <button
          onClick={() => setColor("grey")}
          className="bg-gray-400 px-4 py-2"
        >
          gray
        </button>
      </div>
    </div>
  );
}

export default App;
