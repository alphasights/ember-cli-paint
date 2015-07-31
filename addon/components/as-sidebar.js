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
    var self = this;
    var calculationId;

    if (scrollable != null) {
      (function repeatCalculation() {
        scrollable.send('recalculate');
        self.sendAction('onToggleAnimation');
        calculationId = requestAnimationFrame(repeatCalculation);
      })();

      Ember.run.later(() => {
        cancelAnimationFrame(calculationId);
        this.sendAction('onToggleAnimationEnd');
      }, this.get('transitionDuration'));
    }
  }),

  actions: {
    toggleCollapse: function() {
      this.toggleProperty('isCollapsed');
      this.sendAction('onToggleCollapse');
    }
  }
});
