# live-answer-api

JSON API server for coding challenge with PickFu

A small full-stack application that shows a question and allows the user to submit answers for that question.

## Installation

1. Clone the repository: `git clone git@github.com:menteMaesta/live-answer-api.git`
2. Navigate to the project directory: `cd live-answer-api`
3. Install dependencies `npm ci`
4. Start the project: `node ace serve --watch`
5. To run integration tests: `node ace test`

## Usage

This project is the backend of [live-answers](https://github.com/menteMaesta/live-answers) so you need to follow the instructions of live-answers's README as well.

## Configuration

1. Create an `.env` file using `.env.example` as a guide
2. For the integration tests create an `.env.test` file

```
NODE_ENV=test

DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=your_db
DB_PASSWORD=your_pswd
DB_DATABASE=your_db_name
DB_SSL=false
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

- Thanks to Adonisjs for their great framework.
- Thanks to Copilot for all its help, always straight to the point.

## Contact

For support or inquiries, contact us at [paulagomenr@gmail.com](mailto:paulagomenr@gmail.com).
