import {prisma} from '../../../utils/prisma';

interface UseRegisterServicesProps {
	username: string;
	password: string;
	email: string;
}

class UserRegisterServices {
	async execute({username, password, email}: UseRegisterServicesProps) {
		const userAlreadyExists = await prisma.user.findFirst({
			where: {
				email,
			},
		});

		if (userAlreadyExists) {
			throw new Error('Usuario já existe!!');
		}

		const user = await prisma.user.create({
			data: {
				username,
				email,
				password,
			},
		});

		return user;
	}
}

export default new UserRegisterServices();
