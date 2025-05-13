import React, { useState } from 'react';
import BpkCalendar from 'bpk-component-calendar';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import isSameDay from 'date-fns/isSameDay';
import 'bpk-component-calendar/styles.scss';
import './App.scss';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = date => {
    setSelectedDate(date);
  };

  return (
    <div className="App" style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto' }}>
      <BpkText tagName="h1" textStyle="xl">Flight Schedule</BpkText>

      <BpkCalendar
        id="calendar"
        onDateSelect={handleDateSelect}
        selectedDate={selectedDate}
        formatDate={date => format(date, 'dd-MM-yyyy')}
        parseDate={dateStr => parse(dateStr, 'dd-MM-yyyy', new Date())}
        isDateBlocked={() => false}
        isDateHighlighted={date => selectedDate && isSameDay(date, selectedDate)}
      />

      <div style={{ marginTop: '1rem' }}>
        <BpkButton onClick={() => {}}>Continue</BpkButton>
      </div>
    </div>
  );
}

export default App;
