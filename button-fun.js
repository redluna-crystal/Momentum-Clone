chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.create({ url: "chrome://newtab" });
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action == "openURL") window.open(message.url, "_blank");
});
