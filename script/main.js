

const foodFactory = (item) => {
    return `
    <div class="eachFood">
    <h1>${item.name}</h1>
    <p>${item.ethnicity}</p>
    <p>${item.category}</p>
    </div>
    `
}

const addToDom = (item) => {
    let container = document.querySelector(".foodList");
    container.innerHTML += item;
}

fetch("http://localhost:8088/food")
.then(foods => foods.json())
.then(parsedFoods => {
    parsedFoods.forEach(food => {
        const foodAsHTML = foodFactory(food)
        addToDom(foodAsHTML)
    });
})