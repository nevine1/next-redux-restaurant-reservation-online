/* "use client"; */
import { useState } from 'react';
import styles from  '../styles/Styles.module.scss'
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
export default function Calendar() {
  const [value, setValue] = useState(dayjs(new Date()));
  console.log(moment(value).format('MM-DD-YYYY'))
  
  return (
    <div className={styles.main}>
        <div style={{marginBottom:'30px'}}>
            <p>{moment(value).format('MM-DD-YYYY')}</p>
        </div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        
          <DatePicker
            label="Controlled Picker"
            value={value}
            onChange={() => console.log('changed')}
            /* onChange={(newValue) => setValue(newValue)} */
          />
     
      </LocalizationProvider>
    
    </div>
  )
}
