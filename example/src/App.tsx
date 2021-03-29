import React from 'react'
import { FlutterwaveButton } from 'react-flutterwave-button'

const App = () => {
  return <FlutterwaveButton buttonText={`Payme`} flutterProps={{
    public_key: "FLWPUBK_TEST-8d18245eff999bbbe6101270b2ee887f-X",
    tx_ref: "hooli-tx-1920bbtyt",
    amount: 54600,
    currency: "NGN",
    country: "NG",
    payment_options: "card, mobilemoneyghana, ussd",
    meta: {
      consumer_id: 23,
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: "user@gmail.com",
      phone_number: "08102909304",
      name: "yemi desola",
    },
    onclose: function() {
      // close modal
    },
    
  }}/>
}
export default App
