import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Collections extends BaseSchema {
  protected tableName = 'collections'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments();
      table.timestamps();
      table.integer('user_id').unsigned().index();
      table.string('name', 256).nullable().comment('Название');
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
