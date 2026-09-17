"use client";

export default function NavBar() {
  return (
    <div>
      <div className="bg-slate-900 p-8">
        <div className="bg-slate-950 p-4">
          <div className="flex">
            <button
              className="bg-cyan-600 text-black mx-1 px-2 py-1 rounded"
              onClick={handleClick}
            >
              Test
            </button>
            <div className="bg-rose-700 text-black mx-1 px-2 py-1 rounded">
              Error
            </div>
            <div className="bg-amber-300 text-black mx-1 px-2 py-1 rounded">
              Warning
            </div>
            <div className="bg-green-500 text-black mx-1 px-2 py-1 rounded">
              Success
            </div>
            <button
              className="border-2 border-solid border-cyan-600 text-white mx-1 px-2 py-1 rounded"
              onClick={handleClick}
            >
              Test
            </button>
            <div className="border-2 border-solid border-rose-700 text-white mx-1 px-2 py-1 rounded">
              Error
            </div>
            <div className="border-2 border-solid border-amber-300 text-white mx-1 px-2 py-1 rounded">
              Warning
            </div>
            <div className="border-2 border-solid border-green-500 text-white mx-1 px-2 py-1 rounded">
              Success
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-300 p-8">
        <div className="bg-slate-400 p-4">
          <div className="flex">
            <button
              className="bg-cyan-600 text-black mx-1 px-2 py-1 rounded"
              onClick={handleClick}
            >
              Test
            </button>
            <div className="bg-rose-700 text-black mx-1 px-2 py-1 rounded">
              Error
            </div>
            <div className="bg-amber-300 text-black mx-1 px-2 py-1 rounded">
              Warning
            </div>
            <div className="bg-green-500 text-black mx-1 px-2 py-1 rounded">
              Success
            </div>
            <button
              className="border-2 border-solid border-cyan-600 text-black mx-1 px-2 py-1 rounded"
              onClick={handleClick}
            >
              Test
            </button>
            <div className="border-2 border-solid border-rose-700 text-black mx-1 px-2 py-1 rounded">
              Error
            </div>
            <div className="border-2 border-solid border-amber-300 text-black mx-1 px-2 py-1 rounded">
              Warning
            </div>
            <div className="border-2 border-solid border-green-500 text-black mx-1 px-2 py-1 rounded">
              Success
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function handleClick() {
    console.log("Klick");
  }
}
