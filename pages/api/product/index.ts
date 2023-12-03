import { NextApiHandler } from "next";
import prisma from "../../../libs/prisma";
import api from "../../../libs/api";


const handlerGet: NextApiHandler = async (req, res) => {

    const product = await api.getProducts();


    res.json({ product })


}



const handlerPost: NextApiHandler = async (req, res) => {
    const { name, preco, precoDeVenda, quantidade, data } = req.body;

    const newProduct = await prisma.product.create({
        data: { name, preco, precoDeVenda, quantidade, data }
    })
    res.status(201).json({ product: newProduct });


}

const handler: NextApiHandler = (req, res) => {
    switch (req.method) {
        case 'GET':
            handlerGet(req, res);
            break;
        case 'POST':
            handlerPost(req, res)
            break;
    }
}

export default handler;