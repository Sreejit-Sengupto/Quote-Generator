function get() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };
    
    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
        .then(response => response.json())
        .then(response => document.querySelector(".quote").innerHTML = `"${response.content}" <p class="author">~${response.originator.name}</p>`)
        .catch(err => console.error(err));
}
