



import React, { useState } from 'react';



import './App.css';
import sahteVeri from './sahte-veri';
import Gönderiler from './bileşenler/Gönderiler/Gönderiler';
import AramaÇubuğu from './bileşenler/AramaÇubuğu/AramaÇubuğu';
const App = () => {

  const [gonderiler, setGönderiler] = useState(sahteVeri);
  const [arama, setArama] = useState('');
  const gonderiyiBegen = gonderiID => {
    setGönderiler(gonderiler.map(item => {
      if (gonderiID === item.id) { item.likes++ };
      return item;
    })
    );
};
  return (
    <div className='App'>
      <AramaÇubuğu />
      <Gönderiler gonderiyiBegen={gonderiyiBegen}
        gonderiler={gonderiler}
      />
    </div>
  );
};

export default App;
