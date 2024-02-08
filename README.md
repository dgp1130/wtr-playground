# Web Test Runner Playground

Playing around with
[Web Test Runner](https://modern-web.dev/docs/test-runner/overview/) to see how
well its features work with a pre-build approach using Jasmine.

*   Uses TypeScript with esbuild as a bundler.
*   Configures Jasmine as the test framework.
*   Runs code coverage on the result.

See [`package.json`](/package.json) scripts for more info.

## Code Coverage Reproduction

* `npm ci`
* `npm run coverage`
* Open http://localhost:8080
