# createElement
Easily create elements

Initialize:
```js
const createElement = uCreateElement.bind(vCreateElement);
```

## Example
Create element:
```js
var element = createElement('img'); // Use any HTML element name
```
Catch errors:
```js
if (element.error) throw element.error;
```
Add arguments:
```js
element.args.src = 'https://i.ytimg.com/vi/JilHZ_DdBYg/maxresdefault.jpg';
element.args.width = 400;
```
Bind text nodes:
```js
element.bind();
```
Append element:
```js
element.append('body');
```

## Methods
### createElement(type)
```js
var element = createElement(type);
````
* type (**Required**)
The type of HTML element ([MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element))
> Everything else is from the return value of `createElement`

### *element*.error
```js
if (element.error) throw element.error;
```
Either false or an TypeError.
