import { CommonRoutesConfig } from '../common/common.routes.config';
import UsersController from './controllers/mesures.controller';
import UsersMiddleware from './middleware/mesures.middleware';
import { body } from 'express-validator';

import express from 'express';

export class MesuresRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'MesuresRoutes');
    }

    configureRoutes(): express.Application {
        this.app
            .route(`/mesures`)
            .get(
                UsersController.listUsers
            )
            .post(
                UsersMiddleware.validateRequiredUserBodyFields,
                UsersMiddleware.validateSameEmailDoesntExist,
                UsersController.createUser
            );

        return this.app;
    }
}
