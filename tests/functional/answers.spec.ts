import { test } from '@japa/runner'
import { v4 as uuidv4 } from 'uuid'
import { QuestionFactory } from '#database/factories/question_factory'
import { AnswerFactory } from '#database/factories/answer_factory'

test.group('Answers', () => {
  test('Show all answers', async ({ client, route, assert }) => {
    const question = await QuestionFactory.merge({ id: uuidv4() }).create()
    const questionJson = question.serialize()
    const answerData = [
      { id: uuidv4(), question_id: questionJson.id },
      { id: uuidv4(), question_id: questionJson.id },
      { id: uuidv4(), question_id: questionJson.id },
    ]
    const answers = await AnswerFactory.merge(answerData).createMany(3)
    const answersJson = answers.map((answer) => answer.serialize())

    const response = await client.get(route('/api/questions/:question_id/answers', [question.id]))
    const responseBody = response.body()

    response.assertAgainstApiSpec()
    assert.equal(responseBody.length, answersJson.length)
  })

  test('Store an answer', async ({ client, route, assert }) => {
    const questionId = uuidv4()
    await QuestionFactory.merge({
      id: questionId,
    }).create()
    const newAnswer = await AnswerFactory.makeStubbed()
    const answerJson = newAnswer.serialize()

    const response = await client
      .post(route('/api/questions/:question_id/answers', [questionId]))
      .json(answerJson)
    const responseBody = response.body()

    response.assertAgainstApiSpec()
    assert.equal(responseBody.message, answerJson.message)
  })
})
