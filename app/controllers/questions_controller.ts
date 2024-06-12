import type { HttpContext } from '@adonisjs/core/http'
import { v4 as uuidv4 } from 'uuid'
import { storeValidator } from '#validators/question'
import Question from '#models/question'

export default class QuestionsController {
  async store({ request, response }: HttpContext) {
    const { title } = await request.validateUsing(storeValidator)
    const question = await Question.create({ title, id: uuidv4() })
    const questionJson = question.serialize()

    response.send(questionJson)
  }
}
