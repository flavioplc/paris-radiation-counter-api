import express from 'express';
import usersService from '../services/mersures.service';
import debug from 'debug';
import mersuresService from "../services/mersures.service";
import { CreateMesureDto } from '../dto/create.mesure.dto';

const log: debug.IDebugger = debug('app:mesures-controller');

class MesuresController {
    async listMesures(req: express.Request, res: express.Response) {
        const {from, to} = req.params;
        const mesures = await mersuresService.list(from, to);
        res.status(200).send(mesures);
    }

    async createMesure(req: express.Request, res: express.Response) {
        const query : any = req.query;
        await mersuresService.create(query);
        res.status(201).send('OK.ERR0');
    }
}

export default new MesuresController();
