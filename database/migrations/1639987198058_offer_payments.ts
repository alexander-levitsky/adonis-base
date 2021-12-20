import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OfferPayments extends BaseSchema {
  protected tableName = 'offer_payments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('offer_id').unique();
      table.boolean('cash').defaultTo(0);
      table.boolean('military_ipoteka').defaultTo(0);
      table.boolean('mat_capital').defaultTo(0);
      table.boolean('ipoteka').defaultTo(0);
      table.boolean('installments').defaultTo(0);
      table.foreign('offer_id').references('id').inTable('offers').onDelete('CASCADE').onUpdate('CASCADE');
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
