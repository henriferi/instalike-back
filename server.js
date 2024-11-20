import express from 'express';



const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https:placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "Gatinho brincando com uma bola",
        imagem: "https:placecats.com/sunny/300/150",
    },
    {
        id: 3,
        descricao: "Gato descansando no sofá",
        imagem: "https:placecats.com/mocha/300/150",
    },
    {
        id: 4,
        descricao: "Gatinho curioso olhando pela janela",
        imagem: "https:placecats.com/whiskers/300/150",
    },
    {
        id: 5,
        descricao: "Gato preto e branco dormindo",
        imagem: "https:placecats.com/shadow/300/150",
    },
    {
        id: 6,
        descricao: "Gatinho brincando no jardim",
        imagem: "https:placecats.com/ginger/300/150",
    },
];



const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('listening on port 3000');
});

app.get('/posts', (req, res) => {
    res.status(200).json( posts );

});


function buscarPostPoID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
};

app.get('/posts/:id', (req, res) => {
    const index = buscarPostPoID(req.params.id)
    res.status(200).json( posts[index] );

});


