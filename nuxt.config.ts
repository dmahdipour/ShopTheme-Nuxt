// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules:['@pinia/nuxt', "@nuxt/image"],
  css:[
    "@/assets/css/custom.css",
    "@/assets/css/theme.css",
    "@/assets/css/animate.min.css",
  ],
  // Reverse Proxy => Solve CORS problem
  vite:{
    server:{
      proxy:{"/api":"http://shop-api.codeyad-project.ir/"}
    }
  }
})