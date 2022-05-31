# Simple enhancements for Promises #

```js
// JS Projects
const { PromiseChain, PromiseWrap, PromiseDelay } = require('enhance-promise');

// TS Projects
import { PromiseChain, PromiseDelay, PromiseWrap } from "enhance-promise";
```

Main features:

PromiseChain (sequential)
```js
const chain: Array<() => Promise<any>> = [
	() => this.countDown("3"),
	() => this.countDown("2"),
	() => this.countDown("1"),
	() => this.countDown("GO!")
];

PromiseChain(chain).then(() => {
	console.log(`Chain complete`);
});
```

PromiseWrap
```js
PromiseWrap(() => {
	console.log(`Do this without calling resolve`);
}).then(() => {
	console.log(`Done`);
})
```

PromiseDelay
```js
PromiseDelay(1000).then(() => {
	console.log(`One second has passed`);
})
```

Putting it all together
```js
PromiseChain([
    () => PromiseWrap(() => console.log(Date.now() + " One")),
    () => PromiseDelay(1000),
    () => PromiseWrap(() => console.log(Date.now() + " Two")),
    () => PromiseDelay(1000),
    () => PromiseWrap(() => console.log(Date.now() + " Three")),
    () => PromiseDelay(1000),
    () => PromiseWrap(() => console.log(Date.now() + " Go!"))
]).then(() => {
    console.log("We're done here");
});
```


## Installation ##

	$> npm i enhance-promise


## Contributors ##

Luke Trimby


## Licence ##

MIT
