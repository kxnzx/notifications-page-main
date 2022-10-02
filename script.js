// SET THE NUMBER OF UNREAD MESSAGES TO ZERO AND REMOVE BACKGROUND-COLOR & NOTIFICATIONDOT WHEN BUTTON IS CLICKED
// This tells the browser to pay attention to the following element:
const dot = document.querySelector(".notificationDot");
const counter = document.querySelector(".unreadMssgNumber");
const unreadMssg = document.querySelectorAll(".unreadMssg");
counter.innerText = unreadMssg.length;

const markAllAsRead = document.querySelector(".button");
// Do this when button is clicked:
markAllAsRead.addEventListener("click", () => {
  for (let onRead of unreadMssg) {
    onRead.classList.remove("unreadMssg");
    onRead.classList.add("no-after");
  }
  counter.innerText = 0;
  dot.classList.add("no-after"); // This only works for the first element
});
