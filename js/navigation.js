
// This is preparation done on the page startup to setup the initial page start
  $().ready(function(){

    hideErrorAlerts();

    $("#personalLink a").click(function(){
      showPersonalDetails(); 
      return false;
    });

    $("#carLink a").click(function(){
      showCarDetails(); 
      return false;
    });

    $("#quoteLink a").click(function(){
      showQuoteDetails(); 
      return false;
    });
  });

  function showCarDetails() {


    var nameField = document.forms["personalDetailsForm"] ["nameInput"].value;
    if (nameField == null  || nameField == "") {
      alert("Name must be filled out");
      return false;
    }

 var ageField = document.forms["personalDetailsForm"] ["numberAge"].value;
    if (ageField == null  || ageField == "") {
      alert("Age must be filled out");
      return false;
    }

    var townCityField = document.forms["personalDetailsForm"] ["townCityInput"].value;
    if (townCityField == null  || townCityField == "") {
      alert("Town/City must be filled out");
      return false;
    }



    var emailAddress = document.forms["personalDetailsForm"] ["EmailAddressInput"].value;
    if (emailAddress == null  || emailAddress == "") {
      alert("emailAddress must be filled out");
      return false;
    }

    $('#dvPersonalDetails').hide(); 
     $('#dvCarDetails').show();

    // Hide the personal details section (dvPersonalDetails)
    // Hide the quote section (dvQuoteDetails)
    // Show the car details section (dvCarDetails)

  }

  function showPersonalDetails() {
    var model = document.forms["carDetailsForm"] ["txtModel"].value;
    if (model == null  || model == "") {
      alert("model must be filled out");
      return false;
    }

    var carAge = document.forms["carDetailsForm"] ["numberAge"].value;
    if (carAge == null  || carAge == "") {
      alert("carAge must be filled out");
      return false;
    }

    var engineSize = document.forms["carDetailsForm"] ["number"].value;
    if (engineSize == null  || engineSize == "") {
      alert("engineSize must be filled out");
      return false;
    }


    $('#dvPersonalDetails').show(); 
     $('#dvCarDetails').hide();

      // Hide the car details section (dvCarDetails)
      // Hide the quote section (dvQuoteDetails)
      // Show the personal details section (dvPersonalDetails)
  }

  function showQuoteDetails() {
      // Hide the car details section (dvCarDetails)
      // Hide the personal details section (dvQuoteDetails)
      // Show the quote section (dvPersonalDetails)
  }

  /*function getQuote() {

    // Perform validation to test that all data has been entered

    if (/* Page is Valid )
    {

      // Get the values from the page elements that you need to create your JSON

      $.ajax({
          type: "GET",
          url: "http://localhost:53753/api/rating/CalculateRates",
          data: { /* create JSON here  }
        }).done(function(msg) {
          // Put the return value into Label created on quote details
          // Hide the Car Details section
          // Display the quote details page
      });
  }*/

//################################# Helper Functions - look at these when validating and changing section #########################################

  // Use this function to "Reset" the form and hide all 3 error sections whenever you make a section transition
  function hideErrorAlerts()
  {
    $("#dvPersonalDetailsAlert").hide();
    $("#dvCarDetailsAlert").hide();
    $("#dvQuoteDetailsAlert").hide();
  }

  // This function will control the top navigation and set the active tab when you make a section transition
  // You will need to call it and pass in the tab that needs to be made active
  function setActiveNavigation(activeTab) {
    $(".nav li").removeClass("active");

    $("#" + activeTab).addClass("active");
  }
