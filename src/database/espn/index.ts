import { createConnections } from "typeorm"
import config from '../../config/environment';
import { Player } from '../../repositories';

export const initMySQLDB = async (): Promise<void> => {
    await createConnections([{
        name: 'wcms',
        type: "mysql",
        ...config.MYSQL_CONFIG,
        entities: [Player],
        synchronize: true,
        logging: true,
    }]);
}