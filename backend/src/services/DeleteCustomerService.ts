import { error } from "console";
import prismaClient from "../prisma";

interface DeleteCustomerProps {
    id: string
}

class deleteCustomerService {
    async execute({id}: DeleteCustomerProps) {
        if(!id) {
            throw new Error("Solicitacao Invalida.")
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })
        
        if(!findCustomer) {
            throw new Error('Usuario nao encontrado')
        }

        await prismaClient.customer.delete({
            where: {
                id: findCustomer.id
            }
        })

        return {message: "Deletado com Sucesso"}
    }
}

export { deleteCustomerService }