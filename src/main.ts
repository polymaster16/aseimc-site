import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue' 
import router from './router'

import './assets/main.css'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


//Font awesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBitcoin, faWhatsapp, faYoutube, faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret, faBars, faBook, faHeart, faPlus, faTrash, faUpload, faCopy,
  faPuzzlePiece, faHome, faMagnifyingGlass, faBlog, faMagnifyingGlassDollar, faCircleHalfStroke, } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faBars, faBook, faHeart, faPlus, faUpload,
   faPuzzlePiece, faHome,faBlog, faMagnifyingGlass, faTrash, faCopy,
    faCircleHalfStroke, faWhatsapp, faYoutube, faFacebook, faTelegram, faMagnifyingGlassDollar )
//vue use
import { MotionPlugin } from '@vueuse/motion'


const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(MotionPlugin)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
