$(()=>{
    ajaxAddOn = {
        systemMessage:(isError,message)=>{
            $(".system-msg")
                .addClass(!isError ? 'text-success' : 'text-danger')
                .text(message)
        },
        swalMessage:(isError,message)=>{

            icon = isError ? 'error' : 'success';

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: icon,
                title: message
              })
        },
        addFullPageLoading:()=>{
            $(".loading").show()
        },
        removeFullPageLoading:()=>{
            $(".loading").hide()
        },
        addLoading:(elem)=>{
            $(".system-msg").empty()
            $(`#${elem}`).find("input").prop({"disabled":"disabled"})
            $(`#${elem}`).find("button").prepend(
                $("<i>")
                    .addClass("fas fa-spinner fa-spin"),
            )
        },
        removeLoading:(elem)=>{
            $(`#${elem}`).find("input").prop({"disabled":""})
            $(`#${elem}`).find("button").find("i").remove();
        }
    }
})