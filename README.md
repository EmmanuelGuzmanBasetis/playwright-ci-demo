# Playwright CI/CD Demo

Este repositorio es un ejemplo práctico para enseñar CI/CD con Playwright.

## 🚀 Desarrollo Local

### Prerrequisitos
- Node.js 18+
- npm

### Configuración inicial
```bash
# Clonar el repositorio
git clone <tu-repo>
cd playwright-ci-demo

# Instalar dependencias
npm install

# Instalar navegadores de Playwright
npx playwright install
```

### Ejecutar la aplicación localmente
```bash
# Iniciar el servidor local en puerto 5500
npm run dev
```

La aplicación estará disponible en: http://localhost:5500

### Ejecutar tests

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests con interfaz visual
npm run test:ui

# Ejecutar tests en modo headed (viendo el navegador)
npm run test:headed

# Ejecutar tests en modo debug
npm run test:debug

# Ver el reporte de tests
npm run report
```

## 🔧 Estructura del Proyecto

```
playwright-ci-demo/
├── .github/workflows/
│   └── playwright.yml          # GitHub Actions workflow
├── pages/
│   └── LoginPage.ts            # Page Object Model
├── public/
│   └── index.html              # Aplicación web simple
├── tests/
│   └── login.spec.ts           # Tests de Playwright
├── package.json
├── playwright.config.ts        # Configuración de Playwright
└── README.md
```

## 🧪 Tests Incluidos

- ✅ Login exitoso con credenciales válidas (`user` / `pass`)
- ❌ Login fallido con credenciales inválidas

## 🚀 CI/CD con GitHub Actions

El workflow de GitHub Actions se ejecuta automáticamente en:
- Push a cualquier rama
- Pull requests

### Pasos del CI/CD:
1. **Setup**: Configuración de Node.js 18
2. **Install**: Instalación de dependencias
3. **Browsers**: Instalación de navegadores de Playwright
4. **Server**: Inicio del servidor HTTP
5. **Tests**: Ejecución de tests de Playwright
6. **Artifacts**: Subida de reportes de tests

### Ver resultados:
- Los reportes de tests se guardan como artefactos en GitHub Actions
- Se pueden descargar desde la pestaña "Actions" del repositorio

## 🎓 Para la Clase

### Conceptos de CI/CD que se demuestran:
1. **Continuous Integration (CI)**
   - Tests automáticos en cada commit
   - Validación en múltiples navegadores
   - Reportes de resultados

2. **Configuración de entorno**
   - Instalación automática de dependencias
   - Setup de navegadores
   - Configuración de servidor

3. **Best Practices**
   - Page Object Model
   - Configuración por environment
   - Retries en CI
   - Artefactos de test

### Ejercicios sugeridos:
1. Agregar más tests (ej: campos vacíos, diferentes usuarios)
2. Configurar tests en diferentes navegadores
3. Agregar steps de deployment (CD)
4. Configurar notificaciones de Slack/Teams

## 📝 Notas sobre GitHub Pages

**¿Es conveniente usar GitHub Pages para CD?**

**Pros:**
- ✅ Gratuito y fácil de configurar
- ✅ Integración nativa con GitHub
- ✅ SSL automático
- ✅ Perfecto para demos y documentación

**Contras:**
- ❌ Solo sitios estáticos
- ❌ No permite APIs backend
- ❌ Limitado para aplicaciones complejas

**Recomendación:** Para esta clase, GitHub Pages es perfecto porque:
1. Es simple y didáctico
2. Muestra el concepto de deployment automático
3. Los estudiantes pueden ver el resultado inmediatamente
4. No requiere configuraciones complejas

### Para configurar GitHub Pages:
1. Ve a Settings → Pages
2. Selecciona "Deploy from a branch"
3. Elige la rama `main` y carpeta `/public`
4. Tu sitio estará en: `https://tu-usuario.github.io/playwright-ci-demo`
