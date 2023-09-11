import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
 // fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  //forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  timeout: 600000,
  //retries: 1,
  //retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    testIdAttribute: 'data-testid',
    trace: 'on-first-retry',
    screenshot: "only-on-failure",
    viewport: {width: 180, height: 1080},
    actionTimeout: 20 * 1000,
    navigationTimeout: 50 * 1000,    
    isMobile: false
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {         
        ...devices['Desktop Chrome']
      },
      
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    {
       name: 'Pixel5',
       use: { ...devices['Pixel 5'] },
     },
     {
       name: 'iPhone12',
       use: { ...devices['iPhone 12'] },
     },

     {
      name: 'iphone13landscape',
      use: { ...devices['iPhone 13 Pro landscape'] },
    },     

     {
      name: 'Galaxy',
      use: {
        ...devices['Galaxy S9+'],
      },
  },
  {
      name: 'Nexus',
      use: {
        ...devices['Nexus 7'],
      },
  },
  {
      name: 'Pixel3',
      use: {
        ...devices['Pixel 3'],
      },
  },
  {
      name: 'iPad',
      use: {
        ...devices['iPad Mini'],
      },
  },
  {
      name: 'MotoG4',
      use: {
        ...devices['Moto G4'],
      },
  },
   {
       name: 'MicrosoftEdge',
       use: { 
        ...devices['Desktop Edge']
      },
     },
     {
      name: '1920x1080',
      use: { viewport:{width: 1920, height: 1080}},
    },

    {
      name: '1366x768',
      use: { viewport:{width: 1366, height: 768}},
    },

    {
      name: '1536x864',
      use: { viewport:{width: 1536, height: 864}},
    },

    {
      name: '1440x900',
      use: { viewport:{width: 1440, height: 900}},
    },

    {
      name: '1280x720',
      use: { viewport:{width: 1280, height: 720}},
    },

    {
      name: '810x1080',
      use: { viewport:{width: 810, height: 1080}},
    },

  ],

  
});
