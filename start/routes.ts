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

router
  .group(() => {
    router.post('/questions', [QuestionsController, 'store'])
  })
  .prefix('/api')
