window.addEventListener('load', () => {
        Swal.fire({
                title: 'do you want to play music in the backgroung?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
}).then((result) => {
        if (result.isConfirmed){
                document.querySelector("#song").play();
                
                onload();
        }else {
               onload();
        }
})

});
onload = () =>{
        document.body.classList.remove("container");
};
