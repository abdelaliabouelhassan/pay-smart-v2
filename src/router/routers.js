import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Exchange from '../views/Exchange.vue'
import Custody from '../views/Custody.vue'
import Atm from '../views/Atm.vue'
import About from '../views/About.vue'
import BuyCrypto from '../views/buyCrypto.vue'
import Career from '../views/Career.vue'
import Affliate from '../views/Affliate.vue'
import Ambassadors from '../views/Ambassadors.vue'
import News from '../views/News.vue'
import NewsDetails from '../views/NewsDetails.vue'
import Faq from '../views/Faq.vue'
import FaqDetails from '../views/FaqDetails.vue'
import Terms from '../views/Terms.vue'
import Privacy from '../views/Privacy.vue'
import AML from '../views/AML.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home,name:'home' },
    { path: '/exchange', component: Exchange,name:'Exchange' },
    { path: '/custody', component: Custody,name:'Custody' },
    { path: '/atm', component: Atm,name:'Atm' },
    { path: '/about', component: About,name:'About' },
    { path: '/buy-crypto', component: BuyCrypto,name:'BuyCrypto' },
    { path: '/career', component: Career,name:'Career' },
    { path: '/affiliate', component: Affliate,name:'Affiliate' },
    { path: '/ambassadors', component: Ambassadors,name:'Ambassadors' },
    { path: '/news', component: News,name:'News' },
    { path: '/news-details/:slug', component: NewsDetails,name:'NewsDetails' },
    { path: '/faq', component: Faq,name:'Faq' },
    { path: '/faq-details/:slug', component: FaqDetails,name:'FaqDetails' },
    { path: '/terms', component: Terms,name:'Terms' },
    { path: '/privacy', component: Privacy,name:'Privacy' },
    { path: '/aml', component: AML,name:'AML' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      // always scroll to top smooth
      return { top: 0, behavior: 'smooth' }
    },
  })

export default router