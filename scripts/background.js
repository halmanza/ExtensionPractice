const globalValue = [];

chrome.runtime.onMessage.addListener(function (
  request,
  sender,
  senderResponse
) {
  if (request.mail) {
    globalValue.pop();
    console.log(request.mail);
    globalValue.push(request.mail);
    console.log(globalValue)
    senderResponse({ farewell: "Thank you" });
    chrome.tabs.query({active:true, currentWindow: true},function(tabs){
        chrome.tabs.update({url: globalValue[0]})
        console.log('worked')
    })
  }
  return true;
});


