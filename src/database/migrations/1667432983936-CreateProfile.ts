import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Profile1667432983936 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'profiles',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'user_id', type: 'uuid' },
          { name: 'date_of_birth', type: 'timestamp' },
          { name: 'gender', type: 'varchar' },
          { name: 'weight', type: 'numeric' },
          { name: 'height', type: 'numeric' },
          { name: 'favorite_training_moment', type: 'varchar' },
          { name: 'training_time', type: 'numeric' },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
        ],
        foreignKeys: [
          {
            name: 'FKUserProfile',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('profiles');
  }
}
