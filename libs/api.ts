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
    // ,
    // Delete: async () => {
    //     const {id} = req.query
    //     const deleteProduct = await prisma.product.delete({
    //         where:{
    //             id: parseInt(id as string)
    //         }
    //     });

    //     return deleteProduct
    // }
   
    
}