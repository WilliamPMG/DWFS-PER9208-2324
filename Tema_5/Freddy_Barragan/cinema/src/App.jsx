import { useState } from 'react'
import './App.css'
import { HeaderApp } from './componentes/header/header'
import { FooterApp } from './componentes/footer/footer'
import { MovieList } from './componentes/movielist/movieList'
import { movies } from './movies.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='content'>
      <HeaderApp/>
      <div className='content__info'>
        <MovieList movies={movies}/>
      </div>
      <FooterApp/>
    </div>
  )
}

export default App
