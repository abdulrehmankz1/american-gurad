const dataList = [
  {
    post: "Beach Center South\nBay 11643",
    shift: "Split Weekday Shift",
    start: "09:00",
    end: "15:00",
    job: "Un-Armed Guard",
    days: [
      { type: "completed", name: "Errol Wilford\nMilligan" },
      { type: "no_shift", name: "No Shift" },
      { type: "completed", name: "Errol Wilford\nMilligan" },
      { type: "temp", name: "Deandre Demetrius\nGrissom" },
      { type: "vacant", name: "" },
    ],
  },
  {
    post: "Beach Center South\nBay 11643",
    shift: "Split Weekday Shift",
    start: "09:00",
    end: "15:00",
    job: "Un-Armed Guard",
    days: [
      { type: "completed", name: "Errol Wilford\nMilligan" },
      { type: "vacant", name: "Vacant" },
      { type: "completed", name: "Errol Wilford\nMilligan" },
      { type: "check_in", name: "Elijah Chatman" },
      { type: "assiged", name: "Joshua Anthony\nPerez" },
    ],
  },
  {
    post: "Beach Center South\nBay 11643",
    shift: "Adhoc-Day Shift 1",
    start: "15:00",
    end: "21:00",
    job: "Un-Armed Guard",
    days: [
      { type: "vacant", name: "Vacant" },
      { type: "no_shift", name: "No Shift" },
      { type: "no_shift", name: "No Shift" },
      { type: "completed", name: "Joshua Anthony\nPerez" },
      { type: "vacant", name: "Vacant" },
    ],
  },
  {
    post: "Beach Center South\nBay 11643",
    shift: "Adhac-Swing Shift 1",
    start: "09:00",
    end: "15:00",
    job: "Un-Armed Guard",
    days: [
      { type: "no_shift", name: "No Shift" },
      { type: "temp", name: "Deandre Wilford Grissom" },
      { type: "no_shift", name: "No Shift" },
      { type: "completed", name: "Elijah Chatman" },
      { type: "no_shift", name: "No Shift" },
    ],
  },
  {
    post: "Beach Center South\nBay 11643",
    shift: "Adhoc Day Shift 1",
    start: "15:00",
    end: "21:00",
    job: "Un-Armed Guard",
    days: [
      { type: "no_shift", name: "No Shift" },
      { type: "no_shift", name: "No Shift" },
      { type: "vacant", name: "Vacant" },
      { type: "check_in", name: "Deandre Demetrius\nGrissom" },
      { type: "vacant", name: "Vacant" },
    ],
  },
  {
    post: "Beach Center South\nBay 11643",
    shift: "Split Weekday Shift",
    start: "17:15",
    end: "23:45",
    job: "Un-Armed Guard",
    days: [
      { type: "vacant", name: "Vacant" },
      { type: "completed", name: "Errol Wilford\nMilligan" },
      { type: "temp", name: "Errol Wilford Milligan" },
      { type: "assiged", name: "Joshua Anthony\nPerez" },
      { type: "vacant", name: "Vacant" },
    ],
  },
  {
    post: "Beach Center South\nBay 11643",
    shift: "Split Weekday Shift",
    start: "09:00",
    end: "15:00",
    job: "Un-Armed Guard",
    days: [
      { type: "check_in", name: "Deandre Demetrius\nGrissom" },
      { type: "no_shift", name: "No Shift" },
      { type: "check_in", name: "Deandre Demetrius\nGrissom" },
      { type: "temp", name: "Elijah Chatman" },
      { type: "assiged", name: "Joshua Anthony\nPerez" },
    ],
  },
  {
    post: "Beach Center South\nBay 11643",
    shift: "Adhoc-Day Shift 1",
    start: "15:00",
    end: "21:00",
    job: "Un-Armed Guard",
    days: [
      { type: "assiged", name: "Joshua Anthony\nPerez" },
      { type: "vacant", name: "Vacant" },
      { type: "check_in", name: "Errol Wilford\nMilligan" },
      { type: "completed", name: "Joshua Anthony\nPerez" },
      { type: "vacant", name: "Vacant" },
    ],
  },
  {
    post: "Beach Center South\nBay 11643",
    shift: "Adhoc Swing Shift 1",
    start: "09:00",
    end: "15:00",
    job: "Un-Armed Guard",
    days: [
      { type: "vacant", name: "Vacant" },
      { type: "completed", name: "Elijah Chatman" },
      { type: "no_shift", name: "No Shift" },
      { type: "vacant", name: "Vacant" },
      { type: "no_shift", name: "No Shift" },
    ],
  },
  {
    post: "Beach Center South\nBay 11643",
    shift: "Adhoc Day Shift 1",
    start: "15:00",
    end: "21:00",
    job: "Un-Armed Guard",
    days: [
      { type: "no_shift", name: "No Shift" },
      { type: "no_shift", name: "No Shift" },
      { type: "no_shift", name: "No Shift" },
      { type: "vacant", name: "Vacant" },
      { type: "no_shift", name: "No Shift" },
    ],
  },
  {
    post: "Beach Center South\nBay 11643",
    shift: "Split Weekday Shift",
    start: "17:15",
    end: "23:45",
    job: "Un-Armed Guard",
    days: [
      { type: "vacant", name: "Vacant" },
      { type: "temp", name: "Errol Wilford\nMilligan" },
      { type: "completed", name: "Errol Wilford\nMilligan" },
      { type: "no_shift", name: "No Shift" },
      { type: "temp", name: "Joshua Anthony Perez" },
    ],
  },
];

function renderCustomData(data) {
  const container = document.getElementById("container");

  data.forEach((item) => {
    const bodyDiv = document.createElement("div");
    bodyDiv.className = "custom_data_body";

    // Base info
    bodyDiv.innerHTML = `
        <div class="post">${item.post.replace(/\n/g, "<br>")}</div>
        <div class="shift">${item.shift}</div>
        <div class="start">${item.start}</div>
        <div class="end">${item.end}</div>
        <div class="job_designation">${item.job}</div>
      `;

    // Day-wise info
    item.days.forEach((day) => {
      const dayDiv = document.createElement("div");
      dayDiv.className = `day ${day.type}`;

      if (day.type === "no_shift") {
        dayDiv.innerHTML = `<span class="no_shift_text">${day.name}</span>`;
      } else {
        dayDiv.innerHTML = day.name.replace(/\n/g, "<br>");
      }

      bodyDiv.appendChild(dayDiv);
    });

    container.appendChild(bodyDiv);
  });
}

// Call render function after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  renderCustomData(dataList);
});


{/* <div id="container"></div> javascript table  */}
