import { v4 as uuidv4 } from 'uuid';
import { storeValidator, showValidator } from '#validators/question';
import Question from '#models/question';
export default class QuestionsController {
    async store({ request, response }) {
        const { title } = await request.validateUsing(storeValidator);
        const question = await Question.create({ title, id: uuidv4() });
        const questionJson = question.serialize();
        response.send(questionJson);
    }
    async show({ request, response }) {
        const { params: { question_id: questionId }, } = await request.validateUsing(showValidator);
        const question = await Question.findOrFail(questionId);
        const questionJson = question.serialize();
        response.send(questionJson);
    }
    async showFirst({ response }) {
        const question = await Question.firstOrFail();
        const questionJson = question.serialize();
        response.send(questionJson);
    }
}
//# sourceMappingURL=questions_controller.js.map