export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.hook("app:created", async () => {
        if (import.meta.dev) {
            const { worker } = await import ("../mocks/browser")
            worker.start()
        }
    })
  })