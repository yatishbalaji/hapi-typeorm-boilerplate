import { Server } from "@hapi/hapi";
import { getPlayer, getPlayers, savePlayer } from '../controllers/player.controller';

export const playerRoute = (server: Server) => {
    server.route([{
        method: 'GET',
        path: '/player/{id}',
        handler: getPlayer
    }, {
        method: 'GET',
        path: '/player',
        handler: getPlayers
    }, {
        method: 'POST',
        path: '/player',
        handler: savePlayer
    }
    ]);
}