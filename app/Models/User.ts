import {DateTime} from 'luxon'
import {BaseModel, column} from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column.dateTime({autoCreate: true})
  public createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  public updatedAt: DateTime

  @column()
  public invited_by: number

  @column.dateTime()
  public payment_untill: DateTime

  @column.dateTime()
  public email_verified_at: DateTime

  @column()
  public phone: String

  @column()
  public email: String

  @column()
  public firstname: String

  @column()
  public lastname: String

  @column()
  public ads_phone: String

  @column()
  public ads_email: String

  @column()
  public ads_firstname: String

  @column()
  public ads_lastname: String

  @column()
  public agency: String

  @column()
  public status: String

  @column()
  public token: String

}
