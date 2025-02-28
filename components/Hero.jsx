import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Fundo do webinar"
          fill
          priority
          className="object-cover brightness-50"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
        <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground">
          WEBINAR AO VIVO • 15 DE DEZEMBRO, 2025
        </span>
        <h1 className="font-display mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          O Futuro do <span className="text-primary">Desenvolvimento de IA</span>
          <br />
          em 2025 e Além
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-300">
          Junte-se a especialistas do setor enquanto discutem tendências emergentes, aplicações práticas e o futuro
          panorama do desenvolvimento de IA.
        </p>
        <a href="#register" className="btn-primary">
          Reserve Seu Lugar
        </a>
      </div>
    </div>
  )
}

