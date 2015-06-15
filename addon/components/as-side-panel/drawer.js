import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':side-panel-drawer', ':drawer', 'hasFooter:has-footer'],

  hasFooter: false
});
