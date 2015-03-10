
var makeLargeDancer = function(top, left, timeBetweenSteps){
   makeDancer.call(this, top, left, timeBetweenSteps);
   this.$node.addClass('largeDancer');
   //this.timeBetweenSteps=timeBetweenSteps;
 };

makeLargeDancer.prototype = Object.create(makeDancer.prototype);
makeLargeDancer.prototype.constructor = makeLargeDancer;
  
makeLargeDancer.prototype.step = function(){
  var oldStep = makeDancer.prototype.step;
  // call the old version of step at the beginning of any call to this new version of step
  oldStep.call(this);
  // console.log("this: ", this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // console.log(this.$node);
  this.$node.toggleClass(".largeDancer");
  this.$node.toggle();
  
  
};


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function