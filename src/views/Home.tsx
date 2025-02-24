import Collections from '@/components/Collections'
import ContactForm from '@/components/ConctactForm'

function App() {
  return (
    <>
      <section>
        <h1 className='agbalumo'>
          El sabor de tu
          <span className='text-gradient pl-2'>
            imaginación
          </span>
        </h1>
        <p>
          Disfruta de nuestros helados y
          descubre la emoción de coleccionar
          stickers con cada compra.
          <strong>
            ¡Cada helado es una nueva aventura!
          </strong>
        </p>
        {/* onClick={() =>} */}
        <button className='btn primary'>
          Hacer pedido
        </button>
      </section>
      <section id='collections'>
        <h2 className='text-center'>Colecciona stickers únicos</h2>
        <Collections/>
      </section>
      <section id='us'>
        <h2 className='text-center'>Sobre nosotros</h2>
      </section>
      <section id='contact'>
        <h2 className='text-center'>Contactados</h2>
        <ContactForm/>
      </section>
    </>
  )
}

export default App
