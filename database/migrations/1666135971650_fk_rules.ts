import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  public async up() {
    this.schema.alterTable('carts', (table) => {
      table.foreign('user_id').references('users.id')
      table.foreign('product_id').references('products.id')
    })
  }

  public async down() {
    this.schema.alterTable('carts', (table) => {
      table.dropForeign('user_id')
      table.dropForeign('product_id')
    })
  }
}
