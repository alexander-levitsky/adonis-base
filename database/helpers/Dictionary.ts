import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Builders extends BaseSchema {
  protected tableName = 'dictionary'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 128)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
