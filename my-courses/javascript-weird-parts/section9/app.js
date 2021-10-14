document.getElementById('lang').addEventListener('change', e => {
    const long = G$('long', 'bui', e.target.value)
    long.updateH1Tag('#greeting', true)
})