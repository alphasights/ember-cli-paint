import Ember from 'ember';

const keyToEventMap = {
  27: 'esc',
  37: 'leftArrow',
  38: 'upArrow',
  39: 'rightArrow',
  40: 'downArrow'
};

export default Ember.Mixin.create({
  mergedProperties: ['keyEvents'],
  keyEvents: {},

  setupKeyHandling: function() {
    this.$(document).on(`keyup.${this.get('elementId')}`, (event) => {
      var key = (keyToEventMap[event.keyCode]) ? keyToEventMap[event.keyCode] : event.keyCode;
      var keyEvent = this.get('keyEvents')[key];

      if (keyEvent) {
        keyEvent.call(this, event);
      }
    });
  }.on('didInsertElement'),

  tearDownKeyHandling: function() {
    this.$(document).off(`keyup.${this.get('elementId')}`);
  }.on('willDestroyElement')
});
