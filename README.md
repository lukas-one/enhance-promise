# Simele enhancements for Promises #


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


## Installation ##

	$> npm i enhance-promise


## Contributors ##

Luke Trimby


## Licence ##

MIT
