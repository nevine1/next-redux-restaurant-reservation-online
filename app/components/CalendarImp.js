'use client';
import { useState} from 'react'
import ReactCalendar  from 'react-calendar'
import styles from '../styles/Styles.module.scss'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import { add } from 'date-fns'
import TimePicker from 'react-time-picker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const CalendarImp = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const [date, setDate] = useState({
    justDate: null,
    datTime: null
  })
  
  const getTimes = () =>{
    if(!date.justDate) return // it means if u did not select date
    const { justDate } = date; 
    
    //const beginningTime = moment(justDate).add(9, 'hours');
    const beginningTime = add(justDate, {hours: 9})
    const endingTime = add(justDate, {hours: 17});
    const interMinute = 30; 
    const times = [];
    for(let i = beginningTime; i<= endingTime; i=add(i, {minutes: interMinute})){
      times.push[i]
    }
    return times ; 
  }
  const times = getTimes();
 
  return (
    <div>
      <h1>Hello Calendarrrrrrrrrrrrrrrr</h1>
      <di className={styles.calendar}>
        {
          date.justDate ? (
            <div>{
                times?.map((time, i) =>(
                  <h2 key={`time-${i}`}>{format(time, 'kk:mm')}</h2>
                ))
              }
              </div>
          ):(
            <ReactCalendar
              minDate={new Date()}
              className={styles.reactCalendar}
              view='month'

              onClickDay = {(date) =>setDate((prev) =>({...prev, justDate: date}))}
            />
          )
        }
        
      </di>
     {/*  <h1>{selectedDate.date}</h1> */}
     <div>
      <h2>Time Picker Example</h2>
        <DatePicker
          selected={selectedTime}
          onChange={handleTimeChange}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          dateFormat="h:mm aa"
          placeholderText="Select time"
        />
      </div>
    </div>
  )
}

export default CalendarImp
