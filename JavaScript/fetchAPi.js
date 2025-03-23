const newsContainer = document.querySelector(".newsTitle");

const fetchData = async () => {
  try {
    let response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e21ff4aa2b014af29e842cdaa958ed97"
    );
    let data = await response.json();
    
    data.articles.forEach((article) => {
        const titles = document.createElement('p');
        titles.innerHTML = `<b>Title:</b> ${article.title}`
        newsContainer.appendChild(titles);
        console.log("Title:", article.title);
        
    });
  } catch (error) {
    const errorMsg = document.createElement('p');      
    errorMsg.innerHTML = `Error fetching data: ${error}`
    errorMsg.style.color = "red";
    newsContainer.appendChild(errorMsg);
    console.error("Error fetching data:",error);
  }
};
fetchData();
