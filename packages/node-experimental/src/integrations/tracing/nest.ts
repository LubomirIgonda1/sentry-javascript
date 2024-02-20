import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
import { defineIntegration } from '@sentry/core';
import type { IntegrationFn } from '@sentry/types';

const _nestIntegration = (() => {
  return {
    name: 'Nest',
    setupOnce() {
      registerInstrumentations({
        instrumentations: [new NestInstrumentation({})],
      });
    },
  };
}) satisfies IntegrationFn;

/**
 * Nest framework integration
 *
 * Capture tracing data for nest.
 */
export const nestIntegration = defineIntegration(_nestIntegration);
