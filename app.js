const searchBtn = document.querySelector(".searchBtn");
const searchBox = document.querySelector(".searchBox");
const app_id = "10af7a74";
const app_key = "4f7e4c380260062d3b8202a92ed30f5c";

searchBtn.addEventListener("click", (e) => {
  const baseUrl = `https://api.edamam.com/search?q=${searchBox.value}&app_id=${app_id}&app_key=${app_key}`;

  e.preventDefault();
  fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      generateHTML(data.hits);
      searchBox.value = "";
    })
    .catch((err) => {
      console.log(err);
    });
});
function generateHTML(results) {
  showINHTML = "";
  results.map((result) => {
    showINHTML += `
           <div class="card">
            <img src=${result.recipe.image} alt="" />
            <div class="content">
              <div class="name">${result.recipe.label}</div>
              <div class="Type">Meal Type : ${result.recipe.mealType}</div>
     <div class="calories">Total Calories : ${result.recipe.calories.toFixed(
       2
     )}</div>
     


                  <a href=${result.recipe.url} target="parent">Get Recipe</a>
            </div>
    
          </div>
        `;

    document.querySelector(".cards").innerHTML = showINHTML;
  });
}
