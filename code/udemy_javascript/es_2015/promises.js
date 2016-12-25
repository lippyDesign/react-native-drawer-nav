promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 3000)
})

promise
    .then(() => console.log('finally finished'))
    .then(() => console.log('I was also ran'))
    .catch(() => console.log('uh oh!!!'))

//////////////////////////////////////////////////////////////////////////////////////////////////

url = 'https://jsonplaceholder.typicode.com/posts'

// make ajax request with fetch
fetch(url)
    // the following callback will take the response and convert it to readable data
    .then(response => response.json())
    // the following will console log the data from json
    .then(data => console.log(data))
    .catch(error => console.log(`BAD ${error}`))