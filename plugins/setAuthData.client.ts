import { useAuthStore } from "~/stores/auhStore";

export default defineNuxtPlugin((nuxtApp) => {
  const authStore = useAuthStore();
  authStore.SetCurrentUserValue();
});