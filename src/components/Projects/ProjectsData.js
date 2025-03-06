import cardapsImg1 from "../../assets/cardaps1.png";
import cardapsImg2 from "../../assets/cardaps2.png";
import portfolioImg1 from "../../assets/portfolio1.png";
import portfolioImg2 from "../../assets/portfolio2.png";
import wordpresImg1 from "../../assets/siteWordpress1.png";
import wordpresImg2 from "../../assets/siteWordpress2.png";
import volmedImg1 from "../../assets/vollmed1.png";
import volmedImg2 from "../../assets/vollmed2.png";

// Data for projects cards
const projectsData = [
  [
    {
      id: 0,
      title: "Cardaps",
      shortDescription: "Aplicação de um cardápio digital para restaurantes.",
      description: "Aplicação voltada para elaboração de um menu para restaurantes que permite realizar o cadastro de novos itens que contem titulo, foto, descrição e preço do prato. Para esse projeto foi realizado o desenvolvimento do front-end utilizando React, TypeScript e Bootstrap e o back-end foi desenvolvido em java, spring boot e postgresql.",
      badges: [
        "React",
        "TypeScript",
        "Bootstrap",
        "Api",
        "Java",
        "Spring",
        "PostgreSQL",
      ],
      imgUrl: [cardapsImg1, cardapsImg2],
      repoUrl: "https://github.com/adriannylelis/api-cardaps",
      height: 300
    },
  ],
  [
    {
      id: 1,
      title: "Voll.Med API",
      shortDescription: "API de uma clinica com funcionalidades de cadastro de médicos, pacientes e agendamentos.",
      description: "Funcionalidades da API: Cadastro de Médicos, listagem de Médicos, atualização de Médicos, exclusão de Médicos, cadastro de Pacientes, listagem de Pacientes, agendamentos de consultas.",
      badges: [
        "Api",
        "Java",
        "Spring",
        "PostgreSQL",
      ],
      imgUrl: [volmedImg1, volmedImg2],
      repoUrl: "https://github.com/adriannylelis/api-voll-med",
      height: 300
    },
    {
      id: 2,
      title: "Site WordPress",
      shortDescription: "Site institucional para candidata política.",
      description:
        "Desenvolvimento de um site institucional simples e responsivo para uma candidata política, utilizando WordPress para fácil gerenciamento de conteúdo.",
      badges: ["WordPress", "Design Responsivo"],
      imgUrl: [wordpresImg1, wordpresImg2],
      repoUrl: "http://carlarodriguesmanadoceu.com.br",
      height: 300,
    },
    {
      id: 3,
      title: "Website Pessoal",
      shortDescription: "Portfólio pessoal desenvolvido em React e hospedado na Google Cloud.",
      description:
        "Website para apresentação de projetos e portfólio profissional, desenvolvido em React e hospedado na Google Cloud Platform. O projeto utiliza Docker para containerização, GitHub Actions para CI/CD e App Engine para hospedagem escalável.",
      badges: ["JavaScript", "React", "Docker", "GCP", "GitHub Actions"],
      imgUrl: [portfolioImg1, portfolioImg2],
      repoUrl: "https://github.com/adriannylelis/personal-portfolio",
      height: 300,
    },
  ],
];

export default projectsData;
