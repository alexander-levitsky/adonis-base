import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RealtyPavilions extends BaseSchema {
  protected tableName = 'realty_pavilions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.integer('object_id').unsigned().index();
      table.integer('year_built').unsigned().nullable();
      table.integer('building_status_id').unsigned().nullable();
      table.integer('status').unsigned().nullable();
      table.integer('construction_ending').unsigned().nullable();
      table.integer('min_area_cost').unsigned().nullable();
      table.integer('cost_min').unsigned().nullable();
      table.string('name', 128).nullable();
      table.integer('construction_finished').unsigned().nullable();
      table.integer('count_flats').unsigned().nullable();
      table.boolean('view_action').nullable().defaultTo(null);

      table.foreign('object_id').references('id').inTable('realty_objects').onDelete('CASCADE').onUpdate('CASCADE');
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
