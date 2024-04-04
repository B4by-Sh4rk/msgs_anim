  const msgsWrapper = document.querySelector('.msgs_wrapper');

  function scrollToBottom() {
    msgsWrapper.scrollTop = msgsWrapper.scrollHeight;
  }
    scrollToBottom();


  function preventScroll(event) {
    event.preventDefault(); 
    event.stopPropagation();
}
// msgsWrapper.addEventListener('wheel', preventScroll);


function createMessage(who, what) {
    const message = document.createElement('div');
    message.classList.add('msg', 'msg_send');
    let randomClass;
    if(!who){
        randomClass = Math.random() < 0.5 ? 'msg_to' : 'msg_from';
    }else{
        randomClass = who;
    }
    const msgType = document.createElement('div');
    msgType.classList.add(randomClass);
    if (randomClass === 'msg_from') {
        message.classList.add('msgs_from');
    }
    const msgsWrapper = document.querySelector('.msgs_wrapper');
    msgsWrapper.appendChild(message);

    setTimeout(function() {
        setTimeout(function() {
            message.classList.remove('msg_send');
        }, 200);
        
        const loader = document.createElement('div');
        loader.classList.add('loader');
        loader.innerHTML = `
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        `;
        setTimeout(function() {
            msgType.removeChild(loader);
            let textNode;
            if (!what) {
                textNode = document.createTextNode('Новое сообщение');
            } else {
                textNode = document.createTextNode(what);
            }
            msgType.appendChild(textNode);
        
            if (randomClass === 'msg_to') {
                message.classList.add('msg_to_sended');
                message.style.animation = 'bubbleRightToLeft 1s ease forwards';
            } else if (randomClass === 'msg_from') {
                message.classList.add('msg_from_sended');
                message.style.animation = 'bubbleLeftToRight 1s ease forwards';
            }
        
        }, 1500); 
        
        
        
        msgType.appendChild(loader);
        let textNode;
        setTimeout(function() {
            if (loader && loader.parentNode === msgType) {
                msgType.removeChild(loader);
            }
            if(!what){
                textNode = document.createTextNode('Новое сообщение');
            }else{
                textNode = document.createTextNode(what);
                scrollToBottom();
            }

        }, 1500);
        if(textNode){
            msgType.appendChild(textNode);
        }
        if (randomClass === 'msg_to') {
            message.classList.add('msg_to_sended');
        } else if (randomClass === 'msg_from') {
            message.classList.add('msg_from_sended');
        }
    }, 0);
    
    message.appendChild(msgType);
}

function getTotalMessageLength(messages) {
    return messages.reduce((total, message) => total + message[0].length + message[1].length, 0);
}

function sendMessage(messages, index) {
    const totalLength = getTotalMessageLength(messages);
    const delay = totalLength * 4; 
    if (index == 0) {

        createMessage(messages[index][0], messages[index][1]);
        sendMessage(messages, index + 1);
    }else if (index < messages.length) {
        setTimeout(function() {
            createMessage(messages[index][0], messages[index][1]);
            sendMessage(messages, index + 1);
        }, delay ); 
    }
    scrollToBottom();
}


let messages = [
    ["msg_to", 'Привет!'],
    ["msg_from", 'Привет.'],
    ["msg_to", 'Ывыбвщ ыфзвб ы фзвыв юзащвлаы?'],
    ["msg_from", 'ВЫФвдыб выф. АВзаыд щфыщлыщ вызфвыфл имиы!'],
    ["msg_from", 'ВЫфдвыбфщв фыл вщыф двзыфхюччщовшв пщюазвп дз :) афлфыщвбыщ выфдвз :( дфвбыщфв!'],
    ["msg_to", 'Что?'],
    ["msg_from", 'Ввыфзвлыфщ влышфвошфы взщыф лвщфы дщв лыщалвызша лвы щалывща лщвывлышфвошфыы взщыф лвщфы дщв лыщалвызша лвы щалывща лщвывлышфвошфыы взщыф лвщфы дщв лыщалвызша лвы щалывща лщвывлышфвошфы взщыф лвщфы дщв лыщалвызша лвы щалывща лщвывлышфвошфы взщыф лвщфы дщв лыщалвызша лвы щалывща лщвывлышфвошфы взщыф лвщфы дщв лыщалвызша лвы щалывща лщвывлышфвошфы взщыф лвщфы дщв лыщалвызша лвы щалывща лщвывлышфвошфы взщыф лвщфы дщв лыщалвызша лвы щалывща лщвы лащы влащл ывал выщлащвылащвыл щалв ыщал выщ лащывл ащлвызщ алщвы лащыв лащвыл ащзлыв щзалщвы лащвлащвл щалы взщлащвыл а'],
    ["msg_to", 'Не пишите сюда больше.'],
    ["msg_from", ':(']
];

sendMessage(messages, 0);



/* 
createMessage("msg_from", ':('); 
функция создания сообщеня принимает в себя откуда пришло - msg_to или msg_from и текст сообщения.
*/
