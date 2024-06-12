import factory from '@adonisjs/lucid/factories'
import Answer from '#models/answer'

export const AnswerFactory = factory
  .define(Answer, async ({ faker }) => {
    return {
      message: faker.lorem.sentence(8),
    }
  })
  .build()
