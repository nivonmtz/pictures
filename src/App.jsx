import { useState } from 'react'
import SearchBar from './componentes/SearchBar'
import ImageList from './componentes/ImageList'
import searchImage from './api'
import './App.css'

function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async(term) => {
    console.log('Usted esta buscando con:', term)
    const result = await searchImage(term)

    setImages(result)
  }
 

  return (
    <div>
      <h1>App</h1>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  )
}

export default App