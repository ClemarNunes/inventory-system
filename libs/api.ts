import prisma from "./prisma"

export default {
    getProducts: async () => {
       

        // const product = await prisma.product.findMany({
        //     where:{
        //         name: {
        //             startsWith: 'l'
        //         }
        //     }
        // });

         

        const product = await prisma.product.findMany();

        return product    
    }
   
    
}