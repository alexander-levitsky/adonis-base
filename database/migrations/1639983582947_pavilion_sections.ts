import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PavilionSections extends BaseSchema {
  protected tableName = 'pavilion_sections'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.integer('pavilion_id').unsigned().index();
      table.string('name', 128).nullable();
      table.integer('floor_amount').unsigned().nullable();
      table.integer('riser_amount').unsigned().nullable();
      table.boolean('view_action').nullable().defaultTo(null);

      table.foreign('pavilion_id').references('id').inTable('realty_pavilions').onDelete('CASCADE').onUpdate('CASCADE');
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
