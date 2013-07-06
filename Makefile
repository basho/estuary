REPORTER = list

test-tdd:
		./node_modules/.bin/mocha \
			--reporter $(REPORTER) \
			--ui tdd \
			test/*.js

test-bdd:
		./node_modules/.bin/mocha \
			--reporter $(REPORTER) \
			--ui bdd \
			test/*.js

tests:
		./node_modules/.bin/mocha \
			--reporter spec \
			test/*.js

test-all: test-bdd test-tdd tests

.PHONY: test-all
