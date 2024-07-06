"use client";

import { Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Toaster } from "./ui/toaster";
import { useToast } from "./ui/use-toast";

export default function ProjectForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [site, setSite] = useState("");
  const [project, setProject] = useState("");
  const [prazo, setPrazo] = useState("");
  const [orcamento, setOrcamento] = useState("");
  const [sobre, setSobre] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          number,
          email,
          empresa,
          site,
          project,
          prazo,
          orcamento,
          sobre,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (res.ok) {
        toast({
          title: "Email enviado com sucesso ! ✅",
          description: "Tudo certo ! Aguarde meu contato",
        });

        // Limpar os campos do formulário
        setName("");
        setNumber("");
        setEmail("");
        setEmpresa("");
        setSite("");
        setProject("");
        setPrazo("");
        setOrcamento("");
        setSobre("");
      } else {
        toast({
          variant: "destructive",
          title: "Falha ao enviar o email 😞",
          description:
            "Houve um problema no envio do email, tente novamente mais tarde...",
        });
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Falha ao enviar o email 😞",
        description:
          "Houve um problema no envio do email, tente novamente mais tarde...",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <form
        action="POST"
        onSubmit={onSubmit}
        className="flex w-full flex-col gap-2"
      >
        {/* Nome */}
        <label
          htmlFor="name"
          className="flex items-center justify-between text-muted-foreground"
        >
          <p>Nome completo</p> <span className="text-xl">*</span>
        </label>
        <Input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          className="mb-5 w-full bg-accent py-7"
          placeholder="Digite aqui seu nome"
        />

        {/* Number */}
        <label
          htmlFor="number"
          className="flex items-center justify-between text-muted-foreground"
        >
          <p>Numero do Whatsapp</p> <span className="text-xl">*</span>
        </label>
        <Input
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="text"
          id="number"
          placeholder="Whatsapp"
          className="mb-5 bg-accent py-7"
        />

        {/* Email */}
        <label
          htmlFor="email"
          className="flex items-center justify-between text-muted-foreground"
        >
          <p>E-mail</p> <span className="text-xl">*</span>
        </label>
        <Input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          placeholder="Digite seu email"
          className="mb-5 bg-accent py-7"
        />

        {/* Empresa */}
        <label
          htmlFor="empresa"
          className="flex items-center justify-between text-muted-foreground"
        >
          <p>Empresa</p>
        </label>
        <Input
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
          type="text"
          id="empresa"
          placeholder="Sua empresa"
          className="mb-5 bg-accent py-7"
        />

        {/* Site */}
        <label
          htmlFor="site"
          className="flex items-center justify-between text-muted-foreground"
        >
          <p>Site</p>
        </label>
        <Input
          value={site}
          onChange={(e) => setSite(e.target.value)}
          type="text"
          id="site"
          placeholder="Link do seu site"
          className="mb-5 bg-accent py-7"
        />

        {/* Tipo de Projeto */}
        <label
          htmlFor="project"
          className="flex items-center justify-between text-muted-foreground"
        >
          <p>Tipo de projeto</p>
          <span className="text-xl">*</span>
        </label>
        <Input
          required
          value={project}
          onChange={(e) => setProject(e.target.value)}
          type="text"
          id="project"
          placeholder="Site, Lading Page etc"
          className="mb-5 bg-accent py-7"
        />

        {/* Prazo */}
        <label
          htmlFor="prazo"
          className="flex items-center justify-between text-muted-foreground"
        >
          <p>Prazo de projeto</p>
          <span className="text-xl">*</span>
        </label>
        <Input
          required
          value={prazo}
          onChange={(e) => setPrazo(e.target.value)}
          type="text"
          id="prazo"
          placeholder="20 dias, 45 dias, prazon indeterminado, urgente.."
          className="mb-5 bg-accent py-7"
        />

        {/* Orçamento */}
        <label
          htmlFor="orcamento"
          className="flex items-center justify-between text-muted-foreground"
        >
          <p>Orçamento Disponível</p>
          <span className="text-xl">*</span>
        </label>
        <Input
          required
          value={orcamento}
          onChange={(e) => setOrcamento(e.target.value)}
          type="text"
          id="orcamento"
          placeholder="1 mil, 5 mil, mais de 10 mil..."
          className="mb-5 bg-accent py-7"
        />

        {/* Sobre o projeto */}
        <label
          htmlFor="sobre"
          className="flex items-center justify-between text-muted-foreground"
        >
          <p>Sobre o projeto</p>
          <span className="text-xl">*</span>
        </label>
        <Textarea
          required
          value={sobre}
          onChange={(e) => setSobre(e.target.value)}
          className="bg-accent"
          id="sobre"
          placeholder="Me conte de forma detalhada sobre o projeto"
        />
        {!isLoading && (
          <Button type="submit" size="lg" className="mt-5 py-7 text-base">
            Enviar
          </Button>
        )}
        {isLoading && (
          <Button disabled size="lg" className="mt-5 py-7 text-base">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </Button>
        )}
      </form>
      <Toaster />
    </div>
  );
}
