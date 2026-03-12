export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      stack: "Tech Stack",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      title: "Backend Software Engineer",
      subtitle: "AI Systems & LLM Integrations",
      description: "Backend Software Engineer specializing in scalable APIs, distributed systems, and AI-powered applications. Experienced in designing backend services that integrate LLMs, RAG pipelines, and automation workflows.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
    },
    about: {
      title: "Background & Experience",
      description: "With a strong foundation in modern backend architecture, I build resilient and scalable systems that power data-intensive applications. My current focus is at the intersection of traditional backend engineering and applied artificial intelligence.",
      timeline: [
        {
          id: 1,
          role: "Web Development Specialist",
          company: "Mato Grosso Communication Network",
          period: "Jan 2024 – Present",
          description: "Architecture and development of REST and SOAP APIs supporting high-traffic digital media platforms. Built Python-based microservices orchestrating LLM-driven content generation pipelines with TTS integration.",
          tech: ["Python", "Node.js", "Docker", "LLMs", "Prometheus"]
        },
        {
          id: 2,
          role: "Head of Digital & Project Manager",
          company: "Rise Marketing",
          period: "Jul 2023 – Jan 2024",
          description: "Technical and strategic planning of digital solutions. Led agile teams utilizing Scrum/Kanban methodologies. Delivered automation workflows and low-code solutions to optimize operations.",
          tech: ["Scrum", "Kanban", "Automation", "Low-code"]
        },
        {
          id: 3,
          role: "Systems Analyst Developer",
          company: "GGF Agriculture",
          period: "May 2022 – May 2023",
          description: "Development and maintenance of ERP systems (Protheus). Engineered complex SQL queries, stored procedures, and integrations via reliable web services.",
          tech: ["SQL", "ERP", "Web Services", "Procedures"]
        }
      ],
      educationTitle: "Education",
      education: [
        { degree: "Postgraduate Degree in Machine Learning Engineering", school: "FIAP", year: "Expected 2026" },
        { degree: "Full Stack Software Development", school: "Cubos Academy", year: "2022" },
        { degree: "Bachelor's in Information Technology Management", school: "La Salle University Center", year: "2017" }
      ]
    },
    projects: {
      title: "Featured Work",
      productionTab: "Production Architecture",
      githubTab: "GitHub Open Source",
      viewSource: "View Source",
      liveDemo: "Live Demo",
      prodProjects: [
        {
          title: "LLM Content Pipeline",
          description: "Event-driven Python microservice orchestrating AI-driven content generation workflows with robust Text-to-Speech (TTS) integration.",
          tech: ["Python", "FastAPI", "LangChain", "Docker"],
          type: "Microservice"
        },
        {
          title: "REST/SOAP API Platform",
          description: "High-traffic backend platform supporting digital media distribution. Highly available architecture serving millions of monthly requests.",
          tech: ["Node.js", "NestJS", "PostgreSQL", "AWS"],
          type: "Distributed System"
        },
        {
          title: "Observability Stack",
          description: "Comprehensive monitoring and metrics pipeline ensuring system reliability, performance tracking, and automated alerting.",
          tech: ["Grafana", "Prometheus", "Node.js"],
          type: "DevOps"
        }
      ]
    },
    stack: {
      title: "Technical Arsenal",
      categories: {
        languages: "Languages & Frameworks",
        data: "Data & Messaging",
        cloud: "Cloud & DevOps",
        ai: "AI & Machine Learning"
      }
    },
    contact: {
      title: "Initialize Connection",
      description: "Currently open to discussing new opportunities, architectural challenges, and AI integrations.",
      emailBox: "Direct Email Channel",
      copyText: "Copy to Clipboard",
      copiedText: "Copied!",
      connectLinkedIn: "Connect on LinkedIn",
      followGithub: "Follow on GitHub"
    }
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      stack: "Tecnologias",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      title: "Engenheira de Software Backend",
      subtitle: "Sistemas de IA e Integrações LLM",
      description: "Engenheira de Software Backend focada em APIs escaláveis, sistemas distribuídos e aplicações baseadas em IA. Experiência na arquitetura de serviços que integram LLMs, pipelines RAG e fluxos de automação.",
      viewProjects: "Ver Projetos",
      contactMe: "Fale Comigo",
    },
    about: {
      title: "Trajetória e Experiência",
      description: "Com uma base sólida em arquitetura backend moderna, construo sistemas resilientes e escaláveis para aplicações com uso intensivo de dados. Meu foco atual está na interseção entre engenharia backend tradicional e inteligência artificial aplicada.",
      timeline: [
        {
          id: 1,
          role: "Especialista em Desenvolvimento Web",
          company: "Rede Matogrossense de Comunicação",
          period: "Jan 2024 – Presente",
          description: "Arquitetura e desenvolvimento de APIs REST e SOAP suportando plataformas de mídia digital de alto tráfego. Construção de microsserviços em Python orquestrando pipelines de geração de conteúdo por LLMs com integração TTS.",
          tech: ["Python", "Node.js", "Docker", "LLMs", "Prometheus"]
        },
        {
          id: 2,
          role: "Head of Digital & Gerente de Projetos",
          company: "Rise Marketing",
          period: "Jul 2023 – Jan 2024",
          description: "Planejamento técnico e estratégico de soluções digitais. Liderança de equipes ágeis utilizando Scrum/Kanban. Entrega de fluxos de automação e soluções low-code para otimização operacional.",
          tech: ["Scrum", "Kanban", "Automação", "Low-code"]
        },
        {
          id: 3,
          role: "Analista de Sistemas Desenvolvedora",
          company: "GGF Agricultura",
          period: "Mai 2022 – Mai 2023",
          description: "Desenvolvimento e manutenção de sistemas ERP (Protheus). Criação de consultas SQL complexas, procedures e integrações através de web services.",
          tech: ["SQL", "ERP", "Web Services", "Procedures"]
        }
      ],
      educationTitle: "Formação Acadêmica",
      education: [
        { degree: "Pós-graduação em Machine Learning Engineering", school: "FIAP", year: "Previsão 2026" },
        { degree: "Desenvolvimento de Software Full Stack", school: "Cubos Academy", year: "2022" },
        { degree: "Bacharelado em Gestão de Tecnologia da Informação", school: "Centro Universitário La Salle", year: "2017" }
      ]
    },
    projects: {
      title: "Trabalhos em Destaque",
      productionTab: "Arquitetura em Produção",
      githubTab: "Open Source (GitHub)",
      viewSource: "Código Fonte",
      liveDemo: "Acessar",
      prodProjects: [
        {
          title: "Pipeline de Conteúdo LLM",
          description: "Microsserviço Python orientado a eventos que orquestra fluxos de geração de conteúdo por IA com integração robusta de Text-to-Speech (TTS).",
          tech: ["Python", "FastAPI", "LangChain", "Docker"],
          type: "Microsserviço"
        },
        {
          title: "Plataforma de APIs REST/SOAP",
          description: "Backend de alto tráfego para distribuição de mídia digital. Arquitetura de alta disponibilidade atendendo milhões de requisições mensais.",
          tech: ["Node.js", "NestJS", "PostgreSQL", "AWS"],
          type: "Sistema Distribuído"
        },
        {
          title: "Stack de Observabilidade",
          description: "Pipeline abrangente de monitoramento e métricas garantindo confiabilidade do sistema, rastreamento de desempenho e alertas automatizados.",
          tech: ["Grafana", "Prometheus", "Node.js"],
          type: "DevOps"
        }
      ]
    },
    stack: {
      title: "Arsenal Técnico",
      categories: {
        languages: "Linguagens e Frameworks",
        data: "Dados e Mensageria",
        cloud: "Cloud e DevOps",
        ai: "IA e Machine Learning"
      }
    },
    contact: {
      title: "Iniciar Conexão",
      description: "Atualmente aberta para discutir novas oportunidades, desafios arquitetônicos e integrações de Inteligência Artificial.",
      emailBox: "Canal de Email Direto",
      copyText: "Copiar para a Área de Transferência",
      copiedText: "Copiado!",
      connectLinkedIn: "Conectar no LinkedIn",
      followGithub: "Seguir no GitHub"
    }
  }
};
