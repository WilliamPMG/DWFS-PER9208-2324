import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {MovieList} from "./components/MovieList";
import './styles/styles.css';

function App() {
    return (
        <div>
            <Header/>
            <MovieList/>
            <Footer/>
        </div>
    );
}

export default App;
