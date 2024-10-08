module.exports = function (wallaby) {
  return {
    files: [
      "src/*.css",
      "src/*.html",
      "importmap/inject.js",
      "importmap/importmap.test.js",
      "node_modules/@scalable.software/**/dist/*.js",
      "src/**/*.ts",
    ],
    tests: ["test/unit/**/*.ts"],
    trace: true,
    compilers: {
      "**/*.ts": wallaby.compilers.typeScript({
        module: "es2022",
        target: "es2022",
        sourceMap: true,
        inlineSources: true,
        baseUrl: "./",
        paths: {
          "@scalable.software/component.template": ["./src/Index.js"],
        },
      }),
    },
  };
};
