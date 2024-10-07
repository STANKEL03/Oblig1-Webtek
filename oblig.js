let limit = 9;
let startIndex = 0;
let posts = [];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
        posts = json;
        renderPosts();
    });


function renderPosts() {
    const container = document.getElementById("postSec");
    for (let i = startIndex; i < startIndex + limit && i < posts.length; i++) {
        const post = posts[i];
        const article = document.createElement("article");

        const title = document.createElement("h1");
        title.textContent = post.title;

        const body = document.createElement("p");
        body.textContent = post.body;

        article.appendChild(title);
        article.appendChild(body);
        container.appendChild(article);
    }

    startIndex += limit;
}


window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        renderPosts();
    }
});     
