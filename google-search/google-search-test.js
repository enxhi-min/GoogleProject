
Feature('Search and log the results');
const {

    googleItems,

} = inject();

Scenario('test something', ({ I }) => {
    const randomName = 'caudalie';

    I.amOnPage('google.com');
    googleItems.acceptCookie();
    I.fillField(googleItems.field, randomName)
    I.pressKey('Enter');
    // TODO Check for for waitPageLoads
    I.wait(3);
    googleItems.checkPage1();
    I.click('Page 2')
    I.wait(3)
    googleItems.checkPage2();
    

});