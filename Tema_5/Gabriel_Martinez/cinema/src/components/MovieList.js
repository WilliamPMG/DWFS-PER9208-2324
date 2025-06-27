import {useState} from "react";
import {Movie} from "./Movie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'


const maxMovies = 4;

const movies = [{
    title: 'Batman Begins',
    image: 'https://image.tmdb.org/t/p/original/xWufUAYvji3mgltweOd41kh3MRK.jpg',
    synopsis: '¿Cómo cambia un hombre el mundo? Es una pregunta que obsesiona a Bruce Wayne al igual que el fantasma de sus padres, muertos a tiros ante sus ojos en las calles de Gotham una noche que cambió su vida para siempre. Atormentado por la culpa y la ira, el desilusionado heredero industrial desaparece de Gotham y viaja en secreto por el mundo, buscando los medios de luchar contra la injusticia y utilizar el miedo contra los que se aprovechan de los que tienen miedo. Con la ayuda de su leal mayordomo Alfred, el detective Jim Gordon - uno de los pocos buenos policías de las fuerzas del orden público de Gotham - y Lucius Fox, su aliado en la división de Ciencias Aplicadas de Wayne Enterprises, Bruce Wayne libera a su imponente alter ego: Batman, un justiciero enmascarado que utiliza la fuerza, la inteligencia y un despliegue de artefactos de alta tecnología para combatir las fuerzas siniestras que amenazan con destruir la ciudad.',
    duration: '2h 20min',
    genres: 'Acción, Crimen, Drama',
    rating: 4.1
},{
    title: 'El caballero oscuro',
    image: 'https://image.tmdb.org/t/p/original/tSIH3DTA4oFQDhPaJgHxxQZoqHh.jpg',
    synopsis: 'Batman/Bruce Wayne regresa para continuar su guerra contra el crimen. Con la ayuda del teniente Jim Gordon y del Fiscal del Distrito Harvey Dent, Batman se propone destruir el crimen organizado en la ciudad de Gotham. El triunvirato demuestra su eficacia, pero, de repente, aparece Joker, un nuevo criminal que desencadena el caos y tiene aterrados a los ciudadanos.',
    duration: '2h 32min',
    genres: 'Drama, Acción, Crimen, Suspense',
    rating: 4.5
},{
    title: 'El caballero oscuro: La leyenda renace',
    image: 'https://image.tmdb.org/t/p/original/rOD0IgjAop4LA2vuimhNRLyGijf.jpg',
    synopsis: 'Hace ocho años que Batman desapareció, dejando de ser un héroe para convertirse en un fugitivo. Al asumir la culpa por la muerte del fiscal del distrito Harvey Dent, el Caballero Oscuro decidió sacrificarlo todo por lo que consideraba, al igual que el Comisario Gordon, un bien mayor. La mentira funciona durante un tiempo, ya que la actividad criminal de la ciudad de Gotham se ve aplacada gracias a la dura Ley Dent. Pero todo cambia con la llegada de una astuta gata ladrona que pretende llevar a cabo un misterioso plan. Sin embargo, mucho más peligrosa es la aparición en escena de Bane, un terrorista enmascarado cuyos despiadados planes obligan a Bruce a regresar de su voluntario exilio.',
    duration: '2h 45min',
    genres: 'Drama, Acción, Crimen, Suspense',
    rating: 4.2
},{
    title: 'Malditos bastardos',
    image: 'https://image.tmdb.org/t/p/original/8bvyf5b4omVHD6R7Wx0Rnxwdf11.jpg',
    synopsis: 'Segunda Guerra Mundial. Durante la ocupación de Francia por los alemanes, Shosanna Dreyfus presencia la ejecución de su familia por orden del coronel nazi Hans Landa. Ella consigue huir a París, donde adopta una nueva identidad como propietaria de un cine. En otro lugar de Europa, el teniente Aldo Raine adiestra a un grupo de soldados judíos "Los bastardos" para atacar objetivos concretos. Los hombres de Raine y una actriz alemana, que trabaja para los aliados, deben llevar a cabo una misión que hará caer a los jefes del Tercer Reich. El destino quiere que todos se encuentren bajo la marquesina de un cine donde Shosanna espera para vengarse.',
    duration: '2h 26min',
    genres: 'Drama, Suspense, Bélica',
    rating: 4.2
},{
    title: 'Kung Fu Panda',
    image: 'https://image.tmdb.org/t/p/original/qfVZpfEEmpKm0ukRs4A8ZGjnawK.jpg',
    synopsis: 'El protagonista es un oso panda llamado Po, el más vago de todas las criaturas del Valle de la Paz. Con poderosos enemigos acercándose, la esperanza es depositada en una antigua profecía que dice que un héroe se alzará para salvarles. Voces originales de Jack Black, Angelina Jolie, Dustin Hoffman, Lucy Liu & Jackie Chan.',
    duration: '2h 45min',
    genres: 'Drama, Acción, Crimen, Suspense',
    rating: 3.8
},{
    title: 'Kill Bill Vol. 1',
    image: 'https://image.tmdb.org/t/p/original/77BVnjogHp6hufhsDuuixZoOpvJ.jpg',
    synopsis: 'Uma Thurman es una asesina que, el día de su boda, es atacada por los miembros de la banda de su jefe, Bill (David Carradine). Logra sobrevivir al ataque, aunque queda en coma. Cinco años después despierta con un trozo de metal en la cabeza y un gran deseo de venganza en su corazón.',
    duration: '1h 51min',
    genres: 'Acción, Crimen',
    rating: 4.1
},{
    title: 'Kill Bill Vol. 2',
    image: 'https://image.tmdb.org/t/p/original/8kARdTnQJGSJ9udZsAwx8AKu9m7.jpg',
    synopsis: 'Tras eliminar a algunos de los miembros de la banda que intentó asesinarla el día de su boda, "Mamba Negra" prosigue su venganza e intenta acabar con el resto de la banda, en especial con su antiguo jefe, Bill, que la dio por muerta dejándola en coma.',
    duration: '2h 16min',
    genres: ' Acción, Crimen, Suspense',
    rating: 4.0
}
]

export const MovieList = () => {

    const [nextMovie, setNextMovie] = useState(maxMovies)
    const [moviesToShow, setMoviesToShow ]= useState(movies.slice(0, nextMovie));

    const forward = () => {
        if (nextMovie < movies.length){
            const next = nextMovie + 1;
            setMoviesToShow(movies.slice(next-maxMovies, next))
            setNextMovie(next)
        }
    };

    const backward = () => {
        if (nextMovie > maxMovies){
            const next = nextMovie - 1;
            setMoviesToShow(movies.slice(next-maxMovies, next))
            setNextMovie(next)
        }
    }

    return (
        <div className='movie-container'>
            <div className='icon-container'>
                <FontAwesomeIcon onClick={() => backward()} className='arrow' icon={faCircleArrowLeft}/>
            </div>
            {moviesToShow.map((movie, index) => (
                <Movie
                    key={index}
                    title={movie.title}
                    image={movie.image}
                    synopsis={movie.synopsis}
                    duration={movie.duration}
                    genres={movie.genres}
                    rating={movie.rating}
                />
            ))}
            <div className='icon-container'>
                <FontAwesomeIcon onClick={() => forward()} className='arrow' icon={faCircleArrowRight} />
            </div>
        </div>
    )
}