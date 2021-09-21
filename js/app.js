
'use strict';

let hoursopen = ["6am,", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

    let seattle = {
        name: 'seattle',
        minperhour: 23,
        maxperhour: 65,
        avgcookieperhour: 6.3,
        salesperhour: [],
        grandtotal: 0,
        hourlycustomers: function () {
            for (let hour = 0; hour < hoursopen.length; hour++) {
                let randomnumber = Math.floor(Math.random() * (this.maxperhour - this.minperhour + 1) + this.minperhour);
               this.salesperhour.push(Math.round(randomnumber * this.avgcookieperhour));
                this.grandtotal = this.grandtotal + randomnumber;
                console.log(this.grandtotal)
            }
        },
    };

            seattle.hourlycustomers()

    function generatelineitems(store) {

        let parentEl = document.querySelector(`#${store.name}`);

                for (let total = 0; total < store.salesperhour.length; total++) {
                let newItem = document.createElement('li');
                newItem.innerText = store.salesperhour[total];
                parentEl.appendChild(newItem);
            }
            let lastitem = document.createElement('li');
            lastitem.innerText = store.grandtotal;
            parentEl.appendChild(lastitem);
    }
console.log(seattle);
seattle.hourlycustomers();
generatelineitems(seattle);

    let tokyo = {
        name: 'tokyo',
        minperhour: 3,
        maxperhour: 24,
        avgcookieperhour: 1.2,
        salesperhour: [],
        grandtotal: 0,
        hourlycustomers: function () {
            for (let hour = 0; hour < hoursopen.length; hour++) {
                let randomnumber = Math.floor(Math.random() * (this.maxperhour - this.minperhour + 1) + this.minperhour);
               this.salesperhour.push(Math.round(randomnumber * this.avgcookieperhour));
                this.grandtotal = this.grandtotal + randomnumber;
                console.log(this.grandtotal)
            }
        },
    };

            tokyo.hourlycustomers()

    function generatelineitems(store) {

        let parentEl = document.querySelector(`#${store.name}`);

                for (let total = 0; total < store.salesperhour.length; total++) {
                let newItem = document.createElement('li');
                newItem.innerText = store.salesperhour[total];
                parentEl.appendChild(newItem);
            }
            let lastitem = document.createElement('li');
            lastitem.innerText = store.grandtotal;
            parentEl.appendChild(lastitem);
    }
console.log(tokyo);
tokyo.hourlycustomers();
generatelineitems(tokyo);

let dubai = {
    name: 'dubai',
    minperhour: 11,
    maxperhour: 38,
    avgcookieperhour: 3.7,
    salesperhour: [],
    grandtotal: 0,
    hourlycustomers: function () {
        for (let hour = 0; hour < hoursopen.length; hour++) {
            let randomnumber = Math.floor(Math.random() * (this.maxperhour - this.minperhour + 1) + this.minperhour);
           this.salesperhour.push(Math.round(randomnumber * this.avgcookieperhour));
            this.grandtotal = this.grandtotal + randomnumber;
            console.log(this.grandtotal)
        }
    },
};

        dubai.hourlycustomers()

function generatelineitems(store) {

    let parentEl = document.querySelector(`#${store.name}`);

            for (let total = 0; total < store.salesperhour.length; total++) {
            let newItem = document.createElement('li');
            newItem.innerText = store.salesperhour[total];
            parentEl.appendChild(newItem);
        }
        let lastitem = document.createElement('li');
        lastitem.innerText = store.grandtotal;
        parentEl.appendChild(lastitem);
}
console.log(dubai);
dubai.hourlycustomers();
generatelineitems(dubai);

let paris = {
    name: 'paris',
    minperhour: 20,
    maxperhour: 38,
    avgcookieperhour: 2.3,
    salesperhour: [],
    grandtotal: 0,
    hourlycustomers: function () {
        for (let hour = 0; hour < hoursopen.length; hour++) {
            let randomnumber = Math.floor(Math.random() * (this.maxperhour - this.minperhour + 1) + this.minperhour);
           this.salesperhour.push(Math.round(randomnumber * this.avgcookieperhour));
            this.grandtotal = this.grandtotal + randomnumber;
            console.log(this.grandtotal)
        }
    },
};

        paris.hourlycustomers()

function generatelineitems(store) {

    let parentEl = document.querySelector(`#${store.name}`);

            for (let total = 0; total < store.salesperhour.length; total++) {
            let newItem = document.createElement('li');
            newItem.innerText = store.salesperhour[total];
            parentEl.appendChild(newItem);
        }
        let lastitem = document.createElement('li');
        lastitem.innerText = store.grandtotal;
        parentEl.appendChild(lastitem);
}
console.log(paris);
paris.hourlycustomers();
generatelineitems(paris);

let lima = {
    name: 'lima',
    minperhour: 2,
    maxperhour: 16,
    avgcookieperhour: 4.6,
    salesperhour: [],
    grandtotal: 0,
    hourlycustomers: function () {
        for (let hour = 0; hour < hoursopen.length; hour++) {
            let randomnumber = Math.floor(Math.random() * (this.maxperhour - this.minperhour + 1) + this.minperhour);
           this.salesperhour.push(Math.round(randomnumber * this.avgcookieperhour));
            this.grandtotal = this.grandtotal + randomnumber;
            console.log(this.grandtotal)
        }
    },
};

        lima.hourlycustomers()

function generatelineitems(store) {

    let parentEl = document.querySelector(`#${store.name}`);

            for (let total = 0; total < store.salesperhour.length; total++) {
            let newItem = document.createElement('li');
            newItem.innerText = store.salesperhour[total];
            parentEl.appendChild(newItem);
        }
        let lastitem = document.createElement('li');
        lastitem.innerText = store.grandtotal;
        parentEl.appendChild(lastitem);
}
console.log(lima);
lima.hourlycustomers();
generatelineitems(lima);