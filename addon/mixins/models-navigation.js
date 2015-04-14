import Ember from 'ember';

export default Ember.Mixin.create({
  index: null,
  navigableModels: null,
  navigableModel: Ember.computed.alias('model'),
  modelRouteParams: [],
  disableCycling: false,

  initializeIndex: function() {
    if (this.get('index') == null) {
      this.set('index', this.get('navigableModels').indexOf(this.get('navigableModel')));
    }
  }.observes('navigableModel'),

  navigate: function(step) {
    var models = this.get('navigableModels');
    var newModelIndex = this.get('index') + step;

    if (newModelIndex < 0) {
      newModelIndex = models.get('length') + newModelIndex;
    }

    var newModel = models.objectAt(newModelIndex % models.get('length'));

    this.set('index', newModelIndex);
    this.transitionToRoute(...this.get('modelRouteParams').concat(newModel.get('id')));
  },

  lastModel: Ember.computed('index', function() {
    return this.get('index') === this.get('navigableModels.length') - 1;
  }),

  firstModel: Ember.computed.equal('index', 0),

  disableNext: Ember.computed.and('lastModel', 'disableCycling'),

  disablePrevious: Ember.computed.and('firstModel', 'disableCycling'),

  actions: {
    previous: function() {
      if (!this.get('disablePrevious')) {
        this.navigate(-1);
      }
    },

    next: function() {
      if (!this.get('disableNext')) {
        this.navigate(-1);
      }
    }
  }
});
