const joke = document.getElementById('joke');
const buttonGetJoke = document.getElementById('getJoke');

buttonGetJoke.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(data => {
            joke.textContent = data.value;
        })
        .catch(error => {
            joke.textContent = "Ocurrió un error al obtener el chiste";
            console.error(error)
        });
});
