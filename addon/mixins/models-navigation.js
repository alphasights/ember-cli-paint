import Ember from 'ember';

export default Ember.Mixin.create({
  navigableModels: null,
  modelRouteParams: [],
  disableCycling: false,
  navigableModel: Ember.computed.alias('model'),

  isFirstModel: Ember.computed('navigableModel', 'navigableModels.[]', function() {
    return Ember.isEqual(this.get('navigableModel'), this.get('navigableModels.firstObject'));
  }),
  isLastModel: Ember.computed('navigableModel', 'navigableModels.[]', function() {
    return Ember.isEqual(this.get('navigableModel'), this.get('navigableModels.lastObject'));
  }),

  disablePrevious: Ember.computed.and('isFirstModel', 'disableCycling'),
  disableNext: Ember.computed.and('isLastModel', 'disableCycling'),

  navigateToPrevious: function() {
    var newModel;

    if (this.get('isFirstModel')) {
      newModel = this.get('navigableModels.lastObject');
    } else {
      newModel = this._getModelAtOffset(-1);
    }

    this._navigateToModel(newModel);
  },

  navigateToNext: function() {
    var newModel;

    if (this.get('isLastModel')) {
      newModel = this.get('navigableModels.firstObject');
    } else {
      newModel = this._getModelAtOffset(1);
    }

    this._navigateToModel(newModel);
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
        this.navigateToPrevious();
      }
    },

    next: function() {
      if (!this.get('disableNext')) {
        this.navigateToNext();
      }
    }
  }
});
