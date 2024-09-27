import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTask1727426719555 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE task (
            id UUID NOT NULL DEFAULT uuid_generate_v4(),
            title VARCHAR NOT NULL,
            description VARCHAR NOT NULL,
            dueDate TIMESTAMP NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT now(),
            updated_at TIMESTAMP NOT NULL DEFAULT now(),
            done_at TIMESTAMP NULL,
            status VARCHAR NOT NULL
            );`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
