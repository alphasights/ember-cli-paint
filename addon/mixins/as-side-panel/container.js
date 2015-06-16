import Ember from 'ember';

export default Ember.Mixin.create({
  classNameBindings: ['hasFooter:has-footer', 'hasHeader:has-header'],
  hasFooter: false,
  hasHeader: false
});
