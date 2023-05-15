import "dotenv/config";
import ping from "./ping.js";
import { WEBHOOK_OFFLINE } from "./constants.js";

const { WEBHOOK: webhook, HOSTNAME: hostname, INTERVAL_SECONDS: interval } = process.env;
const interval_format = interval * 1000;

const pinged = setInterval(function () {
  const p = ping(hostname);
  if (p === false) {
    clearInterval(pinged);
    const data = JSON.stringify(WEBHOOK_OFFLINE);

    const fetch_config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    };

    fetch(webhook, fetch_config)
      .then((res) => {
        console.log("Webhook enviado com sucesso.");
        return res;
      })
      .catch((err) => {
        console.error(err);
        return err;
      });
  }
}, interval_format);
