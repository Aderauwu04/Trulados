import truladosLogo from '/logo.svg'

function Navbar() {
  return (
    <nav className="navbar">
      <div className='flex align-items-center'>
        <img src={truladosLogo} className="logo" alt="Vite logo" />
        <p className='text-6xl agbalumo text-gradient m-0'>Trulados</p>
      </div>
      <ul className='nav vertical'>
        <li>
          <a href="#collections">
            Colecciones
          </a>
        </li>
        <li>
          <a href="#us">
            Sobre nosotros
          </a>
        </li>
        <li>
          <a href="#contact">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
