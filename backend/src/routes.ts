import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from 'fastify'
import { CreateCustomerController } from './controllers/CreateCustomerController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get('/teste', async (req: FastifyRequest, reply: FastifyReply) => {
        return {ok: true}
    })

    fastify.post('/customer', async (req: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(req,reply)
    })

}