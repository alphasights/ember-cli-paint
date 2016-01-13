import Ember from 'ember';

export var Navigator = Ember.Object.extend({
  controller: null,

  model: Ember.computed.oneWay('controller.navigableModel'),
  models: Ember.computed.oneWay('controller.navigableModels'),
  modelRouteParams: Ember.computed.oneWay('controller.modelRouteParams'),

  previousModel: null,
  nextModel: null,

  firstModel: Ember.computed.oneWay('models.firstObject'),
  lastModel: Ember.computed.oneWay('models.lastObject'),

  isFirstModel: Ember.computed('model', 'firstModel', function() {
    return this.get('model') === this.get('firstModel');
  }),

  isLastModel: Ember.computed('model', 'lastModel', function() {
    return this.get('model') === this.get('lastModel');
  }),

  disablePrevious: Ember.computed.oneWay('isFirstModel'),
  disableNext: Ember.computed.oneWay('isLastModel'),

  updatePreviousAndNextModels: Ember.on('init', Ember.observer('model', function() {
    this.set('previousModel', this.getPreviousModel());
    this.set('nextModel', this.getNextModel());
  })),

  getPreviousModel: function() {
    if (!this.get('isFirstModel')) {
      return this._getModelAtOffset(-1);
    }
  },

  getNextModel: function() {
    if (!this.get('isLastModel')) {
      return this._getModelAtOffset(1);
    }
  },

  getPreviousModelBeforeFirst: function() {
    return Ember.RSVP.resolve(this.get('firstModel'));
  },

  getNextModelAfterLast: function() {
    return Ember.RSVP.resolve(this.get('lastModel'));
  },

  _getModelAtOffset: function(offset) {
    var models = this.get('models');
    var index = models.indexOf(this.get('model'));

    if (index < 0) {
      return this.get('firstModel');
    } else {
      return models.objectAt(index + offset);
    }
  },

  previous: function() {
    if (this.get('disablePrevious')) { return; }

    let previousModel = this.get('previousModel') || this.get('firstModel');

    if (this.get('isFirstModel')) {
      this.getPreviousModelBeforeFirst().then((model) => {
        this._navigateToModel(model);
      });
    } else if (previousModel) {
      this._navigateToModel(previousModel);
    }
  },

  next: function() {
    if (this.get('disableNext')) { return; }

    let nextModel = this.get('nextModel') || this.get('lastModel');

    if (this.get('isLastModel')) {
      this.getNextModelAfterLast().then((model) => {
        this._navigateToModel(model);
      });
    } else if (nextModel) {
      this._navigateToModel(nextModel);
    }
  },

  _navigateToModel: function(model) {
    this.get('controller').transitionToRoute(...this.get('modelRouteParams').concat(model.get('id')));
  }
});

export default Ember.Mixin.create({
  navigableModel: Ember.computed.oneWay('model'),
  navigableModels: null,
  modelRouteParams: [],

  navigator: Ember.computed(function() {
    return Navigator.create({ controller: this });
  }),

  disablePrevious: Ember.computed.oneWay('navigator.disablePrevious'),
  disableNext: Ember.computed.oneWay('navigator.disableNext'),

  actions: {
    previous: function() {
      this.get('navigator').previous();
    },

    next: function() {
      this.get('navigator').next();
    }
  }
});
