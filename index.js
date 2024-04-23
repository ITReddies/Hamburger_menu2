function change() {
    var decider = document.getElementById("menu_checkbox");
    if (decider.checked) {
      document.getElementById("myNav").style.width = "78%";
      document.getElementById("myNav2").style.width = "0%";
    } else {
      document.getElementById("myNav").style.width = "0%";
      document.getElementById("myNav2").style.width = "0%";
      
      var decider2 = document.getElementById("menu_checkbox2");
      if (decider2.checked) {
        window.location.reload();
      } else {
        
      }
    }
  }

  function change2() {
    var decider = document.getElementById("menu_checkbox2");
    if (decider.checked) {
      document.getElementById("myNav2").style.width = "65%";
    } else {
      document.getElementById("myNav2").style.width = "0%";
    }
  }