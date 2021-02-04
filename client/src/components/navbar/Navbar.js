import './style.css';

function Navbar() {
  /* Open when someone clicks on the span element */
  function openNav() {
    document.getElementById("myNav").style.width = "320px";
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  return (
    <nav role="navigation">
      {/* The overlay */}
      <div id="myNav" className="overlay">

        {/* Button to close the overlay navigation */}
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>

        {/* Overlay content */}
        <div classname="overlay-content">
          <a href="#">Hem</a>
          <a href="#">Om oss</a>
          <a href="#">Tjänster</a>
          <a href="#">Portfolio</a>
          <a href="#">Kontakt</a>
        </div>

      </div>

      {/* Use any element to open/show the overlay navigation menu */}
      <span onClick={openNav}>Meny</span>
    </nav>
  );
}

export default Navbar;
