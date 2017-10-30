var exec = require("child_process").exec,
    _gpioPIN = 21;

var readyGPIO = function () {
    exec("cat /sys/class/gpio/gpio"+_gpioPIN+"/value", function (error, stdout, stderr) {
        if (error) {
            console.log(error);
            
            return;
        }
        console.log('Pin Status: '+stdout);
        
    });
};
readyGPIO();