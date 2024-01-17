import prisma from "./prisma"

export default {
    getProducts: async () => {
        const product = await prisma.product.findMany();
        
        return product    
    },
    getAllVendas: async() => {
        const sales = await prisma.sales.findMany();
        return sales
    },
    getFilterSales: async (initialDate: string, endDate: string) => {
        const filterSales = await prisma.sales.findMany({
            where:{
                data:{
                    gte: initialDate,
                    lte: endDate
                   
                }
            }
        })

       
        return filterSales
    }
 
    
}