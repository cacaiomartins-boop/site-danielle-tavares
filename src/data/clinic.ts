// Todos os textos, links e imagens do site ficam aqui.
// Fonte: perfil da profissional no Doctoralia (02/11/2026).

export const clinic = {
  name: "Danielle Tavares Siqueira",
  shortName: "Danielle Tavares",
  title: "Psicóloga e Psicanalista",
  crp: "CRP 05/26048",
  whatsapp: "5521997318579",
  whatsappLabel: "(21) 99731-8579",
  whatsappMessage: "Olá, Danielle! Vi seu site e gostaria de agendar uma consulta.",
  doctoralia: "https://www.doctoralia.com.br/perfil/danielle-tavares-siqueira",
  // Valor da sessão no Doctoralia. Mude showPrice para false para ocultar.
  showPrice: true,
  price: "R$ 500",
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
  text: "Psicóloga e psicanalista no Leblon, em Copacabana e online. Quase 30 anos de clínica com adultos.",
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
    "Sou psicóloga e psicanalista e atuo na clínica desde 1997. Uno a escuta psicanalítica a abordagens que incluem o corpo no cuidado emocional.",
    "Atendo em psicoterapia individual, no Leblon, em Copacabana e online. Também supervisiono outros psicólogos e coordeno a Formação de Supervisores do IABSP.",
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

export const training = {
  title: "Formação e atuação",
  education: [
    "Psicologia, Universidade Santa Úrsula",
    "Pós-graduação em Teoria e Prática Psicanalítica (CEPCOP/Santa Úrsula)",
    "CBT, Certified Bioenergetic Therapist (IIBA, Suíça)",
    "Pós-graduação em Formação de Supervisores em Terapia Bioenergética (IABSP)",
    "Pós-graduação em Biossíntese (Instituto Brasileiro de Biossíntese)",
    "SEP, Somatic Experiencing Practitioner (Associação Brasileira de Trauma)",
  ],
  career: [
    "Coordenadora da Formação de Supervisores do IABSP",
    "Supervisora clínica no atendimento psicológico do Departamento de Farmácia da UFRJ, por cerca de 10 anos",
    "Professora e supervisora clínica na Universidade Santa Úrsula",
    "Psicóloga concursada da Prefeitura de Nova Friburgo, no atendimento a mulheres vítimas de violência doméstica e a crianças",
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
      a: "Adultos, em psicoterapia individual, em português ou espanhol.",
    },
  ],
};

export const cta = {
  title: "Agende sua primeira consulta",
  text: "Me chame no WhatsApp e combinamos o melhor horário.",
};

export const whatsappUrl = (message = clinic.whatsappMessage) =>
  `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
