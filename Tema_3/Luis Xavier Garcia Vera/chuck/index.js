getJoke = () => {
    const joke = document.getElementById('pJoke');
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then((json) => (joke.innerHTML = json.value))
      .catch((error) => { console.log(error) });
}
