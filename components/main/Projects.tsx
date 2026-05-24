import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold mb-20">Meus Projetos</h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-8 px-10 max-w-7xl">
        <div className="flex-1">
          <ProjectCard
            src="/adestrador.png"
            title="Adestrador"
            description="Landing page para servicos de adestramento de animais, desenvolvida com foco em conversao e apresentacao visual dos servicos."
            link="https://adestrador-five.vercel.app/"
          />
        </div>

        <div className="flex-1">
          <ProjectCard
            src="/diario.png"
            title="Diario de Justica"
            description="Aplicacao fullstack que consome a API publica do PJE (Diario de Justica Eletronico Nacional), armazena comunicacoes processuais em banco de dados e as apresenta em uma interface web com filtros, detalhamento e resumo por IA."
            github="https://github.com/alvarosantoscwb/Diario-PJE"
            link="https://diario-pje.vercel.app/"
          />
        </div>

        <div className="flex-1">
          <ProjectCard
            src="/olipet.png"
            title="Olipet"
            description="Painel administrativo completo para gerenciamento de negocios, com funcionalidades de cadastro de produtos, gestao de clientes e controle de vendas."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
