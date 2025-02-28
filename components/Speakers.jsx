import Image from "next/image"

const speakers = [
  {
    name: "Dra. Sarah Johnson",
    role: "Diretora de Pesquisa em IA, TechCorp",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Dra. Johnson lidera iniciativas de pesquisa em IA na TechCorp, com foco em processamento de linguagem natural e visão computacional.",
  },
  {
    name: "Michael Chen",
    role: "Cientista de Dados Chefe, DataWorks",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Michael é especializado no desenvolvimento de soluções escaláveis de aprendizado de máquina para aplicações empresariais.",
  },
  {
    name: "Priya Patel",
    role: "Especialista em Ética de IA, EthicalAI",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Priya aconselha organizações na implementação de estruturas éticas de IA e práticas responsáveis de desenvolvimento.",
  },
  {
    name: "James Wilson",
    role: "VP de Engenharia, AIStartup",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "James supervisiona o desenvolvimento de produtos de IA de ponta e liderou várias implementações bem-sucedidas de IA.",
  },
]

export default function Speakers() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-12 text-center text-3xl font-bold md:text-4xl">Conheça Nossos Palestrantes</h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((speaker, index) => (
            <div key={index} className="group overflow-hidden rounded-xl bg-gray-900 transition-all hover:bg-gray-800">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-semibold">{speaker.name}</h3>
                <p className="mb-4 text-sm text-primary">{speaker.role}</p>
                <p className="text-sm text-gray-400">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

