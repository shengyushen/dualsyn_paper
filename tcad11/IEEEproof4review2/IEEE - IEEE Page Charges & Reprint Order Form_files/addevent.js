/*
AddEvent Manager, revised 11 June 2005
(c) 2005 Angus Turnbull, TwinHelix Designs http://www.twinhelix.com

Licensed under the CC-GNU LGPL, version 2.1 or later:
http://creativecommons.org/licenses/LGPL/2.1/
This is distributed WITHOUT ANY WARRANTY; without even the implied
warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
*/

var aeOL = [];
function addEvent(o, n, f, l)
{
 var d = 'addEventListener', h = 'on' + n, t, a;
 if (o[d] && !l) return o[d](n, f, false);

 if (!o.aE)
 {
  o.aE = {};
  aeOL[aeOL.length] = o;
 }
 t = o.aE[n];
 if (!t) t = o.aE[n] = [[]];
 a = t[t.length - 1];

 if (o[h] && o[h].aE) a[a.length] = f;
 else
 {
  a = t[t.length] = o[h] ? [o[h], f] : [f];
  o[h] = function(e)
  {
   e = e || window.event;
   var r = true, i;
   for (i = 0; i < a.length; i++)
   {
    o._f = a[i];
    r = o._f(e) != false && r;
   }
   return r;
  }
  o[h].aE = 1;
 }
};
addEvent(window, 'unload', function() {
 var o, n;
 for (o = 0; o < aeOL.length; o++)
 {
  for (n in o.aE) o['on' + n] = null;
  o.aE = null;
 }
});
