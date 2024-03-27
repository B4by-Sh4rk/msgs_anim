  const msgsWrapper = document.querySelector('.msgs_wrapper');

  function scrollToBottom() {
    msgsWrapper.scrollTop = msgsWrapper.scrollHeight;
  }
    scrollToBottom();


  function preventScroll(event) {
    event.preventDefault(); 
    event.stopPropagation();
}
msgsWrapper.addEventListener('wheel', preventScroll);


function createMessage(who, what) {
    const message = document.createElement('div');
    message.classList.add('msg', 'msg_send'); // Добавляем класс msg_send
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

    if (randomClass === 'msg_to') {
        message.style.animation = 'slideInFromLeft 0.5s ease forwards';
    } else if (randomClass === 'msg_from') {
        message.style.animation = 'slideInFromRight 0.5s ease forwards';
    }

    setTimeout(function() {
        // Удаление класса msg_send через 0.5 секунды
        setTimeout(function() {
            message.classList.remove('msg_send');
        }, 500);
        
        const loader = document.createElement('div');
        loader.classList.add('loader');
        loader.innerHTML = `
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        `;
        setTimeout(function() {
            document.querySelector('.circle:nth-child(1)').style.animationDelay = '0s';
            document.querySelector('.circle:nth-child(2)').style.animationDelay = '0.5s';
            document.querySelector('.circle:nth-child(3)').style.animationDelay = '1s';
        }, 500);
        
        msgType.appendChild(loader);
        scrollToBottom();
        setTimeout(function() {
            msgType.removeChild(loader);
            let textNode;
            if(!what){
                textNode = document.createTextNode('Новое сообщение');
            }else{
                textNode = document.createTextNode(what);
            }
            msgType.appendChild(textNode);
            if (randomClass === 'msg_to') {
                message.classList.add('msg_to_sended');
            } else if (randomClass === 'msg_from') {
                message.classList.add('msg_from_sended');
            }
            scrollToBottom();
        }, 3000);
    }, 0);

    message.appendChild(msgType);
}


setTimeout(function() {
    createMessage("msg_to", 'Привет!');
}, 1000);

setTimeout(function() {
    createMessage("msg_from", 'Привет.');
}, 5000);

setTimeout(function() {
    createMessage("msg_to", 'Ывыбвщ ыфзвб ы фзвыв юзащвлаы?');
}, 9000);

setTimeout(function() {
    createMessage("msg_from", 'ВЫФвдыб выф. АВзаыд щфыщлыщ вызфвыфл имиы!');
}, 13000);

setTimeout(function() {
    createMessage("msg_from", 'ВЫфдвыбфщв фыл вщыф двзыфхюччщовшв пщюазвп дз :) афлфыщвбыщ выфдвз :( дфвбыщфв!');
}, 16000);

setTimeout(function() {
    createMessage("msg_to", 'Что?');
}, 20000);

setTimeout(function() {
    createMessage("msg_from", 'Ввыфзвлыфщ влышфвошфы взщыф лвщфы дщв лыщалвызша лвы щалывща лщвывлышфвошфыы взщыф лвщфы дщв лыщалвызша лвы щалывща лщвывлышфвошфыы взщыф лвщфы дщв лыщалвызша лвы щалывща лщвывлышфвошфы взщыф лвщфы дщв лыщалвызша лвы щалывща лщвывлышфвошфы взщыф лвщфы дщв лыщалвызша лвы щалывща лщвывлышфвошфы взщыф лвщфы дщв лыщалвызша лвы щалывща лщвывлышфвошфы взщыф лвщфы дщв лыщалвызша лвы щалывща лщвы лащы влащл ывал выщлащвылащвыл щалв ыщал выщ лащывл ащлвызщ алщвы лащыв лащвыл ащзлыв щзалщвы лащвлащвл щалы взщлащвыл а');
}, 23000);

setTimeout(function() {
    createMessage("msg_to", 'Не пишите сюда больше.');
}, 30000);


setTimeout(function() {
    createMessage("msg_from", ':(');
}, 33000);




setTimeout(function() {
    var img = document.createElement('img');
    img.src = './1.png';
    document.body.appendChild(img);
}, 36000);



/* 
createMessage("msg_from", ':('); 
функция создания сообщеня принимает в себя откуда пришло - msg_to или msg_from и текст сообщения.
*/