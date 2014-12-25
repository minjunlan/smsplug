var smsExport = {};

smsExport.sendMessage = function(messageInfo, successCallback, errorCallback) {
	alert(messageInfo);
    if (messageInfo == null || typeof messageInfo !== 'object') {
    
        if (errorCallback) {
            errorCallback({
                code: "INVALID_INPUT",
                message: "输入值非法！"
            });
        }
       
        return;
    }
           
    var phoneNumber = messageInfo.phoneNumber;
    var textMessage = messageInfo.textMessage;
           
    if (! phoneNumber) {
        if (errorCallback) {
            errorCallback({
                code: "MISSING_PHONE_NUMBER",
                message: "Missing Phone number"
            });
        }
           
        return;
    }
	
	if(! textMessage || textMessage == ""){
        if (errorCallback) {
            errorCallback({
                code: "MISSING_PHONE_TEXT",
                message: "短信内容为空！"
            });
        }
           
        return;	

	}
           
    cordova.exec(successCallback, errorCallback, "Sms", "sendMessage", [phoneNumber, textMessage]);
};

module.exports = smsExport;