import { Column, Entity, EntityRepository, PrimaryGeneratedColumn, Repository } from "typeorm";

@Entity({ schema: "espn", name: "players" })
export class Player {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;
}

@EntityRepository(Player)
export class PlayerRepository extends Repository<Player> {

}