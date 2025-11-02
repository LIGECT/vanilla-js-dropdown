import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";

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
    {
      file: "dist/dropdown.min.js",
      format: "iife",
      name: "Dropdown",
      plugins: [terser()],
    },
  ],
  plugins: [
    nodeResolve(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
  ],
};
