import {prisma} from '../../../utils/prisma';

export default class UserServices {
	async execute() {
		const users = await prisma.user.findMany({
			include: {
				Bio: true,
			},
		});

		return users;
	}
}
