import ContainerMixin from 'ember-cli-paint/mixins/as-side-panel/container';
import Ember from 'ember';

export default Ember.Component.extend(ContainerMixin, {
  classNameBindings: [':side-panel-drawer', ':drawer']
});
