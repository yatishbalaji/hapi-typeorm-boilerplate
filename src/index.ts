import { Server } from '@hapi/hapi';
import { playerRoute } from './routes/player.route';
import config from "./config/environment";
import { initMySQLDB } from './database/espn';

const init = async () => {
    const server: Server = new Server({
        port: config.APPSERVER_PORT,
        host: 'localhost'
    });

    playerRoute(server);

    await initMySQLDB();

    await server.start();
    console.log(`Server started on port: ${config.APPSERVER_PORT}`)
}

init();

process.on('unhandledRejection', (reason, p) => {
    console.error(`Unhandled Rejection at: Promise: ${JSON.stringify(p)}, Reason: ${reason}`);
    process.exit(1);
});

process.on('uncaughtException', (err) => {
    console.error('uncaughtException', err);
});