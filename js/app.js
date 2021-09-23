
'use strict';

let hoursopen = ["6am,", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function Location (name, min, max, avg,) {

        this.name = name;
        this.minperhour = min;
        this.maxperhour = max;
        this.avgcookiesales = avg;
        this.salesperhour = [];
        this.avgcustperhour= 0;
        this.dailysales = 0;
        this.grandtotal = 0;
        Location.all.push(this);
};

    Location.all = [];
     
Location.prototype.findavgcustperhour = function () {
    let min = this.minperhour;
    let max = this.maxperhour;
    this.avgcustperhour = Math.floor(Math.random() * (max - min +1) + min);
    return Math.ceil(this.avgcustperhour);
}
Location.prototype.findhourlysales = function () {
for (let i=0; i < hoursopen.length; i++) {
    this.findavgcustperhour();
    this.salesperhour[i] = Math.ceil(this.avgcustperhour*this.avgcookiesales);
    this.dailysales= this.dailysales + this.salesperhour[i];
}
};

let locationFormEl = document.getElementById('addnewstore');

function handlenewlocation (formSubmission) {
    formSubmission.preventDefault();
    
    let name = formSubmission.target.name.value;
    let min = formSubmission.target.minperhour.value;
    let max= formSubmission.target.maxperhour.value;
    let avg = formSubmission.target.avgcookiesales.value;

   let location = new Location(name, min, max, avg);
   console.log(location)

    location.findhourlysales ();
    location.findavgcustperhour ();
    location.render ();
}


 locationFormEl.addEventListener('submit', handlenewlocation);



 function renderheader () {
    let tableEl = document.getElementById('sales-table');
    let rowEl = document.createElement('tr');

    let dataEl = document.createElement('td');
    dataEl.innerText = "Store Locations";
    rowEl.appendChild(dataEl);

    for (let i = 0; i < hoursopen.length; i ++) {
    dataEl = document.createElement('td');
    dataEl.innerText = hoursopen[i];
    rowEl.appendChild(dataEl);
}

dataEl = document.createElement('td');
    dataEl.innerText = 'Daily Totals';
    rowEl.appendChild(dataEl);

    tableEl.appendChild(rowEl);
}


renderheader ();


    Location.prototype.render = function () {
        let tableEl = document.getElementById('sales-table');
        let rowEl = document.createElement('tr');

        let dataEl = document.createElement('td');
        dataEl.innerText = this.name;
        rowEl.appendChild(dataEl);

        for (let sale = 0; sale < this.salesperhour.length; sale++) {
            let dataEl = document.createElement('td');
            dataEl.innerText = this.salesperhour[sale];
            rowEl.appendChild(dataEl);
          }

          dataEl = document.createElement('td');
          dataEl.innerText = this.dailysales;
          rowEl.appendChild(dataEl);
        
          tableEl.appendChild(rowEl);
        };

let Seattle = new Location ('seattle', 23, 65, 6.3);
Seattle.findhourlysales ();
Seattle.findavgcustperhour ();
Seattle.render ();
console.log(Seattle);

let Tokyo = new Location ('tokyo', 3, 24, 1.2);
Tokyo.findhourlysales ();
Tokyo.findavgcustperhour ();
Tokyo.render ();
console.log(Tokyo);

let Dubai = new Location ('dubai', 11, 38, 3.7);
Dubai.findhourlysales ();
Dubai.findavgcustperhour ();
Dubai.render ();
console.log(Dubai);

let Paris = new Location ('paris', 20, 38, 2.3);
Paris.findhourlysales ();
Paris.findavgcustperhour ();
Paris.render ();
console.log(Paris);

let Lima = new Location ('lima', 2, 16, 4.6);
Lima.findhourlysales ();
Lima.findavgcustperhour ();
Lima.render ();
console.log(Lima)

console.log(Location.all);

function renderfooter () {
    let tableEl = document.getElementById('sales-table');
    let rowEl = document.createElement('tfoot');

    let dataEl = document.createElement('td');
    dataEl.innerText = "Totals";
    rowEl.appendChild(dataEl);

    let grandtotal = 0;
    for (let hour = 0; hour < hoursopen.length; hour ++) {
        let dataEl = document.createElement('td');
    let sum = 0;
    for (let store = 0; store < Location.all.length; store++) {
        sum = sum + Location.all[store].salesperhour[hour];
        grandtotal = grandtotal + Location.all[store].salesperhour[hour];
      }
      dataEl.innerText = sum;
      rowEl.appendChild(dataEl);
    }
   
    dataEl = document.createElement('td');
    dataEl.innerText = grandtotal;
    rowEl.appendChild(dataEl);
        tableEl.appendChild(rowEl);
}


renderfooter ();