/* eslint-disable camelcase */
import * as React from 'react'

const { useEffect } = React

declare global {
  interface Window {
    FlutterwaveCheckout: any
  }
}

interface FlutterConfig {
  public_key?: string
  tx_ref?: string
  amount?: number
  currency?: string
  country?: string

  payment_options?: 'card, mobilemoneyghana, ussd'
  redirect_url?: string
  meta?: {
    consumer_id?: number
    consumer_mac?: string
  }
  customer?: {
    email?: string
    phone_number?: string
    name?: string
  }
  callback?: Function
  onclose?: Function
  customizations?: {
    title?: Function
    description?: string
    logo?: string
  }
}

export const FlutterwaveButton = (props: {
  flutterProps?: FlutterConfig
  buttonText?: string
  buttonChildComponent?: any
  style?: object
  className?: string
}) => {
  const {
    flutterProps,
    buttonText,
    buttonChildComponent,
    style,
    className
  } = props

  useEffect(() => {
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://checkout.flutterwave.com/v3.js'
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const effectpay = () => {
    window.FlutterwaveCheckout(flutterProps)
  }

  return (
    <button onClick={effectpay} style={style} className={className}>
      {buttonText || buttonChildComponent || 'Pay'}
    </button>
  )
}
