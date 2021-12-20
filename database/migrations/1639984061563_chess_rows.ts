import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ChessRows extends BaseSchema {
  protected tableName = 'chess_rows'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('chess_id').unsigned().index();
      table.string('name',64).nullable();
      table.integer('colspan').unsigned().nullable();
      table.integer('rowspan').unsigned().nullable();

      table.foreign('chess_id').references('id').inTable('chess').onDelete('CASCADE').onUpdate('CASCADE');

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
