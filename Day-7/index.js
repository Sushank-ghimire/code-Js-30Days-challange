// Object of and Book
const giveLine = () => {
    console.log("\n");
}

const bookDetails = {
    name: "The Ragnarok",
    author: "Sushank Ghimire",
    releasedDate: 2018,
    price: "$360",
    // Write way to get the this function work if we use the arrow function it will not show the details of this global object and uses the window to get the data
    logDetails: function () {
        console.log(this.name, this.author, this.releasedDate, this.price);
    },
    // Wrong Way to access the data becoz cant get data 
    logall: () => {
        console.log("Cannot use arrow function to use the this keyword of javascript !!!");
    },
    // Method to apply discount
    applyDiscount: function(discount) {
        let priceNumber = parseFloat(this.price.slice(1));
        priceNumber = priceNumber - (priceNumber * (discount / 100));
        this.price = `$${priceNumber.toFixed(2)}`;
    },

    // Method to change the author
    changeAuthor: function(newAuthor) {
        this.author = newAuthor;
    },

    updateReleaseDate: function(newDate) {
        this.releasedDate = newDate;
    },
};
console.log(bookDetails, bookDetails.author, bookDetails.releasedDate);

bookDetails.releasedDate = 2020;
console.log(bookDetails);
giveLine()

bookDetails.logDetails();
giveLine()

const nestedObjects = {
    key: "Value",
    school: {
        name: "abc school",
        contact: "Contact",
        location: "Nepal",
    },
    home: {
        location: "Ramechhap"
    },

    logSchoolDetails: function() {
        console.log(`School name : ${this.school.name}, location: ${this.school.location}, contact: ${this.school.contact}`)
    },
    logHomeDetails: function() {
        console.log(`Location: ${this.home.location}`);
    }
};
console.log(nestedObjects.school.name, nestedObjects.home.location);
giveLine()

const car = {
    make: "Toyota",
    model: "Camry",
    year: 2021,
    color: "red"
};

// Get the keys of the car object
const keys = Object.keys(car);
console.log("Keys:", keys);
giveLine()

// Iterate over the keys
keys.forEach(key => {
    console.log(`${key}: ${car[key]}`);
});
giveLine()

{
    const library = {
        "The Ragnarok": {
            author: "Sushank Ghimire",
            releasedDate: 2018,
            price: "$360"
        },
        "The Odyssey": {
            author: "Homer",
            releasedDate: -800,
            price: "$15"
        },
        "1984": {
            author: "George Orwell",
            releasedDate: 1949,
            price: "$20"
        }
    };
    
    // Log details of each book in the library
    Object.keys(library).forEach(bookName => {
        const bookDetails = library[bookName];
        console.log(`Book: ${bookName}`);
        Object.keys(bookDetails).forEach(detail => {
            console.log(`  ${detail}: ${bookDetails[detail]}`);
        });
    });
    giveLine()
    
}