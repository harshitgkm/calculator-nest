import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableOperations1730282894229 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'operations',
        columns: [
          { name: 'id', type: 'int', isPrimary: true },
          { name: 'operations', type: 'varchar' },
          { name: 'email', type: 'varchar' },
          { name: 'result', type: 'int' },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('operations');
  }
}
