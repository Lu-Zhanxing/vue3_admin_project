import { createRouter,createWebHashHistory } from 'vue-router'
import {constantRoute} from './routes'
let router = createRouter({
    history:createWebHashHistory(),
    routes:constantRoute
})

export default router