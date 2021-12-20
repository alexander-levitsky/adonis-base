import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RealtyPayments extends BaseSchema {
  protected tableName = 'realty_payments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('object_id').unsigned().unique();

      table.boolean('military_ipoteka').nullable();
      table.boolean('mat_capital').nullable();
      table.boolean('ipoteka').nullable();
      table.boolean('installments').nullable();

      table.foreign('object_id').references('id').inTable('realty_objects').onDelete('CASCADE').onUpdate('CASCADE');

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
