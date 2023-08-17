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

function snackbar() {
  const x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
}

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

document.addEventListener("DOMContentLoaded", function () {
    const clickTargets = document.querySelectorAll('.tooltip');

    clickTargets.forEach(target => {
        target.addEventListener('click', function () {
            let is_copied = document.documentElement.style.getPropertyValue('--main-tooltip-display');
            if (is_copied === 'block') {
                // const siblingToCopy = this.parent.nextElementSibling; // Get the next sibling (.tooltip-hover)
                const siblingToCopy = this.parentElement
                const textToCopy = siblingToCopy.querySelector(".tooltip-content").textContent;

                const tempInput = document.createElement('input');
                document.body.appendChild(tempInput);
                tempInput.value = textToCopy;
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);

                snackbar()
                // alert('Content copied to clipboard!');
            } else {
                // alert('Content do not copy to clipboard!');
            }
        });
    });
});
