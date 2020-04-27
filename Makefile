install:
	npm install
even:
	node src/bin/brain-even.js
calc:
	node src/bin/brain-calculator.js
gcd:
	node src/bin/brain-gcd.js
progression:
	node src/bin/brain-progression.js
prime:
	node src/bin/brain-prime.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .
