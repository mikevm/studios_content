compile:
	./node_modules/webpack/bin/webpack.js --config webpack.config.js

html: compile
	node ./bundle/app.bundle.js > ./index.html

run: html
	http-server .
