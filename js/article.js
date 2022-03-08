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
        let articleTextContent = articleArray[articleId].content;
        let date = articleArray[articleId].publishedAt;
        date = new Date
        date = date.toLocaleDateString('fr-FR',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        articleTextHTML.innerHTML =`
            <h2>${articleArray[articleId].title}</h2>
            <small>Ecrit par <span>${articleArray[articleId].author}</span></small><br>
            <small>Publié le <time datetime="${articleArray[articleId].publishedAt}">${date}</time></small> 
            <hr>
            
            <div class="shareon share">
                <a href= "https://www.facebook.com/sharer/sharer.php?u=${articleArray[articleId].url}" class="facebook"></a>
                <a href= "https://www.linkedin.com/sharing/share-offsite/?url=${articleArray[articleId].url}" class="linkedin"></a>
                <a class="twitter"></a>
            </div>
        
            <section> 
                <p>${articleArray[articleId].description}</p>
                <img src="${articleArray[articleId].urlToImage}" alt="${articleArray[articleId].urlToImage}">  
                <div>
                    <p>${articleTextContent.replace(/\[(.+?)\]/g, `<a href="${articleArray[articleId].url}">Lire la suite sur ${articleArray[articleId].source.name}</a>`)}</p>
                </div>
            </section>
        `
                    
    }
    })
    