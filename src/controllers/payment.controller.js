const PaymentController = {
    async createPayment(req, res) {
        try {
            res.status(201).send({ message: 'Payment created' });
        } catch (error) {
            res.status(500).send({ message: 'Internal server error' });
            
        }
    }
}
export default PaymentController;