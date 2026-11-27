// Service worker minimal : rend l'appli installable. Aucune donnée n'est mise en cache (les notes restent toujours à jour).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
