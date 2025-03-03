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
dashboardID.appendChild(metricCard("revenuewCard", "Revenue", "$1000"));                       //appended the new metric card to the dashboard 
