import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '../../../core/server';

import { TestPluginPluginSetup, TestPluginPluginStart } from './types';
import { defineRoutes } from './routes';

export class TestPluginPlugin implements Plugin<TestPluginPluginSetup, TestPluginPluginStart> {
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('testPlugin: Setup');
    const router = core.http.createRouter();

    // Register server side APIs
    defineRoutes(router);

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('testPlugin: Started');
    return {};
  }

  public stop() {}
}
