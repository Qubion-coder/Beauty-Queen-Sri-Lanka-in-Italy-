// Helper to create calendar invitation file (.ics) and Google Calendar link

export function downloadCalendarEvent() {
  // Date: 28.11.2026, 13:00 to 19:30 CET (Assago, Milano)
  // 20261128T120000Z to 20261128T183000Z (CET is UTC+1)
  const icsData = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Miss & Mrs Beauty Queen Sri Lanka in Italy 2026//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:beauty-queen-srilanka-italy-2026@assago.milano',
    'DTSTAMP:20260928T100000Z',
    'DTSTART:20261128T120000Z',
    'DTEND:20261128T183000Z',
    'SUMMARY:Miss & Mrs Beauty Queen Sri Lanka in Italy 2026 by Imaya Liyanage',
    'DESCRIPTION:Step into a night of glamour, culture, and unforgettable elegance. Witness Miss & Mrs Beauty Queen Sri Lanka in Italy 2026 presented by Imaya Liyanage. 13:00 Red Carpet | 13:45 Show Start.\\n“ඉතාලියේදී කිරුළු පලඳින ශ්රී ලාංකේය අභිමානය”',
    'LOCATION:Royal Garden Hotel, Via Giuseppe di Vittorio, 4, 20057 Assago, Milano, Italy',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Beauty_Queen_Sri_Lanka_Italy_2026.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function openGoogleCalendar() {
  const title = encodeURIComponent('Miss & Mrs Beauty Queen Sri Lanka in Italy 2026 by Imaya Liyanage');
  const details = encodeURIComponent(
    'Step into a night of glamour, culture, and unforgettable elegance.\n' +
    'We invite you to witness Miss & Mrs Beauty Queen Sri Lanka in Italy 2026, presented by Imaya Liyanage.\n' +
    '13:00 Red Carpet Start | 13:45 Show Start.\n' +
    '“ඉතාලියේදී කිරුළු පලඳින ශ්රී ලාංකේය අභිමානය”'
  );
  const location = encodeURIComponent('Royal Garden Hotel, Via Giuseppe di Vittorio, 4, 20057 Assago, Milano, Italy');
  const dates = '20261128T120000Z/20261128T183000Z';
  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  window.open(gcalUrl, '_blank', 'noopener,noreferrer');
}
