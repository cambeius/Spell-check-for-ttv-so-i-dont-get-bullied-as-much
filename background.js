function start(){
    document.addEventListener('keyup', (e) => {

        let chat = document.querySelector("#WYSIWGChatInputEditor_SkipChat > div > div > div > span > span > span");
        console.log(chat.textContent);

        if(chat.textContent.endsWith('  ')){
            console.log(chat.textContent);
            async function spellCheckAPI() {
                try{
                    const response = await fetch("https://api.apilayer.com/spell/spellchecker?q=" + encodeURI(chat.textContent.trimEnd()),{
                    method: "GET",
                    headers: {"apikey": "sgotsNb6Fiw8YlHFCI5EFcEdquTqBPp6"}
                });

                const result = await response.json();
                console.log(JSON.stringify(result));

                replaceTheWrongWords(result);

                } catch (error) {console.log('Error: '+ error);}
                
            } spellCheckAPI();
        }

    });
 
    
    function replaceTheWrongWords(input){

        var replacedOutput = input.original_text;

        for (let key in input.corrections) {
            console.log("This is in for: " + JSON.stringify(input.corrections[key]));
            console.log("This is my logged original text: "+ input.original_text);

            replacedOutput = replacedOutput.replace(input.corrections[key].text, input.corrections[key].best_candidate);
        }

        console.log("This is the text after correction: "+replacedOutput);
        document.querySelector("#WYSIWGChatInputEditor_SkipChat > div > div > div > span > span > span").textContent = replacedOutput;
        document.querySelector("#live-page-chat > div > div > div.Layout-sc-1xcs6mc-0.wZVfj.chat-shell.chat-shell__expanded > div > div > section > div > seventv-container > div > div:nth-child(2) > div.InjectLayout-sc-1i43xsx-0.ivpalC > div.Layout-sc-1xcs6mc-0.bIzlwn > div > div > div.InjectLayout-sc-1i43xsx-0.WhLkF > div > seventv-container > div > textarea").textContent = replacedOutput;
    }
}

var checker = setInterval(() => {
    if(document.readyState === "complete"){
        console.log("page is ready to be changed");
        clearInterval(checker);
        start();
        
    }
    else{console.log("not yet");}
 }, 1000);
