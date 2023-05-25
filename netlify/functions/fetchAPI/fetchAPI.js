// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  const apiKey = process.env.API_KEY
  try {
    const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
      }
  };
  
  fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
      // .then(response => response.json())
      // .then(response => document.querySelector(".quote").innerHTML = `"${response.content}" <p class="author">~${response.originator.name}</p>`)
      // .then(console.log(response))
      // .catch(err => console.error(err));
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
