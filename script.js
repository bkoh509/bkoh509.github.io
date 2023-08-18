// http://youngwoon.github.io/
// more_news = 0
// function newsMore() {
//     let items;
//     if (more_news === 1) {
//         document.getElementById("more_button").innerHTML = "Show less";
//         items = document.getElementsByClassName("more-item");
//         for (i = 0; i < items.length; i++) {
//             items[i].style.display = "list-item";
//         }
//     } else {
//         document.getElementById("more_button").innerHTML = "Show all";
//         items = document.getElementsByClassName("more-item");
//         for (i = 0; i < items.length; i++) {
//             items[i].style.display = "none";
//         }
//     }
//     more_news = 1 - more_news;
// }
//
// newsMore();

// dragable/copyable
document.getElementById('toggle').addEventListener('change', function () {
    if (this.checked) {
        console.log('Toggle is ON');
        document.documentElement.style.setProperty('--main-tooltip-display', 'block');
    } else {
        console.log('Toggle is OFF');
        document.documentElement.style.setProperty('--main-tooltip-display', 'none');
    }
});

// show snackbar
function snackbar() {
  const x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    const clickTargets = document.querySelectorAll('.tooltip');

    clickTargets.forEach(target => {
        target.addEventListener('click', function () {
            let is_copied = document.documentElement.style.getPropertyValue('--main-tooltip-display');
            if (is_copied === 'block') {
                // const siblingToCopy = this.parent.nextElementSibling; // Get the next sibling (.tooltip-hover)
                const siblingToCopy = this.parentElement
                // const textToCopy = siblingToCopy.querySelector(".tooltip-content").textContent;
                const textToCopy = siblingToCopy.querySelector(".tooltip-content").innerText;

                window.navigator.clipboard.writeText(textToCopy).then(() => snackbar())

                // alert('Content copied to clipboard!');
            } else {
                // alert('Content do not copy to clipboard!');
            }
        });
    });
});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
