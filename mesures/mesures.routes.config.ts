import { CommonRoutesConfig } from '../common/common.routes.config';

import express from 'express';
import MesuresController from "./controllers/mesures.controller";
import MesuresMiddleware from "./middleware/mesures.middleware";

export class MesuresRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'MesuresRoutes');
    }

    configureRoutes(): express.Application {
        this.app
            .route(`/mesures`)
            .get(
                MesuresController.listMesures
            )
            .post(
                MesuresMiddleware.validateId,
                MesuresController.createMesure
            );

        return this.app;
    }
}
