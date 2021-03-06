'use strict';

document.addEventListener('DOMContentLoaded', (event) => {
    //VARIABLE
    const API_URL = 'https://newsapi.org/v2/top-headlines?country=fr&category=entertainment&';
    const API_KEY = 'd50129b078c340e297f2cfdb19693ea9';
    const articleText = document.querySelector('.article-wrapper');
    let articleData;

    fetch(`${API_URL}apiKey=${API_KEY}`)
        .then(response => response.json())
        .then(json => {
            dataInLocalStorage(json.articles);
            articlesText(json.articles);     
        })
        .catch(err => {
            console.log(err);
        })     
    // function
    // stock les données dans le local storage
    function dataInLocalStorage(data){
        // si le local storage est vide
        if(localStorage.getItem !== null){
            // crée un item avec un tableau vide
            localStorage.setItem('newsData','[]')  
        } 
        articleData = JSON.parse(localStorage.getItem('newsData'));
        data.forEach(article => {
            // ajoute chaque article a l'intérieur du tableau articleData
            articleData.push(article)
        });
        // fait entrer le tableau d'article dans le local storage
        localStorage.setItem('newsData',JSON.stringify(articleData))
    }
    
    // écrit le texte avec les données récupérer dans l'API
    function articlesText(dataArray){ 
        // boucle for pour récupérer l'index
        for (let i = 0; i < dataArray.length; i++) {
            let date = dataArray[i].publishedAt;
            date = new Date
            date = date.toLocaleDateString('fr-FR',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
            articleText.innerHTML +=`
                <article class="article">
                    <h2><a href="article.html?id=${i}">${dataArray[i].title}</a></h2>
                    <section>
                        <img src="${dataArray[i].urlToImage}" alt="${dataArray[i].title}"/>
                        <div>
                            <!--<h3>${dataArray[i].title}</h3>-->
                            <p>${dataArray[i].description}</p>
                            <small>Ecrit par <span>${dataArray[i].author}</span> le <time datetime=${dataArray[i].publishedAt}>${date}</time></small>
                        </div>
                    </section>    
                </article>
            `
        };
    }     
})
    

