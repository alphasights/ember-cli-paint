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
    var calculationId;

    if (scrollable != null) {
      (function repeatCalculation() {
        scrollable.send('recalculate');
        calculationId = requestAnimationFrame(repeatCalculation);
      })();

      Ember.run.later(function() {
        cancelAnimationFrame(calculationId);
      }, this.get('_recalculationDuration'));
    }
  }),

  _recalculationDuration: Ember.computed('transitionDuration', function() {
    return this.get('transitionDuration') + 100;
  }),

  actions: {
    toggleCollapse: function() {
      this.toggleProperty('isCollapsed');
      this.sendAction('toggleCollapse');
    }
  }
});
