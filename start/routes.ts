/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const QuestionsController = () => import('#controllers/questions_controller')
const AnswersController = () => import('#controllers/answers_controller')

router
  .group(() => {
    router.post('/questions', [QuestionsController, 'store'])
    router.get('/questions/:question_id', [QuestionsController, 'show'])
    router.post('/questions/:question_id/answers', [AnswersController, 'store'])
    router.get('/questions/:question_id/answers', [AnswersController, 'index'])
  })
  .prefix('/api')
