import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <Image src="https://www.webrushbrasil.com.br/assets/logo-uSn3wV7B.png" style={{filter: "invert()"}} alt="Logo da Empresa" width={160} height={40} />
            </div>
            <p className="text-center text-sm text-gray-400 md:text-left">
              Trazendo para você os mais recentes insights e conhecimentos em desenvolvimento de IA.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:justify-end">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase">Recursos</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Webinars
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Whitepapers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Estudos de Caso
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase">Empresa</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Carreiras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Imprensa
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Termos de Serviço
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Política de Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

