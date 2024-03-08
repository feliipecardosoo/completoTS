import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from 'fastify'
import { CreateCustomerController } from './controllers/CreateCustomerController'
import { ListCustomerController } from './controllers/ListCustomerController'
import { DeleteCustomerController } from './controllers/DeleteCustomerController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.post('/customer', async (req: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(req,reply)
    })

    fastify.get('/customers', async (req: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomerController().handle(req, reply)
    })

    fastify.delete('/delete', async (req: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(req, reply)
    })

}