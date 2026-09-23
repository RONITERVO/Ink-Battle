import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests/browser', timeout: 45000, fullyParallel: true, workers: 4,
  use: { baseURL: 'http://127.0.0.1:4173', viewport: { width: 1280, height: 720 }, headless: true,
    trace: 'retain-on-failure', screenshot: 'only-on-failure' },
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }, { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', testMatch: '**/viewport.spec.js', use: { browserName: 'webkit' } }],
  webServer: { command: 'npm start', url: 'http://127.0.0.1:4173', reuseExistingServer: !process.env.CI },
  reporter: [['list'], ['html', { open: 'never' }]]
});
