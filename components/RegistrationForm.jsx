"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check } from "lucide-react"

// Define the validation schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Por favor, insira um endereço de e-mail válido" }),
  company: z.string().min(1, { message: "Nome da empresa é obrigatório" }),
  jobTitle: z.string().min(1, { message: "Cargo é obrigatório" }),
  hearAbout: z.string().min(1, { message: "Por favor, diga-nos como você soube sobre nós" }),
  agreeToTerms: z.literal(true, {
    errorMap: () => ({ message: "Você deve concordar com os termos e condições" }),
  }),
})

export default function RegistrationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      jobTitle: "",
      hearAbout: "",
      agreeToTerms: false,
    },
  })

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Form submitted:", data)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div id="register" className="rounded-xl bg-gray-900 p-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
            <Check className="h-10 w-10 text-primary" />
          </div>
          <h3 className="mb-2 text-2xl font-bold">Inscrição Bem-sucedida!</h3>
          <p className="mb-6 text-gray-400">
            Obrigado por se inscrever em nosso webinar. Enviamos os detalhes para o seu e-mail.
          </p>
          <button onClick={() => setIsSubmitted(false)} className="text-primary underline">
            Inscrever outra pessoa
          </button>
        </div>
      </div>
    )
  }

  return (
    <div id="register" className="rounded-xl bg-gray-900 p-8">
      <h2 className="font-display mb-6 text-2xl font-bold">Reserve Seu Lugar</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            Nome Completo
          </label>
          <input id="name" type="text" className="input-field" placeholder="João Silva" {...register("name")} />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Endereço de E-mail
          </label>
          <input
            id="email"
            type="email"
            className="input-field"
            placeholder="joao@exemplo.com"
            {...register("email")}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="company" className="mb-1 block text-sm font-medium">
              Empresa
            </label>
            <input
              id="company"
              type="text"
              className="input-field"
              placeholder="Sua Empresa"
              {...register("company")}
            />
            {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>}
          </div>

          <div>
            <label htmlFor="jobTitle" className="mb-1 block text-sm font-medium">
              Cargo
            </label>
            <input
              id="jobTitle"
              type="text"
              className="input-field"
              placeholder="Seu Cargo"
              {...register("jobTitle")}
            />
            {errors.jobTitle && <p className="mt-1 text-sm text-red-500">{errors.jobTitle.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="hearAbout" className="mb-1 block text-sm font-medium">
            Como você soube sobre nós?
          </label>
          <select id="hearAbout" className="input-field" {...register("hearAbout")}>
            <option value="">Selecione uma opção</option>
            <option value="social">Redes Sociais</option>
            <option value="search">Mecanismo de Busca</option>
            <option value="email">E-mail</option>
            <option value="colleague">Colega</option>
            <option value="other">Outro</option>
          </select>
          {errors.hearAbout && <p className="mt-1 text-sm text-red-500">{errors.hearAbout.message}</p>}
        </div>

        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="agreeToTerms"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-primary focus:ring-primary"
              {...register("agreeToTerms")}
            />
          </div>
          <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-400">
            Eu concordo com os termos e condições e política de privacidade
          </label>
        </div>
        {errors.agreeToTerms && <p className="text-sm text-red-500">{errors.agreeToTerms.message}</p>}

        <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
          {isSubmitting ? "Inscrevendo..." : "Inscrever-se Agora"}
        </button>

        <p className="text-center text-xs text-gray-500">
          Vagas limitadas. Inscrições encerram em 10 de agosto de 2023.
        </p>
      </form>
    </div>
  )
}

