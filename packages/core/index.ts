import {makeInstaller} from "@zj-ui/utils"
import components from "./components"
import "@zj-ui/theme/index.css"

const installer = makeInstaller(components);

export * from "@zj-ui/components"
export default installer