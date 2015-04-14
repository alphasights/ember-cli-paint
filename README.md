# Ember-cli-paint

[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-paint.svg)](http://emberobserver.com/addons/ember-cli-paint)

`ember-cli-paint` is an Ember addon that adds [Paint](https://github.com/alphasights/paint) components to your application.

More specifically it does two things:

- Add core libraries to your project dependencies

```
app.import(path.join(app.bowerDirectory, 'paint/paint.scss'));
app.import(path.join(app.bowerDirectory, 'modernizr/modernizr.js'));
app.import(path.join(app.bowerDirectory, 'foundation/js/foundation/foundation.js'));
```

This means that after installing ember-cli-paint you'll be able to use paint css straight away.

- Expose Ember components

### Example: Tooltip Component

![](http://cl.ly/image/2h1A2l1K0Y35/download/Image%202015-01-08%20at%2011.16.12%20am.png)

```
export default Ember.Component.extend({
  classNameBindings: [':has-tip', 'tooltipPositionClass'],
  attributeBindings: ['ariaHaspopup:aria-haspopup', 'dataTooltip:data-tooltip', 'title'],

  ariaHaspopup: 'true',
  dataTooltip: '',
  tooltipPosition: 'bottom',

  tooltipPositionClass: function() {
    return 'tip-' + this.get('tooltipPosition');
  }.property('tooltipPosition'),

  onDidInsertElement: function() {
    Ember.$(document).foundation({ tooltip: {} });
  }.on('didInsertElement')
});
```

You can extend the component in your project like so:

```
import Ember from 'ember';
import AsTooltip from 'ember-cli-paint/components/as-tooltip';

export default AsTooltip.extend({
  classNameBindings: [':avatar'],
  attributeBindings: ['src', 'alt', 'title'],
  tagName: 'img',
  tooltipPosition: 'top',

  user: null,
  alt: Ember.computed.alias('user.initials'),
  src: Ember.computed.alias('user.avatarUrl'),
  title: Ember.computed.alias('user.name')
});
```

And use it in templates

```
...
{{as-avatar user=lead class="lead"}}
...
```

You can also use it directly

```
{{#as-tooltip title="This will be in the tooltip"}}
  <img src="blabla"></img>
{{/as-tooltip}}
```

## Creating your own component

Check out the documentation regarding addons at http://ember-cli.com.
[This blog post](http://hashrocket.com/blog/posts/a-compendium-of-hooks-in-embercli) documents some of the hooks you can leverage in ember addons.

If you have added a new Paint component remember to bump its version in bower.json and in blueprints index.js

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

## Publishing the package

- Merge your PR on GitHub
- `git checkout master`
- `git pull`
- Bump package version (e.g. `npm version patch`)
- `npm publish`
- `git push --tags`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
