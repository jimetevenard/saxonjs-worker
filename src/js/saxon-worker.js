const SaxonJS = require('saxon-js');

onmessage = function (params) {
    SaxonJS.transform(params.data, "async").then((response) => {
        postMessage({
            success: true,
            result: response.principalResult
        });
    });
}