import TruladosLogoText from '@/assets/icons/logo-secondary.svg'
import Telegram from '@/assets/icons/telegram.svg'
import WhatsApp from '@/assets/icons/whatsapp.svg'
import Instagram from '@/assets/icons/instagram.svg'

function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src={TruladosLogoText} className="logo" alt="Trulados" />
        <ul className='nav'>
          <li>
            <a href="#">
              Inicio
            </a>
          </li>
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
        <div>
          <img src={Telegram} className="icon" alt="Telegram" />
          <img src={WhatsApp} className="icon" alt="WhatsApp" />
          <img src={Instagram} className="icon" alt="Instagram" />
        </div>
      </div>
      <p className='text-center'>
        <small>©2025 Aderauwu04. Todos los derechos reservados.</small>
      </p>
    </footer>
  );
}

export default Footer
