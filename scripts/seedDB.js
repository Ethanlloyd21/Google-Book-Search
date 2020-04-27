const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactreadinglist"
);

const bookSeed = {
    authors: ["Lew Freedman"],
    description: "Highlights the life and accomplishments of the high school basketball player, called The Chosen One by Sports Illustrated, who went on to become Rookie of the Year during his first NBA season.",
    image: "http://books.google.com/books/content?id=qXkq1n1VpHgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://play.google.com/store/books/details?id=qXkq1n1VpHgC&source=gbs_api",
    title: "LeBron James",
}

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });