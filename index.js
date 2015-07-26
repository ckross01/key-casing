var _ = require('lodash');

module.exports = function(obj) {
  function keyMapper(v, k){
   if(_.isArray(v)) v = _(v).map(keyMapper).value();
   else if(_.isObject(v)) v = _(v).map(keyMapper).zipObject().value();
   return [_.capitalize(k), v];
  }

  return _(obj)
  .map(keyMapper)
  .zipObject()
  .value();
};
