import { nxComponentTestingPreset } from '@nx/angular/plugins/component-testing';
import { defineConfig } from 'cypress';

export default defineConfig({
  // This is the default nx way (from the docs) and it is resolved to an absolute file path
  // of the component-index.html file
  component: nxComponentTestingPreset(__filename),
  // However the test still works with a relative file path like so:
  // component: {
  //   ...nxComponentTestingPreset(__filename),
  //   indexHtmlFile: './cypress/support/component-index.html',
  // },
});
