import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class BuildersToObject extends BaseModel {
  @column()
  public object_id: number

  @column()
  public builder_id: number
}
