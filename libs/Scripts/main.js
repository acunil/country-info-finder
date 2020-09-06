$("#submit").click(function () {
  $.ajax({
    url: "libs/PHP/getCountryInfo.php",
    type: "POST",
    dataType: "json",
    data: {
      country: $("#choose-country>select").val(),
      lang: $("#choose-lang>select").val(),
    },
    success(jsonObj) {
      const result = jsonObj["data"][0];
      console.log(jsonObj);

      if (jsonObj.status.name == "ok") {
        $("#continent-result").html(result["continent"]);
        $("#population-result").html(result["population"]);
        $("#capital-result").html(result["capital"]);
        $("#languages-result").html(result["languages"]);
        $("#area-result").html(result["areaInSqKm"]);
      }
    },
    error(jqXHR, textStatus, errorThrown) {
      throw errorThrown;
    },
  });
}); // End of button onclick
