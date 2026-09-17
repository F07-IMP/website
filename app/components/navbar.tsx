export default function NavBar() {
  return (
    <div className="bg-amber-800">
      <button className="bg-olive-700" onClick={handleClick}>
        Test
      </button>
    </div>
  );

  function handleClick() {
    console.log("Klick");
  }
}
