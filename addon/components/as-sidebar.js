import Ember from 'ember';
import TransitionDurationMixin from 'ember-cli-paint/mixins/transition-duration';

export default Ember.Component.extend(TransitionDurationMixin, {
  classNameBindings: [':sidebar', 'isCollapsed:collapsed'],

  applicationName: null,
  currentUser: null,
  navigationItems: [],
  isCollapsed: false,
  actionsTarget: null,
  scrollable: null,

  actionItems: [{
    name: 'logout',
    label: 'Logout'
  }],

  _recalculateScrollable: Ember.observer('isCollapsed', function() {
    var scrollable = this.get('scrollable');

    if (scrollable != null) {
      scrollable.send('recalculate');
    }
  }),

  actions: {
    toggleCollapse: function() {
      this.toggleProperty('isCollapsed');
      this.sendAction('toggleCollapse');
    }
  }
});
