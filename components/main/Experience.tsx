"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Experience = () => {
  return (
    <div
      className="w-full h-auto flex flex-col items-center justify-center min-h-screen"
      id="experience"
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          variants={slideInFromTop}
          className="text-[30px] text-gradient font-medium text-center mb-[15px] mt-[15px]"
        >
          Minhas experiências
        </motion.div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#8b5cf661] bg-gradient-to-r from-[#8b5cf6]/10 to-[#a78bfa]/10">
          NHS Energia do Seu Jeito - 2024 / Atual
        </div>

        <div className="mx-[50px] text-center max-w-[800px] bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 rounded-xl backdrop-blur-sm border border-gray-700/30">
          <div className="mb-2 font-semibold text-[#a78bfa]">
            Analista Desenvolvedor Fullstack Pleno
          </div>

          <br />
          Promovido de Frontend para Fullstack, liderando iniciativas de
          modernização técnica e desenvolvimento de produtos internos com impacto
          direto no negócio.

          <br />
          <br />

          • Refatoração da arquitetura (useCases), movendo lógica do BFF para o core e aumentando performance <br />
          • Aplicação de Clean Architecture com Dependency Injection e testes (unitários e integração) <br />
          • Migração do frontend de Vue 2 para Vue 3 + Composition API <br />
          • Atuação em ambiente AWS com monorepo TypeScript <br />

          <br />

          • Otimização de cache e banco de dados (Redis, DynamoDB, Supabase, PostgreSQL) <br />
          • Redução de latência e melhoria de performance <br />
          • Responsável por builds e publicações Android/iOS multi-ambiente <br />

          <br />

          <strong>Projeto destaque:</strong> Sistema ADMIN de monitoramento de NoBreaks

          <br />

          • Dashboards em tempo real com métricas via USB <br />
          • Arquitetura escalável com Vue 3 + Quasar + Clean Architecture <br />
          • Substituição de Grafana + RDS (redução de custos) <br />
          • Evolução para produto interno da empresa <br />

          <br />

          <strong>Stack:</strong> Vue.js, Quasar, TypeScript, Node.js, AWS,
          Redis, DynamoDB, Supabase, PostgreSQL
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#8b5cf661] bg-gradient-to-r from-[#8b5cf6]/10 to-[#a78bfa]/10">
          Preambulo Tech - 2022 / 2023
        </div>

        <div className="mx-[50px] text-center max-w-[800px] bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 rounded-xl backdrop-blur-sm border border-gray-700/30">
          <div className="mb-2 font-semibold text-[#a78bfa]">
            Desenvolvedor Frontend (Júnior → Pleno)
          </div>

          <br />
          Atuação no desenvolvimento e evolução de aplicações utilizando Vue.js e
          Quasar, com foco em performance e reutilização de componentes.

          <br />
          <br />

          • Migração de componentes do Vue 2 para Vue 3 <br />
          • Desenvolvimento de componentes reutilizáveis <br />
          • Implementação de layout baseado em Figma (UI/UX) <br />
          • Implementação de Dark Mode e Light Mode <br />
          • Correções e melhorias em gráficos (AmCharts) <br />
          • Correção de bugs via fluxo de DevOps <br />

          <br />

          • Atuação inicial em backend com Node.js, Express e PostgreSQL <br />
          • Implementação de testes unitários (Jest) <br />
          • Testes E2E com Cypress e Playwright <br />
        </div>
      </div>
    </div>
  );
};

export default Experience;