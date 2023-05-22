// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/devtools',
        '@unocss/nuxt',
        '@nuxt/content',
    ],
    content: {
        highlight: {
            theme: "dracula"
        }
    }
})
