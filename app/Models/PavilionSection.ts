import {BaseModel, column, HasOne, hasOne} from '@ioc:Adonis/Lucid/Orm'
import Chess from "App/Models/Chess";

export default class PavilionSection extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column()
  public pavilion_id: number

  @column()
  public name: string

  @column()
  public floor_amount: number

  @column()
  public riser_amount: number

  @column()
  public view_action: boolean

  @hasOne(() => Chess, {foreignKey: 'id'})
  public chess: HasOne<typeof Chess>
}
