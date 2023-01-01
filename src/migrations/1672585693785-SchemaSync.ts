import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaSync1672585693785 implements MigrationInterface {
    name = 'SchemaSync1672585693785'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ADD "toggle" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "toggle"`);
    }

}
