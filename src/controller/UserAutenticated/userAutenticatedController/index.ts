import {Request, Response} from 'express';
import UserServices from '../../../services/User/UserServices';
import UserAutenticatedServices from '../../../services/UserAutenticated/UserAutenticatedServices';

export default class UserAutenticatedController {
	async handle(request: Request, response: Response) {
		const {email, password} = request.body;

		try {
			const services = new UserAutenticatedServices();
			const result = await services.execute({email, password});

			return response.json({result});
		} catch (e) {
			return response.status(400).json({error: e.message});
		}
	}
}
