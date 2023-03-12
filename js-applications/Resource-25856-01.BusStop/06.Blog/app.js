function attachEvents() {
    document.getElementById("btnLoadPosts").addEventListener('click', loadPosts)
    document.getElementById("btnViewPost").addEventListener('click', viewComments);

    async function loadPosts() {
        const posts = document.getElementById("posts");
       

        const p = await fetch('http://localhost:3030/jsonstore/blog/posts');
        const postsArray = await p.json();

        for (const p of  Object.values(postsArray)) {
            const element = document.createElement('option');
            element.value = p._id;
            element.textContent = p.title;
            posts.appendChild(element);
        }
    }

    async function viewComments() {
        const postBody = document.getElementById("post-body");
        const postComments = document.getElementById("post-comments");
    
        const element = document.createElement("li");

        const array = Array(document.querySelectorAll("#posts option")[0]);

       const post = array.find(e => e.checked == true);

       const c = await fetch(`http://localhost:3030/jsonstore/blog/comments/${post.value}`);
       const comments = await c.json();

       for (const comment of comments) {
        const li = document.createElement('li');
        li.textContent = comment.text;
        postComments.appendChild(li);
       }

    }
}

attachEvents();