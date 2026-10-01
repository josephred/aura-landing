/**
 * Aura Salud - Datos Multi-País (Chile, Argentina, Perú)
 * Catálogo Clínico, Precios, Clínicas en Convenio, Cobertura, Planes, Testimonios y FAQs
 */

export const COUNTRIES_DATA = {
  cl: {
    code: 'cl',
    name: 'Chile',
    flag: '🇨🇱',
    currency: {
      code: 'CLP',
      symbol: '$',
      suffix: 'CLP',
      format: (val) => `$${val.toLocaleString('es-CL')} CLP`,
      formatShort: (val) => `$${val.toLocaleString('es-CL')}`
    },
    phone: '+56912345678',
    phoneFormatted: '+56 9 1234 5678',
    zoneName: 'Comuna',
    zoneNamePlural: 'Comunas',
    zonePlaceholder: 'Ej. Providencia, Las Condes, Ñuñoa, Maipú...',
    emergency: {
      name: 'SAMU 131',
      number: '131',
      badge: 'SAMU 131',
      warning: 'Aura Salud atiende cuadros no urgentes y semi-urgentes. Ante riesgo vital inminente, comuníquese de inmediato al 131 (SAMU) o acuda a urgencias hospitalarias.'
    },
    topBanner: {
      liveText: 'Disponibilidad inmediata en Región Metropolitana · Tiempo promedio 35 min',
      staffCountText: '+40 Profesionales de salud activos hoy en Santiago',
      emergencyText: '¿Riesgo vital? Llama al SAMU 131'
    },
    hero: {
      badge: 'Chile',
      subtitle: 'Médicos generales, enfermería, kinesiología, exámenes de laboratorio y ambulancias programadas directamente en tu hogar. Sin salas de espera, con receta digital inmediata y reembolso en tu Isapre o Fonasa.',
      chipDoctor: { title: 'Dra. Camila Rivera en camino', eta: 'ETA estimado: 18 minutos' },
      chipRecipe: { title: 'Receta Electrónica Emitida', desc: 'Válida en farmacias (I-Med / Medipass)' }
    },
    trust: {
      accreditation: 'Prestadores Acreditados SuperSalud',
      reimbursement: 'Boleta Reembolsable en Isapres y Fonasa',
      payments: 'Pagos Seguros Webpay Plus y MercadoPago',
      privacy: 'Ficha Médica Cifrada HIPAA Compliant'
    },
    clinicsLabel: 'Red de Clínicas y Centros Médicos en Convenio',
    clinicsSublabel: 'Red asistencial de referencia y derivación preferente en Chile',
    clinics: [
      {
        name: 'Clínica Alemana',
        location: 'Vitacura / La Dehesa',
        badge: 'Convenio Preferente',
        type: 'Alta Complejidad & Urgencia'
      },
      {
        name: 'Clínica Las Condes',
        location: 'Las Condes / Santiago',
        badge: 'Red Hospitalaria',
        type: 'Centro de Especialidades'
      },
      {
        name: 'RedSalud',
        location: 'Santiago & Regiones',
        badge: 'Red Nacional',
        type: 'Tomas de Muestra y Consultas'
      },
      {
        name: 'Clínica Santa María',
        location: 'Providencia / Santiago',
        badge: 'Acreditada',
        type: 'Atención Integral y Pabellón'
      },
      {
        name: 'Integramédica',
        location: 'Red Metropolitana',
        badge: 'Exámenes & Diagnóstico',
        type: 'Laboratorio Clínico Avanzado'
      },
      {
        name: 'Clínica U. de los Andes',
        location: 'San Carlos de Apoquindo',
        badge: 'Docente Clínico',
        type: 'Medicina Preventiva & Crónicos'
      }
    ],
    services: [
      {
        id: 'medico',
        title: 'Atención Médica a Domicilio',
        shortTitle: 'Médico General',
        category: 'medico',
        price: 40000,
        copayEstimated: 14000,
        eta: '45 - 60 min',
        requiresPrescription: false,
        badge: 'Más Solicitado',
        icon: 'stethoscope',
        subtitle: 'Evaluación, diagnóstico y tratamiento médico para cuadros agudos en tu hogar.',
        description: 'Atención presencial de médico generalista para control de síntomas respiratorios, gastrointestinales, fiebre, descompensación de patologías crónicas y chequeo integral.',
        details: [
          'Examen físico completo y anamnesis en el domicilio',
          'Emisión de receta médica digital válida en farmacias',
          'Certificados de reposo médico (licencia digital)',
          'Boleta reembolsable en Isapre y seguros complementarios'
        ],
        reimbursementNote: 'Copago Fonasa Nivel 3 aplicable / Isapres',
        sampleSymptoms: 'Fiebre persistente, bronquitis, malestar gastrointestinal agudo, migraña severa'
      },
      {
        id: 'enfermeria',
        title: 'Procedimientos de Enfermería',
        shortTitle: 'Enfermería',
        category: 'enfermeria',
        price: 15000,
        copayEstimated: 5250,
        eta: '30 - 50 min',
        requiresPrescription: true,
        badge: 'Rápida Respuesta',
        icon: 'activity',
        subtitle: 'Administración de medicamentos, curaciones, sondas e inyectables.',
        description: 'Personal de enfermería y TENS acreditados asisten a tu hogar para administración de fármacos endovenosos, intramusculares, curaciones simples y avanzadas.',
        details: [
          'Inyecciones intramusculares y subcutáneas',
          'Instalación y manejo de vías venosas periféricas',
          'Curación de heridas quirúrgicas y úlceras por presión',
          'Pase e instalación de sondas Foley y nasogástricas'
        ],
        reimbursementNote: 'Cod. Fonasa 02-01-001 / Isapres',
        sampleSymptoms: 'Inyección de antibióticos/analgésicos, retiro de puntos, curación de herida'
      },
      {
        id: 'kine_respiratoria',
        title: 'Kinesiología Respiratoria',
        shortTitle: 'Kine Respiratoria',
        category: 'kinesiologia',
        price: 24000,
        copayEstimated: 8400,
        eta: '45 - 75 min',
        requiresPrescription: true,
        badge: 'Especialidad',
        icon: 'wind',
        subtitle: 'Kinesioterapia bronquial para lactantes, niños, adultos y personas mayores.',
        description: 'Aseo bronquial, aspiración de secreciones, oxigenoterapia domiciliaria y ejercicios respiratorios para favorecer la ventilación pulmonar tras cuadros obstructivos.',
        details: [
          'Manejo de bronquitis obstructiva y cuadros sinciciales',
          'Rehabilitación respiratoria post-neumonía y EPOC',
          'Aspiración de secreciones y técnicas de desobstrucción',
          'Evaluación de saturación O2 y mecánica ventilatoria'
        ],
        reimbursementNote: 'Cod. Fonasa 06-01-019 / Isapres',
        sampleSymptoms: 'Dificultad respiratoria, tos con flemas persistente, bronquitis aguda'
      },
      {
        id: 'kine_motora',
        title: 'Kinesiología Motora y Funcional',
        shortTitle: 'Kine Motora',
        category: 'kinesiologia',
        price: 22000,
        copayEstimated: 7700,
        eta: '60 - 90 min',
        requiresPrescription: true,
        badge: 'Rehabilitación',
        icon: 'footprints',
        subtitle: 'Rehabilitación traumatológica, neurológica y reeducación de la marcha.',
        description: 'Fisioterapia y ejercicios terapéuticos personalizados para recuperación post-operatoria, fracturas, esguinces, lumbago o apoyo funcional a personas mayores.',
        details: [
          'Rehabilitación traumatológica post-fracturas o prótesis',
          'Terapia para dolor lumbar, cervicalgia y tendinopatías',
          'Entrenamiento de equilibrio y prevención de caídas',
          'Masoterapia clínica y movilización articular'
        ],
        reimbursementNote: 'Cod. Fonasa 06-01-017 / Isapres',
        sampleSymptoms: 'Post-cirugía de cadera/rodilla, esguince, dolor lumbar incapacitante'
      },
      {
        id: 'laboratorio',
        title: 'Toma de Muestras y Laboratorio',
        shortTitle: 'Toma de Muestras',
        category: 'laboratorio',
        price: 19500,
        copayEstimated: 6800,
        eta: '60 - 90 min',
        requiresPrescription: true,
        badge: 'Resultados Rápidos',
        icon: 'flask',
        subtitle: 'Extracción de sangre, orina y tomas microbiológicas en la mañana.',
        description: 'Toma de muestras por profesionales certificados bajo estrictos estándares de bioseguridad. Resultados en línea en menos de 24 horas en tu portal de paciente.',
        details: [
          'Hemograma, perfil lipídico, glicemia y bioquímica completa',
          'Perfil hepático, renal, tiroideo y hormonal',
          'Urocultivo, orina completa y exámenes microbiológicos',
          'Resultados descargables en PDF en tu app y por correo'
        ],
        reimbursementNote: 'Reembolso según orden médica en Isapres',
        sampleSymptoms: 'Chequeo preventivo anual, control de diabetes/colesterol, urocultivo'
      },
      {
        id: 'electrocardiograma',
        title: 'Electrocardiograma (ECG) 12 Derivaciones',
        shortTitle: 'Electrocardiograma',
        category: 'laboratorio',
        price: 21000,
        copayEstimated: 7350,
        eta: '45 - 60 min',
        requiresPrescription: true,
        badge: 'Informe Cardiológico',
        icon: 'heart-pulse',
        subtitle: 'Trazados ECG con informe validado por médico cardiólogo.',
        description: 'Registro de la actividad eléctrica cardíaca en tu cama con electrocardiógrafo digital de alta resolución. Entrega de informe interpretado por especialista en 24h.',
        details: [
          'ECG de 12 derivaciones con equipamiento portátil calibrado',
          'Pre-visualización de trazado in situ por profesional',
          'Informe firmado por médico cardiólogo habilitado',
          'Ideal para aptitud quirúrgica y control de arritmias'
        ],
        reimbursementNote: 'Cod. Fonasa 17-01-001 / Isapres',
        sampleSymptoms: 'Control de hipertensión, aptitud preoperatoria, control de arritmias'
      },
      {
        id: 'radiologia',
        title: 'Radiología Digital a Domicilio',
        shortTitle: 'Rayos X en Casa',
        category: 'laboratorio',
        price: 35000,
        copayEstimated: 12250,
        eta: '90 - 120 min',
        requiresPrescription: true,
        badge: 'Equipo Rodable',
        icon: 'scan',
        subtitle: 'Estudios de rayos X con equipo digital de baja dosis en tu hogar.',
        description: 'Estudios óseos y pulmonares para pacientes postrados o de movilidad reducida. Sin necesidad de traslados traumáticos en ambulancia a clínicas.',
        details: [
          'Radiografía de tórax, cadera, extremidades y columna',
          'Equipo radiológico portátil con protección plomada',
          'Informe radiológico formal disponible en portal web en 24h',
          'Atención especial para adultos mayores dependientes'
        ],
        reimbursementNote: 'Cod. Fonasa 04-01-001 / Isapres',
        sampleSymptoms: 'Sospecha de fractura por caída en hogar, neumonía en paciente postrado'
      },
      {
        id: 'cuidados',
        title: 'Cuidados Domiciliarios y Asistencia',
        shortTitle: 'Cuidados Continuos',
        category: 'cuidados',
        price: 12000,
        copayEstimated: 4200,
        eta: '120 - 180 min',
        requiresPrescription: false,
        badge: 'Por Hora',
        icon: 'heart-handshake',
        subtitle: 'Asistentes de cuidado y TENS para personas mayores o convalecientes.',
        description: 'Acompañamiento clínico, asistencia en actividades de la vida diaria, administración y control de medicamentos orales, higiene, confort y movilización segura.',
        details: [
          'Acompañamiento y asistencia en aseo y confort diario',
          'Control y administración estricta de medicamentos orales',
          'Estimulación cognitiva y apoyo en marcha/movilidad',
          'Turnos diurnos, nocturnos o paquetes por horas'
        ],
        reimbursementNote: 'Contratación mínima 3 horas',
        sampleSymptoms: 'Acompañamiento de adulto mayor, asistencia post-alta hospitalaria'
      },
      {
        id: 'ambulancia',
        title: 'Ambulancia de Transporte Programado',
        shortTitle: 'Ambulancia Programada',
        category: 'cuidados',
        price: 18500,
        copayEstimated: 6475,
        eta: '15 - 30 min',
        requiresPrescription: false,
        badge: 'Traslado Seguro',
        icon: 'truck',
        subtitle: 'Traslado clínico básico o medicalizado no urgente.',
        description: 'Traslado programado en ambulancia equipada para pacientes con movilidad reducida, altas hospitalarias, asistencia a diálisis o exámenes en centros de salud.',
        details: [
          'Móvil climatizado con camilla ergonómica y silla de ruedas',
          'Personal paramédico acompañante en todo el trayecto',
          'Coordinación de regreso y traslado puerta a puerta',
          'Monitoreo de signos vitales durante el viaje'
        ],
        reimbursementNote: 'Tarifa base + km adicional según comuna',
        sampleSymptoms: 'Alta clínica en camilla, traslado a centro de diálisis o radioterapia'
      }
    ],
    subscriptionPlans: [
      {
        id: 'plan_individual',
        name: 'Plan Aura Esencial',
        tagline: 'Ideal para el cuidado preventivo y salud continua individual.',
        monthlyPrice: 14990,
        annualPrice: 149900,
        popular: false,
        badge: 'Individual',
        features: [
          '1 consulta médica o de enfermería a domicilio al mes',
          '15% de descuento permanente en exámenes y laboratorio',
          'Orientación médica digital y triage 24/7 sin costo',
          'Sin costo de despacho en medicamentos convenidos',
          'Ficha clínica digital unificada y recetas en la nube',
          'Soporte prioritario por WhatsApp clínico'
        ],
        ctaText: 'Elegir Plan Esencial'
      },
      {
        id: 'plan_familiar',
        name: 'Plan Aura Familiar',
        tagline: 'Cobertura integral para el titular y hasta 4 familiares o dependientes.',
        monthlyPrice: 29990,
        annualPrice: 299900,
        popular: true,
        badge: 'Más Recomendado',
        features: [
          '3 consultas a domicilio mensuales para todo el grupo familiar',
          '25% de descuento en toma de muestras y laboratorio',
          'Ficha clínica digital compartida para hijos y padres',
          'Atención prioritaria con asignación express de profesionales',
          'Despacho preferencial de ambulancia no urgente',
          'Telemedicina ilimitada 24/7 para los 5 integrantes',
          'Recordatorio automático de vacunas y controles'
        ],
        ctaText: 'Elegir Plan Familiar'
      },
      {
        id: 'plan_senior',
        name: 'Plan Aura Senior Care',
        tagline: 'Especialmente diseñado para adultos mayores y personas con dependencia.',
        monthlyPrice: 39990,
        annualPrice: 399900,
        popular: false,
        badge: 'Senior & Cuidados',
        features: [
          '4 atenciones a domicilio mensuales (médico, enfermera o kine)',
          '30% de descuento en laboratorio, ECG y radiología en casa',
          'Monitoreo preventivo mensual de signos vitales y glicemia',
          'Médico de cabecera asignado con seguimiento continuo',
          'Contacto directo con familiares vía app tras cada visita',
          'Coordinación directa de recetas GES y crónicos',
          'Prioridad máxima en flota de emergencias'
        ],
        ctaText: 'Elegir Senior Care'
      }
    ],
    coverage: [
      { comuna: 'Las Condes', region: 'Región Metropolitana', eta: '25 - 40 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'Providencia', region: 'Región Metropolitana', eta: '20 - 35 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'Vitacura', region: 'Región Metropolitana', eta: '25 - 45 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'Ñuñoa', region: 'Región Metropolitana', eta: '25 - 40 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'Lo Barnechea', region: 'Región Metropolitana', eta: '30 - 50 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'Santiago Centro', region: 'Región Metropolitana', eta: '25 - 40 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'La Reina', region: 'Región Metropolitana', eta: '30 - 45 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'Peñalolén', region: 'Región Metropolitana', eta: '35 - 55 min', status: 'Disponible', active: true },
      { comuna: 'La Florida', region: 'Región Metropolitana', eta: '35 - 50 min', status: 'Disponible', active: true },
      { comuna: 'Macul', region: 'Región Metropolitana', eta: '30 - 45 min', status: 'Disponible', active: true },
      { comuna: 'San Miguel', region: 'Región Metropolitana', eta: '30 - 45 min', status: 'Disponible', active: true },
      { comuna: 'Maipú', region: 'Región Metropolitana', eta: '40 - 60 min', status: 'Disponible', active: true },
      { comuna: 'Huechuraba', region: 'Región Metropolitana', eta: '35 - 50 min', status: 'Disponible', active: true },
      { comuna: 'Colina / Chicureo', region: 'Región Metropolitana', eta: '45 - 65 min', status: 'Disponible', active: true },
      { comuna: 'Viña del Mar', region: 'Región de Valparaíso', eta: '30 - 50 min', status: 'Disponible', active: true },
      { comuna: 'Concepción', region: 'Región del Biobío', eta: '35 - 55 min', status: 'Próxima Expansión', active: true }
    ],
    coverageHub: {
      badge: '🇨🇱 Red Médica Nacional',
      title: 'Despacho Central Santiago & Regiones',
      desc: 'Nuestra central monitorea la ubicación y disponibilidad del personal médico con algoritmos de ruteo óptimo para llegar a tu puerta en el menor tiempo posible.',
      metric1Val: '< 35 min',
      metric1Label: 'Tiempo promedio zona oriente',
      metric2Val: '24/7',
      metric2Label: 'Telemedicina y triage continuo'
    },
    professionalRequirements: [
      'Título profesional acreditado en Chile',
      'Inscripción en el Registro Nacional de Prestadores (SuperSalud)',
      'EUNACOM aprobado (médicos titulados en el extranjero)',
      'Certificado de antecedentes para fines especiales'
    ],
    testimonials: [
      {
        id: 1,
        name: 'Carolina Morales',
        location: 'Las Condes, Santiago',
        role: 'Mamá de 2 niños',
        service: 'Médico a Domicilio y Kine',
        rating: 5,
        date: 'Hace 3 días',
        text: 'Mi hijo menor amaneció con 39° de fiebre y bronquitis obstructiva. En vez de esperar 4 horas en una clínica con niños enfermos alrededor, pedí a través de Aura y la Dra. Camila llegó en 35 minutos. Excelente trato y receta directa al celular.',
        avatarColor: '#0D9488'
      },
      {
        id: 2,
        name: 'Eduardo Valenzuela',
        location: 'Providencia, Santiago',
        role: 'Hijo de paciente Senior',
        service: 'Plan Aura Senior Care',
        rating: 5,
        date: 'Hace 1 semana',
        text: 'Tengo a mi madre de 82 años con movilidad reducida. Las tomas de muestra y curaciones en casa han sido un salvavidas para nuestra familia. Las enfermeras son muy amables y el seguimiento en el mapa te da total tranquilidad.',
        avatarColor: '#14B8A6'
      },
      {
        id: 3,
        name: 'Dr. Sebastián Leyton',
        location: 'Santiago, Chile',
        role: 'Médico General Staff Aura',
        service: 'Prestador de Salud',
        rating: 5,
        date: 'Hace 2 semanas',
        text: 'La app para nosotros como médicos es impecable. Nos entrega la ficha clínica antes de llegar, el paciente sabe cuándo vamos en camino y la documentación de recetas es 100% digital. Permite hacer medicina con foco real en la persona.',
        avatarColor: '#06B6D4'
      }
    ],
    faqs: [
      {
        id: 1,
        question: '¿Cómo funciona el reembolso en mi Isapre o seguro complementario?',
        answer: 'Al finalizar cada atención, Aura emite automáticamente una boleta electrónica médica detallada con el código arancelario correspondiente. Esta boleta se envía a tu correo y queda guardada en tu historial de la app, lista para que la subas a la sucursal virtual de tu Isapre (Banmédica, Colmena, Consalud, CruzBlanca, Vida Tres, etc.) o seguro complementario para obtener el reembolso según tu plan.'
      },
      {
        id: 2,
        question: '¿Qué hago en caso de una urgencia de riesgo vital?',
        answer: 'Aura está diseñada para atenciones domiciliarias ambulatorias, semi-urgentes y programadas. Si una persona presenta signos de riesgo vital inminente (dolor torácico opresivo de inicio súbito, pérdida de conciencia, sospecha de ACV, asfixia severa), debes llamar de inmediato al SAMU (teléfono 131) o acudir al servicio de urgencias hospitalario más cercano.'
      },
      {
        id: 3,
        question: '¿Los médicos pueden emitir licencias médicas y recetas electrónicas?',
        answer: 'Sí. Todos nuestros profesionales médicos están habilitados y registrados en el Registro Nacional de Prestadores Individuales de la Superintendencia de Salud de Chile. Cuentan con firma electrónica avanzada para emitir recetas digitales, órdenes de exámenes y licencias médicas electrónicas (FONASA / Isapre / Medipass / I-Med).'
      },
      {
        id: 4,
        question: '¿Cuánto tiempo tardan en llegar a mi domicilio?',
        answer: 'Nuestro sistema de despacho inteligente asigna automáticamente al profesional disponible más cercano a tu ubicación geográfica. En las comunas del anillo central y oriente de Santiago, el tiempo promedio de arribo oscila entre 30 y 50 minutos. Puedes monitorear el desplazamiento y ETA en tiempo real en el mapa satelital de la aplicación.'
      },
      {
        id: 5,
        question: '¿Qué servicios requieren orden o receta médica previa?',
        answer: 'Los procedimientos de enfermería (inyecciones de fármacos específicos, postulación de vías, curaciones avanzadas), sesiones de kinesiología, tomas de muestras y radiología domiciliaria requieren por normativa sanitaria chilena una orden médica vigente. Puedes adjuntar una foto de tu orden directamente en el formulario de la app al solicitar la atención.'
      },
      {
        id: 6,
        question: '¿Cuáles son los medios de pago aceptados?',
        answer: 'Aceptamos tarjetas de débito (Redcompra), tarjetas de crédito (Visa, Mastercard, American Express) a través de pasarelas seguras Webpay Plus y Mercado Pago, además de transferencias bancarias directas. El cobro se procesa de forma transparente y sin tarifas sorpresa.'
      }
    ],
    footer: {
      about: 'Plataforma chilena de salud y telemedicina a domicilio. Conectamos pacientes con profesionales de la salud certificados en minutos.',
      legalEntity: '© 2026 Aura Salud SpA. Todos los derechos reservados. Santiago de Chile.',
      legalItems: [
        'Registro Prestadores SuperSalud',
        'Cumplimiento Ley 20.584 (Derechos y Deberes)',
        'Privacidad Cifrada Ley 19.628',
        'Términos y Condiciones',
        'Política de Privacidad'
      ]
    }
  },

  ar: {
    code: 'ar',
    name: 'Argentina',
    flag: '🇦🇷',
    currency: {
      code: 'ARS',
      symbol: '$',
      suffix: 'ARS',
      format: (val) => `$${val.toLocaleString('es-AR')} ARS`,
      formatShort: (val) => `$${val.toLocaleString('es-AR')}`
    },
    phone: '+5491123456789',
    phoneFormatted: '+54 9 11 2345-6789',
    zoneName: 'Barrio / Partido',
    zoneNamePlural: 'Barrios y Localidades',
    zonePlaceholder: 'Ej. Palermo, Belgrano, San Isidro, Recoleta...',
    emergency: {
      name: 'SAME 107',
      number: '107',
      badge: 'SAME 107',
      warning: 'Aura Salud atiende cuadros no urgentes y atenciones programadas. Ante una emergencia con riesgo inminente de vida, comuníquese de inmediato al 107 (SAME) o concurra a la guardia hospitalaria más cercana.'
    },
    topBanner: {
      liveText: 'Médicos y enfermeros en guardia activa: Disponibilidad inmediata en CABA y GBA · Tiempo promedio 30 min',
      staffCountText: '+50 Profesionales de salud activos hoy en Buenos Aires',
      emergencyText: '¿Riesgo de vida? Llama al SAME 107'
    },
    hero: {
      badge: 'Argentina',
      subtitle: 'Médicos clínicos, enfermería, kinesiología, análisis de laboratorio y ambulancias programadas directamente en tu domicilio. Sin guardias saturadas, con receta digital homologada y reintegro en tu Prepaga u Obra Social (OSDE, Swiss Medical, Galeno, etc.).',
      chipDoctor: { title: 'Dr. Lucas Fernández en camino', eta: 'ETA estimado: 15 minutos' },
      chipRecipe: { title: 'Receta Digital Homologada', desc: 'Válida en farmacias (Ley 27.553 / SISA)' }
    },
    trust: {
      accreditation: 'Profesionales Matriculados MN / MP (SISA)',
      reimbursement: 'Factura para Reintegro en Prepagas y Obras Sociales',
      payments: 'Pagos Seguros Mercado Pago, MODO y Transferencia',
      privacy: 'Historia Clínica Cifrada Ley 25.326 de Protección de Datos'
    },
    clinicsLabel: 'Red de Sanatorios y Centros Médicos en Convenio',
    clinicsSublabel: 'Centros sanatoriales de referencia y convenios asistenciales en Argentina',
    clinics: [
      {
        name: 'Hospital Italiano',
        location: 'Almagro / San Justo',
        badge: 'Convenio Preferente',
        type: 'Alta Complejidad & Investigación'
      },
      {
        name: 'Sanatorio Mater Dei',
        location: 'Palermo / CABA',
        badge: 'Excelencia Médica',
        type: 'Centro Quirúrgico y Maternidad'
      },
      {
        name: 'Sanatorio de la Trinidad',
        location: 'Palermo / San Isidro / Mitre',
        badge: 'Red Asistencial',
        type: 'Guardia & Cuidados Críticos'
      },
      {
        name: 'Swiss Medical Center',
        location: 'Barrio Norte / CABA',
        badge: 'Red Ambulatoria',
        type: 'Diagnóstico & Especialistas'
      },
      {
        name: 'Sanatorio Los Arcos',
        location: 'Palermo / CABA',
        badge: 'Tecnología Avanzada',
        type: 'Internación & Diagnóstico 24h'
      },
      {
        name: 'Sanatorio Finochietto',
        location: 'Recoleta / CABA',
        badge: 'Certificación Joint',
        type: 'Atención Integral Domiciliaria'
      }
    ],
    services: [
      {
        id: 'medico',
        title: 'Médico Clínico a Domicilio',
        shortTitle: 'Médico Clínico',
        category: 'medico',
        price: 38000,
        copayEstimated: 13300,
        eta: '30 - 50 min',
        requiresPrescription: false,
        badge: 'Más Solicitado',
        icon: 'stethoscope',
        subtitle: 'Evaluación, diagnóstico y tratamiento médico para cuadros clínicos en tu hogar.',
        description: 'Atención presencial de médico generalista o clínico para control de cuadros febriles, respiratorios, digestivos, crisis hipertensivas leves y chequeo clínico integral.',
        details: [
          'Examen físico integral y diagnóstico en el domicilio',
          'Receta médica electrónica con firma digital conforme Ley 27.553',
          'Certificado médico y constancia laboral digital',
          'Factura fiscal emitida para reintegro en prepagas y obras sociales'
        ],
        reimbursementNote: 'Reintegro en OSDE, Swiss Medical, Galeno, etc.',
        sampleSymptoms: 'Fiebre persistente, cuadros gripales, gastroenteritis aguda, dolor lumbar severo'
      },
      {
        id: 'enfermeria',
        title: 'Procedimientos de Enfermería',
        shortTitle: 'Enfermería',
        category: 'enfermeria',
        price: 16000,
        copayEstimated: 5600,
        eta: '25 - 45 min',
        requiresPrescription: true,
        badge: 'Rápida Respuesta',
        icon: 'activity',
        subtitle: 'Administración de medicamentos, inyectables, vías periféricas y curaciones.',
        description: 'Enfermeros profesionales matriculados asisten a tu domicilio para colocación de sueros, inyectables intramusculares, curación de escaras o heridas quirúrgicas.',
        details: [
          'Inyecciones intramusculares, subcutáneas y endovenosas',
          'Colocación de vía venosa periférica e hidratación parenteral',
          'Curaciones avanzadas de escaras, quemaduras y heridas posquirúrgicas',
          'Colocación y recambio de sondas vesicales y nasogástricas'
        ],
        reimbursementNote: 'Factura médica homologada para reintegro',
        sampleSymptoms: 'Inyección de antibióticos/analgésicos, curación de herida, sueroterapia'
      },
      {
        id: 'kine_respiratoria',
        title: 'Kinesiología Respiratoria',
        shortTitle: 'Kine Respiratoria',
        category: 'kinesiologia',
        price: 25000,
        copayEstimated: 8750,
        eta: '45 - 70 min',
        requiresPrescription: true,
        badge: 'Especialidad',
        icon: 'wind',
        subtitle: 'Kinesioterapia bronquial para bebés, niños, adultos y adultos mayores.',
        description: 'Desobstrucción de vías aéreas, aspiración de secreciones, ejercicios ventilatorios y rehabilitación pulmonar para bronquiolitis, neumonías y cuadros obstructivos.',
        details: [
          'Tratamiento de bronquiolitis infantil y cuadros broncoobstructivos',
          'Rehabilitación respiratoria post-neumonía, EPOC y secuelas virales',
          'Aspiración de secreciones y técnicas kinésicas de higiene bronquial',
          'Monitoreo continuo de oximetría de pulso y auscultación pulmonar'
        ],
        reimbursementNote: 'Reintegro disponible según plan de Prepaga',
        sampleSymptoms: 'Dificultad para respirar, catarro retenido, bronquiolitis infantil'
      },
      {
        id: 'kine_motora',
        title: 'Kinesiología Motora y Fisioterapia',
        shortTitle: 'Kine Motora',
        category: 'kinesiologia',
        price: 23000,
        copayEstimated: 8050,
        eta: '60 - 90 min',
        requiresPrescription: true,
        badge: 'Rehabilitación',
        icon: 'footprints',
        subtitle: 'Rehabilitación traumatológica, neurológica y reeducación funcional de la marcha.',
        description: 'Ejercicios terapéuticos y fisioterapia para recuperación posquirúrgica (prótesis, fracturas), hernias de disco, lumbociatalgias o pacientes con movilidad reducida.',
        details: [
          'Rehabilitación traumatológica tras cirugías de cadera, rodilla y fracturas',
          'Tratamiento kinésico para lumbagos agudos y cervicalgias incapacitantes',
          'Reeducación del equilibrio y marcha para adultos mayores',
          'Movilización pasiva y activa con equipamiento portátil'
        ],
        reimbursementNote: 'Cobertura por reintegro en Obras Sociales',
        sampleSymptoms: 'Recuperación de prótesis de cadera/rodilla, esguince, ciática aguda'
      },
      {
        id: 'laboratorio',
        title: 'Análisis Clínicos y Laboratorio',
        shortTitle: 'Laboratorio a Domicilio',
        category: 'laboratorio',
        price: 20000,
        copayEstimated: 7000,
        eta: '60 - 90 min',
        requiresPrescription: true,
        badge: 'Resultados en 24h',
        icon: 'flask',
        subtitle: 'Extracción de sangre y recolección de muestras biológicas por la mañana.',
        description: 'Bioquímicos y técnicos de laboratorio acuden con material descartable estéril y conservadores térmicos. Resultados con firma digital disponibles en tu app en 24h.',
        details: [
          'Hemograma completo, glucemia, hepatograma, ionograma y coagulograma',
          'Perfil lipídico, función renal, perfil tiroideo y hormonal',
          'Urocultivo, orina completa e hisopados microbiológicos',
          'Informe analítico descargable en PDF con código QR de verificación'
        ],
        reimbursementNote: 'Reintegro total o parcial según orden médica',
        sampleSymptoms: 'Control de rutina anual, chequeo de diabetes/colesterol, urocultivo'
      },
      {
        id: 'electrocardiograma',
        title: 'Electrocardiograma (ECG) 12 Canales',
        shortTitle: 'Electrocardiograma',
        category: 'laboratorio',
        price: 22000,
        copayEstimated: 7700,
        eta: '40 - 60 min',
        requiresPrescription: true,
        badge: 'Informe Cardiológico',
        icon: 'heart-pulse',
        subtitle: 'Trazados ECG domiciliarios con informe interpretado por médico cardiólogo.',
        description: 'Estudio cardiológico in situ con electrocardiógrafo digital portátil de última generación. Evaluación prequirúrgica y control de arritmias sin salir de tu cama.',
        details: [
          'ECG de 12 derivaciones con electrocardiógrafo digital calibrado',
          'Impresión del trazado y revisión preliminar en el acto',
          'Informe firmado con matrícula nacional por cardiólogo en 24h',
          'Apto para riesgo quirúrgico, control de hipertensión y arritmias'
        ],
        reimbursementNote: 'Reintegro disponible con orden médica',
        sampleSymptoms: 'Riesgo quirúrgico, hipertensión, palpitaciones, control cardiológico'
      },
      {
        id: 'radiologia',
        title: 'Radiología Digital en Domicilio',
        shortTitle: 'Rayos X en Casa',
        category: 'laboratorio',
        price: 36000,
        copayEstimated: 12600,
        eta: '90 - 120 min',
        requiresPrescription: true,
        badge: 'Equipo Rodable',
        icon: 'scan',
        subtitle: 'Estudios radiológicos portátiles de baja dosis en tu propia habitación.',
        description: 'Equipo digital rodable de alta resolución ideal para personas mayores o con dificultad motora. Evita traslados costosos e incómodos a guardias o centros médicos.',
        details: [
          'Placas de tórax, cadera, pelvis, columna y extremidades',
          'Equipo portátil de emisión controlada con chaleco plomado',
          'Visualización instantánea e informe por médico radiólogo en 24h',
          'Atención con prioridad para pacientes con fracturas o postrados'
        ],
        reimbursementNote: 'Apto para reintegro en prepagas y seguros',
        sampleSymptoms: 'Caída de adulto mayor con sospecha de fractura, control de neumonía'
      },
      {
        id: 'cuidados',
        title: 'Acompañamiento y Cuidados',
        shortTitle: 'Cuidados de Salud',
        category: 'cuidados',
        price: 14000,
        copayEstimated: 4900,
        eta: '120 - 180 min',
        requiresPrescription: false,
        badge: 'Por Hora',
        icon: 'heart-handshake',
        subtitle: 'Acompañantes terapéuticos y enfermeros para personas mayores o convalecientes.',
        description: 'Cuidado integral, asistencia en actividades cotidianas, control riguroso de medicación oral, higiene, confort y movilización segura con personal cálido y calificado.',
        details: [
          'Asistencia en higiene personal, baño en cama y confort diario',
          'Administración supervisada de medicación según indicación médica',
          'Estimulación cognitiva, acompañamiento activo y paseos seguros',
          'Guardias diurnas, nocturnas o paquetes continuos de horas'
        ],
        reimbursementNote: 'Contratación mínima 3 horas por guardia',
        sampleSymptoms: 'Cuidado de abuelos, convalecencia post-internación, acompañamiento'
      },
      {
        id: 'ambulancia',
        title: 'Ambulancia de Traslado Programado',
        shortTitle: 'Ambulancia Programada',
        category: 'cuidados',
        price: 28000,
        copayEstimated: 9800,
        eta: '15 - 30 min',
        requiresPrescription: false,
        badge: 'Traslado Asistido',
        icon: 'truck',
        subtitle: 'Unidades de traslado clínico de baja y mediana complejidad no urgentes.',
        description: 'Móviles equipados con camilla reclinable, rampa para silla de ruedas y paramédico acompañante. Traslados a turnos médicos, diálisis, altas hospitalarias o estudios.',
        details: [
          'Móvil climatizado con camilla ergonómica y anclaje de seguridad',
          'Chofer paramédico y enfermero acompañante capacitado',
          'Servicio puerta a puerta con coordinación de ida y vuelta',
          'Monitoreo básico de signos vitales durante todo el trayecto'
        ],
        reimbursementNote: 'Tarifa base CABA + km en Gran Buenos Aires',
        sampleSymptoms: 'Alta médica en camilla, traslado a centro de diálisis o resonador'
      }
    ],
    subscriptionPlans: [
      {
        id: 'plan_individual',
        name: 'Plan Aura Esencial',
        tagline: 'Ideal para el cuidado de la salud personal y prevención continua.',
        monthlyPrice: 18500,
        annualPrice: 185000,
        popular: false,
        badge: 'Individual',
        features: [
          '1 visita médica clínica o de enfermería a domicilio al mes',
          '15% de descuento en análisis de laboratorio y radiología',
          'Orientación médica digital y triage 24/7 sin costo adicional',
          'Envío sin cargo de medicamentos con receta archivada',
          'Historia clínica digital accesible desde el celular',
          'Atención directa por WhatsApp médico preferencial'
        ],
        ctaText: 'Elegir Plan Esencial'
      },
      {
        id: 'plan_familiar',
        name: 'Plan Aura Familiar',
        tagline: 'Cobertura integral para el titular y hasta 4 familiares a cargo.',
        monthlyPrice: 36000,
        annualPrice: 360000,
        popular: true,
        badge: 'Más Elegido',
        features: [
          '3 visitas médicas a domicilio mensuales para todo el grupo familiar',
          '25% de descuento en extracciones de sangre y estudios diagnósticos',
          'Historia clínica compartida para hijos pequeños y padres',
          'Asignación prioritaria express de médicos y enfermeros',
          'Despacho preferencial de ambulancia de traslado',
          'Telemedicina ilimitada 24/7 para los 5 integrantes',
          'Alertas automáticas de calendario de vacunación y controles'
        ],
        ctaText: 'Elegir Plan Familiar'
      },
      {
        id: 'plan_senior',
        name: 'Plan Aura Senior Care',
        tagline: 'Diseñado a medida para personas mayores y pacientes con patologías crónicas.',
        monthlyPrice: 48000,
        annualPrice: 480000,
        popular: false,
        badge: 'Senior & Cuidados',
        features: [
          '4 visitas a domicilio mensuales (médico clínico, enfermero o kinesiólogo)',
          '30% de descuento en laboratorio, ECG y radiología en domicilio',
          'Monitoreo mensual de presión arterial, glucemia y signos vitales',
          'Médico de cabecera asignado con seguimiento evolutivo',
          'Notificación directa a hijos/familiares tras cada atención médica',
          'Gestión continua de recetas crónicas digitales',
          'Prioridad máxima en logística de guardias domiciliarias'
        ],
        ctaText: 'Elegir Senior Care'
      }
    ],
    coverage: [
      { comuna: 'Palermo', region: 'CABA', eta: '20 - 35 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'Recoleta', region: 'CABA', eta: '20 - 30 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'Belgrano', region: 'CABA', eta: '25 - 35 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'Caballito', region: 'CABA', eta: '25 - 40 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'Puerto Madero', region: 'CABA', eta: '20 - 35 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'Núñez', region: 'CABA', eta: '25 - 40 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'Villa Urquiza', region: 'CABA', eta: '25 - 40 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'San Telmo', region: 'CABA', eta: '25 - 40 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'San Isidro', region: 'GBA Norte', eta: '30 - 45 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'Vicente López / Olivos', region: 'GBA Norte', eta: '25 - 40 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'Tigre / Nordelta', region: 'GBA Norte', eta: '35 - 55 min', status: 'Disponible', active: true },
      { comuna: 'Pilar', region: 'GBA Norte', eta: '45 - 65 min', status: 'Disponible', active: true },
      { comuna: 'Quilmes', region: 'GBA Sur', eta: '35 - 50 min', status: 'Disponible', active: true },
      { comuna: 'La Plata', region: 'Gran La Plata', eta: '35 - 50 min', status: 'Disponible', active: true },
      { comuna: 'Córdoba Capital', region: 'Córdoba', eta: '30 - 50 min', status: 'Disponible', active: true },
      { comuna: 'Rosario Centro', region: 'Santa Fe', eta: '30 - 50 min', status: 'Próxima Expansión', active: true }
    ],
    coverageHub: {
      badge: '🇦🇷 Red Médica Nacional',
      title: 'Despacho Central CABA & Gran Buenos Aires',
      desc: 'Nuestra central de monitoreo geolocaliza las unidades médicas en tiempo real con optimización de tráfico para llegar a tu puerta en el menor tiempo posible.',
      metric1Val: '< 30 min',
      metric1Label: 'Tiempo promedio Corredor Norte y CABA',
      metric2Val: '24/7',
      metric2Label: 'Telemedicina y triage clínico continuo'
    },
    professionalRequirements: [
      'Título universitario convalidado y habilitado en Argentina',
      'Matrícula Nacional (MN) o Provincial (MP) vigente',
      'Inscripción activa en la Red SISA (Ministerio de Salud)',
      'Seguro de mala praxis profesional al día y certificado de antecedentes'
    ],
    testimonials: [
      {
        id: 1,
        name: 'Luciana Soria',
        location: 'Palermo, Buenos Aires',
        role: 'Mamá de 2 niños',
        service: 'Médico Clínico y Kine',
        rating: 5,
        date: 'Hace 2 días',
        text: 'Mi hijo menor volaba de fiebre un domingo a la noche. En vez de esperar 3 horas en la guardia de un sanatorio colapsado, pedí por Aura y el Dr. Lucas vino a casa en 25 minutos. Excelente trato, paciencia y receta digital directa a la farmacia.',
        avatarColor: '#0D9488'
      },
      {
        id: 2,
        name: 'Mariano Rossi',
        location: 'San Isidro, Buenos Aires',
        role: 'Hijo de paciente Senior',
        service: 'Plan Aura Senior Care',
        rating: 5,
        date: 'Hace 5 días',
        text: 'Mi papá tiene 84 años y movilidad reducida. Las extracciones de sangre y curaciones en casa nos cambiaron la vida. El bioquímico y la enfermera tienen una calidez admirable, y la factura la subí a OSDE para reintegro inmediato.',
        avatarColor: '#14B8A6'
      },
      {
        id: 3,
        name: 'Dra. Florencia Gómez',
        location: 'Buenos Aires, Argentina',
        role: 'Médica Clínica Staff Aura',
        service: 'Prestador de Salud',
        rating: 5,
        date: 'Hace 1 semana',
        text: 'La plataforma en Argentina es fantástica: nos brinda la historia clínica previa antes de llegar, el paciente sabe el tiempo exacto de arribo y la prescripción digital cumple con la Ley 27.553. Permite hacer medicina con cercanía real.',
        avatarColor: '#06B6D4'
      }
    ],
    faqs: [
      {
        id: 1,
        question: '¿Cómo funciona el reintegro en mi Prepaga u Obra Social?',
        answer: 'Al finalizar la consulta, Aura emite una factura electrónica oficial con el detalle del acto médico y la matrícula profesional correspondiente. Podés descargar la factura directamente desde la aplicación o recibirla por mail para presentarla en el portal o app de tu Prepaga (OSDE, Swiss Medical, Galeno, Medifé, Omint, etc.) u Obra Social para tramitar el reintegro de acuerdo a las coberturas de tu plan.'
      },
      {
        id: 2,
        question: '¿Qué debo hacer ante una urgencia médica grave o riesgo de vida?',
        answer: 'Aura Salud está diseñada para atención ambulatoria, controles domiciliarios y cuidados programados. Si la persona presenta signos de riesgo vital inminente (dolor en el pecho opresivo, pérdida súbita de conocimiento, debilidad facial o en brazos con sospecha de ACV, asfixia grave), llamá de inmediato al SAME (107) o concurrí a la guardia hospitalaria más cercana.'
      },
      {
        id: 3,
        question: '¿Los médicos emiten recetas digitales y certificados válidos en farmacias?',
        answer: 'Sí. Todos nuestros médicos clínicos y especialistas cuentan con matrícula nacional o provincial vigente y registro en el SISA. Emiten recetas digitales homologadas conforme a la Ley 27.553 con firma electrónica válida en farmacias de todo el país, además de certificados de reposo y órdenes para estudios complementarios.'
      },
      {
        id: 4,
        question: '¿Cuánto tardan en llegar a mi casa en CABA y GBA?',
        answer: 'Nuestro sistema de despacho asigna al profesional activo más cercano a tu ubicación. En los barrios de CABA y municipios del Corredor Norte del Gran Buenos Aires, el tiempo estimado de arribo promedio es de 25 a 45 minutos. Podés seguir la ruta del profesional en vivo en el mapa desde la aplicación.'
      },
      {
        id: 5,
        question: '¿Qué servicios requieren orden médica previa?',
        answer: 'Los procedimientos de enfermería (administración de medicación inyectable o endovenosa, curaciones avanzadas), las sesiones de kinesiología, las extracciones de laboratorio y los estudios de radiología requieren una orden médica según las disposiciones del Ministerio de Salud. Podés subir una foto de tu orden directamente en el formulario de la app.'
      },
      {
        id: 6,
        question: '¿Cuáles son los medios de pago aceptados?',
        answer: 'Aceptamos pagos a través de Mercado Pago, transferencias bancarias mediante CBU/CVU, tarjetas de débito y crédito (Visa, Mastercard, Cabal, American Express) y MODO. Todas las transacciones son transparentes, sin recargos ocultos.'
      }
    ],
    footer: {
      about: 'Plataforma argentina de atención médica y prestaciones de salud a domicilio. Conectamos pacientes con profesionales matriculados en minutos.',
      legalEntity: '© 2026 Aura Salud S.A. Todos los derechos reservados. Ciudad Autónoma de Buenos Aires, Argentina.',
      legalItems: [
        'Registro Nacional de Prestadores SISA',
        'Ley 26.529 (Derechos del Paciente)',
        'Protección de Datos Personales Ley 25.326',
        'Términos y Condiciones',
        'Política de Privacidad'
      ]
    }
  },

  pe: {
    code: 'pe',
    name: 'Perú',
    flag: '🇵🇪',
    currency: {
      code: 'PEN',
      symbol: 'S/',
      suffix: 'PEN',
      format: (val) => `S/ ${val.toLocaleString('es-PE')} PEN`,
      formatShort: (val) => `S/ ${val.toLocaleString('es-PE')}`
    },
    phone: '+51912345678',
    phoneFormatted: '+51 9 1234 5678',
    zoneName: 'Distrito',
    zoneNamePlural: 'Distritos y Zonas',
    zonePlaceholder: 'Ej. Miraflores, San Isidro, Surco, San Borja...',
    emergency: {
      name: 'SAMU 106 / Bomberos 116',
      number: '106',
      badge: 'SAMU 106 / 116',
      warning: 'Aura Salud atiende atenciones médicas domiciliarias ambulatorias. Ante una emergencia crítica o riesgo de vida inminente, comuníquese de inmediato al 106 (SAMU) o 116 (Bomberos Voluntarios del Perú).'
    },
    topBanner: {
      liveText: 'Médicos y licenciados en ruta: Disponibilidad inmediata en Lima Metropolitana · Tiempo promedio 35 min',
      staffCountText: '+45 Profesionales de salud activos hoy en Lima',
      emergencyText: '¿Emergencia crítica? Llama al SAMU 106 o 116'
    },
    hero: {
      badge: 'Perú',
      subtitle: 'Médicos generales, enfermería colegiada, terapia física/respiratoria, exámenes de laboratorio y ambulancias a domicilio. Sin colas en clínicas, con receta médica digital y reembolso con tu EPS o Seguro Privado (Rímac, Pacífico, Mapfre, etc.).',
      chipDoctor: { title: 'Dra. Valeria Mendoza en camino', eta: 'ETA estimado: 20 minutos' },
      chipRecipe: { title: 'Receta Médica Digital MINSA', desc: 'Con firma digital válida en farmacias y boticas' }
    },
    trust: {
      accreditation: 'Médicos Colegiados y Habilitados (CMP / CEP / SUSALUD)',
      reimbursement: 'Boleta o Factura para Reembolso EPS y Seguros Privados',
      payments: 'Pagos Seguros con Yape, Plin y Niubiz (Visa/MC)',
      privacy: 'Ficha Clínica Digital Protegida Ley 29733 de Datos Personales'
    },
    clinicsLabel: 'Red de Clínicas y Centros Médicos en Convenio',
    clinicsSublabel: 'Centros de salud y clínicas de primer nivel con convenios de referencia en Perú',
    clinics: [
      {
        name: 'Clínica Internacional',
        location: 'San Borja / Lima Centro',
        badge: 'Convenio Preferente',
        type: 'Red Hospitalaria Acreditada'
      },
      {
        name: 'Clínica Delgado Auna',
        location: 'Miraflores / Lima',
        badge: 'Alta Complejidad',
        type: 'Emergencias & Cuidados Críticos'
      },
      {
        name: 'Clínica Anglo Americana',
        location: 'San Isidro / La Molina',
        badge: 'Excelencia Médica',
        type: 'Especialidades & Diagnóstico'
      },
      {
        name: 'Clínica San Felipe',
        location: 'Jesús María / Camacho',
        badge: 'Red Asistencial',
        type: 'Atención Integral Ambulatoria'
      },
      {
        name: 'Clínica Ricardo Palma',
        location: 'San Isidro / Lima',
        badge: 'Top Hospitalario',
        type: 'Unidades de Diagnóstico y UCI'
      },
      {
        name: 'Red SANNA',
        location: 'Lima Metropolitana',
        badge: 'Red de Clínicas',
        type: 'Tomas de Muestra y Laboratorio'
      }
    ],
    services: [
      {
        id: 'medico',
        title: 'Consulta Médica a Domicilio',
        shortTitle: 'Médico General',
        category: 'medico',
        price: 140,
        copayEstimated: 49,
        eta: '35 - 55 min',
        requiresPrescription: false,
        badge: 'Más Solicitado',
        icon: 'stethoscope',
        subtitle: 'Evaluación, diagnóstico y tratamiento médico para cuadros agudos en tu hogar.',
        description: 'Atención presencial de médico general o de familia para control de infecciones respiratorias, malestar estomacal, fiebre, chequeo de patologías crónicas y evaluación médica integral.',
        details: [
          'Evaluación clínica completa y examen físico en tu domicilio',
          'Receta médica digital homologada con firma digital válida en farmacias',
          'Certificado de descanso médico digital con código de validación',
          'Boleta o factura electrónica para reembolso en tu EPS o seguro de salud'
        ],
        reimbursementNote: 'Reembolso con Rímac, Pacífico, Mapfre, Sanitas',
        sampleSymptoms: 'Fiebre persistente, bronquitis aguda, dolor abdominal, migraña intensa'
      },
      {
        id: 'enfermeria',
        title: 'Procedimientos de Enfermería',
        shortTitle: 'Enfermería',
        category: 'enfermeria',
        price: 60,
        copayEstimated: 21,
        eta: '25 - 45 min',
        requiresPrescription: true,
        badge: 'Rápida Respuesta',
        icon: 'activity',
        subtitle: 'Inyectables, colocación de vías, curaciones de heridas y sondajes.',
        description: 'Licenciadas en enfermería y técnicas colegiadas asisten a tu hogar para administración de fármacos por vía intramuscular o endovenosa, curaciones y manejo de catéteres.',
        details: [
          'Inyecciones intramusculares, subcutáneas y colocación de vías endovenosas',
          'Hidratación parenteral y administración de sueros',
          'Curación de heridas posquirúrgicas, úlceras y quemaduras',
          'Colocación, cambio y retiro de sonda Foley y nasogástrica'
        ],
        reimbursementNote: 'Comprobante válido para reembolso de seguro',
        sampleSymptoms: 'Inyección de antibióticos/analgésicos, retiro de puntos, curación de herida'
      },
      {
        id: 'kine_respiratoria',
        title: 'Terapia Respiratoria Domiciliaria',
        shortTitle: 'Terapia Respiratoria',
        category: 'kinesiologia',
        price: 95,
        copayEstimated: 33,
        eta: '45 - 70 min',
        requiresPrescription: true,
        badge: 'Especialidad',
        icon: 'wind',
        subtitle: 'Fisioterapia bronquial para lactantes, niños, adultos y personas mayores.',
        description: 'Higiene bronquial, desobstrucción pulmonar, aspiración de flemas y ejercicios respiratorios para pacientes con asma, bronquiolitis, neumonía o secuelas respiratorias.',
        details: [
          'Manejo de bronquiolitis y crisis broncoobstructivas pediátricas',
          'Rehabilitación respiratoria post-neumonía, asma y EPOC',
          'Aspiración de flemas con técnicas de higiene broncopulmonar',
          'Evaluación de saturación de oxígeno y auscultación torácica'
        ],
        reimbursementNote: 'Reembolsable con orden médica en EPS',
        sampleSymptoms: 'Dificultad respiratoria, tos con flema abundante, asma bronquial'
      },
      {
        id: 'kine_motora',
        title: 'Fisioterapia y Rehabilitación Motora',
        shortTitle: 'Fisioterapia',
        category: 'kinesiologia',
        price: 85,
        copayEstimated: 30,
        eta: '60 - 90 min',
        requiresPrescription: true,
        badge: 'Rehabilitación',
        icon: 'footprints',
        subtitle: 'Terapia física para recuperación de lesiones traumatológicas y movilidad.',
        description: 'Sesiones personalizadas de terapia física para rehabilitación de fracturas, postoperatorios de cadera/rodilla, lumbalgias agudas o asistencia motora para adultos mayores.',
        details: [
          'Rehabilitación post-fracturas o prótesis de cadera y rodilla',
          'Fisioterapia para dolor lumbar severo, ciática y tendinitis',
          'Entrenamiento de estabilidad y marcha para prevenir caídas',
          'Técnicas de movilización articular y masoterapia descontracturante'
        ],
        reimbursementNote: 'Apto para cobertura por reembolso en seguros',
        sampleSymptoms: 'Post-cirugía traumatológica, esguince de tobillo, lumbago incapacitante'
      },
      {
        id: 'laboratorio',
        title: 'Toma de Muestras y Laboratorio',
        shortTitle: 'Toma de Muestras',
        category: 'laboratorio',
        price: 75,
        copayEstimated: 26,
        eta: '60 - 90 min',
        requiresPrescription: true,
        badge: 'Resultados en 24h',
        icon: 'flask',
        subtitle: 'Extracción de sangre, orina y cultivos microbiológicos en tu domicilio.',
        description: 'Toma de muestras por profesionales con insumos estériles certificados y cadena de frío garantizada. Informes validados en línea en menos de 24 horas.',
        details: [
          'Hemograma completo, perfil lipídico, glucosa y bioquímica sanguínea',
          'Perfil hepático, renal, tiroideo y marcadores hormonales',
          'Examen completo de orina, urocultivo y exámenes microbiológicos',
          'Descarga de resultados en PDF con firma digital en la app'
        ],
        reimbursementNote: 'Reembolsable presentando orden médica',
        sampleSymptoms: 'Chequeo preventivo de rutina, control de diabetes/colesterol, urocultivo'
      },
      {
        id: 'electrocardiograma',
        title: 'Electrocardiograma (ECG) 12 Derivadas',
        shortTitle: 'Electrocardiograma',
        category: 'laboratorio',
        price: 90,
        copayEstimated: 31,
        eta: '40 - 60 min',
        requiresPrescription: true,
        badge: 'Informe Cardiológico',
        icon: 'heart-pulse',
        subtitle: 'Registro ECG digital en domicilio con informe de médico cardiólogo.',
        description: 'Trazado electrocardiográfico con electrocardiógrafo digital portátil. Informe médico especializado para evaluación preoperatoria o chequeo de arritmias.',
        details: [
          'ECG de 12 derivadas con electrocardiógrafo digital calibrado',
          'Revisión in situ del trazado por el profesional de salud',
          'Informe firmado digitalmente por médico cardiólogo habilitado',
          'Requisito habitual para riesgo quirúrgico y control cardiovascular'
        ],
        reimbursementNote: 'Reembolso según cobertura de tu EPS',
        sampleSymptoms: 'Riesgo quirúrgico preoperatorio, hipertensión arterial, palpitaciones'
      },
      {
        id: 'radiologia',
        title: 'Radiología Digital en Domicilio',
        shortTitle: 'Rayos X en Casa',
        category: 'laboratorio',
        price: 160,
        copayEstimated: 56,
        eta: '90 - 120 min',
        requiresPrescription: true,
        badge: 'Equipo Rodable',
        icon: 'scan',
        subtitle: 'Placas radiográficas portátiles en casa para pacientes con movilidad limitada.',
        description: 'Equipo digital portátil de baja radiación para tomas óseas o pulmonares sin necesidad de traslados complicados ni ambulancias a clínicas.',
        details: [
          'Radiografías de tórax, cadera, extremidades y columna vertebral',
          'Equipo rodable con protecciones plomadas de bioseguridad',
          'Placas digitales disponibles e informe por radiólogo en 24h',
          'Especialmente recomendado para adultos mayores o en reposo absoluto'
        ],
        reimbursementNote: 'Factura reembolsable en aseguradoras privadas',
        sampleSymptoms: 'Sospecha de fractura por caída en casa, sospecha de neumonía'
      },
      {
        id: 'cuidados',
        title: 'Cuidado y Acompañamiento de Paciente',
        shortTitle: 'Cuidados Clínicos',
        category: 'cuidados',
        price: 45,
        copayEstimated: 15,
        eta: '120 - 180 min',
        requiresPrescription: false,
        badge: 'Por Hora',
        icon: 'heart-handshake',
        subtitle: 'Técnicas en enfermería y cuidadoras para adultos mayores o convalecientes.',
        description: 'Acompañamiento asistencial, higiene y confort del paciente, control riguroso de medicamentos orales, apoyo en alimentación y movilización segura.',
        details: [
          'Asistencia completa en baño en cama o ducha, higiene y confort',
          'Administración supervisada de medicamentos según receta médica',
          'Estimulación motora suave y prevención de escaras por presión',
          'Turnos flexibles por horas, diurnos o nocturnos continuos'
        ],
        reimbursementNote: 'Contratación mínima de 3 horas por visita',
        sampleSymptoms: 'Acompañamiento de adulto mayor, post-alta clínica, paciente dependiente'
      },
      {
        id: 'ambulancia',
        title: 'Ambulancia de Traslado Asistido',
        shortTitle: 'Ambulancia Programada',
        category: 'cuidados',
        price: 120,
        copayEstimated: 42,
        eta: '15 - 30 min',
        requiresPrescription: false,
        badge: 'Traslado Seguro',
        icon: 'truck',
        subtitle: 'Traslado clínico programado tipo II en ambulancia no urgente.',
        description: 'Ambulancia equipada con camilla ergonómica, silla de ruedas y paramédico acompañante para altas clínicas, citas médicas, sesiones de diálisis o radioterapia.',
        details: [
          'Unidad climatizada con camilla fija reglamentaria y silla de ruedas',
          'Personal paramédico acompañante durante todo el trayecto',
          'Coordinación puerta a puerta para traslados de ida y retorno',
          'Monitoreo de funciones vitales y presión arterial en ruta'
        ],
        reimbursementNote: 'Tarifa base Lima + tarifa por kilómetro adicional',
        sampleSymptoms: 'Alta clínica en camilla, traslado programado a hemodiálisis o resonancia'
      }
    ],
    subscriptionPlans: [
      {
        id: 'plan_individual',
        name: 'Plan Aura Esencial',
        tagline: 'Ideal para el cuidado de la salud preventiva y consultas individuales.',
        monthlyPrice: 69,
        annualPrice: 690,
        popular: false,
        badge: 'Individual',
        features: [
          '1 atención médica o de enfermería a domicilio al mes',
          '15% de descuento permanente en laboratorio y radiología',
          'Orientación médica digital y triaje 24/7 sin costo adicional',
          'Sin costo de envío en medicamentos convenidos con boticas',
          'Ficha médica digital unificada y recetas en la nube',
          'Soporte directo prioritario por WhatsApp clínico'
        ],
        ctaText: 'Elegir Plan Esencial'
      },
      {
        id: 'plan_familiar',
        name: 'Plan Aura Familiar',
        tagline: 'Cobertura integral para el titular y hasta 4 familiares directos.',
        monthlyPrice: 139,
        annualPrice: 1390,
        popular: true,
        badge: 'Más Recomendado',
        features: [
          '3 atenciones médicas a domicilio mensuales para todo el grupo familiar',
          '25% de descuento en toma de muestras y análisis clínicos',
          'Ficha clínica digital compartida para hijos y padres',
          'Asignación express prioritaria de médicos y enfermeros',
          'Despacho preferencial de ambulancia asistida',
          'Telemedicina ilimitada 24/7 para los 5 integrantes',
          'Recordatorio automático de vacunas y controles periódicos'
        ],
        ctaText: 'Elegir Plan Familiar'
      },
      {
        id: 'plan_senior',
        name: 'Plan Aura Senior Care',
        tagline: 'Especialmente diseñado para adultos mayores y personas con dependencia.',
        monthlyPrice: 189,
        annualPrice: 1890,
        popular: false,
        badge: 'Senior & Cuidados',
        features: [
          '4 atenciones a domicilio mensuales (médico, enfermera o terapeuta)',
          '30% de descuento en laboratorio, ECG y rayos X en casa',
          'Monitoreo mensual de funciones vitales, presión y glucosa',
          'Médico de cabecera asignado con seguimiento continuo',
          'Reporte médico inmediato a familiares tras cada visita',
          'Gestión y renovación continua de recetas para enfermedades crónicas',
          'Prioridad máxima en flota de ambulancias y atención'
        ],
        ctaText: 'Elegir Senior Care'
      }
    ],
    coverage: [
      { comuna: 'Miraflores', region: 'Lima', eta: '20 - 35 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'San Isidro', region: 'Lima', eta: '20 - 35 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'Santiago de Surco', region: 'Lima', eta: '25 - 45 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'San Borja', region: 'Lima', eta: '25 - 40 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'La Molina', region: 'Lima', eta: '30 - 50 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'Magdalena del Mar', region: 'Lima', eta: '25 - 40 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'Barranco', region: 'Lima', eta: '25 - 40 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'Jesús María', region: 'Lima', eta: '25 - 40 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'San Miguel', region: 'Lima', eta: '30 - 45 min', status: 'Disponible', active: true },
      { comuna: 'Lince', region: 'Lima', eta: '25 - 35 min', status: 'Disponible', active: true },
      { comuna: 'Pueblo Libre', region: 'Lima', eta: '25 - 40 min', status: 'Disponible', active: true },
      { comuna: 'Lima Centro', region: 'Lima', eta: '30 - 50 min', status: 'Disponible', active: true },
      { comuna: 'Chorrillos', region: 'Lima', eta: '35 - 55 min', status: 'Disponible', active: true },
      { comuna: 'San Isidro Financiero', region: 'Lima', eta: '20 - 30 min', status: 'Alta Disponibilidad', active: true },
      { comuna: 'Arequipa (Cayma / Yanahuara)', region: 'Arequipa', eta: '30 - 50 min', status: 'Disponible', active: true },
      { comuna: 'Trujillo (Centro / Víctor Larco)', region: 'La Libertad', eta: '35 - 50 min', status: 'Próxima Expansión', active: true }
    ],
    coverageHub: {
      badge: '🇵🇪 Red Médica Nacional',
      title: 'Despacho Central Lima Metropolitana',
      desc: 'Nuestra central de monitoreo geolocaliza a los profesionales médicos en tiempo real para sortear el tráfico de la ciudad y llegar a tu puerta en el menor tiempo posible.',
      metric1Val: '< 35 min',
      metric1Label: 'Tiempo promedio Lima Top y Moderna',
      metric2Val: '24/7',
      metric2Label: 'Telemedicina y triaje médico continuo'
    },
    professionalRequirements: [
      'Título profesional universitario registrado ante la SUNEDU',
      'Colegiatura activa y habilitada en el Colegio Médico del Perú (CMP) o CEP',
      'Registro Nacional de Especialistas (RNE) para médicos especialistas',
      'Certificado de habilidad profesional y antecedentes policiales'
    ],
    testimonials: [
      {
        id: 1,
        name: 'Giuliana Paredes',
        location: 'Miraflores, Lima',
        role: 'Mamá de 2 pequeños',
        service: 'Médico a Domicilio y Terapia',
        rating: 5,
        date: 'Hace 2 días',
        text: 'Mi hijita amaneció con fiebre alta y tos intensa. Con el tráfico de Lima, salir a una clínica era una pesadilla. Pedí por Aura y la Dra. Valeria llegó a los 25 minutos. Atención A1, súper empática y la receta digital la envié directo a Inkafarma.',
        avatarColor: '#0D9488'
      },
      {
        id: 2,
        name: 'Carlos Benavides',
        location: 'San Borja, Lima',
        role: 'Hijo de paciente Senior',
        service: 'Plan Aura Senior Care',
        rating: 5,
        date: 'Hace 4 días',
        text: 'Mi madre de 86 años necesita control de glucosa y curaciones periódicas. El servicio a domicilio de Aura es extraordinario: el personal es puntualísimo, muy profesional y la boleta electrónica la paso a mi EPS Rímac para reembolso directo.',
        avatarColor: '#14B8A6'
      },
      {
        id: 3,
        name: 'Dr. Renzo Castillo',
        location: 'Lima, Perú',
        role: 'Médico General Staff Aura',
        service: 'Prestador de Salud',
        rating: 5,
        date: 'Hace 1 semana',
        text: 'Aura es un salto enorme en salud digital para el Perú. Toda la ficha del paciente está unificada, sabemos la ubicación exacta por GPS y emitir recetas digitales según las normas de SUSALUD y MINSA hace que la atención sea sumamente segura.',
        avatarColor: '#06B6D4'
      }
    ],
    faqs: [
      {
        id: 1,
        question: '¿Cómo funciona el reembolso en mi EPS o Seguro Privado de Salud?',
        answer: 'Al finalizar cada atención, Aura emite de forma automática un comprobante electrónico (boleta o factura electrónica autorizada por SUNAT) con el detalle del servicio prestado y el registro médico correspondiente. Este comprobante lo puedes descargar desde la app o tu correo para tramitar el reembolso en la plataforma web de tu EPS (Rímac Seguros, Pacífico Salud, Mapfre, Sanitas, La Positiva) según las condiciones de tu póliza.'
      },
      {
        id: 2,
        question: '¿Qué hacer en caso de una emergencia crítica de riesgo de vida?',
        answer: 'Aura está diseñada para atenciones domiciliarias programadas, controles preventivos y cuadros de urgencia menor o moderada. Si una persona experimenta síntomas de riesgo vital (dolor agudo en el pecho, asfixia severa, pérdida de conocimiento, convulsiones, sospecha de derrame cerebral), debes llamar de inmediato al SAMU (106) o a los Bomberos Voluntarios (116).'
      },
      {
        id: 3,
        question: '¿Los médicos emiten recetas digitales y descansos médicos válidos?',
        answer: 'Sí. Todos nuestros médicos están colegiados y habilitados en el Colegio Médico del Perú (CMP). Cuentan con firma digital para emitir recetas médicas electrónicas válidas en cualquier botica o farmacia autorizada por DIGEMID a nivel nacional, así como certificados de descanso médico formal.'
      },
      {
        id: 4,
        question: '¿Cuánto tiempo tardan en llegar a mi domicilio en Lima?',
        answer: 'Nuestro sistema de despacho geolocalizado asigna al médico o licenciada disponible más cercano a tu ubicación. En distritos como Miraflores, San Isidro, Surco, San Borja, Jesús María y Magdalena, el tiempo de arribo promedio oscila entre 30 y 50 minutos. Podrás hacer seguimiento en vivo en el mapa de la app.'
      },
      {
        id: 5,
        question: '¿Qué servicios requieren orden o receta médica previa?',
        answer: 'De acuerdo con la normativa del MINSA y DIGEMID, los procedimientos de enfermería (administración de inyectables o sueros), las sesiones de terapia física y respiratoria, las tomas de muestras de laboratorio y la radiología domiciliaria requieren una orden médica vigente. Puedes adjuntar una fotografía de tu orden al momento de solicitar el servicio.'
      },
      {
        id: 6,
        question: '¿Cuáles son los medios de pago aceptados en Perú?',
        answer: 'Aceptamos transferencias y billeteras digitales instantáneas como Yape y Plin, tarjetas de crédito y débito (Visa, Mastercard, American Express, Diners) mediante pasarelas seguras como Niubiz, y transferencias bancarias directas (BCP, BBVA, Interbank). Todo con comprobante electrónico oficial.'
      }
    ],
    footer: {
      about: 'Plataforma peruana de atención médica y telemedicina a domicilio. Conectamos pacientes con profesionales de la salud colegiados en minutos.',
      legalEntity: '© 2026 Aura Salud S.A.C. Todos los derechos reservados. Lima, Perú.',
      legalItems: [
        'Registro Nacional de Prestadores SUSALUD',
        'Ley General de Salud N° 26842',
        'Protección de Datos Personales Ley N° 29733',
        'Términos y Condiciones',
        'Libro de Reclamaciones'
      ]
    }
  }
};

export const SUPPORTED_COUNTRIES = ['cl', 'ar', 'pe'];
export const DEFAULT_COUNTRY = 'cl';

export function getCountryData(code = DEFAULT_COUNTRY) {
  const normalized = (code || '').toLowerCase().trim();
  return COUNTRIES_DATA[normalized] || COUNTRIES_DATA[DEFAULT_COUNTRY];
}

// Backward compatibility exports defaults (Chile)
export const CLINICAL_SERVICES = COUNTRIES_DATA.cl.services;
export const SUBSCRIPTION_PLANS = COUNTRIES_DATA.cl.subscriptionPlans;
export const COVERAGE_DATA = COUNTRIES_DATA.cl.coverage;
export const TESTIMONIALS = COUNTRIES_DATA.cl.testimonials;
export const FAQS = COUNTRIES_DATA.cl.faqs;

export const APP_SCREENS = [
  {
    id: '01',
    filename: '01_login_auth.png',
    title: 'Acceso Seguro y Autenticación',
    role: 'paciente',
    badge: 'Seguridad',
    description: 'Ingreso rápido mediante biometría, correo o modo demo para evaluar la plataforma sin fricciones.',
    highlights: ['Login rápido con token Sanctum seguro', 'Selector de perfiles de demostración', 'Recuperación de clave en un toque']
  },
  {
    id: '02',
    filename: '02_onboarding_bienvenida.png',
    title: 'Onboarding y Bienvenida Interactiva',
    role: 'paciente',
    badge: 'Experiencia',
    description: 'Presentación guiada que explica cómo funciona la salud a domicilio, telemedicina y emergencias.',
    highlights: ['Diseño intuitivo Material 3', 'Explicación del modelo de atención', 'Acceso directo al catálogo']
  },
  {
    id: '03',
    filename: '03_inicio_catalogo_servicios.png',
    title: 'Catálogo de Servicios Clínicos',
    role: 'paciente',
    badge: 'Principal',
    description: 'Pantalla principal con saludo inteligente, ubicación GPS y catálogo de prestaciones médicas inmediatas.',
    highlights: ['Médicos, enfermería, kine y laboratorio', 'Banner de telemedicina instantánea', 'Acceso a botón de emergencia']
  },
  {
    id: '04',
    filename: '04_formulario_solicitud_medica.png',
    title: 'Formulario de Solicitud Rápida',
    role: 'paciente',
    badge: 'Solicitud',
    description: 'Solicitud médica en 3 pasos con selección de familiar, dirección con ETA y grabador de notas de voz.',
    highlights: ['Selector para mí o mis dependientes', 'Cálculo de tiempo de arribo en vivo', 'Subida de recetas y notas de audio']
  },
  {
    id: '05',
    filename: '05_confirmacion_pago_resumen.png',
    title: 'Resumen y Pago Seguro',
    role: 'paciente',
    badge: 'Transparencia',
    description: 'Desglose claro de tarifas con pasarelas bancarias y billeteras digitales seguras.',
    highlights: ['Detalle transparente sin cobros ocultos', 'Confirmación inmediata del pago', 'Comprobante electrónico automático']
  },
  {
    id: '06',
    filename: '06_seguimiento_en_vivo_mapa.png',
    title: 'Seguimiento GPS en Tiempo Real',
    role: 'paciente',
    badge: 'Innovación',
    description: 'Rastreo satelital del profesional médico o ambulancia mientras se desplaza hacia tu domicilio.',
    highlights: ['Mapa en vivo con ETA dinámico', 'Ficha del profesional acreditado', 'Botón de llamada directa y chat']
  },
  {
    id: '07',
    filename: '07_chat_medico_paciente.png',
    title: 'Chat Médico Cifrado',
    role: 'paciente',
    badge: 'Comunicación',
    description: 'Canal directo de mensajería durante la atención para coordinar indicaciones, fotos y notas de audio.',
    highlights: ['Mensajería instantánea cifrada', 'Envío de fotos de síntomas o recetas', 'Notificaciones push en tiempo real']
  },
  {
    id: '08',
    filename: '08_mis_atenciones_agenda.png',
    title: 'Agenda y Atenciones Activas',
    role: 'paciente',
    badge: 'Organización',
    description: 'Visualización de atenciones en curso, visitas programadas e historial consolidado de la familia.',
    highlights: ['Soporte para múltiples atenciones simultáneas', 'Estados en tiempo real', 'Reprogramación sencilla']
  },
  {
    id: '09',
    filename: '09_agendar_especialista.png',
    title: 'Agendamiento de Especialidades',
    role: 'paciente',
    badge: 'Especialistas',
    description: 'Selector de fecha y franja horaria para atenciones médicas programadas y kinesioterapia.',
    highlights: ['Filtro por fecha y profesional', 'Confirmación con recordatorio SMS/Push', 'Cancelación flexible']
  },
  {
    id: '10',
    filename: '10_historial_clinico.png',
    title: 'Ficha e Historial Clínico Digital',
    role: 'paciente',
    badge: 'Salud Digital',
    description: 'Expediente médico unificado con diagnósticos, evoluciones clínicas, recetas y certificados.',
    highlights: ['Historial completo descargable', 'Separado por integrante de la familia', 'Compatible con seguros y reintegros']
  },
  {
    id: '11',
    filename: '11_examenes_laboratorio.png',
    title: 'Resultados de Laboratorio',
    role: 'paciente',
    badge: 'Laboratorio',
    description: 'Recepción de informes de sangre, orina y cultivos con valores de referencia y descarga en PDF.',
    highlights: ['Alertas de resultados críticos', 'Descarga de PDF con firma digital', 'Evolución gráfica en el tiempo']
  },
  {
    id: '12',
    filename: '12_salud_preventiva_vacunas.png',
    title: 'Salud Preventiva y Vacunación',
    role: 'paciente',
    badge: 'Prevención',
    description: 'Calendario de vacunación ministerial y privada, chequeos preventivos y metas de salud.',
    highlights: ['Recordatorio de dosis de refuerzo', 'Programación de vacunas en casa', 'Alertas de campañas estacionales']
  },
  {
    id: '13',
    filename: '13_planes_suscripcion.png',
    title: 'Módulo de Suscripciones Aura',
    role: 'paciente',
    badge: 'Beneficios',
    description: 'Gestión de planes de salud familiar y senior con cobro automático y beneficios exclusivos.',
    highlights: ['Cambio de plan con un toque', 'Gestión de beneficiarios', 'Historial de facturación']
  },
  {
    id: '14',
    filename: '14_perfil_profesional_medico.png',
    title: 'Perfil Profesional Verificado',
    role: 'profesional',
    badge: 'Acreditación',
    description: 'Ficha médica con registro sanitario oficial, especialidad y valoraciones de pacientes.',
    highlights: ['Acreditación de autoridad sanitaria visible', 'Calificaciones y reseñas de pacientes', 'Estadísticas de atenciones']
  },
  {
    id: '15',
    filename: '15_telemedicina_videollamada.png',
    title: 'Telemedicina WebRTC HD',
    role: 'paciente',
    badge: 'Telemedicina',
    description: 'Videoconsulta médica en alta definición con sala de espera virtual y emisión de receta en vivo.',
    highlights: ['Videollamada segura sin descargas extra', 'Chat integrado con envío de archivos', 'Receta digital inmediata']
  },
  {
    id: '16',
    filename: '16_perfil_usuario_familiares.png',
    title: 'Perfil de Usuario y Dependientes',
    role: 'paciente',
    badge: 'Familia',
    description: 'Administración de grupo familiar, direcciones frecuentes guardadas y métodos de pago.',
    highlights: ['Agregar hijos, padres o dependientes', 'Direcciones guardadas con georreferencia', 'Tarjetas y métodos de pago']
  },
  {
    id: '17',
    filename: '17_panel_medico_staff.png',
    title: 'Panel Clínico para Profesionales',
    role: 'profesional',
    badge: 'Prestadores',
    description: 'Portal para doctores y enfermeros con cola de pacientes, ficha previa y navegación por GPS.',
    highlights: ['Cola inteligente de solicitudes', 'Toma y devolución de casos', 'Navegación Waze / Google Maps integrada']
  },
  {
    id: '18',
    filename: '18_panel_operaciones_admin.png',
    title: 'Centro de Operaciones y Despacho',
    role: 'admin',
    badge: 'Operaciones',
    description: 'Panel en tiempo real para supervisión de flota médica, tiempos de respuesta y escalado de colas.',
    highlights: ['Monitoreo global de atenciones', 'Gestión de parámetros de cola y SLA', 'Métricas de rendimiento clínico']
  }
];
