import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "pf2e-subsystem-theming.js",
  output: {
    file: "SubsystemTheming.js",
    format: "es",
    sourcemap: true,
  },
  plugins: [resolve()],
};
