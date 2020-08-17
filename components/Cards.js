// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get("https://lambda-times-api.herokuapp.com/articles")
    .then(response => {
        response.data.articles.bootstrap.forEach((e) => {
            a = document.createElement('div');
            hl4 = document.createElement('div');
            auth = document.createElement('div');
            imgc = document.createElement('div')
            im = document.createElement('img')
            sp = document.createElement('span')
            a.setAttribute('class', 'card');
            hl4.setAttribute('class', 'headline');
            auth.setAttribute('class', 'author');
            imgc.setAttribute('class', 'img-container');
            im.src = e.authorPhoto;
            sp.textContent = "By " + e.authorName;
            a.appendChild(hl4).textContent = e.headline;
            a.appendChild(auth);
            auth.appendChild(imgc);
            imgc.appendChild(im);
            auth.appendChild(sp);
            document.querySelector(".cards-container").append(a);
            a.addEventListener('click', () => {
                console.log(hl4.textContent);
            });
            return a;
        });
        response.data.articles.javascript.forEach((e) => {
            a = document.createElement('div');
            hl3 = document.createElement('div');
            auth = document.createElement('div');
            imgc = document.createElement('div')
            im = document.createElement('img')
            sp = document.createElement('span')
            a.setAttribute('class', 'card');
            hl3.setAttribute('class', 'headline');
            auth.setAttribute('class', 'author');
            imgc.setAttribute('class', 'img-container');
            im.src = e.authorPhoto;
            sp.textContent = "By " + e.authorName;
            a.appendChild(hl3).textContent = e.headline;
            a.appendChild(auth);
            auth.appendChild(imgc);
            imgc.appendChild(im);
            auth.appendChild(sp);
            document.querySelector(".cards-container").append(a);
            a.addEventListener('click', () => {
                console.log(hl3.textContent);
            });
            return a;
        });
        response.data.articles.technology.forEach((e) => {
            a = document.createElement('div');
            hl2 = document.createElement('div');
            auth = document.createElement('div');
            imgc = document.createElement('div')
            im = document.createElement('img')
            sp = document.createElement('span')
            a.setAttribute('class', 'card');
            hl2.setAttribute('class', 'headline');
            auth.setAttribute('class', 'author');
            imgc.setAttribute('class', 'img-container');
            im.src = e.authorPhoto;
            sp.textContent = "By " + e.authorName;
            a.appendChild(hl2).textContent = e.headline;
            a.appendChild(auth);
            auth.appendChild(imgc);
            imgc.appendChild(im);
            auth.appendChild(sp);
            document.querySelector(".cards-container").append(a);
            a.addEventListener('click', () => {
                console.log(hl2.textContent);
            });
            return a;
        });
        response.data.articles.node.forEach((e) => {
            a = document.createElement('div');
            hl1 = document.createElement('div');
            auth = document.createElement('div');
            imgc = document.createElement('div')
            im = document.createElement('img')
            sp = document.createElement('span')
            a.setAttribute('class', 'card');
            hl1.setAttribute('class', 'headline');
            auth.setAttribute('class', 'author');
            imgc.setAttribute('class', 'img-container');
            im.src = e.authorPhoto;
            sp.textContent = "By " + e.authorName;
            a.appendChild(hl1).textContent = e.headline;
            a.appendChild(auth);
            auth.appendChild(imgc);
            imgc.appendChild(im);
            auth.appendChild(sp);
            document.querySelector(".cards-container").append(a);
            a.addEventListener('click', () => {
                console.log(hl1.textContent);
            });
            return a;
        });
    })
    .catch(error => {
        v = document.createElement('p').textContent = error;
        document.querySelector(".errors-container").appendChild(v);
    })