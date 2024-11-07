import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
import { resolve } from "path";

export default defineConfig({
    plugins:[vue()],
    build:{
        outDir:"dist/umd",
        lib:{
            entry:resolve(__dirname,"./index.ts"),
            name:"zjui",
            fileName:"index",
            formats:["umd"]
        },
        // vite是基于rollup封装的,所以兼容rollup的功能
        rollupOptions:{
            external:["vue"],
            output:{
                exports:"named",
                globals:{
                    vue:"Vue"
                },
                assetFileNames:(assetInfo) =>{
                    if(assetInfo.name === "style.css") return "index.css";
                    return assetInfo.name as string;
                }
            }
        }
    }
})