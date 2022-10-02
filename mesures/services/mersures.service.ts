import MesuresDao from '../daos/mesures.dao';
import { CreateMesureDto } from '../dto/create.mesure.dto';

class MersuresService {
    async create(resource: CreateMesureDto) {

        return MesuresDao.addMesure(resource);
    }

    async list(from: string, to: string) {
        return MesuresDao.getMesures({from, to});
    }
}

export default new MersuresService();
