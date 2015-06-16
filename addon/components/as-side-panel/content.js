import ContainerMixin from 'ember-cli-paint/mixins/as-side-panel/container';
import Ember from 'ember';

export default Ember.Component.extend(ContainerMixin, {
  tagName: 'article',
  classNameBindings: [':side-panel-content', ':content']
});
