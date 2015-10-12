import Ember from 'ember';
import TransitionDurationMixin from 'ember-cli-paint/mixins/transition-duration';

export default Ember.Component.extend(TransitionDurationMixin, {
  classNameBindings: [':main-navigation'],

  applicationName: null,
  currentUser: null,
  navigationItems: [],
  actionsTarget: null,
  scrollable: null,

  navigationLinkItems: Ember.computed('navigationItems.[]', function() {
    return this.get('navigationItems').map(function(item) {
      item.iconClass = `icon-${item.id}`;
      return item;
    });
  }),

  actionItems: [{
    name: 'logout',
    label: 'Logout'
  }]
});
