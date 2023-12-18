import phrases from '../utils/phrases.json'
import getRandomFromArr from '../utils/getRandormFromArr'
import arrPhotos from '../utils/photos.json'

const Button = ( {setQuoteRandom, setphotoRandom} ) => {

    const handleChangePhrase = () => {

        setQuoteRandom(getRandomFromArr(phrases))
        setphotoRandom(getRandomFromArr(arrPhotos))
    }

  return (
    <button className='app_btn' onClick={handleChangePhrase}>Ver Otro</button>
  )
}

export default Button