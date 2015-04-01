import Ember from 'ember';
import KeyEventsMixin from 'ember-cli-paint/mixins/key-events';

export default Ember.Component.extend(KeyEventsMixin, {
  classNameBindings: [':side-panel', 'isActive:active'],
  tagName: 'article',

  initialWidth: null,

  onDidInsertElement: function() {
    this.set('isActive', true);
    this.set('initialWidth', this.$('> div').width());

    this.$('> div').velocity({
      right: 0
    }, {
      duration: 200
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

      this.$('> div').velocity({
        right: `-${this.get('initialWidth')}px`
      }, {
        duration: 200,

        complete: (() => {
          this.sendAction('close');
        })
      });
    },

    next: function() {
      this.sendAction('next');
    },

    previous: function() {
      this.sendAction('previous');
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
