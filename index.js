let Mobi = function () {
    this.pin = 100;
    this.saveText = "";
    this.inboxText = [];
    this.sendText = [];
    this.isMobi = true;

    //inbox text,nhan tin nhan tu may khac
    this.addInboxText = function (inboxText) {
        if (this.isMobi == true) {

            this.inboxText.push(inboxText);
            this.pin = this.pin - 1;
        }
    }
    this.show = function () {
        if (this.isMobi == true) {

            document.write("<br/> hop thu den " + this.inboxText + "<br/>");
            this.pin = this.pin - 1;
        }

    }
    //send text , gui toi may khac
    this.addSendText = function (sendText) {
        if (this.isMobi == true) {

            this.sendText.push(sendText);
            this.pin = this.pin - 1;
        }

    }
    this.showSendText = function () {
        if (this.isMobi == true) {

            document.write("<br/> hop thu da gui: " + this.sendText + "<br/>");
            this.pin = this.pin - 1;
        }

    }
    //kiem tra bat tat
    this.checkMobi = function () {
        if (this.isMobi == true) {

            if (this.isMobi == true) {
                document.write("<br/> trang thai dien thoai: " + this.isMobi + "<br/>");

            } else {
                document.write("<br/> trang thai dien thoai: " + this.isMobi + "<br/>");
            }
            this.pin = this.pin - 1;
        }

    }
    //tat trang thai mobi
    this.statusMobi = function (value) {
        if (this.isMobi == true) {

            this.isMobi = value;
            this.pin = this.pin - 1;
        }

    }
    //sac pin mobi
    this.sacPin = function () {
        if (this.pin < 95) {

            this.pin = this.pin + 5;
        } else {
            this.pin = 100;
        }
    }
    //soan tin nhan
    this.saveTextValue = function (value) {
        if (this.isMobi == true) {

            this.saveText = value;
            this.pin = this.pin - 1;
        }

    }
    //xem  tin nhan den
    this.showInboxOne = function (value) {
        if (this.isMobi == true) {

            document.write("xem tin nhan den" + this.inboxText[value]);
            this.pin = this.pin - 1;
        }

    }
    //xem  tin nhan gui di
    this.showInboxOne = function (value) {
        if (this.isMobi == true) {

            document.write("xem tin nhan da gui " + this.sendText[value]);
            this.pin = this.pin - 1;
        }
    }
    //phan tram pi
    this.showPin=function (){
        document.write("<br/>trang thai pin : "+this.pin);
    }
}

let result = new Mobi();
result.addInboxText("anh");
result.addInboxText("tien");
result.addInboxText("de");
result.addInboxText("be");
result.show();
result.checkMobi();
result.addSendText("anh tien sida");
result.addSendText("anh tien be de thai");
result.showSendText();
result.showInboxOne(1);
result.showPin();
result.checkMobi();
result.addSendText("anh tien sida");
result.addSendText("anh tien be de thai");
result.showSendText();
result.showInboxOne(1);
result.showPin();
