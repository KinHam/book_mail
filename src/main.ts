import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {ImgUtils} from "./utils/imgUtils"
console.info('a',import.meta.env)
console.info(ImgUtils.loadAllImg())
ImgUtils.getSotrageImgList()
createApp(App).mount('#app')
