import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, beforeUpdate, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cart extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public product_id: number
  @column()
  public user_id: number
  @column()
  public unit: number
  @column()
  public total: number

  @column.date({ autoCreate: true })
  public createdAt: DateTime

  @column.date({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static generateDate(cart: Cart) {
    if (!cart.createdAt) {
      cart.createdAt = cart.updatedAt = DateTime.now()
    }
  }
  @beforeUpdate()
  public static generateDateUpdate(cart: Cart) {
    return (cart.updatedAt = DateTime.now())
  }
}
