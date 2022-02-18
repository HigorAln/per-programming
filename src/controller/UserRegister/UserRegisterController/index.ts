import {Request, Response} from 'express';
import UserRegisterServices from '../../../services/UserRegister/UserRegisterServices';

class UserRegisterController {
	async handle(request: Request, response: Response) {
		const {username, password, email} = request.body;

		try {
			const result = await UserRegisterServices.execute({
				username,
				password,
				email,
			});

			return response.json({result});
		} catch (e) {
			response.status(400).json({error: e.message});
		}
	}
}

export default new UserRegisterController();
