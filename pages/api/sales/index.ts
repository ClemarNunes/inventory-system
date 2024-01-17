import { NextApiHandler } from "next";
import prisma from "../../../libs/prisma";
import api from "../../../libs/api";
 

const handlerGet: NextApiHandler = async (req, res) => {

    const sales = await api.getAllVendas();
    res.json({ sales })
}



const handlerPost: NextApiHandler = async (req, res) => {
    const { nome, pcVenda, qt,total, data } = req.body;

    const sales = await prisma.sales.create({
        data: { nome,  pcVenda, qt, total, data }
        
    })
    res.status(201).json({ sale: sales }); 


}

const handleFilter: NextApiHandler = async (req, res) => {
    const {initialDate, endDate } = req.body;

    const FilterSales = await prisma.sales.findMany({
        where: {
            data: {
               startsWith: initialDate,
               lte: endDate,  
            }
        }
    })


    return res.status(200).json({ FilterSales });
 
}


const handler: NextApiHandler = (req, res) => {
    switch (req.method) {
        case 'GET':
            handlerGet(req, res);
            break;
        case 'POST':
            handlerPost(req, res)
            break;
        case 'FILTERSALES':
            handleFilter(req, res)
        break;
    }
}

export default handler;