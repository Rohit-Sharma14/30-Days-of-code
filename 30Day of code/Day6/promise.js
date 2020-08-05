const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post Two' }
];

function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 3000)
}

function createPost(post,) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            posts.push(post);
            const err = true;
            if (!err) {
                res();
            } else {
                rej('err : something went wrong')
            }
        })

    }, 2000)
}

//createPost({ title: 'Post Three', body: 'This is post three' }).then(getPost).catch(err => console.log(err));