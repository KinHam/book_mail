import { defineConfig,CommonServerOptions } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs' 
import dotenv,{DotenvParseOutput} from 'dotenv'
import './src/declare_/myenv'
// https://vitejs.dev/config/

export default defineConfig((env)=>{
  console.info('env',env)
  let baseEnv = '.env'
  let curEnvName = `${baseEnv}.${env.mode}`
  const fileData = fs.readFileSync(curEnvName)
  const envMap:DotenvParseOutput = dotenv.parse(fileData)

  let server:CommonServerOptions
  
  if(env.mode === 'development'){
     server = {
      host:envMap.VITE_HOST,
      port:envMap.VITE_PORT,
      proxy:{
        [envMap.VITE_BASE_URL]:{
          target:envMap.VITE_PROXY_DOMAIN
        }
      }
    }
    console.info('开发者环境')
  }else if(env.mode === 'production'){
    server = {
      host:envMap.VITE_HOST,
      port:envMap.VITE_PORT,
    }
    console.info('生产环境')
  }
  return {
    base:'/book_mail',
    server,
    plugins: [vue()],
  }
})