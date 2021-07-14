function validateForm() {
    var name = document.forms["myForm"]["fname"].value;
    var lastName = document.forms["myForm"]["lname"].value;
    var phoneNumber = document.forms["myForm"]["phonenumber"].value;
    var email = document.forms["myForm"]["email"].value;
    var subject = document.forms["myForm"]["subject"].value;
    if (name == "") {
      alert("Please enter your name!");
      return false;
    }
    else if(lastName == ""){
        alert("Please enter last name");
        return false;
    }
    else if(phoneNumber == ""){
        alert("Enter phone number");
        return false;
    }
    else if(email == "" && email != email.includes("@.com")){
        alert("Enter correct email");
        return false;
    }
    else if(subject == ""){
        alert("Enter subject");
        return false;
    }
    else{
        alert("Submitting details.....");
    }
  }