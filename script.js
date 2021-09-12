if (document.readyState) {
  const yearToLive = 60;
  var Birth = moment("03/06/1992", "DD/MM/YYYY");
  var End = Birth.clone().add(yearToLive, "years");
  var Now = moment();
  console.log(Birth.format("DD/MM/YYYY"));
  console.log(End.format("DD/MM/YYYY"));
  console.log(Now.format("DD/MM/YYYY"));

  var weeks = End.diff(Birth, "week");
  console.log(weeks);

  var currentWeek = Now.diff(Birth, "week");

  var box = "<div class='box'></div>";
  var pastBox = "<div class='box past'></div>";
  var currentBox = "<div class='box current'></div>";
  var fewBoxes = "<div class='fewLastWeeks'></div>";
  var display = () => {
    var weekYear = 52;
    var remain = weeks;
    var result = "";
    var count = 0;
    var currentYear = 1;
    while (remain > 0) {
      remain -= weekYear;
      if (remain < weekYear) {
        weekYear = remain;
      }
      result += "<div class='year'><span>   "+currentYear+"   </span>";
      for (let index = 0; index < weekYear; index++) {
        if (count == currentWeek) {
          result += currentBox;
        } else if (count < currentWeek) {
          result += pastBox;
        } else if( weekYear < 52) {
          result += fewBoxes;
          
        } else {
            result += box;
        }

        count++;
      }
      result += "</div>";
    }
    return result;
  };
  document.getElementById("contaniner").innerHTML = display();
}
