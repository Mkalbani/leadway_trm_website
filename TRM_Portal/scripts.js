// Login page: Hide password when 'Show' is clicked
let myPassword = document.getElementById('myPassword');
let password = document.getElementById('password');

function showPassword(){
if (password.type === 'password'){
    password.type = 'text'
    myPassword.innerHTML ='HIDE'
}else{
    password.type = 'password'
    myPassword.innerHTML = 'SHOW'
}
}

function toggleAside() {
    const aside = document.getElementById('aside');
    aside.classList.toggle('active');
}


// Make card highlight when clicked
document.addEventListener('DOMContentLoaded', function () {
    const creationCard1 = document.getElementById('creationCard1');
    const creationCard2 = document.getElementById('creationCard2');
    const createRequestBtn = document.getElementById('createRequestBtn');

    let selectedCard = '';

    creationCard1.addEventListener('click', function () {
        addBorder(creationCard1, 'highlight1');
        createRequestBtn.classList.add('orange');
        selectedCard = 'preloss';
    });

    creationCard2.addEventListener('click', function () {
        addBorder(creationCard2, 'highlight2');
        createRequestBtn.classList.add('orange');
        selectedCard = 'postloss';
    });

    createRequestBtn.addEventListener('click', function () {
        if (selectedCard === 'preloss') {
            location.href = 'preloss.html';
        } else if (selectedCard === 'postloss') {
            location.href = 'postloss.html';
        }
    });

    function addBorder(element, className) {
        const allCards = document.querySelectorAll('.creationCard1, .creationCard2');
        for (const card of allCards) {
            card.classList.remove('highlight1', 'highlight2');
        }
        element.classList.add(className);
    }
});

// make tel input NG
const phoneInput = document.querySelector('#contact-phone-number');
const iti = window.intlTelInput(phoneInput, {
  initialCountry: "NG",
})


// // modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the element that closes the modal
// var span = document.getElementById("cancel-btn");

// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on cancel, close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generate-btn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
        document.getElementById('modal').style.display = 'flex';
    });

    document.getElementById('cancel-btn').addEventListener('click', function() {
        document.getElementById('modal').style.display = 'none';
    });

    document.getElementById('submit-btn').addEventListener('click', function() {
        alert('Form submitted');
        document.getElementById('modal').style.display = 'none';
    });
});


// SURVEY PAGE -- Change content
function showContent(clickedButton, contentId) {
    // Remove 'active' class from all tabs
    const allTabs = document.querySelectorAll('.tab');
    for (const tab of allTabs) {
        tab.classList.remove('active');
    }

    // Add 'active' class to the clicked button
    clickedButton.classList.add('active');

    // Hide all content sections
    const allContent = document.querySelectorAll('.tab-content > div, .tab-content > p');
    for (const content of allContent) {
        content.classList.add('hidden');
        content.classList.remove('visible');
    }

    // Show the content section based on the contentId
    const contentToShow = document.getElementById(contentId);
    contentToShow.classList.add('visible');
    contentToShow.classList.remove('hidden');

        if (contentId === 'supportingDocs') {
        contentToShow.classList.add('grid-layout');
    } else {
        const supportingDocs = document.getElementById('supportingDocs');
        supportingDocs.classList.remove('grid-layout');
    }
}
