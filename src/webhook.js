import "dotenv/config";
import { WEBHOOK_OFFLINE } from "./constants.js";
import ping from "./services/ping.js";

const {
  WEBHOOK: webhook,
  HOSTNAME: hostname,
  INTERVAL_SECONDS: interval,
  RELOAD_APPLICATION_SECONDS: reload,
} = process.env;
const interval_format = interval * 1000;
const reload_format = reload * 1000;

const data = JSON.stringify(WEBHOOK_OFFLINE);

const fetch_config = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: data,
};

const ticker = async function () {
  const pinging = await ping(hostname);
  if (pinging === false) {
    clearInterval(pinged);
    fetch(webhook, fetch_config)
      .then((res) => {
        console.log("Webhook enviado com sucesso.");
        return res;
      })
      .catch((err) => {
        console.error(err);
        return err;
      });

    return;
  }
};

const pinged = setInterval(ticker, interval_format);
setInterval(ticker, reload_format);
