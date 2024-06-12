import factory from '@adonisjs/lucid/factories'
import Question from '#models/question'

export const QuestionFactory = factory
  .define(Question, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(5),
    }
  })
  .build()
