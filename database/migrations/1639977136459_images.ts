import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Database from '@ioc:Adonis/Lucid/Database'

export default class Images extends BaseSchema {
  protected tableName = 'images'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      Database.rawQuery(`ALTER TABLE ${this.tableName} AUTO_INCREMENT = 500000`).exec()
      table.string('name', 64);
      table.string('type', 20).nullable();
      table.string('ext', 10).nullable();
      table.string('target', 64).nullable();
      table.integer('status').defaultTo(0);
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
