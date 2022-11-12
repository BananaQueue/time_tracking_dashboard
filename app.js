const dayNav = document.querySelector('#day');
const weekNav = document.querySelector('#week');
const monthNav = document.querySelector('#month');

const daySelect = document.querySelectorAll('.daily');
const weekSelect = document.querySelectorAll('.weekly');
const monthSelect = document.querySelectorAll('.monthly');

dayNav.addEventListener('click', function () {

    for (day of daySelect) {
        isPresent = day.classList.contains('noDisplay');

        if (isPresent)
            day.classList.toggle('noDisplay');
    }


    for (week of weekSelect) {
        isPresent = week.classList.contains('noDisplay');

        if (!isPresent)
            week.classList.toggle('noDisplay');
    }


    for (month of monthSelect) {
        isPresent = month.classList.contains('noDisplay');

        if (!isPresent)
            month.classList.toggle('noDisplay');
    }


})
weekNav.addEventListener('click', function () {

    for (week of weekSelect) {
        isPresent = week.classList.contains('noDisplay');

        if (isPresent)
            week.classList.toggle('noDisplay');
    }

    for (day of daySelect) {
        isPresent = day.classList.contains('noDisplay');

        if (!isPresent)
            day.classList.toggle('noDisplay');
    }
    for (month of monthSelect) {
        isPresent = month.classList.contains('noDisplay');

        if (!isPresent)
            month.classList.toggle('noDisplay');
    }
})
monthNav.addEventListener('click', function () {

    for (month of monthSelect) {
        isPresent = month.classList.contains('noDisplay');

        if (isPresent)
            month.classList.toggle('noDisplay');
    }

    for (day of daySelect) {
        isPresent = day.classList.contains('noDisplay');

        if (!isPresent)
            day.classList.toggle('noDisplay');
    }

    for (week of weekSelect) {
        isPresent = week.classList.contains('noDisplay');

        if (!isPresent)
            week.classList.toggle('noDisplay');
    }
})