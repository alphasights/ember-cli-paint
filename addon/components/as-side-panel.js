import Ember from 'ember';
import KeyEventsMixin from 'ember-cli-paint/mixins/key-events';
import InboundActions from 'ember-component-inbound-actions/inbound-actions';

export default Ember.Component.extend(KeyEventsMixin, InboundActions, {
  classNameBindings: [':side-panel', 'isActive:active', 'isDrawerActive:drawer-active'],
  tagName: 'section',
  isDrawerActive: false,

  transitionDuration: Ember.computed(function() {
    var cssDuration = this.$().css('transition-duration');
    var cssDelay = this.$().css('transition-delay');
    var duration = parseFloat(cssDuration) + parseFloat(cssDelay);

    if (cssDuration.indexOf('ms') !== -1) {
      return duration;
    } else {
      return duration * 1000;
    }
  }).volatile(),

  onDidInsertElement: function() {
    Ember.run.schedule('afterRender', () => {
      this.set('isActive', true);
    });

    // TODO: Figure out why using the Ember `click` instance method resulted in
    // the event handler to be called twice.
    this.$().on('click', (event) => {
      var $target = Ember.$(event.target);
      var $nonBlurringElements = this.$('> div');

      if($target.closest($nonBlurringElements).length === 0) {
        this.send('close');
      }
    });
  }.on('didInsertElement'),

  actions: {
    close: function() {
      this.set('isActive', false);

      Ember.run.later(this, function() {
        this.sendAction('close');
      }, this.get('transitionDuration'));
    },

    next: function() {
      this.sendAction('next');
    },

    previous: function() {
      this.sendAction('previous');
    },

    toggleDrawer: function() {
      this.toggleProperty('isDrawerActive');
    }
  },

  keyEvents: {
    esc: function() {
      this.send('close');
    },

    leftArrow: function() {
      this.send('previous');
    },

    rightArrow: function() {
      this.send('next');
    }
  }
});
