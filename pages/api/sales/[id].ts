import { NextApiHandler } from "next";


import prisma from "../../../libs/prisma";

const handlerGet: NextApiHandler = async (req,res) => {
    const { id, name } = req.query;
      

    const sale = await prisma.product.findUnique({
        where: {
            id: parseInt(id as string)
        }
    });

    if(sale){
        res.json({status: true, sale})
        return;
    }

    res.json({error: 'produto não encontrado'});

}
 

 
const handler: NextApiHandler = (req, res) => {
    switch (req.method) {
        case 'GET':
            handlerGet(req, res);
            break;
        
    }
}


export default handler;