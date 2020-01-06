import * as rollup from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";

async function main(): Promise<void> {
  const bundle = await rollup.rollup({
    input: "browser/dist/entry.js",
    plugins: [
      commonjs(),
      resolve(),
      // https://github.com/webpack/webpack/issues/1720
      replace({
        "process.env.NODE_ENV": JSON.stringify("production")
      })
    ]
  });
  const { output } = await bundle.generate({
    format: "esm"
  });
  for (const chunkOrAsset of output) {
    if (chunkOrAsset.type === "asset") {
      console.log("Asset", chunkOrAsset);
    } else {
      console.log("Chunk", chunkOrAsset);
    }
  }
  await bundle.write({
    format: "esm",
    file: "hoge.js"
  });
}

main();
