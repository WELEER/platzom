const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom' , function() {

    it('Test_1', function () {

          const conversion =  platzom('Programar');
          expect(conversion).to.equal('Program')

     })

     it('Test_2', function () {

          const conversion = platzom('Zorro')
          const conversion2 = platzom('Zarpar')

          expect(conversion).to.equal('Zorrope')
          expect(conversion2).to.equal('Zarppe')
      })

      it('Test_3', function () {

          const conversion =  platzom('abecedario')
          expect(conversion).to.equal('abece-dario')

       })

       it('Test_4', function () {

          const conversion =  platzom('sometemos')
          expect(conversion).to.equal('SoMeTeMoS')

        })


})
