import {ModerateStatuses} from 'App/Contracts/Enums'

import {BaseModel, column, HasOne, hasOne} from '@ioc:Adonis/Lucid/Orm'

import RealtyAdditional from "App/Models/RealtyAdditional";
import RealtyParking from "App/Models/RealtyParking";
import RealtyPayment from "App/Models/RealtyPayment";

//import Builder from "App/Models/Dictionaries/Builder";

export default class RealtyObject extends BaseModel {

  @column({isPrimary: true})
  public id: number

  @column({serializeAs: null})
  public crmid: number

  @column()
  public type_id: number

  @column()
  public title: string

  @column()
  public commission: string

  @column()
  public commission_note: string

  @column()
  public created: number

  @column()
  public update: number

  @column()
  public latitude: number

  @column()
  public longitude: number

  @column()
  public address: string

  @column()
  public checkout: string

  @column()
  public checkout2: string

  @column()
  public contract_total: boolean

  @column()
  public surcharge_gas: boolean

  @column()
  public gas_surcharge_price: number

  @column()
  public surcharge_docs: boolean

  @column()
  public docs_surcharge_price: number

  @column()
  public surcharge_trash: boolean

  @column()
  public trash_surcharge_price: number

  @column()
  public surcharge_communications: boolean

  @column()
  public communications_surcharge_price: number

  @column()
  public surcharge_balcony: boolean

  @column()
  public balcony_surcharge_price: number

  @column()
  public room_types: string

  @column()
  public ceiling_height: number

  @column()
  public service_cost: number

  @column()
  public house_territory: string

  @column()
  public instalment_payments_conditions: string

  @column()
  public description: string

  @column()
  public description_inside: string

  @column()
  public distance_sea: number

  @column()
  public status: string

  @column()
  public min_square: number

  @column()
  public max_square: number

  @column()
  public count_flats: number

  @column()
  public view_action: boolean

  @column()
  public favorite: boolean

  @column({serializeAs: null})
  public image_id: number

  @column({serializeAs: null})
  public class_id: number

  @column({serializeAs: null})
  public material_id: number

  @column({serializeAs: null})
  public gas_id: number

  @column({serializeAs: null})
  public sewage_id: number

  @column({serializeAs: null})
  public heating_id: number

  @column({serializeAs: null})
  public water_id: number

  @column({serializeAs: null})
  public electricity_id: number

  @column({serializeAs: null})
  public region_id: number

  @column({serializeAs: null})
  public subregion_id: number

  @column({serializeAs: null})
  public houseroad_id: number

  @column({serializeAs: null})
  public types_id: number

  @column({serializeAs: null})
  public moderate_status: ModerateStatuses


  @hasOne(() => RealtyAdditional, {foreignKey: 'object_id'})
  public realtyAdditional: HasOne<typeof RealtyAdditional>

  @hasOne(() => RealtyParking, {foreignKey: 'object_id'})
  public realtyParking: HasOne<typeof RealtyParking>

  @hasOne(() => RealtyPayment, {foreignKey: 'object_id'})
  public realtyPayment: HasOne<typeof RealtyPayment>

  // @hasManyThrough([() => Builder, () => RealtyPayment], 'object_id')
  // public builders: HasOne<typeof RealtyPayment>


  // return $this->belongsToMany(Builder::class, 'builders_to_object', 'object_id', 'builder_id');


}
