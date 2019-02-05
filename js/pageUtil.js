$(document).ready(function () {
    $('#decode').click(function() {
      var code = $("#decodeArea").val();
      var decoded =   Base64.decode(code);
      try {
        var input = eval('(' + decoded + ')');
      }
      catch (error) {
        return alert("Cannot eval JSON: " + error);
      }
      var options = {
        collapsed: $('#collapsed').is(':checked'),
        withQuotes: $('#with-quotes').is(':checked')
      };
      $('#output').jsonBrowse(input, options);
      event.preventDefault();
  });
$("#encode").click(function(){
  $("#output").empty();
  var code = $("#encodeArea").val();
              if(code != ""){
                var encoded =   Base64.encode(code);
                    $('#output').append(encoded);
              } else{
                alert("Please input decoded code");
              }
  event.preventDefault();
  });
});
