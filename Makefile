TESTS = test/*.js
test:
	APP_CONTAINER_CONF=test/config.json mocha --timeout 5000 $(TESTS)

.PHONY: test
