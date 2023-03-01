import { Request, Response } from 'express';

import SendOrderService from '../../services/order/SendOrderService';

class SendOrderController{
    async handle(req: Request, res: Response) {
        const { order_id } = req.body;
        const order = await SendOrderService.execute({ order_id });
        return res.json(order);
    }
}

export default new SendOrderController();
