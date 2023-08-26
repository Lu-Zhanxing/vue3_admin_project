import router from '@/router'
import useUserStore from '@/store/modules/user'
import { useRoute } from 'vue-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
nprogress.configure({ showSpinner: false });
import setting from '@/setting'
router.beforeEach(async(to, from, next) => {
    nprogress.start();

    let userStore = useUserStore()
    // 用户登录了
    if (userStore.token) {
        if (to.path == '/login') {
            next(from.path)
        } else {
            try {
                await userStore.userInfo()
                next()
            } catch (error) {
                //token过期
                // 用户手动清除本地token
                let $route = useRoute()
                userStore.userLogout()
                next({ path: '/login', query: { redirect: $route.path } })
            }
        }
    } else {
        // 用户未登录判断
        if (to.path == '/login') {
            next()
        } else {
            next('/login')
        }
    }

})

router.afterEach((to, from) => {
    nprogress.done();
    // document.title = setting.title + '-' + to.meta.title
    document.title = `${setting.title} - ${to.meta.title}`
})