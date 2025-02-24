import truladosLogo from '/logo.svg'

function ContactForm() {
  return (
    <form className="border-round bg-surface-card p-4">
      <h3>Envíanos un mensaje</h3>
      <div className='input-group'>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" />
      </div>
      <div className='input-group'>
        <label htmlFor="email">Correo</label>
        <input type="email" id="email" />
      </div>
      <div className='input-group'>
        <label htmlFor="message">Mensaje</label>
        <textarea id="message"></textarea>
      </div>
      <button className='btn primary'>Enviar</button>
    </form>
  );
}

export default ContactForm
