import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const dbConfig = defineConfig({
  connection: 'postgres',
  connections: {
    postgres: {
      client: 'pg',
      connection: {
        host: env.get('DB_HOST'),
        port: env.get('DB_PORT'),
        user: env.get('DB_USER'),
        password: env.get('DB_PASSWORD'),
        database: env.get('DB_DATABASE'),
        ...(env.get('NODE_ENV') === 'production'
          ? { ssl: { ca: readFileSync(resolve() + '/ca-certificate.crt') } }
          : undefined),
      },
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
})
export default dbConfig
