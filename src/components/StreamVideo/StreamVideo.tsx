import React, { useRef, useEffect } from 'react'

import s from './streamVideo.module.css';

function StreamVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    async function initWebcam() {
      try {
        const stream = await window.navigator.mediaDevices.getUserMedia({
          audio: true,
          video: true,
        })
        const setCanvas = () => {
          if (canvasRef.current && videoRef.current) {
            const ctx = canvasRef.current.getContext('2d')
            videoRef.current.play()
            const w = videoRef.current.videoWidth
            const h = videoRef.current.videoHeight
            canvasRef.current.width = w
            canvasRef.current.height = h
            const animate = () => {
              if (ctx && videoRef.current instanceof HTMLVideoElement)
                ctx!.drawImage(videoRef.current, 0, 0)
              requestAnimationFrame(animate)
            };

            requestAnimationFrame(animate)
          }
        }
        videoRef.current!.srcObject = stream
        videoRef.current!.onloadedmetadata = setCanvas
      } catch (err) {
        console.log(err);
      }
    }
    initWebcam();
  }, [])
  return (
    <div className={s.streamVideo}>
      <video className={s.video} ref={videoRef} muted autoPlay />
      <canvas className={s.canvas} ref={canvasRef} />
    </div>
  )
}

export default StreamVideo