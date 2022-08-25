# Saxon JS in a Worker

**Live demo at <https://jimetevenard.github.io/saxonjs-worker/>**

[SaxonJS](https://www.saxonica.com/saxon-js/index.xml)  at work in the context of a  [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).  

Web Workers operate in a separated thread from the main web page, allowing you to run transformations on documents of consequent size without freezing the UI.

The main point of this demo is that the Web Worker context  [has no access to the DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers), needed by SaxonJS.

As a workaround,  **I do use the  [NodeJS version of SaxonJS](https://www.npmjs.com/package/saxon-js), embedded with the help of  _npm_  and  [Browserify](https://www.npmjs.com/package/browserify).**

> For Node.js (...) The Saxon product includes its own XML parser and DOM implementation, rather than relying on the parser and DOM library supplied by the browser vendor.  
> See  [SaxonJS documentation](https://www.saxonica.com/saxon-js/documentation2/index.html#!about/components)

## Running locally

With nodeJS installed, just run the following :

````sh
npm install
npm start
````

And go to `http://localhost:8080/`

## Details

The [`package.json` build script](https://github.com/jimetevenard/saxonjs-worker/blob/main/package.json) :

* Compiles the [XSLT](https://github.com/jimetevenard/saxonjs-worker/blob/main/src/xsl/uppercase.xsl) into a SEF file
* *Browserifies* the [saxon-worker.js](https://github.com/jimetevenard/saxonjs-worker/blob/main/src/js/saxon-worker.js) script (resolving the `require('saxon-js')` and the local code into a single file)
* We can then, in our [`main.js` script](https://github.com/jimetevenard/saxonjs-worker/blob/main/src/js/main.js)
  * Get the SEF via http
  * Instantiate a worker running the compiled `worker.js` file

When the *transform* button is clicked, the SEF, XML source and a few params are sent to the worker.

The main script can [subscribe](https://github.com/jimetevenard/saxonjs-worker/blob/main/src/js/main.js#L26) to the messages sent by the worker to display the result.

Voilà !