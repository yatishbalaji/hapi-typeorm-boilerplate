import { Request, ResponseObject, ResponseToolkit } from "@hapi/hapi";

import { getCustomRepository } from "typeorm";
import { Player, PlayerRepository } from "../repositories";

export const getPlayers = async (): Promise<Player[]> => {
    try {
        // const connection = getConnection("wcms");
        // const data = await connection.getRepository(Player).find();
        const data = await getCustomRepository(PlayerRepository, "wcms").find();

        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const getPlayer = async (request: Request): Promise<Player | undefined> => {
    try {
        const data = await getCustomRepository(PlayerRepository, "wcms").findOne(request.params.id);

        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const savePlayer = async (request: Request, h: ResponseToolkit): Promise<ResponseObject>  => {
    try {
        const { name } = request.payload as Player;
        const newEntry = new Player();
        newEntry.name = name;
        await getCustomRepository(PlayerRepository, "wcms").save(newEntry);

        return h.response().code(201);
    } catch (err) {
        console.log(err);
        return err;
    }
}