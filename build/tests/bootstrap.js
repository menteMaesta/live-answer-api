import { assert } from '@japa/assert';
import { apiClient } from '@japa/api-client';
import app from '@adonisjs/core/services/app';
import { pluginAdonisJS } from '@japa/plugin-adonisjs';
import testUtils from '@adonisjs/core/services/test_utils';
export const plugins = [
    assert({ openApi: { schemas: [app.makePath('open_api_schema.yaml')] } }),
    apiClient(),
    pluginAdonisJS(app),
];
export const runnerHooks = {
    setup: [() => testUtils.db().truncate()],
    teardown: [],
};
export const configureSuite = (suite) => {
    if (['browser', 'functional', 'e2e'].includes(suite.name)) {
        return suite.setup(() => testUtils.httpServer().start());
    }
};
//# sourceMappingURL=bootstrap.js.map