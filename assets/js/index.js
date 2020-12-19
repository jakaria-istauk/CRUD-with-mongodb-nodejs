$('#update_user').submit(function(e){
    e.preventDefault()
    var formData = $(this).serializeArray()
    var data = {}

    $.map(formData, function(n,i){
        data[n['name']] = n['value']
    })

    var request = {
        "url":`http://localhost:3000/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }

    $.ajax(request).done(function(resp){
        alert("User Updated successfully!");
    })

    // console.log(data) 
})

if(window.location.pathname == '/'){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        var request = {
            "url":`http://localhost:3000/api/users/${id}`,
            "method":"DELETE"
        }

        if(confirm("Are you sure to delet this?")){
            $.ajax(request).done(function(resp){
                alert("User Deleted successfully!");
                location.reload()
            })
        }
    })
}