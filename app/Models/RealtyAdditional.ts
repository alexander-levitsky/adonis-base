import {BaseModel, column} from '@ioc:Adonis/Lucid/Orm'

export default class RealtyAdditional extends BaseModel {

  @column({isPrimary: true, serializeAs: null})
  public object_id: number

  @column()
  public concierge: boolean

  @column()
  public elevator: boolean

  @column()
  public children_area: boolean

  @column()
  public landscape_decore: boolean

  @column()
  public sport_area: boolean

  @column()
  public spa: boolean

  @column()
  public fitness: boolean

  @column()
  public pool: boolean

  @column()
  public tennis_court: boolean

  @column()
  public kindergarten: boolean

  @column()
  public recreation_zone: boolean

  @column()
  public fountain: boolean

  @column()
  public garden: boolean

  @column()
  public sauna: boolean

  @column()
  public restaurant: boolean

  @column()
  public kpp: boolean

  @column()
  public helicopter_landing_area: boolean

  @column()
  public commercial_property: boolean

  @column()
  public cctv_surveillance: boolean

  @column()
  public new: boolean

  @column()
  public black_list: boolean

  @column({serializeAs: null})
  public nedvex: boolean

}
