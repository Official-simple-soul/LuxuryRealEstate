function generateCalendar(year, month, tableId, titleId, availableDates) {
  const table = document.getElementById(tableId);
  const title = document.getElementById(titleId);

  // Clear the previous calendar
  table.innerHTML = '';
  
  // Get the number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Create the calendar header
  const headerRow = document.createElement('tr');
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysOfWeek.forEach(day => {
      const th = document.createElement('th');
      th.textContent = day;
      headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // Get today's date
  const today = new Date();
  const currentDay = today.getDate();
  
  // Create the calendar
  let dayCounter = 1;
  for (let i = 0; i < 6; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < 7; j++) {
          const td = document.createElement('td');
          if (dayCounter <= daysInMonth) {
              td.textContent = dayCounter;
              if (dayCounter === currentDay) {
                  td.classList.add('highlight');
              }
              if (availableDates.includes(dayCounter)) {
                  td.classList.add('available');
              }
              dayCounter++;
          }
          row.appendChild(td);
      }
      table.appendChild(row);
  }

  // Set the calendar title
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  title.textContent = `${monthNames[month]} ${year}`;
}

// Define available dates for November and December
const novemberAvailableDates = [15, 16, 17, 18, 19, 20];
// const decemberAvailableDates = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// Generate the November and December calendars
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
generateCalendar(currentYear, 10, 'november-table', 'november-title', novemberAvailableDates);
// generateCalendar(currentYear, 11, 'december-table', 'december-title', decemberAvailableDates);

// Automatically update the calendars daily
setInterval(() => {
  const newToday = new Date();
  if (newToday.getDate() !== today.getDate()) {
      today = newToday;
      generateCalendar(currentYear, 10, 'november-table', 'november-title', novemberAvailableDates);
      // generateCalendar(currentYear, 11, 'december-table', 'december-title', decemberAvailableDates);
  }
}, 24 * 60 * 60 * 1000); // Update every 24 hours