# 🌟 Aura Salud — Landing Page Oficial

Landing page moderna, ultra-rápida y de alta conversión para **Aura Salud** (plataforma de atención médica y prestaciones clínicas a domicilio en Chile), lista para desplegarse en **Vercel** con un solo clic.

---

## 🚀 Características Principales

- **Hero 3D con Smartphone Interactivo:** Mockup en perspectiva 3D con cambio dinámico entre pantallas clave de la aplicación móvil nativa (Inicio, Seguimiento GPS en vivo, Chat Médico encriptado y Resultados de Laboratorio).
- **Catálogo Clínico Dinámico:** Aranceles transparentes en pesos chilenos (CLP), tiempos de arribo estimados (ETA), requisitos de orden médica y filtros por categoría (Médico General, Enfermería & TENS, Kinesiología Motora y Respiratoria, Laboratorio y Ambulancias).
- **Vitrina Interactiva de 18 Pantallas (Showcase):** Explorador interactivo con las 18 capturas reales de la aplicación móvil y paneles web administrativos, con filtros por rol (*Paciente*, *Prestador Médico*, *Operaciones*) y modal Lightbox en alta resolución.
- **Planes de Suscripción Aura:** Selector de pago Mensual vs. Anual con cálculo de ahorro (2 meses gratis) para los planes *Esencial*, *Familiar* y *Senior Care*.
- **Verificador de Cobertura Geográfica:** Buscador en vivo de disponibilidad y tiempos de respuesta por comunas de la Región Metropolitana y Regiones (Las Condes, Providencia, Vitacura, Ñuñoa, Maipú, Viña del Mar, etc.).
- **Simulador de Reserva en 3 Pasos:** Modal interactivo para cotizar atenciones, calcular copagos estimados de Isapre/Fonasa y derivar automáticamente a WhatsApp o canal prioritario.
- **Acreditación y Cumplimiento:** Sellos de la Superintendencia de Salud de Chile, advertencia legal de emergencias (SAMU 131) e integración con boleta para reembolso.

---

## 🛠️ Tecnologías

- **Vite 5** — Empaquetador y entorno de desarrollo ultra-rápido.
- **Vanilla CSS (Design System)** — Tokens HSL/Hex de Teal médico (`#0D9488`), Obsidian Slate (`#080E14`), gradientes aurora, glassmorphism y micro-interacciones.
- **JavaScript ES Modules** — Código modular, sin sobrecarga de frameworks pesados, garantizando un puntaje **Lighthouse 100/100** en rendimiento y SEO.
- **Vercel Config** — Optimizado con `vercel.json` para cabeceras de caché inmutable, compresión y rutas limpias.

---

## 📦 Despliegue en Vercel

### Opción 1: Desde el Panel Web de Vercel (Recomendado)
1. Ve a [vercel.com/new](https://vercel.com/new) e importa este repositorio de GitHub.
2. En la sección **Root Directory**, haz clic en *Edit* y selecciona la carpeta:
   ```
   aura-landing
   ```
3. Vercel detectará automáticamente **Vite** como framework:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Haz clic en **Deploy**. ¡Tu landing estará en vivo en segundos!

---

### Opción 2: Usando Vercel CLI
Desde tu terminal:
```bash
cd aura-landing
npx vercel
```
Sigue las instrucciones en pantalla (presiona Enter para los valores por defecto) y luego para producción:
```bash
npx vercel --prod
```

---

## 💻 Desarrollo Local

1. Entra a la carpeta del proyecto:
   ```bash
   cd aura-landing
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo local:
   ```bash
   npm run dev
   ```
   Abre en tu navegador: `http://localhost:3000`

4. Para compilar la versión de producción:
   ```bash
   npm run build
   ```
   Los archivos listos para producción se generarán en la carpeta `dist/`.

---

## 📂 Estructura de Archivos

```
aura-landing/
├── public/
│   ├── assets/
│   │   ├── brand/ (logo.png y variantes)
│   │   └── screens/ (las 18 capturas reales de la aplicación)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── css/
│   │   ├── index.css (Design system global, colores, navbar, footer)
│   │   ├── hero.css (Hero y mockup 3D de smartphone)
│   │   ├── services.css (Catálogo de prestaciones clínicas)
│   │   ├── showcase.css (Vitrina de pantallas y lightbox)
│   │   ├── pricing.css (Planes de suscripción y toggles)
│   │   ├── coverage.css (Buscador de comunas)
│   │   └── modals.css (Simulador de reserva y widgets)
│   └── js/
│       ├── data.js (Datos del catálogo, planes, comunas y testimonios)
│       ├── phone-mockup.js (Controlador del teléfono 3D)
│       ├── showcase.js (Controlador de vitrina de pantallas)
│       ├── booking-modal.js (Controlador del modal de reserva)
│       ├── coverage.js (Buscador de cobertura en vivo)
│       └── app.js (Orquestador principal)
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

---

© 2026 Aura Salud SpA. Todos los derechos reservados.
