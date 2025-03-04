import Hero from "../components/Hero"
import EventDetails from "../components/EventDetails"
import RegistrationForm from "../components/RegistrationForm"
import CountdownTimer from "../components/CountdownTimer"
import Speakers from "../components/Speakers"
import Footer from "../components/Footer"
import AlertComponent from "../components/AlertComponent"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <AlertComponent />
      <Hero />
      <main className="container mx-auto px-4">
        <EventDetails />
        <Speakers />
        <div className="my-20 grid gap-8 md:grid-cols-2">
          <RegistrationForm />
          <CountdownTimer />
        </div>
      </main>
      <Footer />
    </div>
  )
}

