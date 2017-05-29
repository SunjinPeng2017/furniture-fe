'use strict';

let getSweetAlert = (text, confirmButtonText, cancelButtonText,) => {
    swal({
            title: "Are you sure ?",
            text: text,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText,
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function (isConfirm) {
            if (isConfirm) {
                swal("成功!", "", "success");
            } else {
                swal("失败！", "", "error");
            }
        });
};
