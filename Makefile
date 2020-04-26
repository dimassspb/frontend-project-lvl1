install:
	npm install
even:
	npx node src/bin/brain-even.js
calc:
	npx node src/bin/brain-calculator.js
gcd:
	npx node src/bin/brain-gcd.js
progression:
	npx node src/bin/brain-progression.js
prime:
	npx node src/bin/brain-prime.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .
