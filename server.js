const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json'); // Seu arquivo de dados
const middlewares = jsonServer.defaults();
const cors = require('cors');

server.use(cors());
server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
