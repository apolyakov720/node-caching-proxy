import { cache } from "../cache.js";

const proxyCaching = async (request, response, next) => {
  try {
    const data = cache.get(request.url);

    if (data) {
      response.set("X-Cache", "HIT");

      response.status(200).json(data);
    } else {
      response.set("X-Cache", "MISS");

      next();
    }
  } catch (err) {
    console.error(err);

    next();
  }
};

export { proxyCaching };
