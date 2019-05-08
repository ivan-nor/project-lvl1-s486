install:
	 npm install
start:
	npx babel-node src/bin/brain-games.js
publish:
	npm publish
lint:
	npx eslint .
brain-even:
	npx babel-node src/bin/brain-even.js
brain-calc:
	npx babel-node src/bin/brain-calc.js
brain-gcd:
	npx babel-node src/bin/brain-gcd.js
brain-progression:
	npx babel-node src/bin/brain-progression.js
brain-prime:
	npx babel-node src/bin/brain-prime.js