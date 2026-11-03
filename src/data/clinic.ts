// Todos os textos, links e imagens do site ficam aqui.
// Fonte: perfil da profissional no Doctoralia (02/11/2026) e currículo enviado por ela (03/11/2026).
// Valores de sessão NÃO aparecem no site, a pedido dela.

export const clinic = {
  name: "Danielle Tavares Siqueira",
  shortName: "Danielle Tavares",
  title: "Psicóloga e Psicanalista",
  crp: "CRP 05/26048",
  whatsapp: "5521997318579",
  whatsappLabel: "(21) 99731-8579",
  whatsappMessage: "Olá, Danielle! Vi seu site e gostaria de agendar uma consulta.",
  doctoralia: "https://www.doctoralia.com.br/perfil/danielle-tavares-siqueira",
  email: "danielletavaressiqueira@gmail.com",
  // Rótulo único do botão de ação, repetido no menu, no topo e no fim da página.
  cta: "Agendar consulta",
  images: {
    portrait: "/img/danielle-centralizada.webp",
    leblon: "/img/consultorio-leblon.webp",
  },
};

export const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#abordagem", label: "Abordagem" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#formacao", label: "Formação" },
  { href: "#duvidas", label: "Dúvidas" },
];

export const hero = {
  title: "Psicoterapia que escuta a mente e o corpo",
  text: "Psicóloga e psicanalista no Leblon, em Copacabana e online. Quase 30 anos de clínica com crianças, adolescentes e adultos.",
  secondary: "Conhecer o trabalho",
};

// Faixa de confiança logo abaixo do topo
export const trust = [
  { value: "5,0", label: "no Doctoralia, em 30 avaliações", href: clinic.doctoralia },
  { value: "Desde 1997", label: "na clínica psicológica" },
  { value: "2 consultórios", label: "no Rio de Janeiro e online" },
];

export const about = {
  title: "Sobre mim",
  paragraphs: [
    "Sou psicóloga, psicanalista e psicoterapeuta corporal, com quase 30 anos de clínica. Meu trabalho une a Psicanálise, a Análise Bioenergética, a Biossíntese e o Somatic Experiencing, com atenção à consciência corporal e à elaboração de experiências traumáticas.",
    "Atendo crianças, adolescentes e adultos, no Leblon, em Copacabana e online. Também supervisiono psicólogos e coordeno programas de formação, sempre com rigor clínico e respeito à singularidade de cada pessoa.",
  ],
};

export const approaches = {
  title: "Abordagens que uso na terapia",
  intro: "A escuta psicanalítica é a base. O corpo entra quando faz sentido para o seu processo.",
  items: [
    {
      title: "Psicanálise",
      text: "Escuta de inspiração winnicottiana para entender o que se repete na sua história.",
    },
    {
      title: "Análise Bioenergética",
      text: "Psicoterapia corporal que observa como emoções e tensões aparecem no corpo e na respiração.",
    },
    {
      title: "Biossíntese",
      text: "Integra corpo, emoção e pensamento, com atenção ao desenvolvimento e aos vínculos.",
    },
    {
      title: "Somatic Experiencing",
      text: "Método para trauma e estresse, que ajuda o corpo a recuperar o equilíbrio aos poucos.",
    },
  ],
};

export const topics = {
  title: "Quando procurar terapia",
  intro:
    "Atendo crianças, adolescentes e adultos, com orientação de pais e atenção a questões familiares. Alguns motivos que trazem as pessoas:",
  items: [
    "Ansiedade e crises de pânico",
    "Depressão e angústia existencial",
    "Luto e perdas",
    "Estresse e traumas",
    "Estresse pós-traumático, inclusive após violência obstétrica",
    "Compulsões",
    "Dificuldades nos relacionamentos",
    "Separação e conflitos de casal",
    "Autoestima e instabilidade emocional",
    "Transições de vida",
    "Aspectos psicológicos da dor crônica",
  ],
  note: "Em sofrimento intenso ou pensando em se machucar, procure ajuda agora: ligue 188 (CVV, 24 horas) ou 192 (SAMU).",
};

export const locations = {
  title: "Onde atendo",
  intro: "Presencial no Leblon e em Copacabana, ou por vídeo.",
  items: [
    {
      name: "Leblon",
      address: "Rua Jerônimo Monteiro, 73, sala 102",
      detail: "CEP 22431-070",
      map: "https://www.google.com/maps/search/?api=1&query=Rua+Jer%C3%B4nimo+Monteiro+73+Leblon+Rio+de+Janeiro",
    },
    {
      name: "Copacabana",
      address: "Avenida Nossa Senhora de Copacabana, 613, sala 505",
      detail: "CEP 22050-002",
      map: "https://www.google.com/maps/search/?api=1&query=Avenida+Nossa+Senhora+de+Copacabana+613+Rio+de+Janeiro",
    },
    {
      name: "Online",
      address: "Consulta por vídeo",
      detail: "Em português e espanhol",
      map: "",
    },
  ],
  payment: "Atendimento particular, sem convênios. Pagamento por PIX, transferência, depósito ou dinheiro.",
};

export const mapSection = {
  title: "Como chegar",
  intro: "Escolha o consultório para ver o endereço no mapa.",
  places: [
    {
      name: "Leblon",
      address: "Rua Jerônimo Monteiro, 73, sala 102, Leblon",
      query: "Rua Jerônimo Monteiro, 73, Leblon, Rio de Janeiro, RJ, 22431-070",
    },
    {
      name: "Copacabana",
      address: "Avenida Nossa Senhora de Copacabana, 613, sala 505, Copacabana",
      query: "Avenida Nossa Senhora de Copacabana, 613, Copacabana, Rio de Janeiro, RJ, 22050-002",
    },
  ],
};

