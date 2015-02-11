import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':scrollable', ':tse-scrollable'],

  onDidInsertElement: function() {
    Ember.run.schedule('afterRender', function() {
      this.$().TrackpadScrollEmulator();
    }.bind(this));
  }.on('didInsertElement')
});
