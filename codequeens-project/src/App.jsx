import { useCallback, useEffect, useState } from '@lynx-js/react'

import './App.css'
import CatLogo from './assets/CatLogo.png'
import Chat from './Chat'

export function App(props) {

  return (
    <view>
      <view className='Background' />
      <view className='App'>
        <view className='Banner'>
          <view className='Logo'>
            <image src={CatLogo} className='CatLogo' />
          </view>
          <text className='Title'>Cat Cafe</text>
          <text className='Subtitle'>your one stop cat companion</text>
        </view>
    
          <Chat /> 
        <view style={{ flex: 1 }} />
      </view>
    </view>
  )
}
