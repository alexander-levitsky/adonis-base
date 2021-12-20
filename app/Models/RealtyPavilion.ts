import {BaseModel, column, HasMany, hasMany} from '@ioc:Adonis/Lucid/Orm'
import PavilionSection from "App/Models/PavilionSection";

export default class RealtyPavilion extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column()
  public object_id: number

  @column()
  public year_built: number

  @column()
  public building_status_id: number

  @column()
  public status: number

  @column()
  public construction_ending: number

  @column()
  public min_area_cost: number

  @column()
  public cost_min: number

  @column()
  public name: string

  @column()
  public construction_finished: number

  @column()
  public count_flats: number

  @column()
  public view_action: boolean


  @hasMany(() => PavilionSection, {foreignKey: 'pavilion_id'})
  public sections: HasMany<typeof PavilionSection>

}
