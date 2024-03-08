import {FastifyRequest, FastifyReply} from 'fastify'
import {deleteCustomerService} from '../services/DeleteCustomerService'

class DeleteCustomerController {

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const {id} = request.query as {id:string}

        const deleteCustomer = new deleteCustomerService()

        const deleteUser = await deleteCustomer.execute({id})

        reply.send(deleteUser)
    }
}

export { DeleteCustomerController }