import  express, {Express, Request, Response } from "express";
import { registerRoutes } from "./routes";
require('dotenv').config();

const app: Express = express();
app.use(express.json());
const port = process.env.PORT

app.get('/', (_:Request, res:Response)=> {
  res.json({message: 'API ready for requests...'})
})

registerRoutes(app)

app.listen(port, () => {
  console.log(`Server is running in  http://localhost:${port}`);
});






interface User {
  nome: string;
  email: string;
}

const db: User[] = [{ nome: "Teste", email: "teste@gmail.com" }];

//rota + callback
app.get("/api/users", (req: Request, res: Response) => {
  return res.json(db);
});


// app.get("/query",async (req: Request, res: Response) => {
//     const clientes = await consulta()
//   return res.json({clientes});
// });


const params = {
  nome: 'testePRMS'
}

// app.get("/insert",async (req: Request, res: Response) => {
//   const sql = 'insert into clientes (nome) values ($1)'
//   const prms = [params.nome]
//     const clientes = await insert(sql, prms)
//   return res.json({clientes});
// });

app.get("/api/users/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  return res.json({ tes: id, teste: id });
});

app.delete("/api/users/:nome", (req: Request, res: Response) => {
  const nome = req.params.nome;
  const index = db.findIndex((el) => el.nome == nome);
  db.splice(index, 1);
  return res.json(db);
});

app.post("/api/users", (req: Request, res: Response) => {
  const { nome, email } = req.body;
  db.push({ nome, email });
  return res.status(201).json(db);
});
