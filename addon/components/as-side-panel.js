import Ember from 'ember';
import KeyEventsMixin from 'ember-cli-paint/mixins/key-events';
import TransitionDurationMixin from 'ember-cli-paint/mixins/transition-duration';
import InboundActions from 'ember-component-inbound-actions/inbound-actions';

export default Ember.Component.extend(KeyEventsMixin, TransitionDurationMixin, InboundActions, {
  classNameBindings: [':side-panel', 'isActive:active', 'isDrawerActive:drawer-active'],
  tagName: 'section',
  isDrawerActive: false,

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

    showDrawer: function() {
      this.set('isDrawerActive', true);
    },

    hideDrawer: function() {
      this.set('isDrawerActive', false);
    },

    toggleDrawer: function() {
      this.toggleProperty('isDrawerActive');
    }
  },

  keyEvents: {
    esc: function() {
      this.send('close');
    },

    leftArrow: function(event) {
      if (!Ember.$(event.target).is(':input')) {
        this.send('previous');
      }
    },

    rightArrow: function(event) {
      if (!Ember.$(event.target).is(':input')) {
        this.send('next');
      }
    }
  }
});
