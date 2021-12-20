import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ChessCols extends BaseSchema {
  protected tableName = 'chess_cols'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('chess_id').unsigned().index();
      table.integer('col').unsigned().nullable();
      table.string('name', 64).nullable();
      table.integer('colspan').unsigned().nullable();
      table.integer('rowspan').unsigned().nullable();

      table.foreign('chess_id').references('id').inTable('chess').onDelete('CASCADE').onUpdate('CASCADE');


    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
