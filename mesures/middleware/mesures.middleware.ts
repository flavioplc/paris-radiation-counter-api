import express from 'express';
import userService from '../services/mersures.service';

class MesuresMiddleware {
    async validateId(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        if (req.query.GID) {
            next();
        } else {
            res.status(400).send({
                errors: ['Missing or bad GID'],
            });
        }
    }
}

export default new MesuresMiddleware();
