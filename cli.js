import yargs from "yargs";

import { startProxyServer } from "./server.js";
import { cache } from "./cache.js";

yargs(process.argv.slice(2))
  .command({
    command: "start-proxy",
    description: "Запустить прокси-сервер",
    builder: (yargs) => {
      return yargs
        .option("port", {
          alias: "p",
          type: "number",
          default: "3000",
          description:
            "Порт, на котором будет запущен кэширующий прокси-сервер",
        })
        .option("origin", {
          alias: "o",
          type: "string",
          default: "http://localhost:8080/",
          description:
            "URL-адрес сервера, на который будут перенаправляться запросы",
        });
    },
    handler: ({ port, origin }) => {
      startProxyServer({ port, origin });
    },
  })
  .command({
    command: "clear-cache",
    description: "Очистить кэш",
    handler: () => {
      cache.clear();
    },
  })
  .parse();
