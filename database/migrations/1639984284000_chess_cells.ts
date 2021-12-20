import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ChessCells extends BaseSchema {
  protected tableName = 'chess_cells'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments();
      table.integer('chess_id').unsigned().index();
      table.integer('row').unsigned().nullable();
      table.integer('col').unsigned().nullable();
      table.integer('rowspan').unsigned().nullable();
      table.integer('colspan').unsigned().nullable();
      table.integer('planId').unsigned().nullable();
      table.text('pointers').nullable();
      table.boolean('mark').nullable();

      table.foreign('chess_id').references('id').inTable('chess').onDelete('CASCADE').onUpdate('CASCADE');
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
