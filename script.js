const menu = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://media.istockphoto.com/id/182869399/photo/chicken-vegetables-and-arugula-salad.jpg?s=2048x2048&w=is&k=20&c=DgzfZzp7b6ibiAu5AQfCF_4lLN4HXaam8-OI8z1IMH8=",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://media.istockphoto.com/id/1214416414/photo/barbecued-salmon-fried-potatoes-and-vegetables-on-wooden-background.jpg?s=2048x2048&w=is&k=20&c=N9BmulNLMp2iARi8xMtIwJc4NDS6JXYvPhEfO-w9yug=",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.7
    },
    {
        "name": "Steak",
        "imageSrc": "https://media.istockphoto.com/id/476524744/photo/bowl-of-lamb-curry.jpg?s=2048x2048&w=is&k=20&c=8HVKrTCaoNCfAdvJre96YM8zkRMKYS-YDjz17xjgVF8=",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://media.istockphoto.com/id/175028181/photo/fillet-of-salmon-with-vegetable.jpg?s=2048x2048&w=is&k=20&c=ynco16RV3dVAUHR6qAUDuXTQY7bPL0QTOigDSK0np5I=",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://media.istockphoto.com/id/1325150602/photo/waffles-with-fried-chicken.jpg?s=2048x2048&w=is&k=20&c=sZIE7MloFECSXzXsxhSt4iAqqKgfrcEXiXypp3WG6Kc=",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://media.istockphoto.com/id/1343569460/photo/a-white-bowl-of-salad-caesar-photography.jpg?s=2048x2048&w=is&k=20&c=-ATbHjiLN9PaNVrXoOQH11adXB1kZZ9MRZ7_aj_RFw4=",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://media.istockphoto.com/id/452720669/photo/chicken-fingers.jpg?s=2048x2048&w=is&k=20&c=uxukihLGvtrt4URtUQHaN1Wo2awCB-A20DXiwLe8v1M=",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://media.istockphoto.com/id/1496031397/photo/close-up-of-cutting-mushrooms.jpg?s=2048x2048&w=is&k=20&c=UJarKoLtQrpb8dZTC9oEqTD2J1v14pDatrvjeVGxlYo=",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Burger",
        "imageSrc": "https://media.istockphoto.com/id/998309062/photo/burger-with-beef-and-cheese.jpg?s=2048x2048&w=is&k=20&c=WiewZ2pC0tP1-NfjpxTkWYXVCBotqrIzWXc2HkAewkk=",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://media.istockphoto.com/id/1207328341/photo/indian-cuisine-tofu-butter-masala-panner-with-roti-closeup-in-a-pan-horizontal-top-view.jpg?s=2048x2048&w=is&k=20&c=ZMP9usctRT7PJdHChSuiKAnjP5jx3TlHX5YJ6rtIonc=",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://media.istockphoto.com/id/1483876742/photo/t-bone-beef-steak-cooked-to-perfection-over-a-flame-grill-and-topped-with-a-dollop-of-butter.webp?s=2048x2048&w=is&k=20&c=HnhzForSRmV3HK5dDDMsx-vRzY3P3_CC1gzBcycRiiE=",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    
]

const searchInput = document.getElementById("search");
const menuCatalog = document.getElementById("menu");
const aboveButton = document.getElementById("ratingAbove");
const belowButton = document.getElementById("ratingBelow");
const allRecipeBtn = document.getElementById("all-recipe");
const vegBtn = document.getElementById("veg");
const nonvegBtn = document.getElementById("non-veg")
//sorting
allRecipeBtn.addEventListener("click", () =>{
    displayRecipes(menu);
});
vegBtn.addEventListener("click", () => {
    const vegRecipes = menu.filter(recipe => recipe.type === "veg");
    displayRecipes(vegRecipes);
});

nonvegBtn.addEventListener("click", () => {
    const nonVegRecipes = menu.filter(recipe => recipe.type === "non-veg");
    displayRecipes(nonVegRecipes);
});

//ratings
aboveButton.addEventListener("click", () => {
    const above4Rating = menu.filter(recipe => recipe.rating >= 4);
    displayRecipes(above4Rating);
});

belowButton.addEventListener("click", () => {
    const below4Rating = menu.filter(recipe => recipe.rating < 4);
    displayRecipes(below4Rating);
});


// search function
searchInput.addEventListener("input", filterRecipes);
function filterRecipes() {
    const searchText = searchInput.value.toLowerCase();
    const filteredRecipes = menu.filter(recipe => recipe.name.toLowerCase().includes(searchText));
    displayRecipes(filteredRecipes);
}

function displayRecipes(recipes) {
    const menuCatalog = document.getElementById("menu"); 

    menuCatalog.innerHTML = ""; 

    recipes.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
            <img src="${recipe.imageSrc}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>Type: ${recipe.type}</p>
            <p>Time: ${recipe.time}</p>
            <p>Rating: ${recipe.rating}</p>
           
        `;
        menuCatalog.appendChild(card); 
    });
}
displayRecipes(menu);

