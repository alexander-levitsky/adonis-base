import {BaseModel, column} from '@ioc:Adonis/Lucid/Orm'

export default class RealtyPayment extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column()
  public object_id: number

  @column()
  public military_ipoteka: boolean

  @column()
  public mat_capital: boolean

  @column()
  public ipoteka: boolean

  @column()
  public installments: boolean

}
