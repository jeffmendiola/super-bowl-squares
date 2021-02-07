import '../styles/globals.css'

import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [squareConfig, setSquareConfig] = useState({})
  useEffect(() => {
    fetch('/api/square')
      .then((res) => res.json())
      .then((squareConfig) => setSquareConfig(squareConfig))
  });

  return <Component {...pageProps} squareConfig={squareConfig}/>
}

export default MyApp
