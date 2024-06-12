import { test } from '@japa/runner'
import { v4 as uuidv4 } from 'uuid'
import { QuestionFactory } from '#database/factories/question_factory'

test.group('Questions', () => {
  test('Store a question', async ({ client, route, assert }) => {
    const newQuestion = await QuestionFactory.makeStubbed()
    const questionJson = newQuestion.serialize()

    const response = await client.post(route('/api/questions')).json(questionJson)
    const responseBody = response.body()

    response.assertAgainstApiSpec()
    assert.equal(responseBody.title, questionJson.title)
  })

  test('Show a question', async ({ client, route, assert }) => {
    const questionId = uuidv4()
    const question = await QuestionFactory.merge({
      id: questionId,
    }).create()
    const questionJson = question.serialize()

    const response = await client.get(route('/api/questions/:question_id', [questionId]))
    const responseBody = response.body()

    response.assertAgainstApiSpec()
    assert.equal(responseBody.title, questionJson.title)
  })
})
