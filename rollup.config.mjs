export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/dropdown.esm.js",
      format: "esm",
    },
    {
      file: "dist/dropdown.cjs.js",
      format: "cjs",
    },
  ],
};
