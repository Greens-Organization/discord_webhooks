import "dotenv/config";
import { WEBHOOK_OFFLINE } from "./constants.js";
import nc from "./services/netcat.js";

const {
  WEBHOOK: webhook,
  HOSTNAME: hostname,
  PORT: port,
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

nc(hostname, port, (results) => {
  const ticker = async function () {
    console.log("[WARN] SERVIDOR ATIVO");
    const status = results[0];
    if (status === "ERROR") {
      clearInterval(netcat);
      fetch(webhook, fetch_config)
        .then((res) => {
          console.log("[WARN] Webhook enviado com sucesso.");
          return res;
        })
        .catch((err) => {
          console.error(err);
          return err;
        });

      return;
    }
  };

  const netcat = setInterval(ticker, interval_format);
  setInterval(ticker, reload_format);
});