export const mapEmbedUrl = (query: string) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=17&hl=pt-BR&output=embed`;

export const mapOpenUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export type TimelineItem = { title: string; where?: string; years?: string; note?: string };

export const training = {
  title: "Formação e atuação",
  educationTitle: "Formação e certificações",
  careerTitle: "Atuação profissional",
  education: [
    {
      title: "Somatic Experiencing Practitioner (SEP)",
      where: "Associação Brasileira de Trauma (ABT), vinculada ao Somatic Experiencing International, Estados Unidos",
      years: "2023 a 2024",
    },
    {
      title: "Pós-graduação em Biossíntese",
      where: "Instituto Brasileiro de Biossíntese, vinculado ao International Institute for Biosynthesis, Suíça",
      years: "2020 a 2022",
    },
    {
      title: "Pós-graduação em Formação de Supervisores em Terapia Bioenergética",
      where: "Instituto de Análise Bioenergética de São Paulo (IABSP)",
      years: "2019 a 2021",
    },
    {
      title: "Certified Bioenergetic Therapist (CBT)",
      where: "International Institute for Bioenergetic Analysis (IIBA), Suíça",
      years: "2009 a 2014",
    },
    {
      title: "Pós-graduação em Teoria e Prática Psicanalítica",
      where: "CEPCOP, Universidade Santa Úrsula",
      years: "2003 a 2004",
    },
    {
      title: "Graduação em Psicologia",
      where: "Universidade Santa Úrsula, Rio de Janeiro",
      years: "1995 a 1999",
    },
  ] as TimelineItem[],
  career: [
    {
      title: "Supervisora clínica e coordenadora de Educação Continuada e Formação de Supervisores",
      where: "Instituto de Análise Bioenergética de São Paulo (IABSP)",
      years: "Desde 2021",
    },
    {
      title: "Psicóloga clínica, psicanalista, psicoterapeuta corporal e supervisora",
      where: "Consultório particular",
      years: "Desde 2000",
      note: "Atendimento a crianças, adolescentes e adultos, orientação de pais e grupos de movimento.",
    },
    {
      title: "Assistente em formações de Somatic Experiencing",
      where: "Turmas em São Paulo, Vitória, Belo Horizonte, Salvador e Brasília",
    },
    {
      title: "Psicóloga e supervisora clínica, uma das fundadoras do programa de atendimento psicológico",
      where: "Departamento de Farmácia da UFRJ",
      years: "2012 a 2025",
    },
  ] as TimelineItem[],
  moreTitle: "Experiências anteriores e outras atividades",
  previous: [
    { title: "Professora e supervisora de ensino de Psicologia", where: "Universidade Santa Úrsula", years: "2003 a 2008" },
    { title: "Psicóloga", where: "Ambulatório da Providência", years: "2008 a 2009" },
    { title: "Professora", where: "PSIU, curso preparatório para concursos públicos", years: "2005 a 2009" },
    { title: "Professora", where: "SPIO, curso preparatório para concursos públicos", years: "2002 a 2005" },
    { title: "Terapeuta", where: "Instituto Cultural Freud", years: "2000 a 2005" },
    {
      title: "Psicóloga concursada",
      where: "Prefeitura Municipal de Nova Friburgo",
      years: "2000 a 2004",
    },
    { title: "Psicóloga", where: "Lar de Vera Lúcia Sartori", years: "1997 a 2000" },
  ] as TimelineItem[],
  other: [
    "Supervisão clínica em Psicanálise e Análise Bioenergética",
    "Docência, palestras e atividades de formação profissional",
    "Orientação de monografias e participação em bancas acadêmicas",
    "Participação no fórum do Círculo Psicanalítico do Rio de Janeiro (CPRJ)",
    "Facilitação de grupos de movimento em retiros para jovens e adultos, pela Ananda Marga, no Rio de Janeiro",
    "Atendimento a pacientes vinculados à Petrobras, Transpetro e Termobahia",
  ],
};

export const faq = {
  title: "Perguntas frequentes",
  items: [
    {
      q: "Como funciona a primeira conversa?",
      a: "Você me chama no WhatsApp e combinamos um horário. Na primeira sessão, conversamos sobre o que te trouxe e como a terapia pode ajudar. Não há compromisso de continuar.",
    },
    {
      q: "A terapia pode ser online?",
      a: "Sim. Atendo por vídeo, com o mesmo cuidado e sigilo do consultório. Basta um lugar reservado e uma boa conexão.",
    },
    {
      q: "Você atende por convênio?",
      a: "Não. O atendimento é particular. O pagamento pode ser feito por PIX, transferência bancária, depósito ou dinheiro.",
    },
    {
      q: "O que é psicoterapia corporal?",
      a: "É uma psicoterapia que, além da conversa, presta atenção ao corpo: respiração, tensões, postura e sensações. Entra conforme o seu processo, sem exigir habilidade física.",
    },
    {
      q: "Quem você atende?",
      a: "Crianças, adolescentes e adultos, em psicoterapia individual, em português ou espanhol. Também faço orientação de pais e acompanho questões familiares e relacionais.",
    },
    {
      q: "Você faz supervisão clínica?",
      a: "Sim. Supervisiono psicólogos e terapeutas, em formação e em prática, em Psicanálise e Análise Bioenergética. Para combinar, me chame no WhatsApp.",
    },
  ],
};

export const cta = {
  title: "Agende sua primeira consulta",
  text: "Me chame no WhatsApp e combinamos o melhor horário.",
};

export const whatsappUrl = (message = clinic.whatsappMessage) =>
  `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
