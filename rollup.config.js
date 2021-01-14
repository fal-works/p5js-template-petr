// See also: https://rollupjs.org/

const banner = `/**
 * This is a p5.js sketch made with p5js-template-petr.
 *
 * @license CC0-1.0
 */
`;

const config = {
  input: "tsc-out/main.js",
  output: {
    format: "iife",
    file: "dist/script.js",
    banner,
    interop: "default",
  },
};

export default config;
