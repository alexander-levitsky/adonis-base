import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Chess extends BaseSchema {
  protected tableName = 'chess'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.integer('total').unsigned().nullable();
      table.integer('updated').unsigned().nullable();

      table.foreign('id').references('id').inTable('pavilion_sections').onDelete('CASCADE').onUpdate('CASCADE');
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
