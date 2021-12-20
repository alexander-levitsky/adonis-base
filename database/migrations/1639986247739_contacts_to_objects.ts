import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ContactsToObjects extends BaseSchema {
  protected tableName = 'contacts_to_objects'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('object_id').unsigned();
      table.integer('contact_id').unsigned();
      table.primary(['object_id', 'contact_id']);

      table.foreign('object_id').references('id').inTable('realty_objects').onDelete('CASCADE').onUpdate('CASCADE');
      table.foreign('contact_id').references('id').inTable('contacts').onDelete('CASCADE').onUpdate('CASCADE');
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
