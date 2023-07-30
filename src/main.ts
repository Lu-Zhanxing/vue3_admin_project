import { createApp } from 'vue'
//@ts-ignore
import App from '@/App.vue'
// 引入element plus插件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 导入svg
import 'virtual:svg-icons-register'
// 引用自定义全局组件插件
//@ts-ignore
import gloablComponent from '@/components/index.ts'
import '@/styles/index.scss'


const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})
app.use(gloablComponent)

app.mount('#app')
