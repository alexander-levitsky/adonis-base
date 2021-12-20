import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserFilters extends BaseSchema {
  protected tableName = 'user_filters'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments();
      table.timestamps();
      table.integer('user_id').unsigned().index();
      table.text('content');
      table.text('ids').nullable();
      table.text('last_ids').nullable();
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
