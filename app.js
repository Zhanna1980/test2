/**
 * Created by zhannalibman on 15/01/2017.
 */

const shelljs = require('shelljs');
shelljs.exec("node_modules/.bin/http-server", {async: true});
var spawn = require('child_process').spawn;
spawn('open', ['http://127.0.0.1:8080/index.html']);

