import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class BuildersToObjects extends BaseSchema {
  protected tableName = 'builders_to_objects'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('object_id').unsigned().notNullable();
      table.integer('builder_id').unsigned().notNullable();
      table.unique(['object_id', 'builder_id']);

      table.foreign('object_id').references('id').inTable('realty_objects').onDelete('CASCADE').onUpdate('CASCADE');
      table.foreign('builder_id').references('id').inTable('builders').onDelete('CASCADE').onUpdate('CASCADE');
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
