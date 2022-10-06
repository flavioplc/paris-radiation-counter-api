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
            .route(`/log`)
            .get(
                MesuresMiddleware.validateId,
                MesuresController.createMesure
            );
        this.app
            .route(`/mesures`)
            .get(
                MesuresController.listMesures
            );

        return this.app;
    }
}
