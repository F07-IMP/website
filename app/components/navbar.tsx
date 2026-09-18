"use client";

export default function NavBar() {
  return (
    <div>
      <div className="bg-background p-8">
        <div className="bg-background p-4">
          <div className="flex">
            <button
              className="bg-accent text-black mx-1 px-2 py-1 rounded"
              onClick={handleClick}
            >
              Test
            </button>
            <div className="bg-error text-black mx-1 px-2 py-1 rounded">
              Error
            </div>
            <div className="bg-warning text-black mx-1 px-2 py-1 rounded">
              Warning
            </div>
            <div className="bg-success text-black mx-1 px-2 py-1 rounded">
              Success
            </div>
            <button
              className="border-2 border-solid border-accent text-text mx-1 px-2 py-1 rounded"
              onClick={handleClick}
            >
              Test
            </button>
            <div className="border-2 border-solid border-error text-text mx-1 px-2 py-1 rounded">
              Error
            </div>
            <div className="border-2 border-solid border-warning text-text mx-1 px-2 py-1 rounded">
              Warning
            </div>
            <div className="border-2 border-solid border-success text-text mx-1 px-2 py-1 rounded">
              Success
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-300 p-8">
        <div className="bg-slate-300 p-4">
          <div className="flex">
            <button
              className="bg-accent text-black mx-1 px-2 py-1 rounded"
              onClick={handleClick}
            >
              Test
            </button>
            <div className="bg-error text-black mx-1 px-2 py-1 rounded">
              Error
            </div>
            <div className="bg-warning text-black mx-1 px-2 py-1 rounded">
              Warning
            </div>
            <div className="bg-success text-black mx-1 px-2 py-1 rounded">
              Success
            </div>
            <button
              className="border-2 border-solid border-accent text-text mx-1 px-2 py-1 rounded"
              onClick={handleClick}
            >
              Test
            </button>
            <div className="border-2 border-solid border-error text-text mx-1 px-2 py-1 rounded">
              Error
            </div>
            <div className="border-2 border-solid border-warning text-text mx-1 px-2 py-1 rounded">
              Warning
            </div>
            <div className="border-2 border-solid border-success text-text mx-1 px-2 py-1 rounded">
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
