var router = require('./router');

var app = router(3412);

var operadoras = [
    { nome: "Oi", codigo: 14, categoria: "Celular", preco: 2 },
    { nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1 },
    { nome: "Tim", codigo: 41, categoria: "Celular", preco: 3 },
];

var contatos = [
    { id: 1, nome: "David", telefone: "9999-1111", data: new Date() }
];

app.get('/contatos', function(req, res) {
    res.write(JSON.stringify(contatos));
    res.end();
});

app.get('/operadoras', function(req, res) {
    res.write(JSON.stringify(operadoras));
    res.end();
});