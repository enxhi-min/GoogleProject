const {I} = inject();
module.exports= {

 acceptCookieButton: {xpath: '//*[@id="L2AGLb"]/div'},
 field: 'Buscar',
 result1: 'Caudalie - España',
 result2: 'Nuevo - Premier Cru',
 result3: 'Vinoperfect',
 result4: 'Vinoperfect',
 result5: 'Oferta de Bienvenida',

 result6: 'Comprar Caudalie a buen precio - Envíos gratis y en 24h',
 result7: 'CAUDALÍE – A5 Farmacia – Sevilla',
 result8: 'caudalie - Sephora',
 result9: 'Caudalie - Cosmética de Farmacia',
 
 
 acceptCookie() {
    I.say('Accept cookie');
    I.click(this.acceptCookieButton);
},

checkPage1() {
    I.see(this.result1);
    I.see(this.result2);
    I.see(this.result3);
    I.see(this.result4);
    I.see(this.result5);
},

checkPage2() {
    I.see(this.result6);
    I.see(this.result7);
    I.see(this.result8);
    I.see(this.result9);
},

};