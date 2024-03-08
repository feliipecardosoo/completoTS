import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from 'fastify'
import { CreateCustomerController } from './controllers/CreateCustomerController'
import { ListCustomerController } from './controllers/ListCustomerController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.post('/customer', async (req: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(req,reply)
    })

    fastify.get('/customers', async (req: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomerController().handle(req, reply)
    })

}