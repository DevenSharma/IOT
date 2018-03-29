var Cylon = require('cylon');
var opn = require('opn');
/*system and child  process module for execute */
var sys = require('sys')
var exec = require('child_process').exec;
var child;
/*system and child  process module for execute */

/*creating cylon js metod */
Cylon.robot({
    connections: {
        keyboard: {
            adaptor: 'keyboard'
        }
    },

    devices: {
        keyboard: {
            driver: 'keyboard'
        }
       
    },

    work: function(my) {
        my.keyboard.on('a', function(key) {
            opn('http://google.com', {
                app: 'firefox'
            });

        });


/*callback of first command execute ls */
        function puts(error, stdout, stderr) {
            if (error) throw error;
            if (stdout) {
                console.log(stdout)
                 exec("ls", putsecond);
            }

            //sys.puts(stdout)
        }


/*callback of second  command execute ls available in first callback  */
        function putsecond(error, stdout, stderr) {
            if (error) throw error;
            if (stdout) {
                console.log(stdout)
            }

        }


        

        /*method if we want to create request at 1 second and 2 second and 3rd second*/
        after((1).second(), function() {
           /*execute any command on command line*/
            exec("ls -la", puts);
           
        })

        after((2).second(), function() {
            //my.led.toggle()

            console.log("inside second one")
        })

        after((3).seconds(), function() {
            console.log('I\'m shutting down now.')
     

        })

    }
}).start();