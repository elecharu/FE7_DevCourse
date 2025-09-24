{

    async function getRandomPostTitle() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!res) return new Error('response Error')
        const posts  = await res.json()
        const titles = posts.map(post => post.title);
        console.log(titles);
    }

    getRandomPostTitle(); 
}

{
    async function getUserInfo(userId) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if(!res) return new Error('response Error')
        const data  = await res.json()
        console.log(data);
    }

    getUserInfo(1);
}

{

    async function getPostDetails(postId) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if(!res) return new Error('response Error')
        const data  = await res.json()
        console.log(data);
    }
    
    getPostDetails(1); // 출력 예상 결과는 아래에
}

{
    async function getAllUsers() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        if(!res) return new Error('response Error')
        const data  = await res.json()
        data.forEach(({ username, email }) => {
            console.log(`Name: ${username} Email: ${email}`);
        });
    }

    getAllUsers();
}

{
    async function getPostComments(postId) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        if(!res) return new Error('response Error')
        const data  = await res.json()
        data.forEach(({ name, body }) => {
            console.log(`Comment by ${name} : ${body}`);
        });
    }

    getPostComments(1);
}

{
    async function getAllCommentBodies() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
        if(!res) return new Error('response Error')
        const data  = await res.json()
        data.forEach(({ body }) => {
            console.log(`Comment:  ${body}`);
        });
    }
    getAllCommentBodies();
}

{
    async function getSortedPostTitles() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
        if(!res) return new Error('response Error')
        const data  = await res.json()
        const result = []
        data.forEach(({ body }) => {
            return result.push(body)
        });
        console.log(result.sort((a,b) => a.localeCompare(b)))
    }
    getSortedPostTitles();
}

{
    async function getAllUserAddresses() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        if(!res) return new Error('response Error')
        const data  = await res.json()
        data.forEach((v) => {
            const {address , name} = v;
            const {suite, street,city,zipcode} = address;
            
            return console.log(`Address of ${name}: ${suite} ${street} ${city} ${zipcode}`)
        })
    }

    getAllUserAddresses();
}

{
    async function getUserPostTitles(userId) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if(!res) return new Error('response Error')
        const data  = await res.json()
        data.filter((v) => {
            if(v.userId === userId)
                console.log(`Post title : ${v.title}`)
        })
    }
    getUserPostTitles(1);
}