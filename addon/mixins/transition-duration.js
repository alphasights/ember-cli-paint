import Ember from 'ember';

export default Ember.Mixin.create({
  transitionDuration: Ember.computed(function() {
    var cssDuration = this.$().css('transition-duration');
    var cssDelay = this.$().css('transition-delay');
    var duration = parseFloat(cssDuration) + parseFloat(cssDelay);
    var animationCompleteDelayInMs = 100;

    if (cssDuration.indexOf('ms') === -1) {
      duration = duration * 1000;
    }

    return duration + animationCompleteDelayInMs;
  }).volatile()
});
