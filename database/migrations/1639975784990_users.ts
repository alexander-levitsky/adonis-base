import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {

      table.bigIncrements('id');
      table.timestamps();

      table.bigInteger('invited_by').unsigned().index().defaultTo(0)
      table.dateTime('payment_untill').index().nullable().defaultTo(null)
      table.string('email_verified_at').index().nullable().defaultTo(null)
      table.string('phone').unique();
      table.string('email').unique().defaultTo('');
      table.string('firstname').defaultTo('');
      table.string('lastname').defaultTo('');
      table.string('ads_phone').nullable().defaultTo(null)
      table.string('ads_email').nullable().defaultTo(null)
      table.string('ads_firstname').nullable().defaultTo(null)
      table.string('ads_lastname').nullable().defaultTo(null)
      table.string('agency').index().nullable().defaultTo(null)
      table.enum('status', ['not accepted', 'not verified', 'active', 'disabled']).defaultTo('not accepted').index();
      table.string('token', 80).unique().nullable().defaultTo(null);

    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
