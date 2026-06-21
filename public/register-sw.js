"use strict";

const stockSW = "/uv/sw.js";

async function registerSW() {
  try {
    return await navigator.serviceWorker.register(stockSW, {
      scope: "/uv/",
    });
  } catch (err) {
    console.error("SW登録失敗:", err);
    throw err;
  }
}
