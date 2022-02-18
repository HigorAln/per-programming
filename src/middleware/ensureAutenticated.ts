import {NextFunction, Request, Response} from 'express';
import {verify} from 'jsonwebtoken';

interface payload {
	sub: string;
}

export function ensureAuthenticated(
	request: Request,
	response: Response,
	next: NextFunction,
) {
	const authToken = request.headers.authorization;

	if (!authToken) {
		return response.status(401).json({
			error: 'Token invalid!',
		});
	}

	const [, token] = authToken.split(' ');

	try {
		const {sub} = verify(
			token,
			'250e77f12a5ab6972a0895d290c4792f0a326ea8',
		) as payload;

		request.user_id = sub;

		return next();
	} catch (e) {
		return response.status(401).json({error: 'token expired!'});
	}
}
