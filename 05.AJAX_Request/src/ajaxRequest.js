function ajaxReq(url, opts) {
  'use strict';
  var options = {
    method: opts.method ? opts.method : 'GET',
    success: opts.success,
    context: opts.context,
    failure: opts.failure,
    complete: opts.complete,
  }
  console.log(options.context)

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = handleRequest;

  function handleRequest() {
    try {
        if (xhr.readyState === 4) {
            options.context ? options.complete.bind(options.context) : options.complete();
            if (xhr.status === 200) {
               options.success();
            } else {
                options.context ? options.failure.bind(options.context) : options.failure();
            }
        }
    }
    catch(e) {
        console.log('Caught Exception: ' + e.description);
    }
  }
  xhr.open(options.method, url);
  xhr.send();


}