


$(document).ready(function(){
  
    let currentTime = moment().hour();


    $(".saveData").on("click", function(){

        var textValue = $(this).siblings(".inputBox").val();
        var parentId = $(this).parent().attr("id")

        localStorage.setItem(parentId, textValue);


    });


    $(".inputBox").each(function(){
        var parentId = $(this).parent().attr("id")
        var value = localStorage.getItem(parentId);

        $(this).val(value);

    });


   
    changeInputColor(); 
    var interval = setInterval(changeInputColor, 1500)
    function changeInputColor(){


        $(".inputBox").each(function(){
            var parentId = parseInt($(this).parent().attr("id"));
            if(parentId < currentTime){
                $(this).removeClass("present")
                $(this).removeClass("future")
                $(this).addClass("past")
            } else if(parentId === currentTime){
                $(this).addClass("present")
                $(this).removeClass("future")
                $(this).removeClass("past")
            }else{
                $(this).removeClass("present")
                $(this).addClass("future")
                $(this).removeClass("past")
            }
    
        });

    }

    getDateTime()
    setInterval(getDateTime, 100)

    function getDateTime(){
        let tdyDate = $("#currentDay").text("");
        tdyDate.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }
    

});
