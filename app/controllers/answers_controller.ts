import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import transmit from '@adonisjs/transmit/services/main'
import { v4 as uuidv4 } from 'uuid'
import { storeValidator, indexValidator } from '#validators/answer'
import Question from '#models/question'
import Answer from '#models/answer'

export default class AnswersController {
  async index({ request, response }: HttpContext) {
    const {
      params: { question_id: questionId },
    } = await request.validateUsing(indexValidator)
    const answers = await db
      .from('answers')
      .where('question_id', questionId)
      .orderBy('created_at', 'desc')
      .limit(100)
    response.send(answers)
  }

  async store({ request, response }: HttpContext) {
    const {
      params: { question_id: questionId },
      message,
    } = await request.validateUsing(storeValidator)
    const question = await Question.findOrFail(questionId)
    if (question.id) {
      const answer = await Answer.create({ message, questionId, id: uuidv4() })
      const answerJson = answer.serialize()
      transmit.broadcast('newAnswer', answerJson)
      response.send(answerJson)
    } else {
      response.status(404).send({ message: 'Question not found' })
    }
  }
}
