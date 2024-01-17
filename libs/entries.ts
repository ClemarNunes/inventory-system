import prisma from "./prisma";


export default {
    getEntries: async () => {
        // const req = await fetch(`/api/sales`);
        // const json = await req.json();
        const sales = await prisma.sales.findMany();
        // console.log(sales)
        return sales
    }
}