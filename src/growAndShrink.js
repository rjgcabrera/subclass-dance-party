var makeDancerGrowandShrink = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('growAndShrink');
 
 

};

makeDancerGrowandShrink.prototype = Object.create(makeDancer.prototype);
makeDancerGrowandShrink.prototype.constructor = makeDancerGrowandShrink;

makeDancerGrowandShrink.prototype.step = function(timeBetweenSteps){
    makeDancer.prototype.step.call(this, timeBetweenSteps);
    // this.$node.toggle();
}