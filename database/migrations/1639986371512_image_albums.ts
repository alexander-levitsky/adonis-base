import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Database from "@ioc:Adonis/Lucid/Database";

export default class ImageAlbums extends BaseSchema {
  protected tableName = 'image_albums'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unsigned();
      Database.rawQuery(`ALTER TABLE ${this.tableName} AUTO_INCREMENT = 100000`).exec()

      table.integer('object_id').unsigned().index();
      table.integer('type_id').unsigned().nullable();
      table.string('name',128);
      table.integer('year').unsigned().nullable();
      table.integer('month').unsigned().nullable();
      table.integer('priority').unsigned().nullable().index();

      table.foreign('object_id').references('id').inTable('realty_objects').onDelete('CASCADE').onUpdate('CASCADE');
      table.foreign('type_id').references('id').inTable('image_album_types').onDelete('SET NULL').onUpdate('CASCADE');
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
