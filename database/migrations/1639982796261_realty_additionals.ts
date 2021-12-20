import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RealtyAdditionals extends BaseSchema {
  protected tableName = 'realty_additionals'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {

      table.integer('object_id').unsigned().unique();
      table.boolean('concierge').nullable().comment('Наличие консержа');
      table.boolean('elevator').nullable().comment('Наличие лифта');
      table.boolean('children_area').nullable().comment('Наличие детской площадки');
      table.boolean('landscape_decore').nullable();
      table.boolean('sport_area').nullable();
      table.boolean('spa').nullable();
      table.boolean('fitness').nullable();
      table.boolean('pool').nullable();
      table.boolean('kindergarten').nullable();
      table.boolean('tennis_court').nullable();
      table.boolean('recreation_zone').nullable();
      table.boolean('fountain').nullable();
      table.boolean('garden').nullable();
      table.boolean('sauna').nullable();
      table.boolean('restaurant').nullable();
      table.boolean('billiards').nullable();
      table.boolean('kpp').nullable();
      table.boolean('helicopter_landing_area').nullable();
      table.boolean('commercial_property').nullable();
      table.boolean('cctv_surveillance').nullable();
      table.boolean('new').nullable();
      table.boolean('black_list').nullable();
      table.boolean('nedvex').nullable();

      table.foreign('object_id').references('id').inTable('realty_objects').onDelete('CASCADE').onUpdate('CASCADE');

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
