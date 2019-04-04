import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateDishMenuRestaurantTables1554395605727 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'dish',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar(255)',
          },
          {
            name: 'price',
            type: 'float',
          },
          {
            name: 'picture',
            type: 'varchar(255)',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'dish',
      new TableForeignKey({
        columnNames: ['menu'],
        referencedColumnNames: ['id'],
        referencedTableName: 'menu',
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'menu',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar(255)',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'menu',
      new TableForeignKey({
        columnNames: ['dishes'],
        referencedColumnNames: ['id'],
        referencedTableName: 'dish',
      }),
    );

    await queryRunner.createForeignKey(
      'menu',
      new TableForeignKey({
        columnNames: ['restaurant'],
        referencedColumnNames: ['id'],
        referencedTableName: 'restaurant',
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'restaurant',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar(255)',
          },
          {
            name: 'logo',
            type: 'varchar(255)',
          },
          {
            name: 'latitude',
            type: 'varchar(255)',
          },
          {
            name: 'longitude',
            type: 'varchar(255)',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey('restaurant', new TableForeignKey({
        columnNames: ['menus'],
        referencedColumnNames: ['id'],
        referencedTableName: 'menu',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('dish');
    await queryRunner.dropTable('menu');
    await queryRunner.dropTable('restaurant');
  }
}
