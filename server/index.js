const jwt = require('jsonwebtoken');
var { expressjwt: jwtt } = require("express-jwt");
const express = require("express");
const app = express();

const mysql = require("mysql");

const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pruebareactcrud"
});

app.post("/create", (req, res) => {

    const id = req.body.id;

    db.query('INSERT INTO `shopping` (`id`, `id_user`, `id_product`) VALUES (NULL,"1", ?);', [id],
        (err, resu) => {
            if (err) {
                console.log(err)
            } else {
                res.send("registed")
            }

        });


});

app.post("/createUser", (req, res) => {

    const name = req.body.name;
    const password = req.body.password;

    db.query('INSERT INTO `users` (`id`, `name`, `password`) VALUES (NULL, ?, ?);', [name, password],
        (err, resu) => {
            if (err) {
                console.log(err)
            } else {
                res.send("registed")
            }

        });


});
app.post("/createProduct", (req, res) => {

    const image = req.body.image;
    const description = req.body.description;
    const price = req.body.price;

    db.query('INSERT INTO `products` (`id`, `image`, `description`, `price`) VALUES (NULL, ?, ?, ?);', [image, description,price],
        (err, resu) => {
            if (err) {
                console.log(err)
            } else {
                res.send("created")
            }

        });


});

app.post("/login", (req, res) => {

    const name = req.body.name;
    const password = req.body.password;
    const user = {
        username: name,
        email: password
    };

    db.query('SELECT * FROM users WHERE users.name="?" AND users.password="?";', [name, password],
        (err, resu) => {
            if (err) {
                console.log(err)
            } else {
                jwt.sign({ user }, 'password1234', (err, token) => {
                    if (err) {
                        res.status(500).json({ error: 'Error al generar el token' });
                    } else {
                        res.json({ token });
                    }
                });

            }

        });


});

app.get("/employes", (req, res) => {
    const authorizationHeader = req.headers.authorization;
    let token=""
    if (!authorizationHeader) {
        return res.redirect('/login');
        token="token"
    }
    token= authorizationHeader.split(' ')[1];
    jwt.verify(token, 'password1234', (err, decoded) => { 
        if (err) {
            return res.redirect('/login');
        } else {

            db.query('SELECT * FROM products', (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ error: 'Error al consultar la base de datos' });
                } else {
                    return res.json(result);
                }
            });
        }
    });
});

app.post("/verifyUser", (req, res) => {

    const name = req.body.name;
    const password = req.body.password;
    db.query('SELECT users.name, users.password FROM users WHERE users.name=? AND users.password=?', [name, password],
        (err, resu) => {
            if (err) {
                console.log(err)
            } else {
                res.send(resu);
            }

        });

});

app.get("/shopping", (req, res) => {

    db.query('SELECT p.image, p.description, p.price FROM products as p, shopping as s WHERE s.id_product=p.id;',
        (err, resu) => {
            if (err) {
                console.log(err)
            } else {
                res.send(resu);
            }

        });

});
app.put("/admin/update", (req, res) => {

    const id = req.body.id;
    const image = req.body.image;
    const description = req.body.description;
    const price = req.body.price;

    db.query('UPDATE products SET image=?,description=?, price=? WHERE  id=?', [image, description, price, id],
        (err, resu) => {
            if (err) {
                console.log(err)
            } else {
                res.send("updated")
            }

        });

});
app.delete("/delete/:id", (req, res) => {

    const id = req.params.id;

    db.query('DELETE FROM products WHERE  id=?', id,
        (err, resu) => {
            if (err) {
                console.log(err)
            } else {
                console.log(id)
                res.send("removed" + id)
            }

        });

});
app.post("/shop/create", (req, res) => {

    const id = req.body.id;
    const idU = 1;

    db.query('INSERT INTO `shopping` (`id`, `id_user`, `id_product`) VALUES (NULL,?, ?);', [idU, id],
        (err, resu) => {
            if (err) {
                console.log(err)
            } else {
                res.send("registed")
            }
        });

});

app.listen(3001, () => {
    console.log("en el puerto 3001");
})