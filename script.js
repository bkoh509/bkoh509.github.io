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

/* ========================================================== */
/*                     Dragable/Copyable                      */
/* ========================================================== */
document.getElementById('toggle').addEventListener('change', function () {
    if (this.checked) {
        console.log('Toggle is ON');
        document.documentElement.style.setProperty('--main-tooltip-display', 'block');
    } else {
        console.log('Toggle is OFF');
        document.documentElement.style.setProperty('--main-tooltip-display', 'none');
    }
});

/* ========================================================== */
/*                        Top Scroller                        */
/* ========================================================== */
const topScroller  = document.getElementById("topScroller");

window.addEventListener("scroll", () => {
    topScroller .style.display = window.scrollY > 20 ? "block" : "none";
});

topScroller .addEventListener("click", () => {
    window.scrollTo({ top : 0 });
});

/* ========================================================== */
/*                      Language Switcher                     */
/* ========================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.getElementById('langToggle');
    const wrapper = document.getElementById('langWrapper');

    toggler.addEventListener('change', () => {
        if (toggler.checked) {
            wrapper.classList.remove('lang-en');
            wrapper.classList.add('lang-ko');
        } else {
            wrapper.classList.remove('lang-ko');
            wrapper.classList.add('lang-en');
        }
    });
});

/* ========================================================== */
/*                       Section Loader                       */
/* ========================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const pages = [
        { url: './sections/research_interests_en.html', elementId: 'research-interests-en' },
        { url: './sections/research_interests_ko.html', elementId: 'research-interests-ko' },
        { url: './sections/education_experience.html', elementId: 'education-experience' },
        { url: './sections/publications.html', elementId: 'publications' },
        { url: './sections/research_projects.html', elementId: 'research-projects' },
        { url: './sections/patents.html', elementId: 'patents' },
        { url: './sections/honors_awards.html', elementId: 'honors-awards' }
    ];

    pages.forEach(page => {
        fetch(page.url)
            .then(response => response.text())
            .then(html => {
                document.getElementById(page.elementId).innerHTML = html;
            })
            .catch(error => {
                console.error(`Error loading ${page.url}:`, error);
            });
    });
});

/* ========================================================== */
/*                           Copier                           */
/* ========================================================== */
// function snackbar() {
//   const x = document.getElementById("snackbar");
//   x.className = "show";
//   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
// }
//
// document.addEventListener("DOMContentLoaded", function () {
//     const clickTargets = document.querySelectorAll('.tooltip');
//
//     clickTargets.forEach(target => {
//         target.addEventListener('click', function () {
//             alert('clicked');
//             let is_copied = document.documentElement.style.getPropertyValue('--main-tooltip-display').trim();
//             if (is_copied === 'block') {
//                 // const siblingToCopy = this.parent.nextElementSibling; // Get the next sibling (.tooltip-hover)
//                 const siblingToCopy = this.parentElement
//                 // const textToCopy = siblingToCopy.querySelector(".tooltip-content").textContent;
//                 const textToCopy = siblingToCopy.querySelector(".tooltip-content").innerText;
//
//                 window.navigator.clipboard.writeText(textToCopy).then(() => snackbar())
//
//                 // alert('Content copied to clipboard!');
//             } else {
//                 // alert('Content do not copy to clipboard!');
//             }
//         });
//     });
// });

function snackbar() {
    const x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 1000);
}
//
// document.addEventListener("DOMContentLoaded", function () {
//     const clickTargets = document.querySelectorAll('.tooltip');
//     console.log(clickTargets);
//
//     clickTargets.forEach(target => {
//         target.addEventListener('click', function () {
//             console.log("clicked");
//             const parent = this.parentElement;
//             const tooltipHover = parent.querySelector('.tooltip-hover');
//             const tooltipContent = tooltipHover.querySelector('.tooltip-content');
//
//             // 툴팁이 보일 때만 복사 (display !== 'none')
//             const isVisible = getComputedStyle(tooltipHover).display !== 'none';
//
//             if (isVisible) {
//                 const textToCopy = tooltipContent.innerText;
//                 navigator.clipboard.writeText(textToCopy).then(() => snackbar());
//             } else {
//                 // 안 보일 때는 복사하지 않음
//                 // console.log("Tooltip not visible, copy skipped.");
//             }
//         });
//     });
// });

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('tooltip')) {
        const parent = event.target.parentElement;
        const tooltipHover = parent.querySelector('.tooltip-hover');
        const tooltipContent = tooltipHover.querySelector('.tooltip-content');

        // 툴팁이 보일 때만 복사 (display !== 'none')
        const isVisible = getComputedStyle(tooltipHover).display !== 'none';
        console.log(isVisible);

        if (isVisible) {
            const textToCopy = tooltipContent.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => snackbar());
        } else {
            // 안 보일 때는 복사하지 않음
            console.log("Tooltip not visible, copy skipped.");
        }

        // if (tooltipContent) {
        //     const textToCopy = tooltipContent.innerText;
        //     navigator.clipboard.writeText(textToCopy).then(() => {
        //         const snackbar = document.getElementById("snackbar");
        //         snackbar.className = "show";
        //         setTimeout(() => snackbar.className = "", 1000);
        //     });
        // }
    }
});