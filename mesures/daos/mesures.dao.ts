import mongooseService from '../../common/services/mongoose.service';
import shortid from 'shortid';
import debug from 'debug';
import { CreateMesureDto } from '../dto/create.mesure.dto';

const log: debug.IDebugger = debug('app:users-dao');

class MesuresDao {
    Schema = mongooseService.getMongoose().Schema;

    mesureSchema = new this.Schema({
        _id: String | null,
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

    async getUserByEmail(email: string) {
        return this.User.findOne({ email: email }).exec();
    }

    async getUserByEmailWithPassword(email: string) {
        return this.User.findOne({ email: email })
            .select('_id email permissionLevel +password')
            .exec();
    }

    async removeUserById(userId: string) {
        return this.User.deleteOne({ _id: userId }).exec();
    }

    async getUserById(userId: string) {
        return this.User.findOne({ _id: userId }).populate('User').exec();
    }

    async getUsers(limit = 25, page = 0) {
        return this.User.find()
            .limit(limit)
            .skip(limit * page)
            .exec();
    }

    async updateUserById(
        userId: string,
        userFields: PatchUserDto | PutUserDto
    ) {
        const existingUser = await this.User.findOneAndUpdate(
            { _id: userId },
            { $set: userFields },
            { new: true }
        ).exec();

        return existingUser;
    }
}

export default new MesuresDao();
