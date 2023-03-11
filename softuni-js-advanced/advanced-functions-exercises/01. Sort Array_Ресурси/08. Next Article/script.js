function getArticleGenerator(articles) {
    let content = document.getElementById("content");
   
    function any() {
        if(articles.length > 0) {
            let newArticle = document.createElement("article");
            newArticle.textContent = articles.shift();

            content.appendChild(newArticle);
        }
    }

    return any
}
