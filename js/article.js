'use strict';

document.addEventListener('DOMContentLoaded', (event) => {
    //VARIABLE
    const urlId = window.location.search; 
    const urlSearchParams = new URLSearchParams(urlId)
    const articleId = urlSearchParams.get('id') 
    const articleTextHTML = document.querySelector('article');
    let articleArray= JSON.parse(localStorage.getItem(localStorage.key(0)));
    let articleText=articleArray[articleId]

    if(articleText !==''){
        articleTextHTML.innerHTML =`
            <h2>${articleArray[articleId].title}</h2>
            <small>Ecrit par <span>${articleArray[articleId].author}</span></small><br>
            <small>Publié le <time datetime="${articleArray[articleId].publishedAt}">${articleArray[articleId].publishedAt}</time>, temps de lecture estimé à <span>2 </span> min.</small> 
            <hr>
            <ul class="share">
                <li>Partager : </li>  
                <li><button  type="button"><i class="fa fa-facebook-square"></i></button></li> 
                <li><button type="button"><i class="fa fa-twitter-square"></i></button></li> 
                <li><button  type="button"><i class="fa fa-linkedin-square"></i></button></li>
            </ul>
            <section> 
                <p>${articleArray[articleId].description}</p>
                <img src="${articleArray[articleId].urlToImage}" alt="${articleArray[articleId].urlToImage}">  
                <div>
                    <p>${articleArray[articleId].content}</p>
                </div>
            </section>
        `
                    
    }
    })
    