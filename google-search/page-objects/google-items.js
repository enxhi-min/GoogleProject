const {I} = inject();
module.exports= {
    
 acceptCookieButton: {xpath: '//*[@id="L2AGLb"]/div'},
 field: 'Buscar',
 searchResult: {xpath: '//*[@id="search"]/div'},
 elementResult: {class: 'LC20lb MBeuO DKV0Md'},
 nextButton: {xpath: '//*[@id="pnnext"]/span[2]'},
 
 acceptCookie() {
    I.say('Accept cookie');
    I.click(this.acceptCookieButton);
},

};