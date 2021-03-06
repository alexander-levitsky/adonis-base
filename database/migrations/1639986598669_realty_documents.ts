import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RealtyDocuments extends BaseSchema {
  protected tableName = 'realty_documents'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.integer('buildingId').unsigned().index();
      table.text('name').nullable();
      table.text('path').nullable();
      table.timestamp('dateCreate').nullable();
      table.boolean('deleted').nullable();

      table.foreign('buildingId').references('id').inTable('realty_objects').onDelete('CASCADE').onUpdate('CASCADE');
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
