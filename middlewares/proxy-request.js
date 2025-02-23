import { cache } from "../cache.js";

const proxyRequest = (origin) => async (request, response) => {
  try {
    const url = new URL(request.url, origin);
    const data = await fetch(url.href).then((result) => result.json());

    cache.set(request.url, data);

    response.status(200).json(data);
  } catch (err) {
    response.status(500);

    console.error(err);
  }
};

export { proxyRequest };
