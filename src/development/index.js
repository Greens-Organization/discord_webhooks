import "dotenv/config";
import { WEBHOOK_DEVELOP } from "./constants.js";

/** @type {import('../@types/env').ProcessEnv} */
const { WEBHOOK: webhook } = process.env;

const data = JSON.stringify(WEBHOOK_DEVELOP);

const config_request = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: data,
};

fetch(webhook, config_request)
  .then((res) => {
    console.log("Webhook send successfully!");
    return res;
  })
  .catch((err) => {
    console.error(err);
    return err;
  });
