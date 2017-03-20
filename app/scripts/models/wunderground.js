var Backbone = require('backbone');

var Wunderground = Backbone.Model.extend({
  urlRoot: function(){
    // return 'https://api.wunderground.com/api/1a11b11566a747ab/conditions/q/SC/Inman.json';

  },
sync: function(method,model,options){
  options = options || {};
  options.dataType = 'jsonp'
  return Backbone.Model.prototype.sync.call(this, method, model, options);
},
parse: function(data){
  return data.current_observation;
// console.log(data.current_observation);
}
});

 //for youtube need a collection

module.exports = {
  Wunderground
};
