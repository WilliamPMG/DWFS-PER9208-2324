import './header.css'
import carrete from './../../assets/carrete-de-pelicula.png'

export const HeaderApp = () => {
    return(
        <header>
            <div className='logoName'>
                <img className='carreteImg' src={carrete} alt="Movies"/>
                <h3>Movies Unir</h3>
            </div>
            <nav>
                <a href="#">Home</a>
                <a href="#">Películas</a>
                <a href="#">Estrenos</a>
                <a href="#">Comprar</a>
            </nav>
        </header>
    )
}