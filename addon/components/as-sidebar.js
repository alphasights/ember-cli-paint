import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':sidebar', 'isCollapsed:collapsed'],

  applicationName: null,
  currentUser: null,
  navigationItems: [],
  isCollapsed: false,

  actions: {
    toggleCollapse: function() {
      this.toggleProperty('isCollapsed');
      this.sendAction('toggleCollapse');
    },

    logout: function() {
      this.sendAction('logout');
    }
  },

  didInsertElement: function() {
    this.addObserver('isCollapsed', this, this.resetScrollableElements);
  },

  resetScrollableElements: function() {
    var duration = this.$().css('transition-duration');
    duration = (duration.indexOf("ms")>-1) ? parseFloat(duration) : parseFloat(duration) * 1000;

    var interval = window.setInterval(function() {
      Ember.$('.scrollable').TrackpadScrollEmulator('recalculate');
    }, 10);

    Ember.run.later(function() { window.clearInterval(interval); }, duration);
  }
});
