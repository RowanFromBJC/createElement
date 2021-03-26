# createElement
Easily create elements

Script links:
* Un-minified: https://projects.rowandev.tk/?project=createElement&file=js&mime=text/javascript
* Minified: https://projects.rowandev.tk/?project=createElement&file=js&mime=text/javascript&min=true

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
Note: If you want to set the class, use *element*.args.className
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

### *element*.error
```js
if (element.error) throw element.error;
```
Either false or an TypeError.

### *element*.addText(*text*)
```js
element.addText('Hello');
```
* text (**Required**)
The text to be added

Adds text (Will be inside the end element)
So, if you create a `p` element, and add the text `Hello`, then the end product will be `<p>Hello</p>`

### *element*.bind()
```js
element.bind();
```
Binds text to element

If you don't run `element.bind()`, then added text won't be in element. So, if you create a `p` element, and add the text `Hello`, but don't run `element.bind()`, then the end product will be `<p></p>`.

### *element*.append(*selector*, *selectorType?*)
* selector (**Required**)
The element to append to

By default, this will be a CSS selector
* selectorType (**Optional**)
The type of the selector
Can be `"css"` (CSS selector), `"class"` (element class), or `"id"` (element ID)

### *element*.prepend(*selector*, *selectorType?*)
* selector (**Required**)
The element to prepend to
Same as *element*.append(), but this inserts the element before the element.

By default, this will be a CSS selector
* selectorType (**Optional**)
The type of the selector
Can be `"css"` (CSS selector), `"class"` (element class), or `"id"` (element ID)
