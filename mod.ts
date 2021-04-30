addEventListener("fetch", (event: FetchEvent) => {
  const ip = event.request.headers.get('x-forwarded-for')

  const response = new Response(`Hello World!\nYour IA address is <b>${ip}</b>`, {
    headers: { "content-type": "text/html" },
  });
  event.respondWith(response);
});
