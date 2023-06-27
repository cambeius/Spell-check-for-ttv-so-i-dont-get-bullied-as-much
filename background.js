function start(){
    document.addEventListenet('keydown', (e) => {
        if(e.code=='Enter'){
            var chat = document.querySelector("#WYSIWGChatInputEditor_SkipChat > div > div > div > span > span > span");
            console.log(chat.value);
        }
    });
     
}

var checker = setInterval(() => {
    if(document.readyState === "complete"){
        console.log("page is ready to be changed");
        clearInterval(checker);
        start();
        
    }
    else{console.log("not yet");}
 }, 1000);
