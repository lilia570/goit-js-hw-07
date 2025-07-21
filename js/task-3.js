const nameIn = document.querySelector('#name-input')
const nameOut = document.querySelector('#name-output')
nameIn.addEventListener('input', event => {
    const out = event.currentTarget.value.trim()
    nameOut.textContent = out === '' ? 'Anonymous' : out;
});
 