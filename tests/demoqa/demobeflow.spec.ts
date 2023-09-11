import { test, expect,  type Page  } from '@playwright/test';



test('test', async ({ page }) => {
    await page.goto('https://dbot-qa.opseeker.com/staging/demo/qanewchanges/index.html');
    await page.getByTestId('bubble-button-1').click();
    await page.getByTestId('bubble-no-testid').click();
    await page
    .getByPlaceholder('entre email')
    .fill('playwright@microsoft.com');
    await page.getByTestId('submit_textInput').click();
  });