import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBilibili, faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add([faBilibili, faYoutube, faFacebook, faInstagram, faBars, faXmark])

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
