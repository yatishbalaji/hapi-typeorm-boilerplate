import { Request, ResponseToolkit, Server } from "@hapi/hapi";
import { getConnection, getCustomRepository } from "typeorm";
import { Player, PlayerRepository } from "../repositories";

export const getPlayers = async (request: Request, h: ResponseToolkit) => {
    try {
        // const connection = getConnection("wcms");
        // const data = await connection.getRepository(Player).find();

        const data = await getCustomRepository(PlayerRepository, "wcms").find();

        return h.response(data);
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const getPlayer = async (request: Request, h: ResponseToolkit) => {
    try {
        const data = await getCustomRepository(PlayerRepository, "wcms").findOne(request.params.id);

        return h.response(data);
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const savePlayer = async (request: Request, h: ResponseToolkit) => {
    try {
        const { name } = request.payload as Player;
        let newEntry = new Player();
        newEntry.name = name;
        await getCustomRepository(PlayerRepository, "wcms").save(newEntry);

        return h.response().code(201);
    } catch (err) {
        console.log(err);
        return err;
    }
}