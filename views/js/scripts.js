$(document).ready(function(){
  getDateInfo();

});

function getDateInfo(){
    var dateField = $(".dateInfo");

    $.ajax({
    url: "/time",
    type:'GET',
    dataType: 'jsonp',
    success: function(res) {
      // console.log(res)
      s = "";
      s += res["getDayOfTheWeek"];
      s += ", ";
      s += res["getMonthOfTheYear"];
      s += " ";
      s += res["getDate"];
      s += ", ";
      s += res["getFullYear"];
      s += ". ";
      var ampm;
      var hour = res["getHours"];
      if (hour == 0){
        s += "12";
        ampm = "AM";
      }else if (hour < 13){
        s += hour;
        ampm = "AM";
      }else {
        s += hour - 12;
        ampm = "PM";
      }
      s += ":";
      s += ("00"+res["getMinutes"]).slice(-2);
      s += ":";
      s += ("00"+res["getSeconds"]).slice(-2);
      s += " ";
      s += ampm;
      s += ".";


      // s += "<pre>"+JSON.stringify(res['coord'], null, 4)+"</pre>";
      // s += "<pre>"+JSON.stringify(res, null, 4)+"</pre>";
       
      dateField.html(s);

      dateField.on('click', function(){
         getDateInfo();
      });
    }
  });
}