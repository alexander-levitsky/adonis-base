import {BaseModel, column} from '@ioc:Adonis/Lucid/Orm'

export default class Contact extends BaseModel {
  @column({isPrimary: true, serializeAs: null})
  public id: number

  @column()
  public name: string

  @column()
  public position: string

  @column()
  public phone: string

  @column()
  public email: string

  @column()
  public phone2: string

  @column()
  public email2: string

}
