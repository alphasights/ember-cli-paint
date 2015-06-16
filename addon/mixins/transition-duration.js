import Ember from 'ember';

export default Ember.Mixin.create({
  transitionDuration: Ember.computed(function() {
    var cssDuration = this.$().css('transition-duration');
    var cssDelay = this.$().css('transition-delay');
    var duration = parseFloat(cssDuration) + parseFloat(cssDelay);

    if (cssDuration.indexOf('ms') !== -1) {
      return duration;
    } else {
      return duration * 1000;
    }
  }).volatile(),
});
