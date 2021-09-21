
"use strict";

hoursopen = ["6am,", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],

    let store1={
        city: "Seattle",
        storemin: 23,
        storemax: 65,
        avgcookie: 6.3,
        salesperhour: [],
        sales: 0,
        cookiesales: function () {
            for (var i=0; i <this.hoursopen.length; i++) {
                this.salesperhour[i] = Math.floor(this.avgcookie*randomnumber);
                this.sales = this.sales + this.salesperhour[i];
                console.log(this.sales);
            }this.salesperhour.push(this.sales);
        },
    };

    store1.cookiesales();

    var ulEl = document.getElementById('saleslist1');
    for (var i = 0; i < hoursopen.length; i++) {
        var liEl = document.createElement('li');
        liEl.textcontent=hoursopen[i] + '...' + store1.sales[i+1];
        ulEl.appendChild(liEl);
    }

    let store2={
        city: "Tokyo",
        storemin: 3,
        storemax: 24,
        avgcookie: 1.2,
        salesperhour: [],
        sales: 0,
        cookiesales: function () {
            for (var i=0; i <this.hoursopen.length; i++) {
                this.salesperhour[i] = Math.floor(this.avgcookie*randomnumber);
                this.sales = this.sales + this.salesperhour[i];
                console.log(this.sales);
            }this.salesperhour.push(this.sales);
        },
    };

    store2.cookiesales();

    var ulEl = document.getElementById('saleslist1');
    for (var i = 0; i < hoursopen.length; i++) {
        var liEl = document.createElement('li');
        liEl.textcontent=hoursopen[i] + '...' + store2.sales[i+1];
        ulEl.appendChild(liEl);
    }

    let store3={
        city: "Dubai",
        storemin: 11,
        storemax: 38,
        avgcookie: 3.7,
        salesperhour: [],
        sales: 0,
        cookiesales: function () {
            for (var i=0; i <this.hoursopen.length; i++) {
                this.salesperhour[i] = Math.floor(this.avgcookie*randomnumber);
                this.sales = this.sales + this.salesperhour[i];
                console.log(this.sales);
            }this.salesperhour.push(this.sales);
        },
    };

    store3.cookiesales();

    var ulEl = document.getElementById('saleslist1');
    for (var i = 0; i < hoursopen.length; i++) {
        var liEl = document.createElement('li');
        liEl.textcontent=hoursopen[i] + '...' + store3.sales[i+1];
        ulEl.appendChild(liEl);
    }

    let store4={
        city: "Paris",
        storemin: 20,
        storemax: 38,
        avgcookie: 2.3,
        salesperhour: [],
        sales: 0,
        cookiesales: function () {
            for (var i=0; i <this.hoursopen.length; i++) {
                this.salesperhour[i] = Math.floor(this.avgcookie*randomnumber);
                this.sales = this.sales + this.salesperhour[i];
                console.log(this.sales);
            }this.salesperhour.push(this.sales);
        },
    };

    store4.cookiesales();

    var ulEl = document.getElementById('saleslist1');
    for (var i = 0; i < hoursopen.length; i++) {
        var liEl = document.createElement('li');
        liEl.textcontent=hoursopen[i] + '...' + store4.sales[i+1];
        ulEl.appendChild(liEl);
    }

    let store5={
        city: "Lima",
        storemin: 23,
        storemax: 65,
        avgcookie: 6.3,
        salesperhour: [],
        sales: 0,
        cookiesales: function () {
            for (var i=0; i <this.hoursopen.length; i++) {
                this.salesperhour[i] = Math.floor(this.avgcookie*randomnumber);
                this.sales = this.sales + this.salesperhour[i];
                console.log(this.sales);
            }this.salesperhour.push(this.sales);
        },
    };

    store5.cookiesales();

    var ulEl = document.getElementById('saleslist1');
    for (var i = 0; i < hoursopen.length; i++) {
        var liEl = document.createElement('li');
        liEl.textcontent=hoursopen[i] + '...' + store5.sales[i+1];
        ulEl.appendChild(liEl);
    }