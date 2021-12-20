import {BaseModel, column} from '@ioc:Adonis/Lucid/Orm'

export default class ChessRow extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column()
  public chess_id: number

  @column()
  public col: number

  @column()
  public name: string

  @column()
  public colspan: number

  @column()
  public rowspan: number
}
