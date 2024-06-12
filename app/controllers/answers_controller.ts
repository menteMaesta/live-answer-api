import type { HttpContext } from '@adonisjs/core/http'
import { v4 as uuidv4 } from 'uuid'
import { storeValidator } from '#validators/answer'
import Question from '#models/question'
import Answer from '#models/answer'

export default class AnswersController {
  async store({ request, response }: HttpContext) {
    const {
      params: { question_id: questionId },
      message,
    } = await request.validateUsing(storeValidator)
    const question = await Question.findOrFail(questionId)
    if (question.id) {
      const answer = await Answer.create({ message, questionId, id: uuidv4() })
      const answerJson = answer.serialize()
      response.send(answerJson)
    } else {
      response.status(404).send({ message: 'Question not found' })
    }
  }
}
