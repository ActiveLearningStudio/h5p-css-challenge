/**
 * Created by thomasmars on 20.04.2016.
 */
/*global casper*/
var fs = require('fs');
var root = fs.absolute(fs.workingDirectory + '/../../');
var rootString = fs.workingDirectory + '/../../';
console.log("root", root);
var phantomcss = require('phantomcss');
var host = 'http://localhost:8050/webpack-dev-server/devTest1';
phantomcss.init({
  casper: casper,
  screenshotRoot: fs.absolute(rootString + 'screenshots'),
  failedComparisonsRoot: fs.absolute(rootString +'screenshots/failed'),
  libraryRoot: fs.absolute(rootString + '/node_modules/phantomcss'),
  addLabelToFailedImage: false
});
casper.test.begin('test', function suite(test) {
  casper.start(host, function () {
    this.wait(1000, function () {
      console.log("Waited for a SECOND!");
    });
  });

  casper.viewport(1600, 1200);


  casper.then(function () {
    phantomcss.screenshot("body", "screenshot");
  });

  casper.then(function () {
    phantomcss.compareAll();
  });

  casper.then(function () {
    casper.test.done();
  });

  casper.run(function () {
    console.log("THE END!");
    test.done();
  });
});

