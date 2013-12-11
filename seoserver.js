var express = require('express');
var app = express();
var arguments = process.argv.splice(2);
///var port = arguments[0] !== 'undefined' ? arguments[0] : 3000;
var port = 3000;
var getContent = function(url, callback) {
  var content = '';
  var phantom = require('child_process').spawn('phantomjs', [__dirname + '/phantom-server.js', url]);
  phantom.stdout.setEncoding('utf8');
  phantom.stdout.on('data', function(data) {
    content += data.toString();
  });
  phantom.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});
  phantom.on('exit', function(code) {
    if (code !== 0) {
      console.log('We have an error');
    } else {
      callback(content);
    }
  });
};

var respond = function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  var url;

    //console.log('http://' + req.headers['x-forwarded-host'] + req.originalUrl.replace('?_escaped_fragment_=', '#!'));
    console.warn('req.originalUrl ', req.originalUrl);

  if(req.headers.referer) {
    url = req.headers.referer;
  }


    if(req.headers['x-forwarded-host']) {

        url = 'http://' + req.headers['x-forwarded-host'] + req.originalUrl.replace('index.html?&_escaped_fragment_=', '#!').replace('index.html?_escaped_fragment_=', '#!');

        /*if(req.originalUrl.indexOf('_escaped_fragment_') > -1) {

            //url = 'http://' + req.headers['x-forwarded-host'] + req.params[0];
            url = 'http://' + req.headers['x-forwarded-host'] + req.originalUrl.replace('?&_escaped_fragment_=', '#!').replace('?_escaped_fragment_=', '#!');

        } else {

            url = 'http://' + req.headers['x-forwarded-host'] + req.originalUrl

        }*/

    }

  console.log('url:', url);
  getContent(url, function (content) {
    res.send(content);
  });
}

app.get(/(.*)/, respond);
app.listen(port);
console.log('listen port ' + port);