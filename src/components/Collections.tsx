import { useState, useEffect } from 'react'
import { type icecream, type sticker  } from '../interfaces/types';

function Collections() {
  const [helados, setHelados] = useState([]);
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    // Consultar helados
    fetch('http://localhost:5000/api/helados')
      .then((response) => response.json())
      .then((data) => setHelados(data));

    // Consultar stickers
    fetch('http://localhost:5000/api/stickers')
      .then((response) => response.json())
      .then((data) => setStickers(data));
  }, []);

  return (
    <div className="App">
      <h1>Helados</h1>
      <ul>
        {helados.map((helado: icecream) => (
          <li key={helado.id}>{helado.name} - {helado.taste}</li>
        ))}
      </ul>

      <h1>Stickers</h1>
      <ul>
        {stickers.map((sticker: sticker) => (
          <li key={sticker.id}>{sticker.name} - {sticker.collection}</li>
        ))}
      </ul>
    </div>
  );
}

export default Collections
