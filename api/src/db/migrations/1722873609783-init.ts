import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1722873609783 implements MigrationInterface {
    name = 'Init1722873609783'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pokemon" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(70) NOT NULL, "attack" integer NOT NULL, "defense" integer NOT NULL, "hp" integer NOT NULL, "speed" integer NOT NULL, "imageUrl" varchar(70) NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "battle" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "pokemonUno" varchar NOT NULL, "pokemonDos" varchar NOT NULL, "pokemonWinner" varchar NOT NULL, "pokemonId" integer NOT NULL, "createAt" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "battle"`);
        await queryRunner.query(`DROP TABLE "pokemon"`);
    }

}
