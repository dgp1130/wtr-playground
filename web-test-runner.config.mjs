export default {
  testFramework: {
    path: './dist/tests/test_framework.js',
  },
  coverageConfig: {
    // Doesn't work, still drops content in test files.
    include: ['dist/tests/**/*.js'],
    exclude: [
      'dist/tests/test_framework.js',

      // Doesn't work. Should take sourcemaps into account but doesn't.
      '**/node_modules/**/*',

      // ESBuild pulls an `__export` utility into a shared chunk with no sourcemap. However
      // excluding all chunks means nothing is displayed in coverage, so we can't do this.
      // 'dist/tests/chunk-*.js',
    ],
  },
  testRunnerHtml() {
    return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf8">
    <title>Unit tests</title>
    <base href="dist/tests/">
    <script src="/node_modules/jasmine-core/lib/jasmine-core/jasmine.js"></script>
    <script>
      // Run first so Zone.js testing can find global Jasmine?
      // https://github.com/angular/angular/blob/af4f5df150d527a1b523def1eb51d2b661a25f83/packages/zone.js/lib/jasmine/jasmine.ts
      const jasmine = jasmineRequire.core(window.jasmineRequire);
      const global = jasmine.getGlobal();
      global.jasmine = jasmine;
      const env = jasmine.getEnv();
      Object.assign(window, jasmineRequire.interface(jasmine, env));
      window.onload = function () {};
    </script>
    <script src="test_framework.js" type="module"></script>
  </head>
  <body></body>
</html>
    `.trim();
  }
};
