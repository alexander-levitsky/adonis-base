import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import {ModerateStatuses} from 'app/Contracts/Enums'

export default class RealtyObjects extends BaseSchema {
  protected tableName = 'realty_objects'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');


      table.bigInteger('crmid').unsigned().defaultTo(0).index().comment('id в CRM');

      table.integer('type_id').unsigned().nullable().index().comment('1-Новостройка, 2-КП или ТХ');

      table.string('title', 256).nullable().comment('Название');
      table.text('commission').nullable().comment('Коммиссия');
      table.text('commission_note').nullable().comment('Заметки по коммиссии');
      table.bigInteger('created').unsigned().nullable().comment('Дата создания (Unix)');
      table.bigInteger('update').unsigned().nullable().comment('Дата обновления (Unix)');

      table.decimal('latitude', 6, 4).index().nullable().comment('Координаты - Широта');
      table.decimal('longitude', 6, 4).index().nullable().comment('Координаты - Долгота');

      table.string('address', 256).nullable().comment('Адрес в произвольном формате');

      table.text('checkout').nullable().comment('ФЗ продажи');
      table.text('checkout2').nullable().comment('Варианты оформления');

      table.boolean('contract_total').nullable().comment('Сумма в договоре');

      table.boolean('surcharge_gas').nullable().comment('Наличие доплаты за подключение газа');
      table.bigInteger('gas_surcharge_price').unsigned().nullable().comment('Стоимость доплаты за подключение газа');

      table.boolean('surcharge_docs').nullable().comment('Наличие доплаты за документы');
      table.bigInteger('docs_surcharge_price').unsigned().nullable().comment('Стоимость доплаты за документы');

      table.boolean('surcharge_trash').nullable().comment('Наличие доплаты за оформление вывоза мусора');
      table.bigInteger('trash_surcharge_price').unsigned().nullable().comment('Стоимость доплаты за оформление вывоза мусора');

      table.boolean('surcharge_communications').nullable().comment('Наличие доплаты за проведение коммуникаций');
      table.bigInteger('communications_surcharge_price').unsigned().nullable().comment('Стоимость доплаты за проведение коммуникаций');

      table.boolean('surcharge_balcony').nullable().comment('Наличие доплаты за балкон');
      table.bigInteger('balcony_surcharge_price').unsigned().nullable().comment('Стоимость доплаты за балкон');

      table.text('room_types').nullable().comment('Назначение помещений');

      table.integer('ceiling_height').unsigned().nullable().comment('Высота потолков');
      table.integer('service_cost').unsigned().nullable().comment('Стоимость обслуживания за м2');
      table.text('house_territory').nullable().comment('Описание территории');
      table.text('instalment_payments_conditions').nullable().comment('Условия рассрочки');
      table.text('description').nullable();
      table.text('description_inside').nullable();
      table.integer('distance_sea').unsigned().nullable();
      table.text('official_site').nullable().comment('адрес сайта');

      table.text('status').nullable();

      table.decimal('min_square', 10, 2).nullable().comment('Минимальная квадратура');
      table.decimal('max_square', 10, 2).nullable().comment('Максимальная квадратура');
      table.integer('count_flats').unsigned().nullable().comment('Количество квартир');
      table.boolean('view_action').nullable().comment('Проводятся акции');

      table.boolean('favorite').nullable();

      table.integer('image_id').unsigned().nullable().index();
      table.integer('class_id').unsigned().nullable().index();
      table.integer('material_id').unsigned().nullable().index();
      table.integer('gas_id').unsigned().nullable().index();
      table.integer('sewage_id').unsigned().nullable().index();
      table.integer('heating_id').unsigned().nullable().index();
      table.integer('water_id').unsigned().nullable().index();
      table.integer('electricity_id').unsigned().nullable().index();
      table.integer('region_id').unsigned().nullable().index();
      table.integer('subregion_id').unsigned().nullable().index();
      table.integer('houseroad_id').unsigned().nullable().index();
      table.integer('types_id').nullable().index();

      table.enum('moderate_status', Object.values(ModerateStatuses)).defaultTo(ModerateStatuses.DEFAULT).index().comment('статус при модерации фоток');
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
