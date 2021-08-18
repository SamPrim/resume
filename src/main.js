import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAt, faPhone, faMapMarkerAlt, faAward, faLanguage, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAt)
library.add(faPhone)
library.add(faMapMarkerAlt)
library.add(faAward)
library.add(faLanguage)
library.add(faUser)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
