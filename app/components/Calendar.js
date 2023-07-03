import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import moment from "moment";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  //console.log(moment().add(1, 'month').toDate()) to add one month
  return (
    <div className="form-group react-calendar">
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
        minDate={new Date()}
        maxDate={moment().add(7, 'd').toDate()}
       className="react-date-picker"
      />
      <p>{moment(startDate).format('MM-DD-yyyy')}</p>
    </div>
    
  );
};

export default Calendar; 