import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Notifications extends BaseSchema {
  protected tableName = 'notifications'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary();
      table.string('type');
      table.string('notifiable_type');
      table.integer('notifiable_id').unsigned();
      table.text('data');
      table.timestamp('read_at').nullable();
      table.timestamps();

      table.index(['notifiable_type', 'notifiable_id']);

    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
