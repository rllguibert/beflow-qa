

import { test, expect, devices, type Page} from '@playwright/test';

const { TodoPage } = require('../chatbot/util.spec');


test.describe("BeLeads Conversation Testing",() => {
  let todoPage;   

    test.beforeEach(async ({ page }) => {
      todoPage = new TodoPage(page);

     
      await todoPage.goto('https://beflow.opseeker.com/internal/beleads/index.html');
      
      });  
      
      


test('Scraping Multiple Elements', async ({ page }) => {

  // Create a locator that resolves to multiple elements
  let languageLinkLocator = page.locator('.central-featured div a');
  
  // Get the count of all the elements
  let languageLinkCount = await languageLinkLocator.count();
  
  // Iterate through the elements
  for (let i = 0; i < languageLinkCount; i++) {
      
      // Get the current element using our index
      let currentLanguageLink = languageLinkLocator.nth(i);
  
      // Get the current href from the element
      let languageHref = await currentLanguageLink.getAttribute('href');
  
      // Select the strong element within our current element, and get its inner text
      let languageName = await currentLanguageLink.locator('strong').innerText();
  
      // Log the href and the language name we scraped
      console.log(languageHref, languageName);
}
  });




test.only('Beleads Scraping Multiple Elements', async ({ page }) => {

  // Create a locator that resolves to multiple elements
  let conversationContainerLocator = page.locator('#conversationContainer div nth-child')
  
  // Get the count of all the elements
  let conversationContainerCount = await conversationContainerLocator.count();
  
  // Iterate through the elements
  for (let i = 0; i < conversationContainerCount; i++) {
      
      // Get the current element using our index
      let currentconversationContainer = conversationContainerLocator.nth(i);
  
      // Get the current href from the element
      let conversationDATATESTID = await currentconversationContainer.getAttribute('data-testid');


  
      // Log the href and the language name we scraped
      console.log(conversationDATATESTID);
}
  });




})