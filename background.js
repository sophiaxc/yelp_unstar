var isActive = false;

function hideShowRatings() {
  if (isActive) {
    chrome.tabs.executeScript( null, {code: "$('.rating').hide();" });
  } else {
    chrome.tabs.executeScript( null, {code: "$('.rating').show();" });
  }
}

chrome.tabs.onUpdated.addListener(hideShowRatings);
chrome.browserAction.onClicked.addListener(function(){
  isActive = !isActive;
  if (isActive) {
    chrome.browserAction.setIcon({path:"active_icon.png"});
  } else {
    chrome.browserAction.setIcon({path:"inactive_icon.png"});
  }
  hideShowRatings();
});
