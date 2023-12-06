const api = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let btn = document.querySelector(".btn");
let box = document.querySelector(".joxBox");
let para = document.querySelector("p")

let data
async function jokila() {
    try {



        let response = await fetch(api);
        // console.log(response)
        data = await response.json();
        // console.log(data.joke);

         box.innerText = `${data.joke}`

    }
    catch (er) {
        console.error(er);
    }
}
let loading = document.querySelector(".loading");
console.log(loading)
setTimeout(() => {
    loading.style.display="none"
    jokila();

}, 2000);



btn.addEventListener("click", jokila);





