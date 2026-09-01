/**
 * Aura Salud - Datos del Catálogo, Planes, Pantallas y Cobertura
 */

export const CLINICAL_SERVICES = [
  {
    id: 'medico',
    title: 'Atención Médica a Domicilio',
    shortTitle: 'Médico General',
    category: 'medico',
    price: 40000,
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
    fonasaEstimated: 'Copago Fonasa Nivel 3 aplicable',
    sampleSymptoms: 'Fiebre persistente, bronquitis, malestar gastrointestinal agudo, migraña severa'
  },
  {
    id: 'enfermeria',
    title: 'Procedimientos de Enfermería',
    shortTitle: 'Enfermería',
    category: 'enfermeria',
    price: 15000,
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
    fonasaEstimated: 'Cod. Fonasa 02-01-001',
    sampleSymptoms: 'Inyección de antibióticos/analgésicos, retiro de puntos, curación de herida'
  },
  {
    id: 'kine_respiratoria',
    title: 'Kinesiología Respiratoria',
    shortTitle: 'Kine Respiratoria',
    category: 'kinesiologia',
    price: 24000,
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
    fonasaEstimated: 'Cod. Fonasa 06-01-019',
    sampleSymptoms: 'Dificultad respiratoria, tos con flemas persistente, bronquitis aguda'
  },
  {
    id: 'kine_motora',
    title: 'Kinesiología Motora y Funcional',
    shortTitle: 'Kine Motora',
    category: 'kinesiologia',
    price: 22000,
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
    fonasaEstimated: 'Cod. Fonasa 06-01-017',
    sampleSymptoms: 'Post-cirugía de cadera/rodilla, esguince, dolor lumbar incapacitante'
  },
  {
    id: 'laboratorio',
    title: 'Toma de Muestras y Laboratorio',
    shortTitle: 'Toma de Muestras',
    category: 'laboratorio',
    price: 19500,
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
    fonasaEstimated: 'Reembolso según orden médica',
    sampleSymptoms: 'Chequeo preventivo anual, control de diabetes/colesterol, urocultivo'
  },
  {
    id: 'electrocardiograma',
    title: 'Electrocardiograma (ECG) 12 Derivaciones',
    shortTitle: 'Electrocardiograma',
    category: 'laboratorio',
    price: 21000,
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
    fonasaEstimated: 'Cod. Fonasa 17-01-001',
    sampleSymptoms: 'Control de hipertensión, aptitud preoperatoria, control de arritmias'
  },
  {
    id: 'radiologia',
    title: 'Radiología Digital a Domicilio',
    shortTitle: 'Rayos X en Casa',
    category: 'laboratorio',
    price: 35000,
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
    fonasaEstimated: 'Cod. Fonasa 04-01-001',
    sampleSymptoms: 'Sospecha de fractura por caída en hogar, neumonía en paciente postrado'
  },
  {
    id: 'cuidados',
    title: 'Cuidados Domiciliarios y Asistencia',
    shortTitle: 'Cuidados Continuos',
    category: 'cuidados',
    price: 12000,
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
    fonasaEstimated: 'Contratación mínima 3 horas',
    sampleSymptoms: 'Acompañamiento de adulto mayor, asistencia post-alta hospitalaria'
  },
  {
    id: 'ambulancia',
    title: 'Ambulancia de Transporte Programado',
    shortTitle: 'Ambulancia Programada',
    category: 'cuidados',
    price: 18500,
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
    fonasaEstimated: 'Tarifa base + km adicional según comuna',
    sampleSymptoms: 'Alta clínica en camilla, traslado a centro de diálisis o radioterapia'
  }
];

export const SUBSCRIPTION_PLANS = [
  {
    id: 'plan_individual',
    name: 'Plan Aura Esencial',
    tagline: 'Ideal para el cuidado preventivo y salud continua individual.',
    monthlyPrice: 14990,
    annualPrice: 149900, // 2 meses gratis
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
];

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
    description: 'Desglose claro de tarifas con integración a Webpay Plus y pasarelas bancarias seguras.',
    highlights: ['Detalle transparente sin cobros ocultos', 'Confirmación inmediata del pago', 'Boleta electrónica automática']
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
    description: 'Expediente médico unificado con diagnósticos, evoluciones clínicas, recetas y licencias médicas.',
    highlights: ['Historial completo descargable', 'Separado por integrante de la familia', 'Compatible con Fonasa e Isapre']
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
    highlights: ['Recordatorio de dosis de refuerzo', 'Programación de vacunas en casa', 'Alertas de campañas de invierno']
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
    description: 'Ficha médica con número de registro en la Superintendencia de Salud, especialidad y valoraciones.',
    highlights: ['Acreditación Superintendencia visible', 'Calificaciones y reseñas de pacientes', 'Estadísticas de atenciones']
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

export const COVERAGE_DATA = [
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
];

export const TESTIMONIALS = [
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
];

export const FAQS = [
  {
    id: 1,
    question: '¿Cómo funciona el reembolso en mi Isapre o seguro complementario?',
    answer: 'Al finalizar cada atención, Aura emite automáticamente una boleta de honorarios o factura electrónica médica detallada con el código arancelario correspondiente. Esta boleta se envía a tu correo y queda guardada en tu historial clínico de la app, lista para que la subas a la sucursal virtual de tu Isapre (Banmédica, Colmena, Consalud, CruzBlanca, Vida Tres, etc.) o seguro complementario para obtener el reembolso según tu plan.'
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
];
