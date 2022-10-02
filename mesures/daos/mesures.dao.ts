import mongooseService from '../../common/services/mongoose.service';
import debug from 'debug';
import { CreateMesureDto } from '../dto/create.mesure.dto';
import {GetMesuresDto} from "../dto/get.mesures.dto";

const log: debug.IDebugger = debug('app:users-dao');

class MesuresDao {
    Schema = mongooseService.getMongoose().Schema;

    mesureSchema = new this.Schema({
        _id: String,
        createdAt: Date,
        CPM: String,
        aCPM: String,
        uSV: Number,
    });

    Mesure = mongooseService.getMongoose().model('Mesures', this.mesureSchema);

    constructor() {
        log('Created new instance of MesuresDao');
    }

    async addMesure(mesureFields: CreateMesureDto) {
        const mesure = new this.Mesure({
            ...mesureFields,
        });
        await mesure.save();

        return mesure;
    }

    async getMesures(timerange: GetMesuresDto) {

        return this.Mesure.find({
            createdAt: {
                $gte: timerange.from,
                $lte: timerange.to,
            }
        })
            .exec();
    }

}

export default new MesuresDao();
