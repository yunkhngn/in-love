import React from 'react'
import Face from './Face'
import { useState, useEffect } from 'react';
import {Card, CardContent, Typography} from '@mui/material'
import data from "../../lib/data"

const Counter = () => {
  const { day, month, year } = data.date; // Lấy ngày, tháng, năm từ data.date
  const startDate = React.useMemo(() => new Date(year, month - 1, day), [day, month, year]); // Tạo ra ngày bắt đầu từ ngày, tháng, năm

  const [daysPassed, setDaysPassed] = useState({
    year: 0,
    month: 0,
    week: 0,
    day: 0,
  });

  useEffect(() => {
    const calculateDaysPassed = () => {
      const currentDate = new Date();
      const timeDiff = currentDate - startDate; // chênh lệch thời gian giữa 2 ngày
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // chuyển từ milliseconds sang ngày
      setDaysPassed({
        year: Math.floor(days / 365),
        month: Math.floor((days % 365) / 30),
        week: Math.floor((days % 365) / 7),
        day: (days % 365) % 30,
      });
    };

    calculateDaysPassed();

    const intervalId = setInterval(() => {
      calculateDaysPassed();
    }, 1000 * 60 * 60 * 24); // cập nhật mỗi ngày

    return () => clearInterval(intervalId); // cleanup interval khi component unmount
  }, [startDate]);

  useEffect(() => {
    console.log(`You have been together for ${daysPassed.year} years, ${daysPassed.month} months, and ${daysPassed.day} days`);
  }, [daysPassed, startDate]);

  return (
   <Card
    sx={{
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '20px',
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      width: { xs: '90%', md: '750px' },
      padding: { xs: '20px', md: '30px' },
      backgroundColor: '#ffffff60',
      marginBottom: '20px',
    }}
   >
    <CardContent>
    <Typography 
      variant="h4"
        sx={{
          color: '#293462',
          fontWeight: 'bold',
        }}
      >
        Đếm ngày yêu
      </Typography>
    </CardContent>
    <CardContent
    sx={{
      display: 'grid',
      alignItems: 'center',
      gap: '10px',
      gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
    }}
    >
      {Object.keys(daysPassed).map((key) => (
        <Face key={key} number={daysPassed[key]} which={key} />
      ))}
    </CardContent>
    <CardContent>
    <Typography
      variant="h6"
      sx={{
        color: '#293462',
        fontWeight: 'bold',
      }}
    >
      {`Ngày bắt đầu: ${day}/${month}/${year}`}
    </Typography>
    </CardContent>
   </Card>
  )
}

export default Counter