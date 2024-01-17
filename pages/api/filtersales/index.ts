import { NextApiHandler } from "next";
import prisma from "../../../libs/prisma";
import api from "../../../libs/api";



const handleGet: NextApiHandler = async (req, res) => {
    const sales = await api.getAllVendas();
    res.json({ sales })
}



const handleFilter: NextApiHandler = async (req, res) => {
    const {initialDate, endDate } = req.body;
   
    const FilterSales = await api.getFilterSales(initialDate , endDate );
    
    
    



    return res.status(200).json({ FilterSales });
 
}

const handler: NextApiHandler = (req, res) => {
    switch (req.method) {
         case 'GET':
            handleGet(req, res)
            break;
        case 'POST':
            handleFilter(req, res)
            break;
    }
}

export default handler;