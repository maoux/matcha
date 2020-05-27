rm -rf build
mkdir build
cp -R server/* build
./node_modules/.bin/webpack --config webpack.config.js --mode production

