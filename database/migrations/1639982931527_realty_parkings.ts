import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RealtyParkings extends BaseSchema {
  protected tableName = 'realty_parkings'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('object_id').unsigned().unique();

      table.boolean('parking_underground').nullable();
      table.boolean('parking_multilevel').nullable();
      table.boolean('parking_type_roofed').nullable();
      table.boolean('house_parking').nullable();

      table.foreign('object_id').references('id').inTable('realty_objects').onDelete('CASCADE').onUpdate('CASCADE');
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
