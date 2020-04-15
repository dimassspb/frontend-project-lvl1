install:
	npm install
start:
	npx babel-node src/bin/brain-games.js
calc:
	npx babel-node src/bin/brain-calculator.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .
