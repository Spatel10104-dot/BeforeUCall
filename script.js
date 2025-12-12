// Define each kid + their time zones
// Saahil -> North Carolina (EST) -> America/New_York
// Andrew & Maya -> Texas (CST) -> America/Chicago
const kids = [
  {
    id: "saahil",
    timeZone: "America/New_York",
  },
  {
    id: "maya",
    timeZone: "America/Chicago",
  },
  {
    id: "andrew",
    timeZone: "America/Chicago",
  },
];

// Format: 12-hour, e.g., 3:17 PM
function getFormattedTime(timeZone) {
  const now = new Date();
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone,
  }).format(now);
}

function updateTimes() {
  kids.forEach((kid) => {
    const card = document.querySelector(`.kid-card[data-kid="${kid.id}"]`);
    if (!card) return;

    const timeEl = card.querySelector(".kid-time");
    if (!timeEl) return;

    timeEl.textContent = getFormattedTime(kid.timeZone);
  });
}

// Update immediately on load
updateTimes();

// Then refresh every 30 seconds
setInterval(updateTimes, 30000);
