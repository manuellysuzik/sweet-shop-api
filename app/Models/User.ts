import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
import bcrypt from 'bcrypt'
import { DateTime } from 'luxon'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public readonly id: number
  @column()
  public email: string
  @column()
  public username: string
  @column()
  public password: string

  @beforeSave()
  public static async generateHashPassword(user: User) {
    if (user.$dirty.password) user.password = bcrypt.hashSync(user.password, 4)
  }
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
