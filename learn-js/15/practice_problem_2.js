{
    function getRandomPostTitle() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                if (!res.ok) return new Error('response Error')
                return res.json()
            })
            .then((posts) => {
                for (const post of posts) {
                    console.log(post.title)
                }
            })
    }

    getRandomPostTitle(); 
}

{
    function getUserInfo(userId) {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((res) => {
                if (!res.ok) return new Error('response Error')
                return res.json()
            })
            .then((data) => {
                return console.log(data)
            })
    }
    getUserInfo(1);
}

{
    function getPostDetails(postId) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((res) => {
                if (!res.ok) return new Error('response Error')
                return res.json()
            })
            .then((data) => {
                return console.log(data)
            })
    }
    
    getPostDetails(1); // 출력 예상 결과는 아래에
}

{
    function getAllUsers() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((res) => {
                if (!res.ok) return new Error('response Error')
                return res.json()
            })
            .then((data) => {
                return data.map(v => console.log(`Name: ${v.username} Email: ${v.email}`))
            })
    }
    
    getAllUsers();
}

{
    function getPostComments(postId) {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then((res) => {
                if (!res.ok) return new Error('response Error')
                return res.json()
            })
            .then((data) => {
                return data.map((v) => console.log(`Comment by ${v.name} : ${v.body}`))
            })
    }
    
    getPostComments(1);
}

{
    function getAllCommentBodies() {
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then((res) => {
                if (!res.ok) return new Error('response Error')
                return res.json()
            })
            .then((data) => {
                // console.log(data)
                return data.map((v) => console.log(`Comment: ${v.body}`))
            })
    }
    
    getAllCommentBodies();
}

{
    function getSortedPostTitles() {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => {
                if (!res.ok) return new Error('response Error')
                return res.json()
            })
            .then((data) => {
                // console.log(data)
                const title = data.map((v) => v.title);
                const sortTitle = title.sort((a,b) => a.localeCompare(b));
                return console.log(sortTitle)
            })
    }
    
    getSortedPostTitles();
}

{
    function getAllUserAddresses() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((res) => {
                if (!res.ok) return new Error('response Error')
                return res.json()
            })
            .then((data) => {
                // console.log(data)

                // data.forEach((user) => {
                //     const { name, address } = user;
                //     const { suite, street, city, zipcode } = address;
                //     console.log(`Address of ${name}: ${suite} ${street}, ${city} ${zipcode}`);
                // });

                return data.map((v) => console.log(`Address of ${v.name}: ${v.address.suite} ${v.address.street} ${v.address.city} ${v.address.zipcode}`))
            })
    }
    
    getAllUserAddresses();
}

{
    function getUserPostTitles(userId) {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((res) => {
                if (!res.ok) return new Error('response Error')
                return res.json()
            })
            .then((data) => {
                // console.log(data)
                data.filter(v => {
                    if(v.userId === userId)
                        return console.log(`Post title : ${v.title}`)
                })
            })
    }
    
    getUserPostTitles(1);
}