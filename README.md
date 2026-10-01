# 🌟 Aura Salud — Landing Page Oficial (Multi-País)

Landing page moderna, ultra-rápida y de alta conversión para **Aura Salud** (plataforma de atención médica y prestaciones clínicas a domicilio en **Chile, Argentina y Perú**), lista para desplegarse en **Vercel** con un solo clic.

---

## 🚀 Características Principales

- **Arquitectura Multi-País Dinámica (🇨🇱 Chile, 🇦🇷 Argentina, 🇵🇪 Perú):** Selector interactivo en navbar, menú móvil y pie de página con persistencia en `localStorage` y soporte para parámetros de URL (`?pais=cl`, `?pais=ar`, `?pais=pe`).
- **Valores, Monedas y Aranceles Localizados:**
  - 🇨🇱 **Chile:** Pesos chilenos (CLP `$`), copagos Fonasa, reembolsos Isapre (Banmédica, Colmena, Consalud, CruzBlanca, Vida Tres), boleta electrónica SII.
  - 🇦🇷 **Argentina:** Pesos argentinos (ARS `$`), reintegros en Prepagas y Obras Sociales (OSDE, Swiss Medical, Galeno, Medifé, Omint), receta digital Ley 27.553.
  - 🇵🇪 **Perú:** Soles peruanos (PEN `S/`), reembolsos en EPS y seguros privados (Rímac, Pacífico, Mapfre, Sanitas), receta digital MINSA-DIGEMID.
- **Red de Clínicas y Sanatorios en Convenio:**
  - Chile: Clínica Alemana, Clínica Las Condes, RedSalud, Clínica Santa María, Integramédica, Clínica U. de los Andes.
  - Argentina: Hospital Italiano de Buenos Aires, Sanatorio Mater Dei, Sanatorio de la Trinidad, Swiss Medical Center, Sanatorio Los Arcos, Sanatorio Finochietto.
  - Perú: Clínica Internacional, Clínica Delgado Auna, Clínica Anglo Americana, Clínica San Felipe, Clínica Ricardo Palma, Red SANNA.
- **Zonas y Localidades Adaptadas en Tiempo Real:**
  - Chile: Comunas de la Región Metropolitana y Regiones (Las Condes, Providencia, Vitacura, Ñuñoa, Maipú, Viña del Mar, Concepción, etc.).
  - Argentina: Barrios de CABA y Partidos de GBA y Provincias (Palermo, Recoleta, Belgrano, San Isidro, Vicente López, Tigre, La Plata, Córdoba, Rosario, etc.).
  - Perú: Distritos de Lima Metropolitana y Regiones (Miraflores, San Isidro, Surco, San Borja, La Molina, Jesús María, Arequipa, Trujillo, etc.).
- **Hero 3D con Smartphone Interactivo:** Mockup en perspectiva 3D con cambio dinámico entre pantallas clave de la aplicación móvil nativa (Inicio, Seguimiento GPS en vivo, Chat Médico encriptado y Resultados de Laboratorio).
- **Catálogo Clínico Dinámico:** Aranceles transparentes en la moneda del país seleccionado, tiempos de arribo estimados (ETA), requisitos de prescripción médica y filtros por categoría.
- **Vitrina Interactiva de 18 Pantallas (Showcase):** Explorador interactivo con las 18 capturas reales de la aplicación móvil y paneles web administrativos, con filtros por rol (*Paciente*, *Prestador Médico*, *Operaciones*) y modal Lightbox en alta resolución.
- **Planes de Suscripción Aura:** Selector de pago Mensual vs. Anual con cálculo de ahorro (2 meses gratis) para los planes *Esencial*, *Familiar* y *Senior Care* adaptados a cada país.
- **Simulador de Reserva en 3 Pasos:** Modal interactivo para cotizar atenciones, calcular copagos o reintegros estimados según el país, y derivar automáticamente a WhatsApp con el prefijo telefónico y mensaje local.
- **Acreditación y Cumplimiento Sanitario Local:** Sellos de la Superintendencia de Salud (Chile), SISA / Ministerio de Salud (Argentina) y SUSALUD / CMP (Perú), con avisos de emergencia locales (SAMU 131 / SAME 107 / SAMU 106).

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
