$(document).ready(function() {
  // $.validator.setDefaults( {
  // 	submitHandler: function () {
  // 		alert( "submitted!" );
  // 	}
  // });

  $.validator.methods.reg_email = function(value, element) {
    return (
      this.optional(element) ||
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/.test(value)
    );
  };
  $.validator.methods.reg_phone = function(value, element) {
    return (
      this.optional(element) || /^((09)|(01)[268]{1})+([0-9]{8})$/.test(value)
    );
  };
  $.validator.methods.reg_pass = function(value, element) {
    return this.optional(element) || /^([\w]{8,12})$/.test(value);
  };
  $('#fRegister').validate({
    rules: {
      fullName: {
        required: true
      },
      address: {
        required: true
      },
      phone: {
        required: true,
        reg_phone: true
      },
      email: {
        required: true,
        reg_email: true
      },
      rules: 'required',
      password: {
        required: true,
        reg_pass: true
      },
      confirm_password: {
        equalTo: '#password'
      }
    },
    messages: {
      fullName: 'Họ tên không được trống!',
      address: 'Địa chỉ không được trống!',
      phone: {
        required: 'Số điện thoại không được trống!',
        reg_phone: 'Số điện thoại sai định dạng, hoặc không đúng!'
      },
      email: {
        required: 'Email không được trống!',
        email: 'Email không hợp lệ!'
      },
      password: {
        required: 'Mật khẩu không được bỏ trống',
        reg_pass:
          'Mật khẩu không phân biệt chữ thường,hoa,số và kí tự đặc biệt(8 đến 12 kí tự)!'
      },
      confirm_password:
        'Mật khẩu nhập lại không khớp, vui lòng nhập lại mật khẩu',
      rules: '&nbsp; Bạn phải đống ý với điều khoản của chúng tôi'
    }
    // errorElement: 'em',
    // errorPlacement: function(error, element) {
    //   error.addClass('txt-danger help-block');
    //   if (element.prop('type') === 'checkbox') {
    //     error.insertAfter(element.parent('label'));
    //   } else {
    //     error.insertAfter(element);
    //   }
    // },
  });

  $('#btnSm').click(function(event) {
    event.preventDefault();
    if ($('#fRegister').valid()) {
      console.log('Dung DD');
      alert('Dang ki thanh cong');
      window.location.href = 'https://www.google.com.vn/';
    }
  });
});

//  $('#btnSm').on('click',function(event){
//        event.preventDefault();
//         if(!$(':input').hasClass('error')) {
//             console.log('Dung DD');
//           window.location.href = "https://www.google.com.vn/";
//         }
//      })
