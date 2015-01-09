import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':has-tip', 'tooltipPositionClass'],
  attributeBindings: ['ariaHaspopup:aria-haspopup', 'dataTooltip:data-tooltip', 'title'],

  ariaHaspopup: 'true',
  dataTooltip: '',
  tooltipPosition: 'bottom',

  tooltipPositionClass: function() {
    return 'tip-' + this.get('tooltipPosition');
  }.property('tooltipPosition'),

  onDidInsertElement: function() {
    Ember.$(document).foundation({ tooltip: {} });
  }.on('didInsertElement')
});
