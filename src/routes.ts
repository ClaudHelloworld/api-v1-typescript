import { Router } from 'express';
import TesteController from './controllers/TesteController';
import ValidaTeste1 from './middlewares/ValidaTeste1';
const Roteador = Router();
Roteador.get(
    '/teste/:id',
    ValidaTeste1,
    new TesteController().teste1
);
export default Roteador;

//  Função anônima com os parâmetros de tipos Request (requisição) e Response (resposta)     
//  (req:Request,res:Response)=> {        
//     // obtém query param        
//     const x = req.query.num;        
//     // obtem route param        
//     const y = req.params.id;        
//     return res.send(`Resultado: ${Number(x) + Number(y)}`);    
// } 


