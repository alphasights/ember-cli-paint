import Ember from 'ember';

export default Ember.Mixin.create({
  navigableModels: null,
  modelRouteParams: [],
  disableCycling: false,
  navigableModel: Ember.computed.alias('model'),
  previousModel: null,
  nextModel: null,

  isFirstModel: Ember.computed('navigableModel', 'navigableModels.[]', function() {
    return Ember.isEqual(this.get('navigableModel'), this.get('navigableModels.firstObject'));
  }),
  isLastModel: Ember.computed('navigableModel', 'navigableModels.[]', function() {
    return Ember.isEqual(this.get('navigableModel'), this.get('navigableModels.lastObject'));
  }),

  disablePrevious: Ember.computed.and('isFirstModel', 'disableCycling'),
  disableNext: Ember.computed.and('isLastModel', 'disableCycling'),

  updatePreviousAndNextModels: Ember.observer('navigableModel', function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      this.set('previousModel', this._getPreviousModel());
      this.set('nextModel', this._getNextModel());
    });
  }),

  _getPreviousModel: function() {
    if (this.get('isFirstModel')) {
      return this.get('navigableModels.lastObject');
    } else {
      return this._getModelAtOffset(-1);
    }
  },

  _getNextModel: function() {
    if (this.get('isLastModel')) {
      return this.get('navigableModels.firstObject');
    } else {
      return this._getModelAtOffset(1);
    }
  },

  _getModelAtOffset: function(offset) {
    var index = this.get('navigableModels').indexOf(this.get('navigableModel'));

    if (index < 0) {
      return this.get('navigableModels.firstObject');
    } else {
      return this.get('navigableModels').objectAt(index + offset);
    }
  },

  _navigateToModel: function(model) {
    this.transitionToRoute(...this.get('modelRouteParams').concat(model.get('id')));
  },

  actions: {
    previous: function() {
      if (!this.get('disablePrevious')) {
        this._navigateToModel(this.get('previousModel'));
      }
    },

    next: function() {
      if (!this.get('disableNext')) {
        this._navigateToModel(this.get('nextModel'));
      }
    }
  }
});
