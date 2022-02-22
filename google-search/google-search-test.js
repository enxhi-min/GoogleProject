
Feature('Search and log the results');
const {

    googleItems,

} = inject();

Scenario('test something', ({ I }) => {
    const randomName = 'caudalie';
    const numberOfPagesToCheck = 5;

    I.amOnPage('google.com');
    googleItems.acceptCookie();
    I.fillField(googleItems.field, randomName)
    I.pressKey('Enter');
    // TODO Check for for waitPageLoads
    I.wait(3);
   

    for(let currentPage = 1; currentPage <= numberOfPagesToCheck; currentPage++) {
    I.seeElement(googleItems.searchResult);
    I.grabValueFromAll(googleItems.elementResult);
    I.click(googleItems.nextButton);
    I.wait(3);
    }
    
});