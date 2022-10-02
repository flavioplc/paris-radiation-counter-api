import express from 'express';
import usersService from '../services/mersures.service';
import debug from 'debug';
import mersuresService from "../services/mersures.service";

const log: debug.IDebugger = debug('app:mesures-controller');

class MesuresController {
    async listMesures(req: express.Request, res: express.Response) {
        const {from, to} = req.params;
        const mesures = await mersuresService.list(from, to);
        res.status(200).send(mesures);
    }

    async createMesure(req: express.Request, res: express.Response) {
        const mesure = await mersuresService.create(req.body);
        res.status(201).send({ id: mesure._id });
    }
}

export default new MesuresController();
