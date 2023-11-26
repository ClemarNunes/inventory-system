import { NextApiHandler } from "next";


import prisma from "../../../libs/prisma";

const handlerGet: NextApiHandler = async (req,res) => {
    const { id, name } = req.query;
      

    const product = await prisma.product.findUnique({
        where: {
            id: parseInt(id as string)
        }
    });

    if(product){
        res.json({status: true, product})
        return;
    }

    res.json({error: 'produto não encontrado'});

}

const handlerPut: NextApiHandler = async (req, res) => {
    const {id} = req.query;
    const {name, preco, precoDeVenda, quantidade, data} = req.body;
   

    const updateProduct = await prisma.product.update({
        where:{
            id: parseInt(id as string)
        },
        data: {name, preco, precoDeVenda, quantidade, data}
   
    });

     if(updateProduct){
        res.json({status: true, updateProduct});
        return;
     }

     res.json({error: 'não foi possivel alterar esse usuario.'})
}

const handlerDelete: NextApiHandler = async (req, res) => {
    const { id } = req.query;

    const deleteProduct = await prisma.product.delete({
        where:{
            id: parseInt(id as string)
        }
    });

    res.json({status: true})
}

const handler: NextApiHandler = (req, res) => {
    switch (req.method) {
        case 'GET':
            handlerGet(req, res);
            break;
        case 'PUT':
            handlerPut(req, res)
            break;
        case 'DELETE':
            handlerDelete(req, res)
            break;
    }
}


export default handler;