const hello = '<h1>Hello, this is Deen\'s personal website.</h1>'

addEventListener("fetch", (event: FetchEvent) => {
  const ip = event.request.headers.get('x-forwarded-for')

  const response = new Response(`${hello}<p>Your IP address is <b>${ip}</b></p>`, {
    headers: { "content-type": "text/html" },
  });
  event.respondWith(response);
});
