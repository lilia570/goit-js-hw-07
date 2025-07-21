const nameIn = document.querySelector('#name-input')
const output = document.querySelector('#output-name')
nameIn.addEventListener('input', event => {
    const out = event.currentTarget.value.trim()
    output.textContent = out === '' ? 'Anonymous' : out;
});
 