const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));

(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  // Get current UTC date
  const today = new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate()));
  
  const date = "08/07/2023";
  const countDown = new Date(Date.UTC(
    parseInt(date.split('/')[2], 10),
    parseInt(date.split('/')[0], 10) - 1,
    parseInt(date.split('/')[1], 10)
  )).getTime();

  const x = setInterval(function() {    
    const now = new Date().getTime(),
          distance = countDown - now;

    let days = Math.floor(distance / (day));
    let hours = Math.floor((distance % (day)) / (hour));
    let minutes = Math.floor((distance % (hour)) / (minute));
    let seconds =  Math.floor((distance % (minute)) / second);

    if (days != 0)
      document.getElementById("Days").innerText = days + " DAYS";

    if (hours != 0)
      document.getElementById("Hours").innerText = hours + " HOURS";

    if (minutes != 0)
      document.getElementById("Minutes").innerText = minutes + " MINUTES";

    if (seconds != 0)
      document.getElementById("Seconds").innerText = seconds + " SECONDS";

    if (days == 0)
      document.getElementById("Days").innerText = "";

    if (hours == 0)
      document.getElementById("Hours").innerText = "";

    if (minutes == 0)
      document.getElementById("Minutes").innerText = "";

    if (seconds == 0)
      document.getElementById("Seconds").innerText = "";
  }, 0);
})();