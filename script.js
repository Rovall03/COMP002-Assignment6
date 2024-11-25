// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.
let form = document.getElementById('preferences-form'); // gets info from form 
let nameId = document.getElementById('name');//selects the section where you put name in
let greeting = document.getElementById('greeting');// selects greeting 
let background = document.getElementById ('background-color');//selects section for background color
let font = document.getElementById('foreground-color')//selects the font 




function preferences(){ //function to get saved info from local storage 
    let myName = localStorage.getItem('name');//gets the saved name
    if (myName){ //once name is entered the greeting Hi plus name entered pops up
        greeting.textContent= `Hi ${myName} 👋!`;
    }
    let background = localStorage.getItem('background-color'); //gets color info from  local storage
    if (background){document.body.style.backgroundColor = background; //gets color

 }
    let font =localStorage.getItem('foreground-color'); //gets color for font from local storage
    if (font){document.body.style.color = font;

}
    
}

preferences();//apply preferences 



form.addEventListener('submit',(event)=>{// listener for submit is hit 
    event.preventDefault();// prevents default 
    localStorage.setItem('name',nameId.value); // saves name info 
    localStorage.setItem('background-color', background.value);//saves info for background
    localStorage.setItem('foreground-color',font.value);//saves font 



    preferences(); //calls function again 
    alert ('Got it 👍!')//box pops up alert after submit 
})
  