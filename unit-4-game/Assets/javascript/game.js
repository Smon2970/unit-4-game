//create 4 crstyal balls with a random number
//generate a new number everytime user wins or loses
// click function for the crystals
// add number to previous guess until choice has been reached
//random number and random result
// if equal then user wins
//if not equal user loses
//create win counter

$(document).ready(function(){ 
    
    var targetNumber= Math.floor((Math.random() * 80) + 1);
    $("#Number").append(targetNumber);
    console.log(targetNumber);

    var num1= Math.floor((Math.random() * 10) +1);
    console.log(num1);
    var num2=Math.floor((Math.random() * 10) +1);
    console.log(num2);
    var num3=Math.floor((Math.random() * 10) +1);
    console.log(num3);
    var num4=Math.floor((Math.random() * 10) +1);
    console.log(num4);


    var usersTotal= 0;
    var wins=0;
    var losses=0;

    $("#wins").text(wins);
    $("#Losses").text(losses);
    $("#usersTotal").text(usersTotal);

    $(".imageOne").click(function() {
        usersTotal=usersTotal +num1;
        $("#usersTotal").text(usersTotal);

        if (usersTotal === targetNumber) {
            Win();
       }

       else if (usersTotal > targetNumber) {
            youLose();
        }
    })

           

     $(".imageTwo").click(function() {
        usersTotal=usersTotal +num2;
        $("#usersTotal").text(usersTotal);

            if (usersTotal === targetNumber) {
                Win();
           }
    
           else if (usersTotal > targetNumber) {
                youLose();
            }
        })


            $(".imageThree").click(function() {
                usersTotal=usersTotal +num3;
                $("#usersTotal").text(usersTotal);

                if (usersTotal === targetNumber) {
                    Win();
               }
        
               else if (usersTotal > targetNumber) {
                    youLose();
                }
            })

            $(".imageFour").click(function() {
                    usersTotal=usersTotal +num4;
                    $("#usersTotal").text(usersTotal);
                       

             if (usersTotal === targetNumber) {
                Win();
                }

                else if (usersTotal > targetNumber) {
                    youLose();
                }
            })

        function Win() {
            alert("You WIN");
            wins++
            $("#wins").text(wins);
            reset()

        }

        function youLose() {
            alert("You loose");
            losses++
            $("#Losses").text(losses);
            reset()

        }



    function reset() {
        targetNumber= Math.floor((Math.random() * 80) + 1);
        $("#Number").text(targetNumber);

         num1= Math.floor((Math.random() * 10) +1);
        num2=Math.floor((Math.random() * 10) +1);
         num2=Math.floor((Math.random() * 10) +1);
         num4=Math.floor((Math.random() * 10) +1);
             usersTotal=0;
            $("#usersTotal").text(usersTotal);

    }

});
