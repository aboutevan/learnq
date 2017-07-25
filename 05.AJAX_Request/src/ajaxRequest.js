function ajaxReq(url, opts) {
  'use strict';
  var options = {
    method: opts.method ? opts.method : 'GET',
    success: opts.success,
    context: opts.context ? opts.context : this,
    failure: opts.failure,
    complete: opts.complete,
  }

  var requestMethods = (function() {
    return {
      complete: function() {
        return options.context ? options.complete.apply(options.context, [xhr, xhr.status]) : options.complete();
      },
      success: function(data, status, xhr) {
        return options.context ? options.success.apply(options.context, [data, status, xhr]) : options.success(data);
      },
      failure: function() {
        return options.context ? options.failure.apply(options.context, [xhr, xhr.status, xhr.responseText]) : options.failure();
      },
    }
  })();

  var handleRequest = function(xhr, options, requestMethods) {
    var xhr = xhr;
    var status = xhr.status;
    var responseText = xhr.responseText;

    try {
        if (xhr.readyState === 4) {
            requestMethods.complete(xhr, status);
            if (xhr.status === 200) {
              var jsonData = JSON.parse(responseText);
              requestMethods.success(jsonData, status, xhr);
            } else {
              requestMethods.failure(xhr, status, responseText);
            }
        }
    }
    catch(e) {
        console.log('Caught Exception: ' + e.description + ' - Could not connect');
    }
  }

  var xhr = new XMLHttpRequest();


  xhr.onreadystatechange = function() {
    return handleRequest(xhr, options, requestMethods);
  };
  xhr.open(options.method, url);
  xhr.send();


}