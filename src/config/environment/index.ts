/* eslint no-process-env:0 */
import path from 'path';
import dotenv from 'dotenv';

const root = path.normalize(`${__dirname}/../../..`);

const env = dotenv.config({ path: path.join(root, '.env') }).parsed;

if (!env) {
    throw new Error("ENV not configured");
}

const config: any = {
    ...env,
    root,
    APPSERVER_PORT: process.env.APPSERVER_PORT || env.APPSERVER_PORT || 3302,
    IP: process.env.IP || '127.0.0.1',
    MYSQL_CONFIG: {
        username: env.MYSQL_USER,
        password: env.MYSQL_PWD,
        host: env.MYSQL_HOST || '127.0.0.1',
        port: env.MYSQL_PORT || 3306,
        database: env.MYSQL_DB
    }
};

export default config;
