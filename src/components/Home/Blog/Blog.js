import React from 'react';

const Blog = () => {
    return (
        <div className="container p-5">
            <h1>Difference between javascript and nodejs</h1>
            <p>Javascript: Javascript is a programming language which runs on the browser using javascript Engine. Javascript makes a website interactive and make the website dynamic. It is used on the client side. Javscript is used for front end development. Javascript can cope up with HTML</p>
            <p>Nodejs: Node js is an open source server environment which allows to run javascript on the server side. Node JS can helps to run outside of the browser. Node Js Runs on the server side. Node Js is used for server side development. Node Js is not able to run HTML tag</p>

            <hr />

            <h1>When should you use nodejs and when should you use mongodb?</h1>
            <p>Node JS permanently used for non Blocking and event drien server. It provides back END api Service both client and server exchange data freely. Node JS is used for Real time chats, Data Streaming, Rest API based Applications</p>
            <p>MongoDB is a NoSQL database which is easy to used. MongoDB is used for when you need to store data in the web server and you can read data from the serer and you update data from the database and when to remove data from the web server</p>
            <hr />
            <h1>What is the purpose of jwt and how does it work?</h1>
            <p>The purpose of JWT is used to share seccure information bewtween two parties client and server</p>
            <p>The application sends request to the server When the server gets proper information returns a token for the application when the client side recives the token then validates the token. If token is valid server side provide information otherwise server not responds the reques</p>

        </div>
    );
};

export default Blog;