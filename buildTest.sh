#!/bin/bash
cat almond.js > tests/simple-built.js
cat tests/simple.js >> tests/simple-built.js

cat almond.js > tests/plugins/plugins-built.js
cat tests/plugins/plugins.js >> tests/plugins/plugins-built.js

cat almond.js > tests/plugins/coffee-built.js
cat tests/plugins/coffee.js >> tests/plugins/coffee-built.js

cat almond.js > tests/plugins/text-built.js
cat tests/plugins/text.js >> tests/plugins/text-built.js

cat almond.js > tests/extend-built.js
cat tests/extend.js >> tests/extend-built.js

cat almond.js > tests/extend/policiesexample-built.js
cat tests/extend/policiesexample.js >> tests/extend/policiesexample-built.js

cat almond.js > tests/extend/jqueryexample-built.js
cat tests/extend/jqueryexample.js >> tests/extend/jqueryexample-built.js

node ../r.js/r.js -o baseUrl=tests/plugins/order include=../../../almond,order\!one,order\!two out=tests/plugins/order/order-built.js optimize=none
