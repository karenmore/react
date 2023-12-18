import { useState } from 'react'
import './App.css'
import phareses from './utils/phrases.json'
import getRandomFromArr from './utils/getRandormFromArr'
import Phrase from './components/Phrase'
import Button from './components/Button'
import arrPhotos from './utils/photos.json'

function App() {

  const initiaPharase = getRandomFromArr(phareses)
  const initiaPhoto = getRandomFromArr(arrPhotos)

  const [quoteRandom, setQuoteRandom] = useState(initiaPharase)
  const [photoRandom, setphotoRandom] = useState(initiaPhoto)

  const objStyle = {
    backgroundImage: `url(/fondo${photoRandom}.png)`
  }

  return (
    <div style={objStyle} className='app'>
      <h1 className='app_title'>Galleta De La Fortuna</h1>
      <article className='app_card'>
        <Phrase quoteRandom = {quoteRandom}/> 
        <Button 
          setQuoteRandom = {setQuoteRandom}
          setphotoRandom = {setphotoRandom}
        />
      </article>
    </div>
  )
}

export default App