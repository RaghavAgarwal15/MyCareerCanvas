// 'use client'
import React, { useEffect } from 'react'

const Chatbot = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && !document.querySelector('script[src="https://cdn.botpress.cloud/webchat/v1/inject.js"]')) {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      window.botpressWebChat.init({
        botId: '89b5f0d5-a996-4cf0-9f83-709029ab30c6',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: '89b5f0d5-a996-4cf0-9f83-709029ab30c6',
      })
    }
    }
  }, [])

  return <div id="webchat" />
}

export default Chatbot