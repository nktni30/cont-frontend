import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Whatsimg from '../img/whatsapp.jpeg'

const Whatsapp = () => {
  return (
    <FloatingWhatsApp
    phoneNumber='+91 8789523890'
    accountName='Conterials.com'
    notification
    avatar={Whatsimg}
    notificationSound
    chatMessage='Free Consulting, Free Quotation, Drop a Message'
    />
  )
}

export default Whatsapp;