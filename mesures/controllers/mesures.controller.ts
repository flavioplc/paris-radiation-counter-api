import express from 'express';
import usersService from '../services/mersures.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:mesures-controller');

class MesuresController {
    async listMesures(req: express.Request, res: express.Response) {
        const users = await usersService.list(100, 0);
        res.status(200).send(users);
    }

    async createMesures(req: express.Request, res: express.Response) {
        const userId = await usersService.create(req.body);
        res.status(201).send({ id: userId });
    }
}

export default new MesuresController();
