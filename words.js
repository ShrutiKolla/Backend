const display = document.getElementById('display');
const fetchBtn = document.getElementsByTagName('button')[0];
const word = document.getElementsByTagName('input')[0];

async function fetchDef() {
    let inpWord = word.value;
    let text = ``;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inpWord}`)
        .then(res => res.json())
        .then(data => {
            data.forEach(x => {
                console.log(x.meanings)
                x.meanings.forEach(y => y.definitions.forEach(z => {
                    text += `<li>${z.definition}</li>`
                }))
            })
            display.innerHTML = text
        }).catch(error => {
            display.innerHTML = `<p>Word not found</p>`
            setTimeout(() => { display.innerHTML = `` }, 1500)
        }
        );
}
fetchBtn.addEventListener('click', fetchDef);