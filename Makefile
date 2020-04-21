install:
	npm install
even:
	npx babel-node src/bin/brain-even.js
calc:
	npx babel-node src/bin/brain-calculator.js
gcd:
	npx babel-node src/bin/brain-gcd.js
progression:
	npx babel-node src/bin/brain-progression.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .
