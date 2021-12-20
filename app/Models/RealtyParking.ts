import {BaseModel, column} from '@ioc:Adonis/Lucid/Orm'

export default class RealtyParking extends BaseModel {
  @column({isPrimary: true, serializeAs: null})
  public object_id: number

  @column()
  public parking_underground: boolean

  @column()
  public parking_multilevel: boolean

  @column()
  public parking_type_roofed: boolean

  @column()
  public house_parking: boolean

}
