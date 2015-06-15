import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':side-panel-main', ':main', 'hasFooter:has-footer'],

  hasFooter: false
});
