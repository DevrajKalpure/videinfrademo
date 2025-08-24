"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (videoRef.current) {
            videoRef.current.play()
            setIsPlaying(true)
          }
        } else {
          setIsVisible(false)
          if (videoRef.current) {
            videoRef.current.pause()
            setIsPlaying(false)
          }
        }
      },
      { threshold: 0.5 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100
      setProgress(progress)
    }

    video.addEventListener("timeupdate", updateProgress)
    return () => video.removeEventListener("timeupdate", updateProgress)
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden premium-shadow group transition-all duration-1000 video-container-glow ${
        isVisible ? "animate-scale-in" : "opacity-0"
      }`}
    >
      {/* Video Container */}
      <div className="relative aspect-video bg-black rounded-2xl overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          muted={isMuted}
          loop
          playsInline
          poster="/modern-creative-team-working-together-in-a-bright-.png"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            type="video/mp4"
          />
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Play/Pause Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              onClick={togglePlay}
              size="lg"
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 animate-glow"
            >
              {isPlaying ? <Pause className="h-6 w-6 text-white" /> : <Play className="h-6 w-6 text-white ml-1" />}
            </Button>
          </div>

          {/* Video Controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                onClick={toggleMute}
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 magnetic-hover"
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              {/* Video Progress Bar */}
              <div className="flex-1 mx-4">
                <div className="w-full bg-white/20 rounded-full h-1">
                  <div
                    className="bg-primary h-1 rounded-full transition-all duration-300 animate-glow"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 magnetic-hover"
            >
              <Maximize className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-border animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Video Info */}
      <div className="absolute bottom-6 left-6 text-white z-10">
        <h3 className="text-2xl font-bold font-space-grotesk mb-2 animate-slide-in-left">Our Creative Process</h3>
        <p className="text-white/80 font-dm-sans animate-fade-in-up animate-delay-200">
          Watch how we transform ideas into digital masterpieces
        </p>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
        <div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary/50 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-accent/40 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  )
}
