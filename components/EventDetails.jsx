import { Calendar, Clock, MapPin, Users } from "lucide-react"

export default function EventDetails() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display mb-12 text-3xl font-bold md:text-4xl">Detalhes do Evento</h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-1 font-semibold">Data</h3>
            <p className="text-gray-400">15 de Agosto, 2023</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-1 font-semibold">Horário</h3>
            <p className="text-gray-400">14:00 - 16:00 BRT</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-1 font-semibold">Onde</h3>
            <p className="text-gray-400">Online (Zoom)</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-1 font-semibold">Participantes</h3>
            <p className="text-gray-400">Limitado a 500</p>
          </div>
        </div>

        <div className="mt-12 rounded-xl bg-gray-900 p-6 text-left">
          <h3 className="mb-4 text-xl font-semibold">O Que Você Vai Aprender</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>Os mais recentes avanços em tecnologias de IA e aprendizado de máquina</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>Aplicações práticas de IA em vários setores</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>Considerações éticas e desenvolvimento responsável de IA</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>Tendências futuras e oportunidades de carreira em IA</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

