import React from 'react'
import {useParams} from 'react-router-dom'

import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const Room = () => {
    const {roomID} = useParams()
    const meeting = async (element) => {
        const appID = 1257944150
        const serverSecret = 'f8f4909bf59a8bd597c065b09c694092'
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomID,
            Date.now().toString(),
            'andrei',
        )
        const zp = ZegoUIKitPrebuilt.create(kitToken)

        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
        })
    }

    return <div ref={meeting} style={{width: '100vw', height: '100vh'}}></div>
}

export default Room
