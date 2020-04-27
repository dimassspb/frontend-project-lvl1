install:
	npm install
even:
	node bin/brain-even.js
calc:
	node bin/brain-calculator.js
gcd:
	node bin/brain-gcd.js
progression:
	node bin/brain-progression.js
prime:
	node bin/brain-prime.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .
