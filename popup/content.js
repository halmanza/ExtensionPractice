class CreateDOM {
  constructor() {}

  createElement(elm) {
    return document.createRange().createContextualFragment(elm);
  }

}

function sendMessage(contents){
    chrome.runtime.sendMessage(contents, function(response) {
        
        console.log(response.farewell)
        
      });
}

const elmCreator = new CreateDOM();

const tvPage = elmCreator.createElement(`
    <div id="main" style="display:flex; justify-content: center; flex-direction: column">
    <h2>Selection</h2>  
    <ul class="popup">
    <li><button id="1">Choice 1</button>
    <li><button id="2">Choice 2</button>
    </ul>
    </div>
`);


document.body.appendChild(tvPage);

document.querySelector('#main').addEventListener('click',(e)=>{
    
    switch(e.target.id){
        case "1":
            sendMessage({mail: 'https://www.stackoverflow.com'})
            console.log(e.target.id);
            break;
        case "2":
            sendMessage({mail: 'https://developer.mozilla.org'})
            console.log(e.target.id);
            break;
        default:
            break;
}});
