import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Favorites extends BaseSchema {
  protected tableName = 'favorites'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('user_id').unsigned().index();

      table.string('favoriteable_type');
      table.integer('favoriteable_id').unsigned();
      table.timestamps();

      table.primary(['user_id', 'favoriteable_id', 'favoriteable_type']);

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
