// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CartsController {
  public async addProduct({ request, response }) {

    return response.send(request.body())
  }
}
