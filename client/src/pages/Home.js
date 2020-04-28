import React, { useState } from 'react';
import API from '../utils/API';
import Hero from '../componets/Hero';
import { Button, Input } from '../componets/Form'
import { Col, Container, Row } from '../componets/Grid';
import { List } from '../componets/List';
import Book from '../componets/Book';
import Card from '../componets/Card';
import './style.css';

function Home() {
    // Setting our component's initial state
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('');

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        setQuery(event.target.value);
    }

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();

        API.getBooks(query)

            .then((res) => {
                console.log(query);
                setBooks(res.data.items);
            })
            .catch((err) => console.error(err));
    }

    function saveBook(bookId) {
        const book = books.find((book) => book.id === bookId);

        API.saveBook({
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors[0],
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink,
        })
            .then((res) => {
                if (res.data.status === 'error') {
                    throw new Error(res.data.message);
                }
            })
            .catch((err) => console.log(err.response));
    }

    return (
        <Container fluid>
            <Hero />


            <Row>
                <Col size="md-12">

                    <Card title="Google Book Search" icon="fas fa-book-reader">
                        <Row>
                            <Col size="md-8">
                                <form id="mainDiv">

                                    <Input

                                        onChange={handleInputChange}
                                        name="title"
                                        placeholder="Search for Book Title"

                                    />

                                </form>
                            </Col>
                            <Col size="md-4">
                                <Button onClick={handleFormSubmit}>Search</Button>
                            </Col>
                        </Row>
                        <Row>
                            {books.length ? (


                                <List>
                                    {books.map((book) => (
                                        <Book
                                            key={book.id}
                                            title={book.volumeInfo.title}
                                            authors={book.volumeInfo.authors}
                                            description={book.volumeInfo.description}
                                            image={book.volumeInfo.imageLinks.thumbnail}
                                            link={book.volumeInfo.infoLink}
                                            onSubmit={() => saveBook(book.id)}
                                            submitLabel="Save"
                                            submitBtnClassName="btn btn-info"
                                        ></Book>
                                    ))}
                                </List>
                            ) : (
                                    <h3 id="infox">Empty search.</h3>
                                )}
                        </Row>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
}

export default Home;