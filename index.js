const express = require("express");
const server = express();

const lista = ["Mara", "Ana", "Aline", "Emily", "Fran", "Regiane", "Stefanny"];
const livros = [ "1989",  "Vidas Secas", "Harry Potter",  "Capitu",  "Fogo & Sangue"];

function checkUsersInArray(req, res, next){
    const user = lista[req.params.userIndex];
    if(!user){
        return res.status(400).json({error: 'Index does not exists'});
    }
    req.user = user;
    return next();
}

function checkBooksInArray(req, res, next){
    const book = livros[req.params.bookIndex];
    if(!book){
        return res.status(400).json({error: 'Index does not exists'});
    }
    req.book = book;
    return next();
}

server.get("/etapa2", function(req, res) {
  return res.json("Hello uhuuu word");
});

server.get("/listaUsuario", (req, res) => {
  return res.json(lista);
});

server.get("/users/:userIndex", checkUsersInArray, (req, res) => {

  return res.json(req.user);
});

server.get("/books", (req, res) => {
  return res.json(livros);
});

server.get("/books/:bookIndex", checkBooksInArray, (req, res) => {

return res.json(req.book)

})

server.get("/books/:booksIndex/users/:usersIndex", (req, res) => {
    const {userIndex, bookIndex} = req.params;
    const result = lista[userIndex] + ' ' + livros[bookIndex];

    // const idBook = req.params.indexBook;
    // const idUsers = req.params.indexUsers;

    return res.json(result)
})

server.get('/country', (req, res) => {

    return res.json(req.query.pais)
})

server.listen(3000);
