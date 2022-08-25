(() => {
    const SEF_URI = "sef/uppercase.sef.json"
    const worker = new Worker('js/worker.js');
    var sef;

    (() => {
        var oReq = new XMLHttpRequest();
        oReq.onload = function() {sef = JSON.parse(this.responseText); };
        oReq.open("get", SEF_URI);
        oReq.send();
    })();

    const run = () => {
        const xml = document.getElementById('source-xml').value;
        worker.postMessage({
            stylesheetInternal: sef,
            sourceType: 'xml',
            sourceText: xml,
            destination: 'serialized'
        });
    }
    document.getElementById('btn-transform').addEventListener('click', run);

    worker.onmessage = function(message){
        if(message.data.success){
            document.getElementById('result').innerText = message.data.result;
        }
    }
})();