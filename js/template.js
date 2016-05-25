exports.Template = function(test){
  this.test = test;
}

exports.Template.prototype.print = function() {
  return "Hello " + this.test;
}
