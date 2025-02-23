import express from "express";

import { proxyRequest } from "./middlewares/proxy-request.js";
import { proxyCaching } from "./middlewares/proxy-caching.js";

const startProxyServer = ({ port, origin }) => {
  const app = express();

  app.use(express.json());

  app.use(proxyCaching);
  app.use(proxyRequest(origin));

  app.listen(port, () => {
    console.log(
      `Прокси-сервер запушен на порту [${port}] c перенаправлением на [${origin}]`
    );
  });
};

export { startProxyServer };
