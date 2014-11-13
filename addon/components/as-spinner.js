import Ember from 'ember';
import Spinner from 'spinjs';

export default Ember.Component.extend({
  classNames: ['spinner'],

  didInsertElement: function() {
    new Spinner({
      width: 2,
      length: 3,
      radius: 4,
      color: '#ffffff'
    }).spin(this.$()[0]);
  }
});
