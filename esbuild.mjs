import esbuild from 'esbuild';
import {lessLoader} from "esbuild-plugin-less";

esbuild.build({
    entryPoints: ['./src/index.jsx'],
    outdir: './build',
    bundle: true,
    sourcemap: true,
    minify: true,
    loader: {
        ".svg": "file"
    },
    plugins: [lessLoader()],
    watch: process.argv.includes("--watch"),
})
    .then(result => console.log("build success", {result}))
    .catch(error => console.error("build error", {error}))