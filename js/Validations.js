$(document).ready(function(){
    $("#registration").validate({
      // Specify validation rules
      rules: {
        fname: "required",
        lname: "required",
        address: "required",
        email: {
          required: true,
          email: true
        },
        quantity: {
          required: true,
          digits: true,
        },      
        phone: {
          required: true,
          digits: true,
          minlength: 10,
          maxlength: 10,
        },
        Zip: {
            required: true,
            digits: true,
            minlength: 6,
            maxlength: 6,
          }
      },
      messages: {
         quantity: {
        required: "Please enter quantity.",
       },  
       fname: {
        required: "Please enter first name.",
       },      
       lname: {
        required: "Please enter last name.",
       }, 
       address: {
        required: "Please enter address.",
       },    
       phone: {
        required: "Please enter phone number.",
        digits: "Please enter valid phone number.",
        minlength: "Phone number field accept only 10 digits.",
        maxlength: "Phone number field accept only 10 digits.",
       },
       Zip: {
        required: "Please enter postal-code.",
        digits: "Please enter postal-code.",
        minlength: "Postal-code field accept only 6 digits.",
        maxlength: "Postal-code field accept only 6 digits.",
       },      
       email: {
        required: "Please enter email address.",
        email: "Please enter a valid email address.",
       },
      },
    
    });
  });