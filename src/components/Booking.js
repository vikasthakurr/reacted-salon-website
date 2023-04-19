import React, { useState } from 'react';
import axios from 'axios';
import "../Styling/Booking.css";
function Booking() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [mobile, setMobile] = useState('');
   const [date, setDate] = useState('');
   const [time, setTime] = useState('');
   const [paymentMode, setPaymentMode] = useState('');

   const handleSubmit = async (event) => {
      event.preventDefault();
      try {
         await axios.post('http://localhost:3001/App', {
            name,
            email,
            mobile,
            date,
            time,
            paymentMode
         });
         alert('Form submitted successfully');
         setName('');
         setEmail('');
         setMobile('');
         setDate('');
         setTime('');
         setPaymentMode('');
      } catch (err) {
         console.error(err);
         alert('Error submitting form');
      }
   };

   return (
      <div>
         <h1>Book Your Slot </h1>
         <form className="Booking" onSubmit={handleSubmit}>
            <div>
               <label>Name:</label>
               <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
               <label>Email:</label>
               <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div>
               <label>Mobile:</label>
               <input type="tel" value={mobile} onChange={(event) => setMobile(event.target.value)} />
            </div>
            <div>
               <label>Date:</label>
               <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
            </div>
            <div>
               <label>Time Slot:</label>
               <select value={time} onChange={(event) => setTime(event.target.value)}>
                  <option value="">-- Select --</option>  <option value="9am-12pm">9am-12pm</option>
                  <option value="1pm-4pm">1pm-4pm</option>
                  <option value="5pm-8pm">5pm-8pm</option>


               </select>
            </div>
            <div>
               <label>Payment Mode:</label>
               <select value={paymentMode} onChange={(event) => setPaymentMode(event.target.value)}>
                  <option value="">-- Select --</option>
                  <option value="credit card">Credit Card</option>
                  <option value="debit card">Debit Card</option>
                  <option value="paypal">PayPal</option>
               </select>
            </div>
            <button type="submit">Submit</button>
         </form>
      </div>
   );
}

export default Booking;