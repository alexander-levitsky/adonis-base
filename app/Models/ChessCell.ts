import {BaseModel, column} from '@ioc:Adonis/Lucid/Orm'

export default class ChessCell extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column()
  public chess_id: number

  @column()
  public col: number

  @column()
  public row: number

  @column()
  public colspan: number

  @column()
  public rowspan: number

  @column()
  public planId: number

  @column()
  public pointers: string

  @column()
  public mark: boolean
}
