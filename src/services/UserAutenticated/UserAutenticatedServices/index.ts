import {prisma} from '../../../utils/prisma';
import {sign, verify} from 'jsonwebtoken';

export default class UserAutenticatedServices {
	async execute({email, password}) {
		const findUser = await prisma.user.findFirst({
			where: {
				email,
			},
		});

		if (!findUser) {
			throw new Error('Username or password incorrecly!');
		}

		if (findUser.password !== password) {
			throw new Error('Username or password incorrecly!');
		}

		const payload = {
			username: findUser.username,
			email: findUser.email,
		};

		const token = sign(payload, '250e77f12a5ab6972a0895d290c4792f0a326ea8', {
			subject: findUser.id,
			expiresIn: '1d',
		});

		return {findUser, token};
	}
}
