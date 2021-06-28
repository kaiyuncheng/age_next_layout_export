var md = new MobileDetect(window.navigator.userAgent);    
var device="Windows PC";

if( md.match(/Mac/i)){
    device="Mac";
}
if( md.match(/Android/i)){
    device="Android";
}
if( md.match(/webOS/i)){
    device="webOS";
}
if( md.match(/iPhone/i)){
    device="iPhone";
}
if( md.match(/iPad/i)){
    device="AndriPadoid";
}
if( md.match(/iPod/i)){
    device="iPod";
}
if( md.match(/BlackBerry/i)){
    device="BlackBerry";
}
if( md.match(/Windows Phone/i)){
    device="Windows Phone";
}

var response;
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://emq.businesstoday.com.tw:10443/Getip/');
xhr.send();
xhr.onreadystatechange = resContents;
function resContents() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
        response = xhr.responseText;
    } else {
      console.log('There was a problem with the xhr request.');
    }
  }
}

// var response = $.ajax({
//         dataType: "json",
//         url: "https://emq.businesstoday.com.tw:10443/Getip/",
//         global: false,
//         async:false,
//         success: function (data) {
//             return data;
//         }
//     }).responseText;

    var hostname = 'emq.businesstoday.com.tw';
    var clientId = 'btEmq' + '.' + response + '.' + getCookie('readAgent');
    var topic = '/' + location.hostname +  location.pathname;
        client = new Paho.MQTT.Client(hostname, Number(443), clientId);//建立客户端实例
    var options= {
        timeout: 10,
        keepAliveInterval: 60,
        cleanSession: false,
        useSSL: true,
        onSuccess: onConnect,
        mqttVersion: 4,
        onFailure: function (e) {
            //console.log(e);
        }
    };

    client.connect(options);//连接服务器并注册连接成功处理事件  
    function onConnect() {  
        // console.log("onConnected");  
        client.subscribe('/' + location.hostname + location.pathname);//订阅主题
        //console.log("subscribed");  
        //發送消息  
        var u_id=getCookie('readAgent');
        var page=location.hostname +  location.pathname;
        var sendMessage={
            "u_id": u_id,
            "ip":response,
            "page": page,
            "device":device
        };
        var sMessage=(JSON.stringify(sendMessage));
        message = new Paho.MQTT.Message(sMessage);
        message.destinationName = "/pv/";
        client.send(message);  
        // console.log("sended")
    }  

    client.onConnectionLost = onConnectionLost;//注册连接断开处理事件  
    client.onMessageArrived = onMessageArrived;//注册消息接收处理事件 

    function onConnectionLost(responseObject) {  
        if (responseObject.errorCode !== 0) {  
            //console.log("onConnectionLost:"+responseObject.errorMessage);  
            //console.log("连接已断开");  
         }  
    }  

    function onMessageArrived(message) {  
      //console.log("收到消息:"+message.payloadString);  
      document.getElementById("messageShow").value+=message.payloadString;
      document.getElementById("messageShow").value+="\n";
    } 

    function sendMsg() {  
       message = new Paho.MQTT.Message(document.getElementById("msg").value);  
       message.destinationName = "chat";
       client.send(message);  
       //console.log("sended")
    }           

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }            
