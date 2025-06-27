import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MovieList from '../components/MovieList'

export default function cinema() {
  return (
    <div class="container p-3 mb-3 border-bottom">
        <Header />
        < br/>
        <MovieList />
        < br/>
        <Footer />
    </div>
  )
}
