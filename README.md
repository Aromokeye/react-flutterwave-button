# react-flutterwave-button

> A React button component for integrating Flutterwave payments.

[![NPM](https://img.shields.io/npm/v/react-flutterwave-button.svg)](https://www.npmjs.com/package/react-flutterwave-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Flutterwave has given developers in Africa and the rest of the world, a choice to go beyond the limits set by some payment engine providers. Now you have a world class solution to collect money from those who want to pay. Forget that one that says you can give but cannot receive. *Dia Fada!!!* :wave::v:
Just add this to your react project and customize as desired. 

## Install

```bash
npm install --save react-flutterwave-button
```

## Usage

```tsx
const App = ( ) => (
    <div>
        <FlutterwaveButton
        buttonText={"Payme"} //Give a text for your button or
        buttonChildComponent={<MadamDescendant/>} //Use a desired component like a SVG as a child.
        style={{changeYourStyle: "doLikeThat" }} //You can optionally send a style prop or
        className={"jeleosimi"} // Use the the className props as desired
        flutterProps={
            {
                public_key: "FLWPUBK_TEST-31d61a13026483fc38f15f0e90232374-X",
                tx_ref: "hooli-tx-1920bbtyt", //randomly generate this ref
                amount: 54600,
                currency: "NGN",
                country: "NG",
                payment_options: "card,mobilemoney,ussd",
                customer: {
                    email: "user@yahoo.com",
                    phone_number: "08102909300",
                    name: "Alihko Dangohtey",
                },
                callback: function (data) { // specified callback function
                    console.log(data);
                },
                customizations: {
                    title: "My store",
                    description: "Payment for items in cart",
                    logo: "https://assets.moneymoney.com/logo.png",
                },
            }
        }
        />
    </div>
)
```

## License

MIT © [Aromokeye](https://github.com/Aromokeye)
