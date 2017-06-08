'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.default = platzom;
function platzom(str) {

   var traduccion = str;

   // primera condicion
   if (str.toLowerCase().endsWith('ar')) {

      traduccion = str.slice(0, -2);
   }

   //Segunda condicion
   if (str.toLowerCase().startsWith('z')) {

      traduccion += 'pe';
   }

   var voltearString = function voltearString(str) {
      return str.split('').reverse().join('');
   };

   //Tercera regla
   var tamano = traduccion.length;

   if (traduccion.length >= 10) {

      var primera = traduccion.slice(0, Math.round(tamano / 2));
      var segundo = traduccion.slice(Math.round(tamano / 2));

      traduccion = primera + '-' + segundo;
   }

   //Cuarta regla

   if (str == voltearString(str)) {
      var tra = '';
      var bandera = true;

      for (var i = 0; i < str.length; i++) {
         var carcater = str.charAt(i);

         tra += bandera ? carcater.toUpperCase() : carcater.toLowerCase();
         bandera = !bandera;
      }

      return tra;
   }

   return traduccion;
}