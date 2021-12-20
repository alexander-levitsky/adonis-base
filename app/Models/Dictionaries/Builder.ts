import {BaseModel, column} from "@ioc:Adonis/Lucid/Orm";

export default class Builder extends BaseModel {
  @column({isPrimary: true,serializeAs: null})
  public id: number

  @column()
  public name: String
}
