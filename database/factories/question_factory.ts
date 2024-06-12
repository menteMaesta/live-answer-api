import factory from '@adonisjs/lucid/factories'
import Question from '#models/question'
import { AnswerFactory } from '#database/factories/answer_factory'

export const QuestionFactory = factory
  .define(Question, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(5),
    }
  })
  .relation('answers', () => AnswerFactory)
  .build()
