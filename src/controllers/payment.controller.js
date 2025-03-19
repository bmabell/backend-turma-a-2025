import {z} from "zod"

const PaymentSchema = z.object({
    valor: z.number().positive(),
    numero: z.number().positive(),  
    data: z.string().datetime(),
    observacao: z.string().optional(),
});

const PaymentController = {
    async createPayment(req, res) {
        try {
            const {nome,email,senha, observacao, data, valor} = req.body;
            PaymentSchema.parse({nome,email,senha, observacao,data, valor});
            console.log({nome,email,senha, observacao,data, valor});
            res.status(201).send({ message: 'Payment created' });
        } catch (error) {
            if(error instanceof z.ZodError) {
                return res.status(400).json({
                message: "Erro de validação",
                errors: error.errors.map(
                    err => ({
                    atributo: err.path[0],
                    mensagem: err.message
                }))
                });
            }
            res.status(500).send({ message: 'Internal server error' });
            
        }
    },

    async updatePayment(req, res) {
        try {
            const {id} = req.params;
            const {valor, numero, data, observacao} = req.body;
            PaymentSchema.parse({valor, numero, data, observacao});
            res.status(200).send({ message: `Payment updated successfully`,
                data: {id, valor, numero, data, observacao} });  
        } catch (error) {
            if(error instanceof z.ZodError) {
                return res.status(400).json({
                message: "Validation error",
                details: error.errors
                });
            }
            return res.status(500).send({ message: 'Internal server error' });
        }
    },
    async deletePayment(req, res) {
        try {
            const {id} = req.params;
            // Simulate deletion logic
            res.status(200).send({ message: `Payment with id ${id} deleted successfully` });
        } catch (error) {
            return res.status(500).send({ message: 'Internal server error' });
        }
    },
}
export default PaymentController;