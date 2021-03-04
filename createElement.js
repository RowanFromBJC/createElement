/*
 * MIT Liense Rowan C
 * createImage.js
 * Comments included
 * Un-minified
 */

// Variable vCreateElement (part of return value once binded)
var vCreateElement = {
  "native": { // JavaScript translations
    "texts": [], // Text nodes
    "selector": "" // Selector to be appended/prepended/inserted to
  },
  "error": false // No error unless this value is changed
}

// Function uCreateElement (Unbound)
function uCreateElement(type) {
  val = this;
  for (let i = 0; i < val.native.texts.length; i++) { // Clean up text nodes
    val.native.texts.pop();
  }
  val.native.element = document.createElement(type); // Create element (won't show up until appended or prepended)
  if (type == null || type == undefined || typeof type != 'string') { // Validate type
    return {
      "error": new TypeError('Bad selector') // Return error and exit function
    };
  }
  type = type.toLowerCase(); // Convert element type to lowercase
  return {
    "args": val.native.element, // Modify args (eg. If you created a img element, (function).args.src would set image url)
    "addText": text => { // Add text node
      val.native.texts.push(document.createTextNode(text));
    },
    "bind": () => { // Bind text to element
      val.native.texts.forEach(textNode => {
        val.native.element.appendChild(textNode);
      });
    },
    "append": (selector, selectorType) => { // Append element
      if (selectorType != null) {
        switch (selectortype.toLowerCase()) {
          case 'class':
            val.native.selector = document.getElementsByClassName(selector);
            break;
          case 'id':
            val.native.selector = document.getElementById(selector);
            break;
          case 'css':
            val.native.selector = document.querySelector(selector);
            break;
          default:
            val.native.selector = document.querySelector(selector);
            break;
        }
      } else {
        val.native.selector = document.querySelector(selector);
      }
      val.native.selector.appendChild(this.native.element);
    },
    "prepend": (selector, selectorType) => { // Prepend element
      if (selectorType != null) {
        switch (selectortype.toLowerCase()) {
          case 'class':
            val.native.selector = document.getElementsByClassName(selector);
            break;
          case 'id':
            val.native.selector = document.getElementById(selector);
            break;
          case 'css':
            val.native.selector = document.querySelector(selector);
            break;
          default:
            val.native.selector = document.querySelector(selector);
            break;
        }
      } else {
        val.native.selector = document.querySelector(selector);
      }
      val.native.selector.insertBefore(val.native.element);
    }
  }
}
