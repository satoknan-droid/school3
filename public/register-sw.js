"use strict";

const stockSW = "/uv/uv.sw.js";

async function registerSW() {
  if (!navigator.serviceWorker) {
    throw new Error("Service workers not supported");
  }

  try {
    return await navigator.serviceWorker.register(stockSW, {
      scope: "/uv/",
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
}
