import Joi from "joi";
import { Server } from "@hapi/hapi";
import { getPlayer, getPlayers, savePlayer } from '../controllers/player.controller';

export const playerRoute = (server: Server): void => {
    server.route([{
        method: 'GET',
        path: '/player/{id}',
        handler: getPlayer,
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.number()
                })
            }
        }
    }, {
        method: 'GET',
        path: '/player',
        handler: getPlayers
    }, {
        method: 'POST',
        path: '/player',
        handler: savePlayer,
        options: {
            validate: {
                payload: Joi.object({
                    name: Joi.string().required()
                })
            }
        }
    }
    ]);
}