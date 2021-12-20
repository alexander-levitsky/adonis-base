import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ImagesToAlboms extends BaseSchema {
  protected tableName = 'images_to_alboms'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('image_id').unsigned();
      table.integer('album_id').unsigned();
      table.primary(['image_id','album_id']);
      table.foreign('image_id').references('id').inTable('images').onDelete('CASCADE').onUpdate('CASCADE');
      table.foreign('album_id').references('id').inTable('image_albums').onDelete('CASCADE').onUpdate('CASCADE');
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
