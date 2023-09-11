import { test, expect} from '@playwright/test';


test.describe.parallel('API Testing', () => {
    const baseUrl = 'https://tulum.opseeker.com/tulum/tulumsmartsurvey';

    test('Extract Tulum conversation from url', async ({ request }) => {

        const response = await request.get(`${baseUrl}/conversations/conversation.json`)
        expect(response.status()).toBe(200)

        const respondeBody = JSON.parse( await response.text())
        //console.log(respondeBody)

       // await page.$eval(respondeBody.type.id).click();

        expect(respondeBody.version).toBe(2)
        expect(respondeBody.first).toBe(0)
        expect(respondeBody.elements).toBe(Object)
/*
        expect(respondeBody.data.id).toBe(2)

        expect(respondeBody.data.first_name).toBe('Janet')

        expect(respondeBody.data.last_name).toBe('Weaver')*/

    })

    

  

})