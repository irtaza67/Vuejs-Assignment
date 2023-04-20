// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    app:{
      pageTransition: { name: 'FlightOptions', mode: 'out-in' }

    },
    css: [
        'vuetify/lib/styles/main.sass',
        '~/assets/styles/main.scss'
      ],
      build: {
        transpile: ['vuetify'],
      },
      vite: {
        define: {
          'process.env.DEBUG': false,
        },
      }

})
