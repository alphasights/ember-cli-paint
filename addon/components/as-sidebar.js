import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':sidebar', 'isCollapsed:collapsed'],

  applicationName: null,
  currentUser: null,
  navigationItems: [],
  isCollapsed: false,
  actionsTarget: null,

  actionItems: [{
    name: 'logout',
    label: 'Logout'
  }],

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

  actions: {
    toggleCollapse: function() {
      this.toggleProperty('isCollapsed');
      this.sendAction('toggleCollapse');
    }
  },

  didInsertElement: function() {
    this.addObserver('isCollapsed', this, this.updateScrollableElements);
  },

  updateScrollableElements: function() {
    var interval = window.setInterval(function() {
      Ember.$('.scrollable').TrackpadScrollEmulator('recalculate');
    }, 10);

    Ember.run.later(function() {
      window.clearInterval(interval);
    }, this.get('transitionDuration'));
  }
});
