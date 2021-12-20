import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CollectionObjects extends BaseSchema {
  protected tableName = 'collection_objects'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments();
      table.integer('collection_id').unsigned().index();
      table.integer('object_id').unsigned().index();
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
