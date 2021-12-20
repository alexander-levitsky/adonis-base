import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ContactsToObject extends BaseModel {
  @column()
  public object_id: number

  @column()
  public contact_id: number
}
