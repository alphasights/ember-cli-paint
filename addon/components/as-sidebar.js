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
    this.$().velocity({
      opacity: 1
    }, {
      duration: 325,
      progress: function() {
        Ember.$('.scrollable').TrackpadScrollEmulator('recalculate');
      }
    });
  }
});
