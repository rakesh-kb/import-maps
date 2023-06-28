export default {
    external: ["lodash"], // external key tells rollup not to include any of the lodash code in the final build
    input: ["hello.js"], // input is the location of the root file
    // output tells rollup where to put the final code and the format it should use which in this case is system.
    output: [
        {
          dir: "public",
          format: "system",
          sourcemap: true
        }
    ]
};