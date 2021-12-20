import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Contacts extends BaseSchema {
  protected tableName = 'contacts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 128).nullable();
      table.string('position', 128).nullable();
      table.string('phone', 128).nullable();
      table.string('email', 128).nullable();
      table.string('phone2', 128).nullable();
      table.string('email2', 128).nullable();
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
