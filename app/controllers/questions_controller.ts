import type { HttpContext } from '@adonisjs/core/http'
import { v4 as uuidv4 } from 'uuid'
import { storeValidator, showValidator } from '#validators/question'
import Question from '#models/question'

export default class QuestionsController {
  async store({ request, response }: HttpContext) {
    const { title } = await request.validateUsing(storeValidator)
    const question = await Question.create({ title, id: uuidv4() })
    const questionJson = question.serialize()

    response.send(questionJson)
  }

  async show({ request, response }: HttpContext) {
    const {
      params: { question_id: questionId },
    } = await request.validateUsing(showValidator)
    const question = await Question.findOrFail(questionId)
    const questionJson = question.serialize()

    response.send(questionJson)
  }

  async showFirst({ response }: HttpContext) {
    const question = await Question.firstOrFail()
    const questionJson = question.serialize()

    response.send(questionJson)
  }
}
