import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'footer',
  classNameBindings: [':side-panel-footer'],

  setHasFooter: Ember.on('init', function() {
    this.set('parentView.hasFooter', true);
  })
});
