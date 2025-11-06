Rick & Morty Universe — rickymorty-react-serva

Pequeña aplicación en React que consume la API pública de Rick & Morty para listar personajes (y sus propiedades básicas), con routing y Bootstrap.

- API: https://rickandmortyapi.com/api
- Deploy: ENLACE_DEPLOY
- Video (YouTube): ENLACE_VIDEO

------------------------------------------------------------
Características
------------------------------------------------------------
- Home ("/"): Hero con nombre del proyecto y listado simple de personajes.
- Entities ("/entities"): Listado tipo “entidades” mostrando 3 propiedades por elemento (por defecto: name, status, species).
- Consumo de API con Axios (servicio dedicado).
- UI con Bootstrap 5.3.8 (cards, list-group, spinner, paginación).
- React Router v6 para navegación entre rutas.

------------------------------------------------------------
Tecnologías y librerías
------------------------------------------------------------
- Vite + React (JS + React Compiler)
- React Router
- Axios
- Bootstrap 5.3.8

------------------------------------------------------------
Empezar
------------------------------------------------------------
1) Clonar
   git clone https://github.com/sesema98/rickymorty-react-serva.git
   cd rickymorty-react-serva

2) Instalar dependencias
   npm install

3) Ejecutar en desarrollo
   npm run dev
   (Abre la URL que imprime Vite, por ejemplo: http://localhost:5173/)

4) Build de producción
   npm run build

5) Vista previa del build
   npm run preview

------------------------------------------------------------
Estructura de carpetas (resumen)
------------------------------------------------------------
src/
  pages/
    Home.jsx          # Hero + listado simple (fetch + paginación)
    Entities.jsx      # Listado de 3 propiedades por entidad
  services/
    api.js            # Instancia Axios (baseURL, timeout)
    rmApi.js          # Funciones de acceso a la API (getCharacters, ...)
  App.jsx             # Definición de rutas y layout
  main.jsx            # Bootstrap + montaje de la app (BrowserRouter)

Nota de naming: "rmApi" = “Rick & Morty API”. Puedes renombrar a "rickmorty.service.js" si prefieres un nombre más explícito.

------------------------------------------------------------
Endpoints usados (API)
------------------------------------------------------------
- GET /character?page={n} — Lista paginada de personajes
  Campos usados en UI: id, name, status, species, image

------------------------------------------------------------
Rúbrica y requisitos (mapping)
------------------------------------------------------------
Requisito                                  | Estado | Dónde
-------------------------------------------|--------|----------------------------
Configuración inicial (Vite, base)         | ✅     | Inicial + limpieza
Consumo de API pública (Rick & Morty)      | ✅     | services/api.js + services/rmApi.js + Home.jsx
Ruta "/" (Home) con hero + listado         | ✅     | pages/Home.jsx
Ruta "/entities" (3 propiedades)           | ✅     | pages/Entities.jsx
Navegación con React Router                | ✅     | App.jsx + main.jsx
Estilos con Bootstrap                      | ✅     | main.jsx (imports) + componentes

Extras del entregable:
- Repositorio GitHub con commits progresivos y README (este archivo).
- Deploy: https://rickymorty-serva.netlify.app/
- Video: https://www.youtube.com/watch?v=SiUbQ_UB-SM

------------------------------------------------------------
Historial de commits (resumen)
------------------------------------------------------------
1. Proyecto creado inicializando correctamente
2. Actualizando archivos y limpiando proyecto
3. Bootstrap y axios instalados haciendo fetch de prueba
4. Instanciando Axios
5. Servicio rmApi(rickmortyApi) con getCharacters
6. Estado,s page, data y loading en home con hooks
7. Prueba de fetching exitosa en home con useEffect
8. bootstrap añadido con card, list-group, spinners y paginacion
9. React router configurado con rutasy /entities aplicado

------------------------------------------------------------
Scripts disponibles
------------------------------------------------------------
-npm run dev        #Desarrollo (Vite)
-npm run build      #Build de producción
-npm run preview    #Servir build localmente

------------------------------------------------------------
IMAGENES RESULTADO
------------------------------------------------------------
<img width="1916" height="707" alt="image" src="https://github.com/user-attachments/assets/606ffb57-cb05-4d83-81d6-9e2933e841dc" />
<img width="969" height="108" alt="image" src="https://github.com/user-attachments/assets/ef01092d-3f8e-4de7-bdc5-074f0834bc9f" />

<img width="1643" height="926" alt="image" src="https://github.com/user-attachments/assets/c92b1944-1ef7-45be-8281-e116a2fba845" />
<img width="637" height="534" alt="image" src="https://github.com/user-attachments/assets/9511cf12-397a-4903-bd57-4a3dc25214bc" />








