import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateDictionaries extends BaseSchema {

  protected tables = [
    'builders',
    'realty_classes',
    'realty_heatings',
    'realty_houseroads',
    'realty_materials',
    'realty_regions',
    'realty_sewages',
    'realty_types',
    'realty_waters',
    'image_album_types',
    'realty_electricities',
    'realty_gas',
  ]

  public async up() {
    this.tables.forEach(tableName => {
      this.schema.createTable(tableName, (table) => {
        table.increments('id')
        table.string('name', 128)
      })
    })
  }

  public async down() {
    this.tables.forEach(this.schema.dropTable)
  }
}
