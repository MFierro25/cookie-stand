
'use strict';

let hoursopen = ["6am,", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function Location (name, min, max, avg,) {

        this.name = name;
        this.minperhour = min;
        this.maxperhour = max;
        this.avgcookieperhour = avg;
        this.avgcustperhour= 0;
        this.salesperhour = [];
        this.grandtotal = 0;
};

        Location.prototype.findavgcustperhour = function () {
            let min = this.minperhour;
            let max = this.maxperhour;
            this.avgcustperhour = Math.floor(Math.random() * (max - min +1) + min);
            return Math.ceil(this.avgcustperhour);
}
        Location.prototype.findhourlysales = function () {
        for (let i=0; i < hoursopen.length; i++) {
            this.findavgcustperhour();
            this.salesperhour[i] = Math.ceil(this.avgcustperhour*this.avgcookieperhour);
            this.total= this.total + this.salesperhour[i];
        }
        };


    Location.prototype.render = function () {
        const tableEl = document.getElementById('sales-table');
        let row1 = document.createElement('tr');
        const row2 = document.createElement('tr');
        const row3 = document.createElement('tr');


        let th1 = document.createElement('th');
        th1.innerText = hoursopen;

        let th2 = document.createElement('td');
        th2.textContent = this.name;

        let th3 = document.createElement('td');
        th3.textContent = this.salesperhour;

        row1.appendChild(th1);
        row2.appendChild(th2);
        row3.appendChild(th3);

        tableEl.appendChild(row1);
        tableEl.appendChild(row2);
        tableEl.appendChild(row3);   
    };

let Seattle = new Location ('seattle', 23, 65, 6.3);
Seattle.findavgcustperhour ();
Seattle.findhourlysales ();
Seattle.render ();
console.log(Seattle);

let Tokyo = new Location ('tokyo', 3, 24, 1.2);
Tokyo.findavgcustperhour ();
Tokyo.findhourlysales ();
Tokyo.render ();
console.log(Tokyo);

let Dubai = new Location ('dubai', 11, 38, 3.7);
Dubai.findavgcustperhour ();
Dubai.findhourlysales ();
Dubai.render ();
console.log(Dubai);

let Paris = new Location ('paris', 20, 38, 2.3);
Paris.findavgcustperhour ();
Paris.findhourlysales ();
Paris.render ();
console.log(Paris);

let Lima = new Location ('lima', 2, 16, 4.6);
Lima.findavgcustperhour ();
Lima.findhourlysales ();
Lima.render ();
console.log(Lima);