import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  classNameBindings: [':side-panel-header'],

  setHasHeader: Ember.on('init', function() {
    this.set('parentView.hasHeader', true);
  })
});
