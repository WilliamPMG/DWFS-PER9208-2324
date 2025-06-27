import '../styles/style.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {MovieList} from "../components/MovieList";


function Movies() {
  return (<>
    <Header/>
    <MovieList/>
    <Footer/>
  </>);
}

export default Movies;
