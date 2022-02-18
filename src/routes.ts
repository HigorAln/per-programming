import {Router} from 'express';
import UserController from './controller/User/UserController';
import UserAutenticatedController from './controller/UserAutenticated/userAutenticatedController';
import UserRegisterController from './controller/UserRegister/UserRegisterController/index';
import {ensureAuthenticated} from './middleware/ensureAutenticated';
import {prisma} from './utils/prisma';

const router = Router();

router.post('/user', UserRegisterController.handle);
router.get('/list', ensureAuthenticated, new UserController().handle);
router.post('/login', new UserAutenticatedController().handle);
router.get('/bio', async (request, response) => {
	await prisma.bio.create({
		data: {
			description: 'i`m a software development',
			userId: '620ed919ee47a3fdfea30d71',
		},
	});

	return response.send();
});

export {router};
