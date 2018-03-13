var makeBlueDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  console.log('TOP: ', top);
  this.$node.addClass('blue');
  console.log('LEFT: ', left);
 

};

makeBlueDancer.prototype = Object.create(makeDancer.prototype);
makeBlueDancer.prototype.constructor = makeBlueDancer;

makeBlueDancer.prototype.step = function(timeBetweenSteps){
    makeDancer.prototype.step.call(this, timeBetweenSteps);
    // this.$node.toggle();
}