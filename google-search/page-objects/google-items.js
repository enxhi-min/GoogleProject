const {I} = inject();
module.exports= {
    
 acceptCookieButton: {xpath: '//*[@id="L2AGLb"]/div'},
 field: 'Buscar',
 searchResult: {xpath: '//*[@id="search"]/div'},
 elementResult: {xpath: '//a/h3'},
 nextButton: {xpath: '//*[@id="pnnext"]/span[2]'},
 
 acceptCookie() {
    I.say('Accept cookie');
    I.click(this.acceptCookieButton);
},

};