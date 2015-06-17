import Ember from 'ember';

export default Ember.Mixin.create({
  navigationIndex: null,
  navigableModels: null,
  modelRouteParams: [],
  disableCycling: false,
  navigableModel: Ember.computed.alias('model'),
  firstModel: Ember.computed.equal('navigationIndex', 0),
  disableNext: Ember.computed.and('lastModel', 'disableCycling'),
  disablePrevious: Ember.computed.and('firstModel', 'disableCycling'),

  lastModel: Ember.computed('navigationIndex', 'navigableModels.[]', function() {
    return this.get('navigationIndex') === this.get('navigableModels.length') - 1;
  }),

  initializeNavigableModels: function() {
    if (this.get('navigableModels') == null) {
      this.set('navigableModels', []);
    }
  }.on('init'),

  initializeNavigationIndex: function() {
    if (this.get('navigationIndex') == null) {
      this.set('navigationIndex', this.get('navigableModels').indexOf(this.get('navigableModel')));
    }
  }.observes('navigableModel'),

  resetNavigationIndex: function() {
    this.set('navigationIndex', null);
  }.observes('navigableModels.[]'),

  navigate: function(step) {
    var models = this.get('navigableModels');
    var newIndex = this.get('navigationIndex') + step;

    if (newIndex < 0) {
      newIndex = models.get('length') + newIndex;
    }

    var newModel = models.objectAt(newIndex % models.get('length'));

    this.set('navigationIndex', newIndex);
    this.transitionToRoute(...this.get('modelRouteParams').concat(newModel.get('id')));
  },

  actions: {
    previous: function() {
      if (!this.get('disablePrevious')) {
        this.navigate(-1);
      }
    },

    next: function() {
      if (!this.get('disableNext')) {
        this.navigate(1);
      }
    }
  }
});
