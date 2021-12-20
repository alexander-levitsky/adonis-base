import {BaseModel, column, HasMany, hasMany} from '@ioc:Adonis/Lucid/Orm'
import ChessCol from "App/Models/ChessCol";
import ChessRow from "App/Models/ChessRow";
import ChessCell from "App/Models/ChessCell";

export default class Chess extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column()
  public total: number

  @column()
  public updated: number

  @hasMany(() => ChessCol, {foreignKey: 'chess_id'})
  public cols: HasMany<typeof ChessCol>

  @hasMany(() => ChessRow, {foreignKey: 'chess_id'})
  public rows: HasMany<typeof ChessRow>

  @hasMany(() => ChessCell, {foreignKey: 'chess_id'})
  public cells: HasMany<typeof ChessCell>
}
