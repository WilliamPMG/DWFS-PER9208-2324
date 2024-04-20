
async function fetchSincrono() {

    let url = "https://api.chucknorris.io/jokes/random";
    let fetchResponse = await fetch(url);
    let json = await fetchResponse.json();
    let joke = json.value;
    console.log("Joke sincrono: " + joke);
    var elem = document.getElementById("chuck");
    elem.textContent = joke;
    //return joke;
}

