import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CollectionSnapshots extends BaseSchema {
  protected tableName = 'collection_snapshots'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments();
      table.integer('collection_id').index();
      table.timestamps();
      table.json('data');
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
