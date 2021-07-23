(async () => {
  await import(chrome.runtime.getURL("src/jquery.min.js"));
  await import(chrome.runtime.getURL("src/userscript.js"));
})();
