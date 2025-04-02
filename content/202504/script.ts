// document.addEventListener('DOMContentLoaded', () => {
// Select all buttons in the container that have a data-date-time attribute
const timeButtons = document.querySelectorAll(".xYUUDc button[data-date-time]");

timeButtons.forEach((button) => {
  let tooltip = null;

  button.addEventListener("mouseenter", (event) => {
    // Read the timestamp from the button. It is assumed to be in milliseconds.
    const timestamp = parseInt(button.getAttribute("data-date-time"), 10);
    const dateNY = new Date(timestamp); // Underlying Date, originally based on UTC

    // Convert the NY date/time to JST format.
    // Even though the UI time appears in New York time, the timestamp itself is in ms since epoch.
    const jstTime = dateNY.toLocaleString("en-US", {
      timeZone: "Asia/Tokyo",
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    // Create the tooltip element
    tooltip = document.createElement("div");
    tooltip.innerText = `[JST]: ${jstTime}`;

    // Style the tooltip (adjust styles as needed)
    tooltip.style.position = "absolute";
    tooltip.style.background = "rgba(0, 0, 0, 0.75)";
    tooltip.style.color = "#fff";
    tooltip.style.padding = "5px 8px";
    tooltip.style.fontSize = "12px";
    tooltip.style.borderRadius = "4px";
    tooltip.style.pointerEvents = "none";
    tooltip.style.transition = "opacity 0.2s";
    tooltip.style.zIndex = 1000;

    // Position the tooltip relative to the button.
    // Here we are placing it to the right of the button; you can adjust as needed.
    const btnRect = button.getBoundingClientRect();
    tooltip.style.left = btnRect.right + 10 + "px";
    tooltip.style.top = btnRect.top + "px";

    document.body.appendChild(tooltip);
  });

  button.addEventListener("mouseleave", () => {
    // Remove the tooltip when the mouse leaves the button
    if (tooltip) {
      document.body.removeChild(tooltip);
      tooltip = null;
    }
  });
});
// });
