import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Offers extends BaseSchema {
  protected tableName = 'offers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments();
      table.timestamps();
      table.integer('user_id').unsigned().index();
      table.integer('chess_id').unsigned().nullable().index().comment('Связь с шахмматкой');
      table.integer('cell_id').unsigned().nullable().index().comment('Связь с квартирой');
      table.integer('subregion_id').unsigned().nullable().index().comment('Связь с микрорайоном');
      table.text('images').defaultTo('[]').comment('Фотографии');
      table.enum('object_type', ['1', '2']).index().comment('1) Объект: Новостройки или Старый фонд');
      table.integer('object_id').unsigned().nullable().index().comment('2) Связь с новостройкой');
      table.string('address', 255).nullable().comment('3) Адрес');
      table.decimal('latitude', 6, 4).nullable().comment('Координаты - Широта');
      table.decimal('longitude', 6, 4).nullable().comment('Координаты - Долгота');
      table.decimal('area', 10, 2).nullable().nullable().comment('4) Общая площадь');
      table.integer('priceAll').unsigned().nullable().comment('5) Цена');
      table.integer('stage').unsigned().nullable().comment('6.1) Этаж');
      table.integer('building_height').unsigned().nullable().comment('6.2) Этажность');
      table.enum('room_type', ["zhiloeRoom", "nezhiloeRoom", "apartmentRoom", "zhiloeHouse", "partFlat", "apartRoom"]).comment('7) Назначение');
      table.enum('cnt_apart', ['', '0', 'zeroAp', 'oneAp', 'twoAp', 'threeAp', 'fourAp', 'allAp', 'studioAp', 'penthaus', "studio", 'multiAp']).defaultTo('').comment('8) Количество комнат');
      table.string('plan', 255).nullable().comment('9) Планировка - json');
      table.enum('interior', ['zeroInt', 'chernInt', 'predChistInt', 'chistInt', 'remInt', 'chastRemInt', 'needsRemInt', 'liveInt']).nullable().comment('10) Состояние');
      table.integer('kitchen_area').unsigned().nullable().comment('11) Площадь кухни');
      table.integer('heating_id').unsigned().nullable().index().comment('13.1) Тип отопления');
      table.integer('water_id').unsigned().nullable().index().comment('13.2) Тип водоснабжения');
      table.integer('sewage_id').unsigned().nullable().index().comment('13.3) Тип канализации');
      table.enum('checkout', ['Договор бронирования', 'Договор займа', 'Договор инвестирования', 'Договор купли-продажи', 'Договор о намерениях', 'Договор паенакопления', 'Договор переуступки', 'Договор переуступки по ФЗ-214', 'Договор переуступки по ФЗ-215', 'Договор подряда', 'Договор простого товарищества', 'Паевой взнос', 'Предварительный договор', 'Юстиция',]).nullable().comment('14) Оформление');
      table.enum('contract_total', ["0", "1"]).nullable().comment('15)  Сумма в договоре');
      table.json('commission').nullable().comment('16)  Коммиссия');
      table.text('description').nullable().comment('18) Описание');
      table.enum('contacts', [0, 1]).defaultTo('0').comment('18) Контакты: 0-профиль, 1-из контактов для объявлений');
      table.enum('status', ['draft', 'active', 'inactive', 'archive', 'disabled']).defaultTo('draft').comment('19) статус объявления');
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
