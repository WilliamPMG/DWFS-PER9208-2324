async function chuckChistes() {
    let url = "https://api.chucknorris.io/jokes/random";
    let fetchResponse = await fetch(url);
    let json = await fetchResponse.json();
    let chuck = json.value;
    return chuck;
}
async function cambiarChiste() {
    var elem = document.getElementById("chiste");
    elem.innerHTML = await chuckChistes();
}