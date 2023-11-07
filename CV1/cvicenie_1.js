
function turn_blue(){
    const text = document.getElementById("blue_text");
    text.style.color ="blue";
}
function first_p_action(){
    const first_paragraph = document.getElementById("first");
    first_paragraph.style.visibility = "hidden";
}

function second_p_action(){
    const first_paragraph = document.getElementById("first");
    const second_paragraph = document.getElementById("second");
    const third_paragraph = document.getElementById("third");
    const fourth_paragraph = document.getElementById("fourth");
    first_paragraph.style.visibility = "hidden";
    second_paragraph.style.visibility = "hidden";
    third_paragraph.style.visibility = "hidden";
    fourth_paragraph.style.visibility = "hidden";
}

function third_p_action(){

    const green = document.getElementsByClassName("green");
    for (let i = 0; i < green.length; i++) {
        green[i].style.visibility = "hidden";
      }
}

function fourth_p_action(){
    const fourth_paragraph = document.getElementById("fourth");
    const content = fourth_paragraph.innerHTML;
    alert(content);
}


/*

input_color() {
    on_focus(event){
        event.target.style.backgroundColor = "green";
    }
    out_of_focus(event){
        event.target.style.backgroundColor = "turqoise";
    }
    const first_input = document.getElementById("first_input");
    const second_input = document.getElementById("second_input");
    first_input.addEventListener("focus", on_focus());
    first_input.addEventListener("blur", out_of_focus());

}*/
const inputs = document.querySelectorAll('.color-changing-input');

// Add event listeners to each input
inputs.forEach(input => {
  input.addEventListener('focus', function() {
    // Actions when the input gains focus
  });
  
  input.addEventListener('blur', function() {
    // Actions when the input loses focus
  });
});



  