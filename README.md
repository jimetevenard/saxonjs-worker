# Saxon JS in a Worker

[SaxonJS](https://www.saxonica.com/saxon-js/index.xml)  at work in the context of a  [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).  

Web Workers operate in a separated thread from the main web page, allowing you to run transformations on documents of consequent size without freezing the UI.

The main point of this demo is that the Web Worker context  [has no access to the DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers), needed by SaxonJS.

As a workaround,  **I do use the  [NodeJS version of SaxonJS](https://www.npmjs.com/package/saxon-js), embedded with the help of  _npm_  and  [Browserify](https://www.npmjs.com/package/browserify).**

> For Node.js (...) The Saxon product includes its own XML parser and DOM implementation, rather than relying on the parser and DOM library supplied by the browser vendor.  
> See  [SaxonJS documentation](https://www.saxonica.com/saxon-js/documentation2/index.html#!about/components)
