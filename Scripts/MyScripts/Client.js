$(document).ready(function () {
  var  uri = "http://localhost:49654/api/Persons";
  
    var t = $('#example').DataTable();
    $.getJSON(uri)
     .done(function (data) {
         // On success, 'data' contains a list of Person.
         $.each(data, function (key, item) {
             console.log(item);
             t.row.add([
      '<a class="delete" style="color:blue;cursor:pointer">delete</a>',
      '<p class="id">' + item.ID + '</p>',
      '<p class="name">' + item.Name + '</p>',
      '<p class="lname">' + item.Fname + '</p>',
      '<a  class="update" style="color:blue;cursor:pointer">update</a>'
             ]).draw(false);
         });
     });
    $('#addRow').on('click', function () {
        var user = {
            Name: $("#name").val(),
            Fname: $("#lastname").val()
        }
        $.ajax({
            url: "http://localhost:49654/api/Persons",
            type: "POST",
            contentType: "application/json",
            dataType: 'json',
            data: JSON.stringify(user),
            success: function (data) {
              
            }
        });
        location.reload();
    });
});
$('body').on("click", ".delete", function () {
    var id = $(this).parent().parent().find(".id").text();
    $.ajax({
        url: "http://localhost:49654/api/Persons/" + id,
        type: "DELETE",
        contentType: "application/json",
        dataType: 'json',
        success: function (data) {

        }
    });

    location.reload();
 
});
$('body').on("click", ".update", function () {
    var id = $(this).parent().parent().find(".id").text();
    var name = $(this).parent().parent().find(".name").text();
    var lnamed = $(this).parent().parent().find(".lname").text();
    var pname = $(this).parent().parent().find(".name");
    var plmane = $(this).parent().parent().find(".lname")
    pname.replaceWith('<input id="updatename" type="text"/>');
    plmane.replaceWith('<input id="updatelname" type="text"/>');
    $("#updatename").val(name);
    $("#updatelname").val(lnamed);
    $(this).replaceWith("<a id ='saveupdate' style='color:blue;cursor:pointer'>save</a>")
  
   

});
$('body').on("click", "#saveupdate", function () {
    var id = $(this).parent().parent().find(".id").text();
    var personupdate = {
        ID: id,
        Name: $("#updatename").val(),
        Fname: $("#updatelname").val()
    }
    $.ajax({
        url: "http://localhost:49654/api/Persons",
        type: "PUT",
        contentType: "application/json",
        dataType: 'json',
        data: JSON.stringify(personupdate),
        success: function (data) {

        }
    });

    location.reload();
})