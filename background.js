function moveChat(){
    var chat = document.querySelector("#chatbox")
        wrapper = document.querySelector('#wrapper')

    wrapper.insertBefore(chat, wrapper.children[0]);

        chat.style.width = "354px";
        chat.style.float = "left";
        chat.style.marginLeft = "-8px";
        console.log("the current width is: "+ chat.style.width);

    window.addEventListener('resize', function() {
        chat.style.width = "354px";
        console.log("the current width is: "+ chat.style.width);
    });

     
}

var checker = setInterval(() => {
    if(document.readyState === "complete"){
        console.log("page is ready to be changed");
        clearInterval(checker);
        moveChat();
        
    }
    else{console.log("not yet");}
 }, 1000);
