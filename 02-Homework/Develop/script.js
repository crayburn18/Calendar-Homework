let tdyDate = $("#currentDay")

tdyDate.text(moment().format("LLLL"));

let currentTime = moment().hour();

let hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for(i=0; i>hour.length; i++){
    let calendarTime = $("#" + hour[i]);

    if (currentTime == hour[i]){
        $("#" + hour[i]).addClass("present");
    } 
    else if (currentTime > hour[i]){
        $("#" + hour[i]).addClass("past");
    } else {
        $("#" + hour[i]).addClass("future");
    }
};

