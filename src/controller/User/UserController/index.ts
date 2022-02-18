import {Request, Response} from 'express';
import UserServices from '../../../services/User/UserServices';

export default class UserController {
	async handle(request: Request, response: Response) {
		try {
			const services = new UserServices();
			const result = await services.execute();

			return response.json(result);
		} catch (e) {
			return response.status(400).json({error: e.message});
		}
	}
}
