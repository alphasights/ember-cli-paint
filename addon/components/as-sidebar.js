import Ember from 'ember';
import TransitionDurationMixin from 'ember-cli-paint/mixins/transition-duration';

export default Ember.Component.extend(TransitionDurationMixin, {
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

  actions: {
    toggleCollapse: function() {
      this.toggleProperty('isCollapsed');
      this.sendAction('toggleCollapse');
    }
  }
});
