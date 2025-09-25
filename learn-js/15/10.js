// fetch
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        if (!response.ok) return new Error('response Error')
        response.json()
    })
    .then((posts) => {
        for (const post of posts) {
            console.log(post.body)
        }
    })
    .catch((err) => {
        console.error(err)
    })
    .finally(() => {
        console.log('finish')
    })