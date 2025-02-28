"use client"

import { useState, useEffect, useMemo } from "react"
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns"

export default function CountdownTimer() {
  // Use useMemo to prevent recreation of the date on every render
  const webinarDate = useMemo(() => new Date() * 1.0003, [])

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()

      if (now >= webinarDate) {
        // Webinar has started or passed
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }
      }

      // Calculate the time difference
      const days = differenceInDays(webinarDate, now)
      const hours = differenceInHours(webinarDate, now) % 24
      const minutes = differenceInMinutes(webinarDate, now) % 60
      const seconds = differenceInSeconds(webinarDate, now) % 60

      return {
        days,
        hours,
        minutes,
        seconds,
      }
    }

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Clean up
    return () => clearInterval(timer)
  }, [webinarDate]) // webinarDate is now memoized and won't change

  const timeBlocks = [
    { label: "Dias", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ]

  return (
    <div className="rounded-xl bg-gray-900 p-8">
      <h2 className="font-display mb-6 text-2xl font-bold">Webinar Começa Em</h2>

      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {timeBlocks.map((block, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex h-16 w-full items-center justify-center rounded-lg bg-gray-800 text-2xl font-bold sm:h-20 sm:text-3xl md:h-24 md:text-4xl">
              {String(block.value).padStart(2, "0")}
            </div>
            <span className="mt-2 text-xs text-gray-400 sm:text-sm">{block.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg bg-primary/10 p-4">
        <h3 className="mb-2 font-semibold">Por que Participar?</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <span className="mr-2 text-primary">•</span>
            <span>Obtenha insights de especialistas líderes do setor</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-primary">•</span>
            <span>Aprenda estratégias práticas de implementação de IA</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-primary">•</span>
            <span>Conecte-se com profissionais da sua área</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-primary">•</span>
            <span>Receba recursos e materiais exclusivos</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

