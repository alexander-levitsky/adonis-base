import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ChessCellData extends BaseSchema {
  protected tableName = 'chess_cell_data'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('cell_id').unsigned().primary();
      table.integer('parent').unsigned().index();
      table.integer('child').unsigned().index();
      table.enum('status', ['0','assignmentStatus','fundStatus','reservStatus','saleStatus','soldStatus','zeroStatus']).nullable().index();
      table.boolean('disabled').nullable();
      table.integer('poligon_id').unsigned().nullable();
      table.enum('cnt_apart', ['0','zeroAp','oneAp','twoAp','threeAp','allAp','studioAp','penthaus','']).nullable();
      table.enum('interior', ['zeroInt','chernInt','predChistInt','chistInt','remInt','chastRemInt']).nullable().index();
      table.boolean('view_action').nullable().index();
      table.boolean('stock').nullable();
      table.integer('priceM').unsigned().nullable();
      table.integer('priceAll').unsigned().nullable().index();
      table.decimal('area',10,2).nullable().index();
      table.string('number',64).nullable();
      table.string('row',64).nullable();
      table.integer('headId').unsigned().nullable();
      table.integer('floors').unsigned().nullable();
      table.string('headName',64).nullable();

      table.foreign('cell_id').references('id').inTable('chess_cells').onDelete('CASCADE').onUpdate('CASCADE');
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
