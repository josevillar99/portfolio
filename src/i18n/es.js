// Textos de la web en español. Cada clave tiene su equivalente en en.js.
const es = {
  meta: {
    htmlLang: 'es',
    title: 'Jose Villar · Portfolio',
    description: 'Portfolio de Jose Villar, desarrollador full stack (Java, Spring Boot, Angular y React).',
  },

  nav: {
    links: {
      inicio: 'Inicio',
      'sobre-mi': 'Sobre mí',
      proyectos: 'Proyectos',
      contacto: 'Contacto',
    },
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
    switchTo: { es: 'Ver en español', en: 'View in English' },
  },

  hero: {
    eyebrow: 'const desarrollador = "disponible";',
    greeting: 'Hola, soy',
    subtitle:
      'Desarrollador Full Stack centrado en el backend: APIs, integraciones y lógica de negocio con Java y Spring Boot. De la idea al deploy, sin florituras innecesarias.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Contactar',
    scrollLabel: 'Desplazarse hacia abajo',
    scrollText: 'scroll',
  },

  about: {
    kicker: '01. Sobre mí',
    title: 'Quién soy',
    downloadCv: 'Descargar CV',
    downloadCvTitle: 'Descargar mi CV en PDF (español)',
    paragraphs: [
      'Soy Jose, desarrollador full stack de Galicia con más de cinco años de experiencia. Trabajo sobre todo con Java y Spring Boot en el backend, y con Angular y React en el frontend.',
      'Buena parte de mi carrera ha sido en el sector sanitario. En Bahía Software diseñé y desarrollé casi desde cero una aplicación de oftalmología (historia clínica y pruebas para operaciones de cataratas), en contacto directo con el cliente y con los oftalmólogos. En Minsait desarrollé una aplicación que conecta los dispositivos médicos que los pacientes tienen en casa, incluidos sus canales de integración en Mirth Connect. Ahora trabajo en Babel, en una aplicación del sector bancario.',
      'Uso Claude Code a diario, en el trabajo y en mis proyectos personales: un bot que filtra ofertas de empleo, una app de reservas para una peluquería o un ingeniero de carreras con IA para iRacing. Me gustan los equipos pequeños y los productos que se cuidan, donde lo que cuenta es lo que se construye.',
    ],
    skills: [
      'Java', 'Spring Boot', 'Hibernate', 'Angular', 'React', 'TypeScript',
      'Oracle', 'SQL Server', 'PostgreSQL', 'Mirth Connect', 'Docker', 'Jenkins',
      'Git', 'Claude Code',
    ],
    stats: [
      { value: '5+', label: 'Años de experiencia' },
      { value: '3', label: 'Sectores: sanidad, banca y sector público' },
      { value: 'B2', label: 'Inglés' },
    ],
  },

  projects: {
    kicker: '02. Proyectos',
    title: 'Cosas que he construido',
    lead:
      'Proyectos personales que llevo de principio a fin: elijo la arquitectura y las tecnologías, defino cada funcionalidad, los pruebo con casos reales y corrijo lo que falla. Claude Code es mi herramienta para escribir el código más rápido; las decisiones son mías. El código de los publicados está en GitHub.',
    wipBadge: 'En desarrollo',
    demo: 'Demo',
    demoOnDemand: 'Demo · bajo demanda',
    demoSoon: 'Próximamente',
    code: 'Código',
    codeSoon: 'Código · próximamente',
    codeSoonTitle: 'Próximamente en GitHub',
    items: [
      {
        name: 'Bot de ofertas de empleo',
        description:
          'Automatización de Home Assistant que lee alertas de empleo por IMAP y puntúa cada oferta con Claude según el perfil de cada persona: la usamos mi pareja y yo, cada uno con su lista y su móvil. Solo avisa de las que merecen la pena, y las muy buenas que fallan en algún requisito no excluyente las marca como negociables.',
        tags: ['Home Assistant', 'Claude API', 'YAML', 'IMAP', 'JavaScript', 'Prompt engineering'],
      },
      {
        name: 'Castor Barber Shop',
        description:
          'App de reserva de citas para una peluquería con varios trabajadores. Servicios con tiempos de espera (como un tinte), calendario por trabajador, panel de administración, cierre de caja diario, estadísticas y registro de auditoría. Siguiente paso: integrarla con Verifactu para que la facturación cumpla la normativa de la AEAT.',
        tags: ['Java 21', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
      },
      {
        name: 'Ingeniero de carreras con IA',
        description:
          'Ingeniero de radio para iRacing que funciona en local: lee la telemetría en directo, calcula gasolina, neumáticos y paradas, vigila a los rivales y responde por voz a lo que le preguntas en carrera.',
        tags: ['Python', 'Telemetría', 'Whisper', 'Piper TTS', 'LLM local'],
      },
      {
        name: 'Panel para marco digital',
        description:
          'Panel táctil para un marco digital de pared, servido como add-on de Home Assistant. Rota solo entre agenda, tiempo, cartera de inversión, entrenos de Strava y lista de la compra, muestra la música de Spotify con su letra y abre pantallas propias cuando empieza una partida de LoL o una carrera de iRacing. De noche se apaga según un horario y se enciende por voz con Alexa.',
        tags: ['JavaScript', 'Node.js', 'HTML / CSS', 'Home Assistant', 'Docker', 'APIs REST'],
      },
    ],
    modal: {
      title: 'Demo bajo demanda',
      close: 'Cerrar',
      intro:
        'Esta aplicación no está publicada en ningún servidor, así que preparo la demo cuando alguien la pide. Escríbeme por email o LinkedIn y dime cómo prefieres verla:',
      options: [
        { title: 'En una llamada:', text: 'te la enseño en directo y te cuento cómo está hecha.' },
        { title: 'Subida a un servidor:', text: 'la despliego unos días para que la pruebes tú.' },
      ],
      email: 'Pedir por email',
      linkedin: 'Escribir por LinkedIn',
      mailSubject: (project) => `Demo de ${project}`,
      mailBody: (project) =>
        `Hola Jose,\n\nMe gustaría ver una demo de ${project}.\n\n` +
        'Prefiero verla:\n[ ] En una llamada, que me la enseñes en directo\n[ ] Subida a un servidor, para probarla yo\n\n' +
        'Nombre:\nEmpresa:\n',
    },
  },

  contact: {
    kicker: '03. Contacto',
    title: 'Hablemos',
    lead: '¿Tienes una oferta, un proyecto en mente o quieres saludar? Escríbeme por email o LinkedIn y te respondo.',
    labels: { email: 'Email', github: 'GitHub', linkedin: 'LinkedIn' },
    open: { email: 'Escribir un email', github: 'Abrir GitHub', linkedin: 'Abrir LinkedIn' },
    copy: 'Copiar',
    copyLabel: (what) => `Copiar ${what}`,
    copied: '¡Copiado!',
  },
}

export default es
