function deleteemployee(id){
    axios.delete(url + "/humanresources/"+id, headers)
        .then(function (res) {
            if (res.data.code === 201) {
                alert(res.data.message);
                window.location.href = "../html/hrsystem.html";
            } else{
                alert(res.data.message);
            }
         }).catch(function (err) {
            console.log(err);
         })
}