import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold mb-20">Meus Projetos</h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/admin.png"
          title="Painel Admin"
          description="Esse projeto eu também estou construindo, acredito que modelando ele pode ser utilizado com venda de produtos ou até mesmo registro de cliente ou rh."
        />

        <ProjectCard
          src="/car-app.png"
          title="Loja de carros"
          description="Esse projeto também em React, eu ainda estou construindo e estou querendo fazer um panel onde o usuario consegue adicionar o titulo descricao e imagens"
        />
        <ProjectCard
          src="/react-fullstack.png"
          title="Cadastro Clientes"
          description="Um dos primeiros projetos que usei React, fiz a parte do back end utilizando Node.js e Prisma, fiz um CRUD para cadastro."
        />
      </div>
    </div>
  );
};

export default Projects;
