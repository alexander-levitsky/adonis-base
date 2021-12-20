import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RealtySubregions extends BaseSchema {
  protected tableName = 'realty_subregions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.integer("region_id").unsigned().index().defaultTo(null)
      table.string('name',128);
      table.decimal('latitude',8,6).nullable();
      table.decimal('longitude',8,6).nullable();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
