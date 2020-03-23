// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const authorCard = (cardInfo) =>{

    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const authorImg = document.createElement("img");
    const authorName = document.createElement("span");

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    authorImg.classList.add("img");
    authorName.classList.add("span");

    headline.textContent = cardInfo.headline;
    authorImg.src = cardInfo.authorPhoto;
    authorName.textContent = cardInfo.authorName;

    card.appendChild(headline);
    card.appendChild(author);

    author.appendChild(imgContainer);

    imgContainer.appendChild(authorImg);

    author.appendChild(authorName);

    return card;

}

const info = axios.get("https://lambda-times-backend.herokuapp.com/articles");
info.then((response) => {

    console.log(response.data.articles);
    const articles = Object.values(response.data.articles);

    articles.forEach((item)=>{
    
        item.forEach((authItem)=>{
            let newCard = authorCard(authItem);
            cardAdd.appendChild(newCard);    
        }); 
    })})

    const cardAdd = document.querySelector(".cards-container");