import { test } from '@japa/runner'
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
})
