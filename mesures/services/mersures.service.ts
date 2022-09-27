import UsersDao from '../daos/mesures.dao';
import { CRUD } from '../../common/interfaces/crud.interface';
import { CreateMesureDto } from '../dto/create.mesure.dto';
import { PutUserDto } from '../dto/put.user.dto';
import { PatchUserDto } from '../dto/patch.user.dto';

class MersuresService implements CRUD {
    async create(resource: CreateMesureDto) {
        resource.permissionLevel = 1;
        return UsersDao.addUser(resource);
    }

    async deleteById(id: string) {
        return UsersDao.removeUserById(id);
    }

    async list(limit: number, page: number) {
        return UsersDao.getUsers(limit, page);
    }

    async patchById(id: string, resource: PatchUserDto): Promise<any> {
        return UsersDao.updateUserById(id, resource);
    }

    async putById(id: string, resource: PutUserDto): Promise<any> {
        return UsersDao.updateUserById(id, resource);
    }

    async readById(id: string) {
        return UsersDao.getUserById(id);
    }

    async updateById(id: string, resource: CreateMesureDto): Promise<any> {
        return UsersDao.updateUserById(id, resource);
    }

    async getUserByEmail(email: string) {
        return UsersDao.getUserByEmail(email);
    }
    async getUserByEmailWithPassword(email: string) {
        return UsersDao.getUserByEmailWithPassword(email);
    }
}

export default new MersuresService();
