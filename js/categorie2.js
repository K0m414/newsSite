'use strict';

document.addEventListener('DOMContentLoaded', (event) => {
    //VARIABLE
    const API_URL = 'https://newsapi.org/v2/top-headlines?country=fr&category=sport&';
    const API_KEY = 'd50129b078c340e297f2cfdb19693ea9';
    const articleText = document.querySelector('.article-wrapper');

            fetch(`${API_URL}apiKey=${API_KEY}`)
                .then(response => response.json())
                .then(json => {
                    console.log(json.articles)
                    let newsData = json.articles;
                    newsData.forEach(article => {
                        articlesText(article)
                    });
                    
                })
                .catch(err => {
                    console.log(err);
                })
                function articlesText(data){
                    articleText.innerHTML +=`
                    <article class="article">
                        <h2><a href="pages/article.html">${data.title}</a></h2>
                        <section>
                            <img src="${data.urlToImage}" alt="${data.title}"/>
                            <div>
                                <!--<h3>${data.title}</h3>-->
                                <p>${data.description}</p>
                                <small>Ecrit par <span>${data.author}</span> le <time datetime=${data.publishedAt}>${data.publishedAt}</time></small>
                            </div>
                        </section>    
                    </article>
              
                    `
                }   
    })
    

