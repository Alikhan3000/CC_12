// Task 1: Business Dashboard – DOM Element Selection and Creation

const dashboardID = document.getElementById("dashboard");       //selects a dashboard container by id 
const dashboardQuery = document.querySelector("#dashboard");    //selects a single dashboard container by CSS selector 

function metricCard(id, title, value){
    const revenueMetric = document.createElement("div");       //a new <div> elemetent that represents the metric card
    revenueMetric.setAttribute("class", "metric-card");        
    revenueMetric.setAttribute("id", id);
    revenueMetric.innerHTML = `<h3>${title}</h3><p>${value}</p>`;    //assigns the title and values into the card
    return revenueMetric;
}
dashboardID.appendChild(metricCard("revenueCard", "Revenue", "$1000"));                       //appended the new metric card to the dashboard 


//dashboardID.appendChild(metricCard("revenueCard", "Revenue", "$1000"));   //created additional metric cards: revenue & profit
dashboardID.appendChild(metricCard("expensesCard", "Expenses", "$900"));
dashboardID.appendChild(metricCard("profitCard", "Profit", "$100"));


//Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays

const selectAll = document.querySelectorAll(".metric-card");    //used document.querySelectorAll to select all elements with the given class

const selectAllArray = [...selectAll];                  //converted the result into an array using spread operator
    selectAllArray.forEach(revenueMetric => {
        const title = revenueMetric.querySelector("h3");    //updated each card's inner text and modified the background color
        title.innerText += " (Updated)";
        revenueMetric.style.backgroundColor = "red";

    });

//Task 3: Dynamic Inventory Management – Adding and Removing Items

const inventory = document.getElementById("inventoryList");     //created a function that creates a new <li> element representing a product.

function prodList(product){
    const createList = document.createElement("li");
    createList.setAttribute("class", "product-item");
    createList.innerText = product;

    createList.addEventListener("click", () => {
        removeItem(createList)});

    inventory.appendChild(createList);

    function removeItem(item){
        inventory.removeChild(item);
    }  

}

//added product buttons for 3 products
document.getElementById("addLaptop").addEventListener("click", () => {
    prodList("Laptop");
});


document.getElementById("addPhone").addEventListener("click", () => {
    prodList("Smartphone");
});

document.getElementById("Product_Button").addEventListener("click", () => {
    prodList("Calculator Max Pro");
});
    

