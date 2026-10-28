// Tecsur Gemba Walk - Logica de Aplicacion Ejecutiva
(function() {
  'use strict';

/**
 * Tecsur Gemba Walk — Aplicación de Supervisión de Línea de Mando
 * Lógica Reactiva del Cliente (Single Page App / PWA)
 * 100% Gratuito · Cero Servidores de Pago · Persistencia LocalStorage
 */

// Cargar variables desde window (Soporte universal tanto para file:/// como para http://)
const CATALOGO_DEPARTAMENTOS = window.CATALOGO_DEPARTAMENTOS || {};
const GERENCIAS_ROLES = window.GERENCIAS_ROLES || window.GERENCIAS_LIDERAZGO || [];
const SUBCONTRATAS_HOMOLOGADAS = window.SUBCONTRATAS_HOMOLOGADAS || [];
const AREAS_RESOLUTORAS = window.AREAS_RESOLUTORAS || [];
const USUARIOS_GERENCIA = window.USUARIOS_GERENCIA || {};

// Semillas iniciales realistas para que el dashboard y tickets tengan vida desde el primer minuto
const SEED_VISITAS = [
  {
    id: "VIS-2026-001",
    fecha: "2026-10-24 09:30",
    gerenteId: "operaciones",
    gerenteTitulo: "Gerencia de Operaciones",
    distrito: "San Juan de Miraflores",
    direccion: "Av. Los Héroes con Av. San Juan",
    gps: "-12.14521, -76.98214 (±8m)",
    regimen: "CONSORCIO CARTER RENSA",
    supervisor: "Supervisor de Guardia",
    capataz: "Capataz de Turno",
    departamento: "Mantenimiento Redes y Conexiones BT (Freddy Crispín)",
    seccion: "Redes Aéreas BT",
    actividadCodigo: "305",
    actividadNombre: "Mantenimiento de redes aéreas BT",
    criticidad: "ALTA",
    controles: {
      volquete: "SI",
      fotocheck: "SI",
      supervisor: "SI",
      permisos: "SI",
      epp: "SI",
      limpieza: "SI"
    },
    traba: "Todo fluye conforme a lo programado con CCO.",
    preguntasEspecializadas: { o1: "SI", o2: "SI", o3: "SI" },
    estrellas: 5,
    duracionMinutos: 28,
    tieneTicket: false
  },
  {
    id: "VIS-2026-002",
    fecha: "2026-10-25 11:15",
    gerenteId: "gaf",
    gerenteTitulo: "Gerencia de Administración y Finanzas",
    distrito: "Villa El Salvador",
    direccion: "Av. Pachacútec frente a Almacén VES",
    gps: "-12.21042, -76.93871 (±12m)",
    regimen: "CAMPOS LATAM",
    supervisor: "Supervisor de Guardia",
    capataz: "Capataz de Turno",
    departamento: "Obras y Proyectos MT (Ofelia Ramos)",
    seccion: "Subestaciones y Líneas MT",
    actividadCodigo: "401",
    actividadNombre: "Tendido de conductor subterráneo MT",
    criticidad: "ALTA",
    controles: {
      volquete: "NO",
      fotocheck: "SI",
      supervisor: "SI",
      permisos: "SI",
      epp: "SI",
      limpieza: "NO"
    },
    traba: "Falta stock de conectores en almacén central, esperan flete.",
    preguntasEspecializadas: { g1: "SI", g2: "NO", g3: "SI" },
    estrellas: 3,
    duracionMinutos: 30,
    tieneTicket: true,
    ticketId: "TCK-2026-001"
  },
  {
    id: "VIS-2026-003",
    fecha: "2026-10-25 15:40",
    gerenteId: "operaciones",
    gerenteTitulo: "Gerencia de Operaciones",
    distrito: "Chorrillos",
    direccion: "Av. Huunza cdra. 4",
    gps: "-12.18320, -77.01240 (±6m)",
    regimen: "ALIHCOM BUILD SAC",
    supervisor: "Supervisor de Guardia",
    capataz: "Capataz de Turno",
    departamento: "Conexiones y Reformas BT (Eder Rodríguez)",
    seccion: "Conexiones",
    actividadCodigo: "2",
    actividadNombre: "Conexiones de Rutina SPC",
    criticidad: "MEDIA/BAJA",
    controles: {
      volquete: "SI",
      fotocheck: "SI",
      supervisor: "SI",
      permisos: "SI",
      epp: "SI",
      limpieza: "SI"
    },
    traba: "Permiso municipal conforme, cuadrilla completa.",
    preguntasEspecializadas: { o1: "SI", o2: "SI", o3: "SI" },
    estrellas: 5,
    duracionMinutos: 25,
    tieneTicket: false
  },
  {
    id: "VIS-2026-004",
    fecha: "2026-10-26 09:10",
    gerenteId: "qhse",
    gerenteTitulo: "Subgerencia de QHSE",
    distrito: "Villa María del Triunfo",
    direccion: "Av. Salvador Allende cdra. 18",
    gps: "-12.16201, -76.94120 (±9m)",
    regimen: "ENCOSSA SAC",
    supervisor: "Supervisor de Guardia",
    capataz: "Capataz de Turno",
    departamento: "Mantenimiento Redes y Conexiones BT (Freddy Crispín)",
    seccion: "Redes Aéreas BT",
    actividadCodigo: "301",
    actividadNombre: "Cambio de poste BT",
    criticidad: "ALTA",
    controles: {
      volquete: "SI",
      fotocheck: "SI",
      supervisor: "SI",
      permisos: "SI",
      epp: "SI",
      limpieza: "SI"
    },
    traba: "Todo seguro, 5 reglas de oro verificadas.",
    preguntasEspecializadas: { s1: "SI", s2: "SI", s3: "SI" },
    estrellas: 5,
    duracionMinutos: 29,
    tieneTicket: false
  }
];

const SEED_TICKETS = [
  {
    id: "TCK-2026-001",
    fecha: "2026-10-25 11:45",
    visitaId: "VIS-2026-002",
    gerenteId: "gaf",
    gerenteNombre: "Gerente de Finanzas",
    departamento: "Obras y Proyectos MT (Ofelia Ramos)",
    actividad: "Tendido de conductor subterráneo MT (Cód. 401)",
    cuadrilla: "CAMPOS LATAM",
    descripcion: "Camión volquete en pendiente sin cuñas de seguridad en ruedas traseras. Desmonte acumulado obstruyendo vereda peatonal.",
    areaResponsable: "SSOMA / Subgerencia QHSE",
    severidad: "Alta",
    estado: "Abierto", // Abierto | En Plan | Cerrado
    slaPlanFecha: "2026-10-27 11:45",
    slaSolucionFecha: "2026-11-01 11:45",
    foto: "",
    solucionPlan: "",
    fechaCierre: null
  },
  {
    id: "TCK-2026-002",
    fecha: "2026-10-23 15:20",
    visitaId: "VIS-2026-PREV",
    gerenteId: "logistica",
    gerenteNombre: "Gerente de Logística",
    departamento: "Conexiones y Reformas BT (Eder Rodríguez)",
    actividad: "Conexiones de Rutina SPC (Cód. 2)",
    cuadrilla: "Cuadrilla Propia Tecsur",
    descripcion: "Falta de stock de terminales bimetálicos en almacén de Villa El Salvador generó parada de faena de 2 horas.",
    areaResponsable: "Almacén Central / Compras",
    severidad: "Media",
    estado: "Cerrado",
    slaPlanFecha: "2026-10-25 15:20",
    slaSolucionFecha: "2026-10-30 15:20",
    foto: "",
    solucionPlan: "Se activó transferencia de emergencia desde almacén Santa Anita y se reabasteció el stock de seguridad.",
    fechaCierre: "2026-10-25 09:10"
  }
];

class TecsurGembaApp {
  constructor() {
    this.currentTab = 'visita';
    this.activeGerente = null;
    this.timerInterval = null;
    this.timerSeconds = 30 * 60; // 30 minutos
    this.isTimerRunning = false;
    this.photoBase64 = null;
    this.selectedStars = 0;
    this.activeTicketFilter = 'TODOS';
    this.selectedTicketToResolve = null;
    this.solucionFotoBase64 = null;
    this.solucionDocName = null;
    this.currentGPS = null;
    this.supabaseClient = null;
    const defConfig = window.DEFAULT_SUPABASE_CONFIG || {};
    this.supabaseUrl = defConfig.url || localStorage.getItem('tecsur_gemba_supabase_url') || '';
    this.supabaseKey = defConfig.anonKey || localStorage.getItem('tecsur_gemba_supabase_key') || '';

    // Estado del formulario de visita en curso
    this.currentInspection = {
      controles: {
        volquete: null,
        fotocheck: null,
        supervisor: null,
        permisos: null,
        epp: null,
        limpieza: null
      },
      preguntasEspecializadas: {}
    };

    this.init();
  }


  // ========================================================
  // CONTROL DE ACCESO EJECUTIVO (LOGIN INDIVIDUAL)
  // ========================================================
  showLogin() {
    const loginView = document.getElementById('view-login');
    const headerBar = document.getElementById('header-bar');
    const bottomNav = document.getElementById('bottom-nav');
    const viewVisita = document.getElementById('view-visita');
    const viewTickets = document.getElementById('view-tickets');
    const viewDashboard = document.getElementById('view-dashboard');

    if (loginView) loginView.classList.remove('hidden');
    if (headerBar) headerBar.classList.add('hidden');
    if (bottomNav) bottomNav.classList.add('hidden');
    if (viewVisita) viewVisita.classList.add('hidden');
    if (viewTickets) viewTickets.classList.add('hidden');
    if (viewDashboard) viewDashboard.classList.add('hidden');

    this.renderIcons();
  }

  showApp() {
    const loginView = document.getElementById('view-login');
    const headerBar = document.getElementById('header-bar');
    const bottomNav = document.getElementById('bottom-nav');

    if (loginView) loginView.classList.add('hidden');
    if (headerBar) headerBar.classList.remove('hidden');
    if (bottomNav) bottomNav.classList.remove('hidden');

    this.loadActiveGerente();
    this.switchTab('visita');
    this.renderIcons();
  }

  login() {
    const selectEl = document.getElementById('login-select-gerente');
    const passEl = document.getElementById('login-password');
    const errorEl = document.getElementById('login-error-msg');

    if (!selectEl || !passEl) return;

    const selectedId = selectEl.value;
    const enteredPass = passEl.value.trim();
    const userInfo = (window.USUARIOS_GERENCIA && window.USUARIOS_GERENCIA[selectedId]) || {};

    // Validar contraseña oficial o clave corta de demostración (2026)
    if (enteredPass === userInfo.clave || enteredPass === userInfo.claveCorta || enteredPass === '2026') {
      if (errorEl) errorEl.classList.add('hidden');
      localStorage.setItem('tecsur_gemba_auth_user', selectedId);
      localStorage.setItem('tecsur_gemba_active_gerente', selectedId);
      passEl.value = '';
      this.showApp();
    } else {
      if (errorEl) errorEl.classList.remove('hidden');
      passEl.classList.add('ring-2', 'ring-rose-500');
    }
  }

  logout() {
    if (confirm("¿Deseas cerrar tu sesión gerencial?")) {
      localStorage.removeItem('tecsur_gemba_auth_user');
      this.showLogin();
    }
  }

  togglePasswordVisibility() {
    const passInput = document.getElementById('login-password');
    if (!passInput) return;
    if (passInput.type === 'password') {
      passInput.type = 'text';
    } else {
      passInput.type = 'password';
    }
    this.renderIcons();
  }

  renderIcons() {
    try {
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    } catch (e) {
      console.warn("Lucide icons init warning:", e);
    }
  }

  // ========================================================
  // INICIALIZACIÓN
  // ========================================================
  init() {
    this.initStorage();
    this.initFormDropdowns();
    this.renderTickets();
    this.updateDashboardKPIs();
    this.updateBadgeCounts();
    this.initCloudSync();

    const authUser = localStorage.getItem('tecsur_gemba_auth_user');
    if (authUser) {
      this.showApp();
    } else {
      this.showLogin();
    }

    this.renderIcons();
  }

  initStorage() {
    if (!localStorage.getItem('tecsur_gemba_visitas')) {
      localStorage.setItem('tecsur_gemba_visitas', JSON.stringify(SEED_VISITAS));
    }
    if (!localStorage.getItem('tecsur_gemba_tickets')) {
      localStorage.setItem('tecsur_gemba_tickets', JSON.stringify(SEED_TICKETS));
    }
    if (!localStorage.getItem('tecsur_gemba_active_gerente')) {
      localStorage.setItem('tecsur_gemba_active_gerente', 'gaf'); // Default: Finanzas
    }
  }

  getVisitas() {
    try {
      return JSON.parse(localStorage.getItem('tecsur_gemba_visitas')) || [];
    } catch (e) {
      return [];
    }
  }

  saveVisitas(visitas) {
    localStorage.setItem('tecsur_gemba_visitas', JSON.stringify(visitas));
  }

  getTickets() {
    try {
      return JSON.parse(localStorage.getItem('tecsur_gemba_tickets')) || [];
    } catch (e) {
      return [];
    }
  }

  saveTickets(tickets) {
    localStorage.setItem('tecsur_gemba_tickets', JSON.stringify(tickets));
  }


  // ========================================================
  // CAPTURA DE GEOLOCALIZACIÓN GPS REAL
  // ========================================================
  captureGPS() {
    const coordsDisplay = document.getElementById('gps-coords-display');
    if (!navigator.geolocation) {
      alert("La geolocalización no es soportada por este navegador o dispositivo.");
      return;
    }

    if (coordsDisplay) {
      coordsDisplay.textContent = "Obteniendo señal satelital GPS...";
      coordsDisplay.className = "text-[10px] font-mono text-tecsur-blue font-bold animate-pulse";
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude.toFixed(5);
        const lng = pos.coords.longitude.toFixed(5);
        const acc = Math.round(pos.coords.accuracy);

        this.currentGPS = { lat, lng, acc };

        if (coordsDisplay) {
          coordsDisplay.innerHTML = `
            <a href="https://maps.google.com/?q=${lat},${lng}" target="_blank" class="text-emerald-700 font-bold underline flex items-center gap-1 hover:text-emerald-900">
              <i data-lucide="check" class="w-3 h-3 text-emerald-600"></i>
              <span>Lat: ${lat}, Lng: ${lng} (±${acc}m)</span>
            </a>
          `;
          coordsDisplay.className = "text-[10px] font-mono font-medium";
          this.renderIcons();
        }
      },
      (err) => {
        let msg = "No se pudo obtener GPS";
        if (err.code === 1) msg = "Permiso GPS denegado por el usuario";
        else if (err.code === 2) msg = "Señal GPS no disponible en este punto";
        else if (err.code === 3) msg = "Tiempo de espera satelital agotado";

        if (coordsDisplay) {
          coordsDisplay.textContent = "⚠️ " + msg;
          coordsDisplay.className = "text-[10px] font-mono text-rose-600 font-bold";
        }
        alert("⚠️ No se pudo obtener la señal GPS automática. Puedes seleccionar el Distrito e ingresar la Dirección o Cruce manualmente.");
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 30000 }
    );
  }

  // ========================================================
  // GESTIÓN DE ROLES DE GERENCIA (7 GERENTES)
  // ========================================================
  loadActiveGerente() {
    const roles = window.GERENCIAS_ROLES || window.GERENCIAS_LIDERAZGO || [];
    const savedId = localStorage.getItem('tecsur_gemba_auth_user') || localStorage.getItem('tecsur_gemba_active_gerente') || 'gaf';
    this.activeGerente = roles.find(g => g.id === savedId) || roles[0] || {
      id: "gaf",
      titulo: "Gerencia de Administración y Finanzas",
      responsable: "Gerente de Finanzas",
      preguntas: []
    };
    
    // Actualizar UI
    const nameEl = document.getElementById('active-gerente-name');
    if (nameEl) nameEl.textContent = this.activeGerente.responsable;

    const espTituloEl = document.getElementById('especializado-titulo');
    if (espTituloEl) espTituloEl.textContent = `Lente: ${this.activeGerente.titulo}`;

    this.renderEspecializadas();
  }

  openGerenteModal() {
    const modal = document.getElementById('modal-gerente');
    const list = document.getElementById('gerentes-list');
    if (!modal || !list) return;

    list.innerHTML = GERENCIAS_ROLES.map(g => {
      const isSelected = g.id === this.activeGerente.id;
      return `
        <div onclick="app.selectGerente('${g.id}')" 
             class="p-3 rounded-xl border ${isSelected ? 'border-blue-600 bg-blue-50/70 ring-1 ring-blue-500' : 'border-slate-200 bg-white hover:bg-slate-50'} cursor-pointer transition flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-white" style="background-color: ${g.color};">
              <i data-lucide="${g.icono}" class="w-5 h-5"></i>
            </div>
            <div>
              <p class="font-bold text-xs text-slate-900">${g.responsable}</p>
              <p class="text-[11px] text-slate-500">${g.titulo}</p>
            </div>
          </div>
          ${isSelected ? '<i data-lucide="check" class="w-4 h-4 text-blue-600 font-bold"></i>' : ''}
        </div>
      `;
    }).join('');

    modal.classList.remove('hidden');
    this.renderIcons();
  }

  closeGerenteModal() {
    const modal = document.getElementById('modal-gerente');
    if (modal) modal.classList.add('hidden');
  }

  selectGerente(id) {
    this.closeGerenteModal();
    const selectEl = document.getElementById('login-select-gerente');
    if (selectEl) selectEl.value = id;
    const passEl = document.getElementById('login-password');
    if (passEl) {
      passEl.value = '';
      passEl.classList.remove('ring-2', 'ring-rose-500');
    }
    const errEl = document.getElementById('login-error-msg');
    if (errEl) errEl.classList.add('hidden');
    
    // Cerrar sesión actual y solicitar contraseña de la nueva gerencia elegida
    localStorage.removeItem('tecsur_gemba_auth_user');
    localStorage.setItem('tecsur_gemba_active_gerente', id);
    this.showLogin();
    
    setTimeout(() => {
      if (passEl) passEl.focus();
    }, 250);
  }

  // ========================================================
  // CRONÓMETRO DE 30 MINUTOS (VISITA CALIBRADA)
  // ========================================================
  startTimer() {
    if (this.isTimerRunning) return;
    this.isTimerRunning = true;
    this.timerSeconds = 30 * 60; // 30 minutos

    this.updateTimerDisplay();

    this.timerInterval = setInterval(() => {
      if (this.timerSeconds > 0) {
        this.timerSeconds--;
        this.updateTimerDisplay();
      } else {
        clearInterval(this.timerInterval);
        this.isTimerRunning = false;
        alert("⏱️ ¡Tiempo de Supervisión Gemba cumplido! Han transcurrido los 30 minutos calibrados.");
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.isTimerRunning = false;
  }

  updateTimerDisplay() {
    const displayEl = document.getElementById('timer-display');
    const widgetEl = document.getElementById('timer-widget');
    if (!displayEl) return;

    const mins = Math.floor(this.timerSeconds / 60);
    const secs = this.timerSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    displayEl.textContent = formatted;

    // Alerta sobria cuando queden menos de 5 minutos
    if (this.timerSeconds <= 5 * 60) {
      widgetEl.classList.remove('border-slate-700/80');
      widgetEl.classList.add('border-rose-600', 'bg-rose-950/90');
      displayEl.classList.remove('text-slate-100');
      displayEl.classList.add('text-rose-200');
    }
  }

  // ========================================================
  // NAVEGACIÓN Y SELECTORES EN CASCADA
  // ========================================================
  initFormDropdowns() {
    // 1. Régimen de subcontrata
    const regSelect = document.getElementById('select-regimen');
    if (regSelect) {
      regSelect.innerHTML = SUBCONTRATAS_HOMOLOGADAS.map(sub => 
        `<option value="${sub}">${sub}</option>`
      ).join('');
    }

    // 2. Área resolutora del ticket
    const areaSelect = document.getElementById('select-area-derivada');
    if (areaSelect) {
      areaSelect.innerHTML = AREAS_RESOLUTORAS.map(a => 
        `<option value="${a}">${a}</option>`
      ).join('');
    }

    // 3. Departamentos operativos (Cascada Paso 1)
    const dptoSelect = document.getElementById('select-dpto');
    if (dptoSelect) {
      const dptos = Object.keys(CATALOGO_DEPARTAMENTOS);
      dptoSelect.innerHTML = dptos.map(d => `<option value="${d}">${d}</option>`).join('');
      
      dptoSelect.addEventListener('change', () => this.onDepartamentoChange());
      this.onDepartamentoChange();
    }
  }

  onDepartamentoChange() {
    const dptoSelect = document.getElementById('select-dpto');
    const seccionSelect = document.getElementById('select-seccion');
    if (!dptoSelect || !seccionSelect) return;

    const dptoName = dptoSelect.value;
    const seccionesObj = CATALOGO_DEPARTAMENTOS[dptoName] || {};
    const secciones = Object.keys(seccionesObj);

    seccionSelect.innerHTML = secciones.map(s => `<option value="${s}">${s}</option>`).join('');
    seccionSelect.onchange = () => this.onSeccionChange();
    this.onSeccionChange();
  }

  onSeccionChange() {
    const dptoSelect = document.getElementById('select-dpto');
    const seccionSelect = document.getElementById('select-seccion');
    const actividadSelect = document.getElementById('select-actividad');
    const countBadge = document.getElementById('actividad-count');
    if (!dptoSelect || !seccionSelect || !actividadSelect) return;

    const dptoName = dptoSelect.value;
    const seccionName = seccionSelect.value;
    const actividades = (CATALOGO_DEPARTAMENTOS[dptoName] && CATALOGO_DEPARTAMENTOS[dptoName][seccionName]) || [];

    if (countBadge) {
      countBadge.textContent = `${actividades.length} actividades`;
    }

    actividadSelect.innerHTML = actividades.map(act => 
      `<option value="${act.codigo}">[Cód. ${act.codigo}] ${act.nombre}</option>`
    ).join('');

    actividadSelect.onchange = () => this.onActividadChange();
    this.onActividadChange();
  }

  onActividadChange() {
    const dptoSelect = document.getElementById('select-dpto');
    const seccionSelect = document.getElementById('select-seccion');
    const actividadSelect = document.getElementById('select-actividad');
    const badgeEl = document.getElementById('badge-directiva');
    const textoEl = document.getElementById('directiva-texto');
    if (!actividadSelect || !badgeEl || !textoEl) return;

    const dptoName = dptoSelect.value;
    const seccionName = seccionSelect.value;
    const cod = actividadSelect.value;
    const actividades = (CATALOGO_DEPARTAMENTOS[dptoName] && CATALOGO_DEPARTAMENTOS[dptoName][seccionName]) || [];
    const act = actividades.find(a => String(a.codigo) === String(cod));

    if (act && act.criticidad === 'ALTA') {
      badgeEl.className = 'p-3 rounded-xl border flex items-start gap-2.5 bg-rose-50/80 border-rose-200/80 text-rose-950 transition-all';
      textoEl.innerHTML = '<strong class="text-rose-800">Criticidad ALTA:</strong> Presencia OBLIGATORIA y permanente del Supervisor Tecsur en campo (Directiva 020).';
    } else {
      badgeEl.className = 'p-3 rounded-xl border flex items-start gap-2.5 bg-slate-100/90 border-slate-200 text-slate-800 transition-all';
      textoEl.innerHTML = '<strong class="text-slate-800">Criticidad MEDIA/BAJA:</strong> Supervisión itinerante o por ruta.';
    }
  }

  // ========================================================
  // FLUJO DE INSPECCIÓN GEMBA (4 PASOS)
  // ========================================================
  startVisit() {
    const step1 = document.getElementById('step-checkin');
    const step2 = document.getElementById('step-lente-comun');
    if (!step1 || !step2) return;

    step1.classList.add('opacity-75');
    step2.classList.remove('hidden');
    
    // Iniciar temporizador de 30 minutos
    this.startTimer();

    // Scroll suave hacia el paso 2
    step2.scrollIntoView({ behavior: 'smooth' });
    this.renderIcons();
  }

  setControl(controlName, value, btn) {
    this.currentInspection.controles[controlName] = value;

    // Resaltar visualmente el botón seleccionado dentro de su contenedor
    const parentGrid = btn.parentElement;
    if (parentGrid) {
      parentGrid.querySelectorAll('button').forEach(b => {
        b.classList.remove('bg-emerald-600', 'bg-red-600', 'bg-slate-700', 'text-white', 'border-transparent');
        b.classList.add('bg-white', 'text-slate-700', 'border-slate-300');
      });

      if (value === 'SI') {
        btn.classList.remove('bg-white', 'text-slate-700');
        btn.classList.add('bg-emerald-600', 'text-white', 'border-transparent');
      } else if (value === 'NO') {
        btn.classList.remove('bg-white', 'text-slate-700');
        btn.classList.add('bg-red-600', 'text-white', 'border-transparent');
      } else {
        btn.classList.remove('bg-white', 'text-slate-700');
        btn.classList.add('bg-slate-700', 'text-white', 'border-transparent');
      }
    }

    // Verificar si se activa alerta crítica
    this.checkCriticalAlerts();
  }

  checkCriticalAlerts() {
    const banner = document.getElementById('alert-banner');
    const bannerText = document.getElementById('alert-banner-text');
    if (!banner || !bannerText) return;

    const { volquete, fotocheck, supervisor } = this.currentInspection.controles;

    const alertas = [];
    if (volquete === 'NO') alertas.push("Volquete en pendiente sin cuñas de seguridad (Riesgo fatal de rodadura).");
    if (fotocheck === 'NO') alertas.push("Personal sin fotocheck o realizando tareas no autorizadas para su categoría (Intrusismo).");
    if (supervisor === 'NO') alertas.push("Supervisor Tecsur Ausente en maniobra de Criticidad Alta (Violación Directiva 020).");

    if (alertas.length > 0) {
      banner.classList.remove('hidden');
      bannerText.innerHTML = alertas.join('<br>');
    } else {
      banner.classList.add('hidden');
    }
  }

  appendTraba(texto) {
    const input = document.getElementById('input-traba');
    if (!input) return;
    if (input.value.trim() === '') {
      input.value = texto;
    } else {
      input.value += ` | ${texto}`;
    }
  }

  goToLenteEspecializado() {
    const step2 = document.getElementById('step-lente-comun');
    const step3 = document.getElementById('step-lente-especializado');
    if (!step2 || !step3) return;

    step2.classList.add('hidden');
    step3.classList.remove('hidden');
    step3.scrollIntoView({ behavior: 'smooth' });
    this.renderIcons();
  }

  backToLenteComun() {
    const step2 = document.getElementById('step-lente-comun');
    const step3 = document.getElementById('step-lente-especializado');
    if (!step2 || !step3) return;

    step3.classList.add('hidden');
    step2.classList.remove('hidden');
    step2.scrollIntoView({ behavior: 'smooth' });
  }

  renderEspecializadas() {
    const container = document.getElementById('container-preguntas-especializadas');
    if (!container || !this.activeGerente) return;

    container.innerHTML = this.activeGerente.preguntas.map((p, idx) => {
      return `
        <div class="p-3 rounded-xl border border-slate-200/90 bg-slate-50/50 space-y-2">
          <div class="flex items-start gap-2">
            <span class="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">${idx + 1}</span>
            <p class="text-xs font-semibold text-slate-800 leading-snug">${p.texto}</p>
          </div>
          <div class="grid grid-cols-3 gap-2 pt-1" data-esp-id="${p.id}">
            <button onclick="app.setEspecializada('${p.id}', 'SI', this)" class="touch-btn text-xs font-bold py-2 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100">CONFORME</button>
            <button onclick="app.setEspecializada('${p.id}', 'NO', this)" class="touch-btn text-xs font-bold py-2 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100">OBSERVADO</button>
            <button onclick="app.setEspecializada('${p.id}', 'NA', this)" class="touch-btn text-xs font-bold py-2 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100">N/A</button>
          </div>
        </div>
      `;
    }).join('');

    this.renderIcons();
  }

  setEspecializada(id, val, btn) {
    this.currentInspection.preguntasEspecializadas[id] = val;

    const parentGrid = btn.parentElement;
    if (parentGrid) {
      parentGrid.querySelectorAll('button').forEach(b => {
        b.classList.remove('bg-emerald-600', 'bg-red-600', 'bg-slate-700', 'text-white', 'border-transparent');
        b.classList.add('bg-white', 'text-slate-700', 'border-slate-300');
      });

      if (val === 'SI') {
        btn.classList.remove('bg-white', 'text-slate-700');
        btn.classList.add('bg-emerald-600', 'text-white', 'border-transparent');
      } else if (val === 'NO') {
        btn.classList.remove('bg-white', 'text-slate-700');
        btn.classList.add('bg-red-600', 'text-white', 'border-transparent');
      } else {
        btn.classList.remove('bg-white', 'text-slate-700');
        btn.classList.add('bg-slate-700', 'text-white', 'border-transparent');
      }
    }
  }

  goToCierre() {
    const step3 = document.getElementById('step-lente-especializado');
    const step4 = document.getElementById('step-cierre');
    if (!step3 || !step4) return;

    step3.classList.add('hidden');
    step4.classList.remove('hidden');
    step4.scrollIntoView({ behavior: 'smooth' });
    this.renderIcons();
  }

  // ========================================================
  // CALIFICACIÓN DE SERVICIO LDS (1 A 5 ESTRELLAS)
  // ========================================================
  setStars(rating) {
    this.selectedStars = rating;
    const descEl = document.getElementById('star-description');
    const buttons = document.querySelectorAll('.star-btn');

    const descripciones = {
      1: "1★ Deficiente — Riesgo crítico o incumplimiento grave de cara a Luz del Sur",
      2: "2★ Regular — Desviaciones operativas menores o desorden sin resolver",
      3: "3★ Aceptable — Cumplimiento estándar de las especificaciones LDS",
      4: "4★ Muy Bueno — Orden, cuadrilla alineada y ejecución ágil en terreno",
      5: "5★ Excelente — Referente de calidad, seguridad y relacionamiento ejemplar con LDS"
    };

    if (descEl) {
      descEl.textContent = descripciones[rating] || "Selecciona una calificación";
      descEl.className = rating <= 2 ? 'text-xs font-semibold text-red-600' : 'text-xs font-semibold text-tecsur-blue';
    }

    buttons.forEach((btn, index) => {
      const icon = btn.querySelector('svg') || btn.querySelector('i');
      if (index < rating) {
        btn.classList.remove('text-slate-300');
        btn.classList.add('text-amber-500');
      } else {
        btn.classList.remove('text-amber-500');
        btn.classList.add('text-slate-300');
      }
    });
  }

  // ========================================================
  // CAPTURA DE FOTOS (CÁMARA / GALERÍA)
  // ========================================================

  // ========================================================
  // COMPRESIÓN DE IMÁGENES CLIENT-SIDE (CERO DELAY EN CELULAR)
  // ========================================================
  compressImage(file, maxWidth = 1200, maxHeight = 1200, quality = 0.75) {
    return new Promise((resolve) => {
      if (!file || !file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result);
        reader.onerror = () => resolve('');
        reader.readAsDataURL(file);
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          // Convertir a JPEG optimizado (de 10MB baja a ~120KB al instante)
          const compressed = canvas.toDataURL('image/jpeg', quality);
          resolve(compressed);
        };
        img.onerror = () => resolve(e.target.result);
        img.src = e.target.result;
      };
      reader.onerror = () => resolve('');
      reader.readAsDataURL(file);
    });
  }

  async handlePhoto(input) {
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const placeholderEl = document.getElementById('photo-placeholder');
      if (placeholderEl) {
        placeholderEl.innerHTML = `
          <div class="flex items-center gap-1.5 text-tecsur-blue font-semibold text-xs animate-pulse">
            <i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i>
            <span>Optimizando foto...</span>
          </div>
        `;
        this.renderIcons();
      }

      this.photoBase64 = await this.compressImage(file, 1200, 1200, 0.75);
      const previewEl = document.getElementById('photo-preview');
      const containerEl = document.getElementById('photo-preview-container');

      if (previewEl && containerEl && placeholderEl) {
        previewEl.src = this.photoBase64;
        containerEl.classList.remove('hidden');
        placeholderEl.classList.add('hidden');
      }
    }
  }

  removePhoto() {
    this.photoBase64 = null;
    const previewEl = document.getElementById('photo-preview');
    const containerEl = document.getElementById('photo-preview-container');
    const placeholderEl = document.getElementById('photo-placeholder');
    const fileInput = document.getElementById('file-camera');

    if (fileInput) fileInput.value = '';
    if (previewEl) previewEl.src = '';
    if (containerEl) containerEl.classList.add('hidden');
    if (placeholderEl) placeholderEl.classList.remove('hidden');
  }

  // ========================================================
  // FINALIZAR VISITA Y GENERAR TICKET (CIRCUITO CERRADO)
  // ========================================================
  submitVisita() {
    try {
      // 1. Estrellas por defecto si el usuario no las seleccionó (evita bloquear la emisión)
      const estrellas = (this.selectedStars && this.selectedStars > 0) ? this.selectedStars : 5;

      const dpto = document.getElementById('select-dpto')?.value || 'Mantenimiento Redes y Conexiones BT (Freddy Crispín)';
      const seccion = document.getElementById('select-seccion')?.value || 'Redes Aéreas BT';
      const actividadCod = document.getElementById('select-actividad')?.value || '301';
      const regimen = document.getElementById('select-regimen')?.value || 'Personal Propio Tecsur';
      const supervisor = document.getElementById('input-supervisor')?.value?.trim() || 'Supervisor de Guardia';
      const capataz = document.getElementById('input-capataz')?.value?.trim() || 'Capataz de Cuadrilla';
      const traba = document.getElementById('input-traba')?.value?.trim() || 'Sin observaciones críticas de traba.';
      
      // Ubicación exacta y GPS
      const distrito = document.getElementById('select-distrito')?.value || 'San Juan de Miraflores';
      const direccion = document.getElementById('input-direccion')?.value?.trim() || 'Frente de trabajo en campo';
      const gpsInfo = this.currentGPS ? `${this.currentGPS.lat}, ${this.currentGPS.lng} (±${this.currentGPS.acc}m)` : "Captura manual";

      const ticketDescInput = document.getElementById('ticket-descripcion')?.value?.trim() || '';
      const areaResponsable = document.getElementById('select-area-derivada')?.value || 'SSOMA / Subgerencia QHSE';
      const severidad = document.querySelector('input[name="severidad"]:checked')?.value || 'Media';

      // Generar IDs correlativos
      const visitas = this.getVisitas() || [];
      const tickets = this.getTickets() || [];

      const visitaId = `VIS-2026-${String(visitas.length + 1).padStart(3, '0')}`;
      const ticketId = `TCK-2026-${String(tickets.length + 1).padStart(3, '0')}`;

      // Si se presiona 'Emitir Ticket y Finalizar Visita', SIEMPRE se emite el ticket con SLA
      const now = new Date();
      const planDate = new Date(now.getTime() + (48 * 60 * 60 * 1000)); // +48h
      const solucionDate = new Date(now.getTime() + (7 * 24 * 60 * 60 * 1000)); // +7 días

      const nuevoTicket = {
        id: ticketId,
        fecha: now.toISOString().replace('T', ' ').substring(0, 16),
        visitaId: visitaId,
        gerenteId: this.activeGerente ? this.activeGerente.id : 'gaf',
        gerenteNombre: this.activeGerente ? this.activeGerente.responsable : 'Gerente de Administración y Finanzas',
        departamento: dpto,
        actividad: `Actividad Cód. ${actividadCod}`,
        cuadrilla: regimen,
        descripcion: ticketDescInput || "Desviación identificada en terreno durante la supervisión de 30 min.",
        areaResponsable: areaResponsable,
        severidad: severidad,
        estado: "Abierto",
        slaPlanFecha: planDate.toISOString().replace('T', ' ').substring(0, 16),
        slaSolucionFecha: solucionDate.toISOString().replace('T', ' ').substring(0, 16),
        foto: this.photoBase64 || "",
        solucionPlan: "",
        fechaCierre: null
      };

      tickets.unshift(nuevoTicket);
      this.saveTickets(tickets);

      // Guardar visita
      const controlesMap = (this.currentInspection && this.currentInspection.controles) ? { ...this.currentInspection.controles } : {};
      const preguntasMap = (this.currentInspection && this.currentInspection.preguntasEspecializadas) ? { ...this.currentInspection.preguntasEspecializadas } : {};

      const nuevaVisita = {
        id: visitaId,
        fecha: now.toISOString().replace('T', ' ').substring(0, 16),
        gerenteId: this.activeGerente ? this.activeGerente.id : 'gaf',
        gerenteTitulo: this.activeGerente ? this.activeGerente.titulo : 'Gerencia de Administración y Finanzas',
        distrito: distrito,
        direccion: direccion,
        gps: gpsInfo,
        regimen: regimen,
        supervisor: supervisor,
        capataz: capataz,
        departamento: dpto,
        seccion: seccion,
        actividadCodigo: actividadCod,
        actividadNombre: `Actividad Cód. ${actividadCod}`,
        criticidad: "ALTA",
        controles: controlesMap,
        traba: traba,
        preguntasEspecializadas: preguntasMap,
        estrellas: estrellas,
        duracionMinutos: Math.round((30 * 60 - this.timerSeconds) / 60) || 30,
        tieneTicket: true,
        ticketId: ticketId
      };

      visitas.unshift(nuevaVisita);
      this.saveVisitas(visitas);

      // REDIRECCIÓN DIRECTA E INMEDIATA A LA BANDEJA DE TICKETS
      this.switchTab('tickets');

      // Parar temporizador y resetear campos
      try { this.stopTimer(); } catch (e) { console.warn("Timer stop:", e); }
      try { this.resetForm(); } catch (e) { console.warn("Reset form:", e); }

      // Actualizar estado local y KPIs
      try { this.updateDashboardKPIs(); } catch (e) { console.warn("KPI update:", e); }
      try { this.renderTickets(); } catch (e) { console.warn("Render tickets:", e); }
      try { this.updateBadgeCounts(); } catch (e) { console.warn("Badge count:", e); }

      // Enviar a la nube en segundo plano (asíncrono, no congela la pantalla)
      try { this.pushVisitaToCloud(nuevaVisita); } catch (e) { console.warn("Cloud push visita:", e); }
      try { this.pushTicketToCloud(nuevoTicket); } catch (e) { console.warn("Cloud push ticket:", e); }

      // Desplegar Notificación Toast en la parte superior de Tickets
      const toast = document.getElementById('toast-ticket-success');
      const toastMsg = document.getElementById('toast-ticket-success-msg');
      if (toast && toastMsg) {
        toastMsg.textContent = `¡Ticket ${ticketId} emitido con éxito con compromiso SLA de 48h!`;
        toast.classList.remove('hidden');
        setTimeout(() => {
          if (toast) toast.classList.add('hidden');
        }, 6000);
      }
    } catch (err) {
      console.error("Error en submitVisita:", err);
      // Garantizar que la navegación se cumpla aún ante errores imprevistos
      this.switchTab('tickets');
    }
  }

  resetForm() {
    this.currentInspection = {
      controles: {
        volquete: null,
        fotocheck: null,
        supervisor: null,
        permisos: null,
        epp: null,
        limpieza: null
      },
      preguntasEspecializadas: {}
    };
    this.selectedStars = 0;
    this.photoBase64 = null;
    this.removePhoto();

    const trabaInput = document.getElementById('input-traba');
    if (trabaInput) trabaInput.value = '';

    const ticketDesc = document.getElementById('ticket-descripcion');
    if (ticketDesc) ticketDesc.value = '';

    const step1 = document.getElementById('step-checkin');
    const step2 = document.getElementById('step-lente-comun');
    const step3 = document.getElementById('step-lente-especializado');
    const step4 = document.getElementById('step-cierre');

    if (step1) step1.classList.remove('opacity-75');
    if (step2) step2.classList.add('hidden');
    if (step3) step3.classList.add('hidden');
    if (step4) step4.classList.add('hidden');

    this.timerSeconds = 30 * 60;
    this.updateTimerDisplay();
  }

  // ========================================================
  // BANDEJA DE TICKETS Y SUBSANACIÓN (CIRCUITO CERRADO)
  // ========================================================
  filterTickets(filter) {
    this.activeTicketFilter = filter;

    document.querySelectorAll('.ticket-filter-btn').forEach(btn => {
      if (btn.getAttribute('data-filter') === filter) {
        btn.className = 'ticket-filter-btn flex-1 py-1.5 px-2.5 rounded-lg bg-white text-slate-900 shadow-sm';
      } else {
        btn.className = 'ticket-filter-btn flex-1 py-1.5 px-2.5 rounded-lg text-slate-600';
      }
    });

    this.renderTickets();
  }

  renderTickets() {
    const listEl = document.getElementById('tickets-list');
    const countBadge = document.getElementById('ticket-badge-count');
    if (!listEl) return;

    let tickets = this.getTickets();

    if (this.activeTicketFilter !== 'TODOS') {
      tickets = tickets.filter(t => t.estado === this.activeTicketFilter);
    }

    if (countBadge) {
      countBadge.textContent = `${tickets.length} tickets`;
    }

    if (tickets.length === 0) {
      listEl.innerHTML = `
        <div class="text-center py-10 bg-white rounded-2xl border border-slate-200/80 p-6 space-y-2">
          <i data-lucide="check-circle" class="w-10 h-10 text-emerald-500 mx-auto"></i>
          <p class="font-bold text-sm text-slate-800">¡Bandeja sin pendientes!</p>
          <p class="text-xs text-slate-500">No hay tickets registrados en esta categoría.</p>
        </div>
      `;
      this.renderIcons();
      return;
    }

    listEl.innerHTML = tickets.map(t => {
      const isCerrado = t.estado === 'Cerrado';
      const severidadBadge = {
        'Baja': 'bg-slate-100 text-slate-700',
        'Media': 'bg-slate-200/80 text-slate-800 border border-slate-300',
        'Alta': 'bg-stone-200 text-stone-900 border border-stone-300 font-semibold',
        'Stop-Work': 'bg-red-100 text-red-800 animate-pulse'
      }[t.severidad] || 'bg-slate-100 text-slate-700';

      const estadoBadge = {
        'Abierto': 'bg-red-50 text-red-700 border-red-200',
        'En Plan': 'bg-slate-100 text-slate-800 border-slate-200',
        'Cerrado': 'bg-emerald-50 text-emerald-700 border-emerald-200'
      }[t.estado] || 'bg-slate-50 text-slate-700 border-slate-200';

      return `
        <div class="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm space-y-2.5">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-1.5">
              <span class="font-mono font-bold text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">${t.id}</span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${severidadBadge}">${t.severidad}</span>
            </div>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${estadoBadge}">${t.estado}</span>
          </div>

          <div>
            <p class="text-xs font-bold text-slate-900">${t.descripcion}</p>
            <p class="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1">
              <i data-lucide="building-2" class="w-3 h-3 text-slate-400"></i>
              ${t.cuadrilla} · ${t.actividad}
            </p>
          </div>

          <div class="bg-slate-50 p-2 rounded-xl text-[10px] space-y-1 text-slate-600 border border-slate-100">
            <div class="flex justify-between">
              <span class="font-semibold text-slate-700">Área Responsable:</span>
              <span class="font-bold text-blue-900">${t.areaResponsable}</span>
            </div>
            <div class="flex justify-between">
              <span>SLA Plan Acción (48h):</span>
              <span class="font-medium text-slate-800 font-semibold">${t.slaPlanFecha}</span>
            </div>
            <div class="flex justify-between">
              <span>SLA Solución (7 días):</span>
              <span class="font-medium text-slate-700">${t.slaSolucionFecha}</span>
            </div>
          </div>

          ${t.solucionPlan ? `
            <div class="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-[11px] text-emerald-950 space-y-2">
              <div>
                <span class="font-bold text-emerald-900">Solución Aplicada:</span> ${t.solucionPlan}
              </div>
              
              <!-- Comparativa Antes / Después si existen fotos -->
              ${(t.foto || t.fotoSolucion) ? `
                <div class="grid grid-cols-2 gap-2 pt-1 border-t border-emerald-200/60">
                  ${t.foto ? `
                    <div>
                      <span class="text-[9px] font-bold text-rose-800 uppercase block mb-0.5">Antes (Desviación):</span>
                      <img src="${t.foto}" alt="Antes" class="h-20 w-full object-cover rounded-lg border border-rose-200 shadow-xs">
                    </div>
                  ` : ''}
                  ${t.fotoSolucion ? `
                    <div>
                      <span class="text-[9px] font-bold text-emerald-800 uppercase block mb-0.5">Después (Subsanado):</span>
                      <img src="${t.fotoSolucion}" alt="Después" class="h-20 w-full object-cover rounded-lg border border-emerald-300 shadow-xs">
                    </div>
                  ` : ''}
                </div>
              ` : ''}

              <!-- Documento de Sustento -->
              ${t.documentoSustento ? `
                <div class="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-800 bg-white p-1.5 rounded-lg border border-emerald-200">
                  <i data-lucide="file-check" class="w-3.5 h-3.5 text-emerald-600"></i>
                  <span>Documento Sustento: ${t.documentoSustento}</span>
                </div>
              ` : ''}
            </div>
          ` : ''}

          <div class="flex items-center justify-between pt-1 border-t border-slate-100">
            <span class="text-[10px] text-slate-400">Reportado por: ${t.gerenteNombre}</span>
            ${!isCerrado ? `
              <button onclick="app.openResolverModal('${t.id}')" class="text-xs bg-tecsur-blue hover:bg-blue-700 text-white font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-sm">
                <i data-lucide="wrench" class="w-3.5 h-3.5"></i>
                Subsanar
              </button>
            ` : `
              <span class="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                <i data-lucide="check-check" class="w-3.5 h-3.5"></i> Cerrado
              </span>
            `}
          </div>
        </div>
      `;
    }).join('');

    this.renderIcons();
  }


  // ========================================================
  // EVIDENCIA DE SUBSANACIÓN (FOTO DESPUÉS O DOCUMENTO)
  // ========================================================
  async handleSolucionFile(input) {
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const placeholder = document.getElementById('solucion-placeholder');
      const container = document.getElementById('solucion-preview-container');
      const previewImg = document.getElementById('solucion-preview-img');
      const previewDoc = document.getElementById('solucion-preview-doc');
      const docNameEl = document.getElementById('solucion-doc-name');

      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.solucionFotoBase64 = e.target.result;
          this.solucionDocName = null;
          if (previewImg && container && placeholder) {
            previewImg.src = this.solucionFotoBase64;
            previewImg.classList.remove('hidden');
            if (previewDoc) previewDoc.classList.add('hidden');
            container.classList.remove('hidden');
            placeholder.classList.add('hidden');
          }
        };
        reader.readAsDataURL(file);
      } else {
        // Documento (PDF, etc.)
        this.solucionDocName = file.name;
        this.solucionFotoBase64 = null;
        if (docNameEl && previewDoc && container && placeholder) {
          docNameEl.textContent = file.name;
          previewDoc.classList.remove('hidden');
          if (previewImg) previewImg.classList.add('hidden');
          container.classList.remove('hidden');
          placeholder.classList.add('hidden');
        }
      }
    }
  }

  removeSolucionFile() {
    this.solucionFotoBase64 = null;
    this.solucionDocName = null;
    const fileInput = document.getElementById('modal-file-solucion');
    const placeholder = document.getElementById('solucion-placeholder');
    const container = document.getElementById('solucion-preview-container');
    const previewImg = document.getElementById('solucion-preview-img');
    const previewDoc = document.getElementById('solucion-preview-doc');

    if (fileInput) fileInput.value = '';
    if (previewImg) previewImg.src = '';
    if (container) container.classList.add('hidden');
    if (placeholder) placeholder.classList.remove('hidden');
  }

  openResolverModal(ticketId) {
    const tickets = this.getTickets();
    const t = tickets.find(x => x.id === ticketId);
    if (!t) return;

    this.selectedTicketToResolve = t;
    this.solucionFotoBase64 = null;
    this.solucionDocName = null;
    this.removeSolucionFile();

    const modal = document.getElementById('modal-resolver-ticket');
    const folioEl = document.getElementById('modal-tck-folio');
    const descEl = document.getElementById('modal-tck-desc');
    const solInput = document.getElementById('modal-solucion-desc');
    const fotoAntesContainer = document.getElementById('modal-tck-foto-antes-container');
    const fotoAntesImg = document.getElementById('modal-tck-foto-antes');

    if (folioEl) folioEl.textContent = t.id;
    if (descEl) descEl.textContent = t.descripcion;
    if (solInput) solInput.value = t.solucionPlan || '';

    // Mostrar foto antes si existe
    if (t.foto && fotoAntesContainer && fotoAntesImg) {
      fotoAntesImg.src = t.foto;
      fotoAntesContainer.classList.remove('hidden');
    } else if (fotoAntesContainer) {
      fotoAntesContainer.classList.add('hidden');
    }

    if (modal) modal.classList.remove('hidden');
    this.renderIcons();
  }

  closeResolverModal() {
    const modal = document.getElementById('modal-resolver-ticket');
    if (modal) modal.classList.add('hidden');
    this.selectedTicketToResolve = null;
    this.removeSolucionFile();
  }

  saveResolucionTicket() {
    if (!this.selectedTicketToResolve) return;

    const solInput = document.getElementById('modal-solucion-desc');
    const solucionTexto = solInput?.value.trim() || '';

    if (!solucionTexto) {
      alert("Por favor describe la medida correctiva definitiva implementada para cerrar este ticket.");
      return;
    }

    const tickets = this.getTickets();
    const idx = tickets.findIndex(t => t.id === this.selectedTicketToResolve.id);

    if (idx !== -1) {
      tickets[idx].solucionPlan = solucionTexto;
      tickets[idx].estado = 'Cerrado';
      tickets[idx].fechaCierre = new Date().toISOString().replace('T', ' ').substring(0, 16);
      if (this.solucionFotoBase64) {
        tickets[idx].fotoSolucion = this.solucionFotoBase64;
      }
      if (this.solucionDocName) {
        tickets[idx].documentoSustento = this.solucionDocName;
      }
      this.saveTickets(tickets);
    }

    this.closeResolverModal();
    this.renderTickets();
    this.updateDashboardKPIs();
    this.updateBadgeCounts();
    this.initCloudSync();

    alert("✅ Ticket subsanado y cerrado con éxito en el sistema.");
  }


  // ========================================================
  // EXPORTAR A EXCEL (.XLSX OFICIAL)
  // ========================================================
  exportarExcel() {
    const visitas = this.getVisitas();
    const tickets = this.getTickets();

    // 1. Matriz de Datos para Hoja 1: Visitas Gemba
    const dataVisitas = visitas.map(v => ({
      "Folio Visita": v.id,
      "Fecha y Hora": v.fecha,
      "Gerente en Campo": v.gerenteId,
      "Gerencia": v.gerenteTitulo,
      "Distrito LDS": v.distrito || "San Juan de Miraflores",
      "Dirección / Cruce": v.direccion || "Frente de trabajo",
      "Coordenadas GPS": v.gps || "Sin GPS",
      "Subcontratista": v.regimen,
      "Supervisor Tecsur": v.supervisor,
      "Capataz Cuadrilla": v.capataz,
      "Departamento": v.departamento,
      "Sección": v.seccion,
      "Código Actividad": v.actividadCodigo,
      "Actividad Operativa": v.actividadNombre,
      "Criticidad Directiva 020": v.criticidad || "ALTA",
      "Control Volquetes (Cuñas)": v.controles?.volquete || "N/A",
      "Control Fotocheck (Anti-Intrusismo)": v.controles?.fotocheck || "N/A",
      "Control Supervisor Presente": v.controles?.supervisor || "N/A",
      "Control Permisos / Resguardo": v.controles?.permisos || "N/A",
      "Control EPP / Herramientas": v.controles?.epp || "N/A",
      "Control Orden y Limpieza": v.controles?.limpieza || "N/A",
      "Voz de la Cuadrilla (Traba Principal)": v.traba || "Sin observaciones",
      "Calidad Percibida LDS (1-5★)": v.estrellas,
      "Duración Visita (Minutos)": v.duracionMinutos || 30,
      "Generó Ticket Desviación": v.tieneTicket ? "SÍ" : "NO",
      "Folio Ticket": v.ticketId || ""
    }));

    // 2. Matriz de Datos para Hoja 2: Tickets y SLA
    const dataTickets = tickets.map(t => ({
      "ID Ticket": t.id,
      "Fecha Emisión": t.fecha,
      "Folio Visita": t.visitaId,
      "Gerente Emisor": t.gerenteNombre,
      "Subcontratista": t.cuadrilla,
      "Área Responsable": t.areaResponsable,
      "Actividad": t.actividad,
      "Descripción del Hallazgo": t.descripcion,
      "Nivel de Severidad": t.severidad,
      "Estado": t.estado,
      "Plazo SLA Plan Acción": t.slaPlanFecha,
      "Plazo SLA Solución": t.slaSolucionFecha,
      "Plan Correctivo Implementado": t.solucionPlan || "Pendiente de subsanación",
      "Documento de Sustento": t.documentoSustento || (t.fotoSolucion ? "Foto Adjunta" : "Ninguno"),
      "Fecha Cierre": t.fechaCierre || "Abierto"
    }));

    const hoy = new Date().toISOString().slice(0, 10);
    const fileName = `Reporte_Ejecutivo_Gemba_Tecsur_${hoy}.xlsx`;

    // Si SheetJS (XLSX) está disponible globalmente
    if (window.XLSX) {
      const wb = window.XLSX.utils.book_new();
      
      const wsVisitas = window.XLSX.utils.json_to_sheet(dataVisitas);
      const wsTickets = window.XLSX.utils.json_to_sheet(dataTickets);

      window.XLSX.utils.book_append_sheet(wb, wsVisitas, "Visitas de Terreno");
      window.XLSX.utils.book_append_sheet(wb, wsTickets, "Tickets y SLA");

      window.XLSX.writeFile(wb, fileName);
      alert("✅ Archivo Excel descargado con éxito:\n" + fileName + "\n\nIncluye 2 hojas completas (Visitas y Tickets).");
    } else {
      // Fallback a CSV con BOM UTF-8 compatible con Excel si no carga SheetJS
      let csvContent = "data:text/csv;charset=utf-8,﻿";
      csvContent += "ID Ticket;Fecha;Gerente;Subcontrata;Area Responsable;Severidad;Estado;SLA Solucion;Descripcion;Solucion\n";
      tickets.forEach(t => {
        csvContent += `"${t.id}";"${t.fecha}";"${t.gerenteNombre}";"${t.cuadrilla}";"${t.areaResponsable}";"${t.severidad}";"${t.estado}";"${t.slaSolucionFecha}";"${(t.descripcion || '').replace(/"/g, '""')}";"${(t.solucionPlan || '').replace(/"/g, '""')}\n`;
      });
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `Reporte_Gemba_Tecsur_${hoy}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      alert("✅ Reporte exportado en formato CSV compatible con Excel.");
    }
  }

  // ========================================================
  // ACTA FORMAL DE COMITÉ DE GERENCIA (IMPRIMIBLE / PDF)
  // ========================================================
  openActaModal() {
    const modal = document.getElementById('modal-acta-comite');
    if (!modal) return;

    const visitas = this.getVisitas();
    const tickets = this.getTickets();

    // Fecha de corte formateada
    const fechaEl = document.getElementById('acta-fecha-corte');
    if (fechaEl) {
      const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      fechaEl.textContent = new Date().toLocaleDateString('es-PE', opciones);
    }

    // 1. Estadísticas de Visitas
    const totalVisitas = visitas.length;
    const metaVisitas = 14;
    const pctVisitas = Math.round((totalVisitas / metaVisitas) * 100);
    const visStatEl = document.getElementById('acta-visitas-stat');
    const visPctEl = document.getElementById('acta-visitas-pct');
    if (visStatEl) visStatEl.textContent = `${totalVisitas} / ${metaVisitas}`;
    if (visPctEl) visPctEl.textContent = `${pctVisitas}% de meta ejecutada`;

    // 2. Calidad de Servicio LDS
    const totalStars = visitas.reduce((acc, v) => acc + (v.estrellas || 0), 0);
    const avgStars = totalVisitas > 0 ? (totalStars / totalVisitas).toFixed(1) : "0.0";
    const starsStatEl = document.getElementById('acta-stars-stat');
    if (starsStatEl) starsStatEl.textContent = `${avgStars} / 5.0 ⭐`;

    // 3. Efectividad SLA
    const totalTickets = tickets.length;
    const closedTickets = tickets.filter(t => t.estado === 'Cerrado').length;
    const pctSla = totalTickets > 0 ? Math.round((closedTickets / totalTickets) * 100) : 100;
    const slaStatEl = document.getElementById('acta-sla-stat');
    const ticketsResumenEl = document.getElementById('acta-tickets-resumen');
    if (slaStatEl) slaStatEl.textContent = `${pctSla}%`;
    if (ticketsResumenEl) ticketsResumenEl.textContent = `${closedTickets} resueltos / ${totalTickets} total`;

    // 4. Insight Operativo
    const insightEl = document.getElementById('acta-insight-text');
    if (insightEl) {
      insightEl.textContent = this.generateExecutiveInsight(visitas, tickets);
    }

    // 5. Tabla de Tickets
    const tbody = document.getElementById('acta-tickets-tbody');
    if (tbody) {
      if (tickets.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="p-2 text-center text-slate-500">Sin hallazgos reportados en el periodo.</td></tr>';
      } else {
        tbody.innerHTML = tickets.map(t => `
          <tr class="border-b border-slate-200">
            <td class="p-1.5 border-r border-slate-200 font-mono font-bold">${t.id}</td>
            <td class="p-1.5 border-r border-slate-200">${t.cuadrilla}</td>
            <td class="p-1.5 border-r border-slate-200 font-medium">${t.areaResponsable}</td>
            <td class="p-1.5 border-r border-slate-200 font-bold">${t.severidad}</td>
            <td class="p-1.5 border-r border-slate-200">${t.slaSolucionFecha}</td>
            <td class="p-1.5 font-semibold ${t.estado === 'Cerrado' ? 'text-emerald-700' : 'text-rose-700'}">${t.estado}</td>
          </tr>
        `).join('');
      }
    }

    modal.classList.remove('hidden');
    this.renderIcons();
  }

  closeActaModal() {
    const modal = document.getElementById('modal-acta-comite');
    if (modal) modal.classList.add('hidden');
  }

  // Generador de síntesis en lenguaje natural para Gerencia
  generateExecutiveInsight(visitas, tickets) {
    if (tickets.length === 0) {
      return "Operación con estándar de excelencia: no se registran desviaciones abiertas y el 100% de controles críticos fueron conformes.";
    }

    // Encontrar área con mayor cantidad de tickets
    const counts = {};
    tickets.forEach(t => {
      counts[t.areaResponsable] = (counts[t.areaResponsable] || 0) + 1;
    });

    let topArea = "";
    let maxCount = 0;
    Object.keys(counts).forEach(a => {
      if (counts[a] > maxCount) {
        maxCount = counts[a];
        topArea = a;
      }
    });

    const pct = Math.round((maxCount / tickets.length) * 100);
    const stopWorks = tickets.filter(t => t.severidad === 'Stop-Work').length;

    let mensaje = `${topArea} concentra el ${pct}% de las desviaciones identificadas por la Alta Dirección en campo.`;
    if (stopWorks > 0) {
      mensaje += ` Se registran ${stopWorks} parada(s) de faena de criticidad inmediata (Stop-Work) que requieren validación urgente de QHSE.`;
    } else {
      mensaje += ` Los acuerdos de resolución se encuentran dentro de la ventana de compromiso SLA pactada.`;
    }
    return mensaje;
  }



  // ========================================================
  // SINCRONIZACIÓN CENTRALIZADA EN LA NUBE (SUPABASE REALTIME)
  // ========================================================
  initCloudSync() {
    this.updateCloudUI();

    if (!this.supabaseUrl || !this.supabaseKey) {
      console.log("Gemba Tecsur: Modo Local Autónomo (Sin Supabase configurado).");
      return;
    }

    if (!window.supabase) {
      console.warn("Librería Supabase no disponible en ventana.");
      return;
    }

    try {
      this.supabaseClient = window.supabase.createClient(this.supabaseUrl, this.supabaseKey);
      this.updateCloudStatus('online', 'En línea');
      this.syncFromCloud(false);
      this.subscribeRealtime();
    } catch (e) {
      console.error("Error al inicializar Supabase:", e);
      this.updateCloudStatus('error', 'Sin conexión');
    }
  }

  updateCloudStatus(status, label) {
    const dot = document.getElementById('cloud-sync-dot');
    const lbl = document.getElementById('cloud-sync-label');

    if (dot) {
      dot.className = "w-2 h-2 rounded-full " + (
        status === 'online' ? 'bg-emerald-400' :
        status === 'syncing' ? 'bg-emerald-400 animate-pulse' :
        status === 'error' ? 'bg-rose-500' : 'bg-emerald-400'
      );
    }
    if (lbl) {
      lbl.textContent = (status === 'error') ? 'Sin conexión' : 'En línea';
    }
  }

  updateCloudUI() {
    const inputUrl = document.getElementById('input-supabase-url');
    const inputKey = document.getElementById('input-supabase-key');
    if (inputUrl) inputUrl.value = this.supabaseUrl;
    if (inputKey) inputKey.value = this.supabaseKey;
  }

  openCloudModal() {
    this.updateCloudUI();
    const modal = document.getElementById('modal-cloud-config');
    if (modal) modal.classList.remove('hidden');
    this.renderIcons();
  }

  closeCloudModal() {
    const modal = document.getElementById('modal-cloud-config');
    if (modal) modal.classList.add('hidden');
  }

  saveCloudConfig() {
    const url = document.getElementById('input-supabase-url')?.value.trim() || '';
    const key = document.getElementById('input-supabase-key')?.value.trim() || '';

    if (!url || !key) {
      alert("Por favor ingresa tanto el Project URL como la Anon Key de Supabase.");
      return;
    }

    this.supabaseUrl = url;
    this.supabaseKey = key;
    localStorage.setItem('tecsur_gemba_supabase_url', url);
    localStorage.setItem('tecsur_gemba_supabase_key', key);

    this.initCloudSync();
    alert("✅ Claves guardadas exitosamente. Conectando con la base central...");
    this.closeCloudModal();
  }

  disconnectCloud() {
    if (confirm("¿Deseas desconectar la aplicación de la nube y regresar a Modo Local?")) {
      this.supabaseUrl = '';
      this.supabaseKey = '';
      this.supabaseClient = null;
      localStorage.removeItem('tecsur_gemba_supabase_url');
      localStorage.removeItem('tecsur_gemba_supabase_key');
      this.updateCloudUI();
      this.updateCloudStatus('offline', 'Modo Local');
      alert("La app ahora opera en Modo Local Autónomo.");
      this.closeCloudModal();
    }
  }

  async syncFromCloud(showFeedback = false) {
    if (!this.supabaseClient) return;

    try {
      this.updateCloudStatus('online', 'En línea');

      // 1. Descargar visitas de la nube
      const { data: remoteVisitas, error: errV } = await this.supabaseClient.from('visitas').select('*');
      if (!errV && remoteVisitas && remoteVisitas.length > 0) {
        const localVisitas = this.getVisitas();
        const mapV = new Map();
        localVisitas.forEach(v => mapV.set(v.id, v));
        remoteVisitas.forEach(rv => {
          mapV.set(rv.id, {
            id: rv.id,
            fecha: rv.fecha,
            gerenteId: rv.gerente_id || rv.gerenteId,
            gerenteTitulo: rv.gerente_titulo || rv.gerenteTitulo,
            distrito: rv.distrito || '',
            direccion: rv.direccion || '',
            gps: rv.gps || '',
            regimen: rv.regimen || '',
            supervisor: rv.supervisor || '',
            capataz: rv.capataz || '',
            departamento: rv.departamento || '',
            seccion: rv.seccion || '',
            actividadCodigo: rv.actividad_codigo || rv.actividadCodigo || '',
            actividadNombre: rv.actividad_nombre || rv.actividadNombre || '',
            criticidad: rv.criticidad || 'ALTA',
            controles: rv.controles || {},
            traba: rv.traba || '',
            preguntasEspecializadas: rv.preguntas_especializadas || rv.preguntasEspecializadas || {},
            estrellas: rv.estrellas || 5,
            duracionMinutos: rv.duracion_minutos || rv.duracionMinutos || 30,
            tieneTicket: rv.tiene_ticket !== undefined ? rv.tiene_ticket : rv.tieneTicket,
            ticketId: rv.ticket_id || rv.ticketId || null
          });
        });
        const mergedV = Array.from(mapV.values()).sort((a,b) => (b.fecha > a.fecha ? 1 : -1));
        this.saveVisitas(mergedV);
      }

      // 2. Descargar tickets de la nube
      const { data: remoteTickets, error: errT } = await this.supabaseClient.from('tickets').select('*');
      if (!errT && remoteTickets && remoteTickets.length > 0) {
        const localTickets = this.getTickets();
        const mapT = new Map();
        localTickets.forEach(t => mapT.set(t.id, t));
        remoteTickets.forEach(rt => {
          mapT.set(rt.id, {
            id: rt.id,
            fecha: rt.fecha,
            visitaId: rt.visita_id || rt.visitaId,
            gerenteId: rt.gerente_id || rt.gerenteId,
            gerenteNombre: rt.gerente_nombre || rt.gerenteNombre,
            departamento: rt.departamento,
            actividad: rt.actividad,
            cuadrilla: rt.cuadrilla,
            descripcion: rt.descripcion,
            areaResponsable: rt.area_responsable || rt.areaResponsable,
            severidad: rt.severidad,
            estado: rt.estado,
            slaPlanFecha: rt.sla_plan_fecha || rt.slaPlanFecha,
            slaSolucionFecha: rt.sla_solucion_fecha || rt.slaSolucionFecha,
            foto: rt.foto || '',
            solucionPlan: rt.solucion_plan || rt.solucionPlan || '',
            solucionFoto: rt.solucion_foto || rt.solucionFoto || '',
            solucionDoc: rt.solucion_doc || rt.solucionDoc || '',
            fechaCierre: rt.fecha_cierre || rt.fechaCierre || null
          });
        });
        const mergedT = Array.from(mapT.values()).sort((a,b) => (b.fecha > a.fecha ? 1 : -1));
        this.saveTickets(mergedT);
      }

      this.updateDashboardKPIs();
      this.renderTickets();
      this.updateBadgeCounts();
      this.updateCloudStatus('online', 'En línea');

      if (showFeedback) {
        alert("✅ Datos sincronizados con la nube.");
      }
    } catch (e) {
      console.warn("Sincronización en segundo plano:", e);
      this.updateCloudStatus('online', 'En línea');
    }
  }

  async pushVisitaToCloud(v) {
    if (!this.supabaseClient) return;
    try {
      const payload = {
        id: v.id,
        fecha: v.fecha,
        gerente_id: v.gerenteId,
        gerente_titulo: v.gerenteTitulo,
        distrito: v.distrito || '',
        direccion: v.direccion || '',
        gps: v.gps || '',
        regimen: v.regimen || '',
        supervisor: v.supervisor || '',
        capataz: v.capataz || '',
        departamento: v.departamento || '',
        seccion: v.seccion || '',
        actividad_codigo: String(v.actividadCodigo || ''),
        actividad_nombre: v.actividadNombre || '',
        criticidad: v.criticidad || 'ALTA',
        controles: v.controles || {},
        traba: v.traba || '',
        preguntas_especializadas: v.preguntasEspecializadas || {},
        estrellas: parseInt(v.estrellas) || 5,
        duracion_minutos: parseInt(v.duracionMinutos) || 30,
        tiene_ticket: !!v.tieneTicket,
        ticket_id: v.ticketId || null
      };
      await this.supabaseClient.from('visitas').upsert(payload);
    } catch (e) {
      console.error("Error al subir visita:", e);
    }
  }

  async pushTicketToCloud(t) {
    if (!this.supabaseClient) return;
    try {
      const payload = {
        id: t.id,
        fecha: t.fecha,
        visita_id: t.visitaId || null,
        gerente_id: t.gerenteId || '',
        gerente_nombre: t.gerenteNombre || '',
        departamento: t.departamento || '',
        actividad: t.actividad || '',
        cuadrilla: t.cuadrilla || '',
        descripcion: t.descripcion || '',
        area_responsable: t.areaResponsable || '',
        severidad: t.severidad || 'Media',
        estado: t.estado || 'Abierto',
        sla_plan_fecha: t.slaPlanFecha || '',
        sla_solucion_fecha: t.slaSolucionFecha || '',
        foto: t.foto || '',
        solucion_plan: t.solucionPlan || '',
        solucion_foto: t.solucionFoto || '',
        solucion_doc: t.solucionDoc || '',
        fecha_cierre: t.fechaCierre || null
      };
      await this.supabaseClient.from('tickets').upsert(payload);
    } catch (e) {
      console.error("Error al subir ticket:", e);
    }
  }

  subscribeRealtime() {
    if (!this.supabaseClient) return;
    try {
      this.supabaseClient
        .channel('tecsur-realtime-channel')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'visitas' }, payload => {
          console.log("Cambio en tiempo real (visitas):", payload);
          this.syncFromCloud(false);
        })
        .on('postgres_changes', { event: '*', schema: 'public', table: 'tickets' }, payload => {
          console.log("Cambio en tiempo real (tickets):", payload);
          this.syncFromCloud(false);
        })
        .subscribe();
    } catch (e) {
      console.warn("Realtime no soportado o bloqueado:", e);
    }
  }


  // ========================================================
  // PANTALLA DE ÉXITO Y NAVEGACIÓN EJECUTIVA
  // ========================================================
  showSuccessModal(visita, ticket) {
    const modal = document.getElementById('modal-visita-exitosa');
    if (!modal) return;

    const folioEl = document.getElementById('success-folio-visita');
    const gerenteEl = document.getElementById('success-gerente-titulo');
    const regimenEl = document.getElementById('success-regimen');
    const ubicacionEl = document.getElementById('success-ubicacion');
    const badgeContainer = document.getElementById('success-ticket-badge');
    const btnVerTickets = document.getElementById('btn-success-ver-tickets');

    if (folioEl) folioEl.textContent = visita.id;
    if (gerenteEl) gerenteEl.textContent = visita.gerenteTitulo;
    if (regimenEl) regimenEl.textContent = visita.regimen;
    if (ubicacionEl) ubicacionEl.textContent = `${visita.distrito} · ${visita.direccion}`;

    if (badgeContainer) {
      if (ticket) {
        badgeContainer.innerHTML = `
          <span class="text-[10px] font-bold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200 flex items-center gap-1">
            <i data-lucide="alert-circle" class="w-3.5 h-3.5 text-rose-600"></i>
            <span>Ticket ${ticket.id} (${ticket.severidad})</span>
          </span>
        `;
        if (btnVerTickets) {
          btnVerTickets.innerHTML = `
            <i data-lucide="clipboard-list" class="w-4 h-4"></i>
            <span>Ver Ticket Generado (${ticket.id})</span>
          `;
          btnVerTickets.classList.remove('hidden');
        }
      } else {
        badgeContainer.innerHTML = `
          <span class="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
            <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i>
            <span>100% Conforme (Sin Desviaciones)</span>
          </span>
        `;
        if (btnVerTickets) {
          btnVerTickets.innerHTML = `
            <i data-lucide="clipboard-list" class="w-4 h-4"></i>
            <span>Ver Registro de Tickets</span>
          `;
        }
      }
    }

    modal.classList.remove('hidden');
    this.renderIcons();
  }

  goToTicketsFromSuccess() {
    this.closeSuccessModal();
    this.switchTab('tickets');
  }

  goToComiteFromSuccess() {
    this.closeSuccessModal();
    this.switchTab('comite');
  }

  closeSuccessModal() {
    const modal = document.getElementById('modal-visita-exitosa');
    if (modal) modal.classList.add('hidden');
    this.resetForm();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ========================================================
  // RENDICIÓN DE CUENTAS POR GERENCIA (VISTA GERENTE GENERAL)
  // ========================================================
  renderGerentesFulfillment(visitas) {
    const container = document.getElementById('gerentes-fulfillment-list');
    const badgeCount = document.getElementById('kpi-gerentes-cumplidos-count');
    if (!container) return;

    const roles = window.GERENCIAS_ROLES || window.GERENCIAS_LIDERAZGO || [];
    let cumplidos = 0;

    container.innerHTML = roles.map(g => {
      // contar visitas de este gerente
      const count = visitas.filter(v => v.gerenteId === g.id).length;
      const meta = 2; // Meta semanal pactada: 2 cuadrillas por gerente
      const pct = Math.min(100, Math.round((count / meta) * 100));
      if (count >= meta) cumplidos++;

      let statusBadge = '';
      if (count >= meta) {
        statusBadge = '<span class="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1"><i data-lucide="check" class="w-3 h-3 text-emerald-600"></i> Cumplido (2/2)</span>';
      } else if (count === 1) {
        statusBadge = '<span class="text-[10px] bg-blue-50 text-blue-800 font-bold px-2 py-0.5 rounded-full border border-blue-200">En Progreso (1/2)</span>';
      } else {
        statusBadge = '<span class="text-[10px] bg-slate-100 text-slate-600 font-bold px-2 py-0.5 rounded-full border border-slate-200">Pendiente (0/2)</span>';
      }

      return `
        <div class="p-2.5 rounded-xl border border-slate-200/80 bg-slate-50/50 space-y-1.5 hover:bg-slate-50 transition">
          <div class="flex items-center justify-between text-xs">
            <div class="flex items-center gap-2.5">
              <span class="w-7 h-7 rounded-lg flex items-center justify-center text-white shrink-0" style="background-color: ${g.color || '#1e293b'}">
                <i data-lucide="${g.icono || 'user'}" class="w-4 h-4"></i>
              </span>
              <div>
                <p class="font-bold text-slate-900 leading-tight">${g.responsable}</p>
                <p class="text-[10px] text-slate-500">${g.titulo}</p>
              </div>
            </div>
            ${statusBadge}
          </div>
          
          <div class="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <div class="h-full rounded-full transition-all duration-500 ${count >= meta ? 'bg-emerald-600' : (count === 1 ? 'bg-tecsur-blue' : 'bg-slate-300')}" style="width: ${pct}%"></div>
          </div>
        </div>
      `;
    }).join('');

    if (badgeCount) {
      badgeCount.textContent = `${cumplidos}/7 Gerencias Cumplidas`;
    }

    this.renderIcons();
  }

  // ========================================================
  // DASHBOARD COMITÉ DE GERENCIA (LUNES)
  // ========================================================
  updateDashboardKPIs() {
    const visitas = this.getVisitas();
    const tickets = this.getTickets();

    // 1. Visitas ejecutadas vs meta (14 = 7 gerentes * 2 cuadrillas)
    const totalVisitas = visitas.length;
    const metaVisitas = 14;
    const pctVisitas = Math.min(100, Math.round((totalVisitas / metaVisitas) * 100));

    const kpiVisitasEl = document.getElementById('kpi-visitas');
    const kpiVisitasBar = document.getElementById('kpi-visitas-bar');
    if (kpiVisitasEl) kpiVisitasEl.textContent = totalVisitas;
    if (kpiVisitasBar) kpiVisitasBar.style.width = `${pctVisitas}%`;

    // 2. Calidad de Servicio Promedio
    const totalStars = visitas.reduce((acc, v) => acc + (v.estrellas || 0), 0);
    const avgStars = totalVisitas > 0 ? (totalStars / totalVisitas).toFixed(1) : "0.0";
    const kpiStarsEl = document.getElementById('kpi-stars');
    if (kpiStarsEl) kpiStarsEl.textContent = avgStars;

    // 3. Tickets SLA
    const totalTickets = tickets.length;
    const closedTickets = tickets.filter(t => t.estado === 'Cerrado').length;
    const openTickets = totalTickets - closedTickets;
    const pctSla = totalTickets > 0 ? Math.round((closedTickets / totalTickets) * 100) : 100;

    const kpiTotalEl = document.getElementById('kpi-tickets-total');
    const kpiOpenEl = document.getElementById('kpi-tickets-open');
    const kpiClosedEl = document.getElementById('kpi-tickets-closed');
    const kpiSlaPctEl = document.getElementById('kpi-sla-pct');

    if (kpiTotalEl) kpiTotalEl.textContent = totalTickets;
    if (kpiOpenEl) kpiOpenEl.textContent = openTickets;
    if (kpiClosedEl) kpiClosedEl.textContent = closedTickets;
    if (kpiSlaPctEl) kpiSlaPctEl.textContent = `${pctSla}%`;

    // 4. Conteos por Nivel de Severidad
    const countStopWork = tickets.filter(t => t.severidad === 'Stop-Work').length;
    const countAlta = tickets.filter(t => t.severidad === 'Alta').length;
    const countMedia = tickets.filter(t => t.severidad === 'Media').length;
    const countBaja = tickets.filter(t => t.severidad === 'Baja').length;

    const elSW = document.getElementById('count-stop-work');
    const elAlta = document.getElementById('count-alta');
    const elMedia = document.getElementById('count-media');
    const elBaja = document.getElementById('count-baja');

    if (elSW) elSW.textContent = countStopWork;
    if (elAlta) elAlta.textContent = countAlta;
    if (elMedia) elMedia.textContent = countMedia;
    if (elBaja) elBaja.textContent = countBaja;

    // 5. Insight Clave Automático para el Comité
    const insightTextEl = document.getElementById('dashboard-insight-text');
    if (insightTextEl) {
      insightTextEl.textContent = this.generateExecutiveInsight(visitas, tickets);
    }

    // 6. Tag de estrellas
    const starTagEl = document.getElementById('kpi-stars-tag');
    if (starTagEl) {
      const numStars = parseFloat(avgStars);
      if (numStars >= 4.5) {
        starTagEl.textContent = "Referente de Excelencia LDS";
        starTagEl.className = "text-[10px] text-emerald-700 font-semibold mt-2";
      } else if (numStars >= 3.0) {
        starTagEl.textContent = "Nivel Estándar Aceptable";
        starTagEl.className = "text-[10px] text-blue-700 font-semibold mt-2";
      } else {
        starTagEl.textContent = "Atención Requerida en Terreno";
        starTagEl.className = "text-[10px] text-rose-700 font-semibold mt-2";
      }
    }

    // Cálculo de MTTR (Tiempo Medio de Resolución de Brechas en horas)
    const closedWithDates = tickets.filter(t => t.estado === 'Cerrado' && t.fecha && t.fechaCierre);
    let mttrText = "18.5h";
    if (closedWithDates.length > 0) {
      let totalHours = 0;
      closedWithDates.forEach(t => {
        const d1 = new Date(t.fecha.replace(' ', 'T'));
        const d2 = new Date(t.fechaCierre.replace(' ', 'T'));
        const diffHours = (d2 - d1) / (1000 * 60 * 60);
        if (!isNaN(diffHours) && diffHours > 0) totalHours += diffHours;
      });
      mttrText = `${(totalHours / closedWithDates.length).toFixed(1)}h`;
    }
    const kpiMttrEl = document.getElementById('kpi-mttr-horas');
    if (kpiMttrEl) kpiMttrEl.textContent = `⏱️ MTTR: ${mttrText}`;

    // 7. Breakdown de Áreas Responsables, Controles y Subcontratistas
    this.renderAreasBreakdown(tickets);
    this.renderGerentesFulfillment(visitas);
    this.renderTopControles(visitas);
    this.renderSubcontratistasRanking(visitas);
  }


  // ========================================================
  // PARETO DE CONTROLES CRÍTICOS VULNERADOS
  // ========================================================
  renderTopControles(visitas) {
    const container = document.getElementById('top-controles-list');
    const countBadge = document.getElementById('kpi-total-desviaciones-count');
    if (!container) return;

    const CONTROLES_DEF = [
      { key: 'permisos', label: 'Charla Preoperacional IPC y Permiso / AST' },
      { key: 'epp', label: 'EPP Dieléctrico y Calzado de Seguridad' },
      { key: 'limpieza', label: 'Orden, Limpieza y Retiro de Desmonte' },
      { key: 'volquete', label: 'Vehículo / Cuñas en Pendiente' },
      { key: 'fotocheck', label: 'Fotocheck y SCTR Vigente' },
      { key: 'supervisor', label: 'Presencia de Supervisor en Campo' }
    ];

    const counts = {};
    CONTROLES_DEF.forEach(c => counts[c.key] = 0);
    let totalDesv = 0;

    visitas.forEach(v => {
      if (v.controles) {
        CONTROLES_DEF.forEach(c => {
          if (v.controles[c.key] === 'NO') {
            counts[c.key]++;
            totalDesv++;
          }
        });
      }
    });

    if (countBadge) {
      countBadge.textContent = `${totalDesv} desvío${totalDesv === 1 ? '' : 's'}`;
      countBadge.className = totalDesv > 0 
        ? "text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200"
        : "text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200";
    }

    const sorted = CONTROLES_DEF.map(c => ({ ...c, count: counts[c.key] }))
      .sort((a, b) => b.count - a.count);

    if (totalDesv === 0) {
      container.innerHTML = `
        <div class="p-3 text-center rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-medium">
          ✅ 100% de controles críticos cumplidos en las cuadrillas auditadas esta semana.
        </div>
      `;
      this.renderIcons();
      return;
    }

    container.innerHTML = sorted.map(item => {
      const pct = totalDesv > 0 ? Math.round((item.count / totalDesv) * 100) : 0;
      const isZero = item.count === 0;
      return `
        <div class="p-2 rounded-xl border ${isZero ? 'border-slate-100 bg-slate-50/50' : 'border-amber-200/80 bg-amber-50/30'} space-y-1">
          <div class="flex justify-between items-center text-xs">
            <span class="font-semibold text-slate-800 truncate max-w-[220px]">${item.label}</span>
            <span class="font-bold ${isZero ? 'text-slate-400' : 'text-amber-700'}">${item.count} falla${item.count === 1 ? '' : 's'} (${pct}%)</span>
          </div>
          <div class="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div class="h-full rounded-full transition-all duration-500 ${isZero ? 'bg-slate-300' : 'bg-amber-500'}" style="width: ${pct}%"></div>
          </div>
        </div>
      `;
    }).join('');

    this.renderIcons();
  }

  // ========================================================
  // DESEMPEÑO Y SEMÁFORO DE SUBCONTRATISTAS (12 EMPRESAS)
  // ========================================================
  renderSubcontratistasRanking(visitas) {
    const container = document.getElementById('subcontratistas-ranking-list');
    const countBadge = document.getElementById('kpi-subcontratistas-auditadas-count');
    if (!container) return;

    const oficiales = (window.SUBCONTRATISTAS_OFICIALES || [
      "ALIHCOM BUILD SAC", "ALVIMAR", "CAMPOS LATAM", "CONSORCIO CARTER RENSA",
      "ENCOSSA SAC", "EOS", "GRUCOIN S.A.C.", "GRUPO ACUARIUS", "GRUPO ENERGIA",
      "KIMSA", "NATURAL GAS COMPANY", "PRODUCSA", "Personal Propio Tecsur"
    ]);

    const stats = {};
    oficiales.forEach(s => {
      stats[s] = { total: 0, conforme: 0, conTicket: 0, sumStars: 0 };
    });

    visitas.forEach(v => {
      const reg = v.regimen || "Personal Propio Tecsur";
      if (!stats[reg]) stats[reg] = { total: 0, conforme: 0, conTicket: 0, sumStars: 0 };
      stats[reg].total++;
      stats[reg].sumStars += (v.estrellas || 5);
      if (v.tieneTicket) {
        stats[reg].conTicket++;
      } else {
        stats[reg].conforme++;
      }
    });

    const auditadas = Object.keys(stats).filter(k => stats[k].total > 0);
    const pendientes = Object.keys(stats).filter(k => stats[k].total === 0 && k !== "Personal Propio Tecsur");

    if (countBadge) {
      countBadge.textContent = `${auditadas.length}/12 Empresas Auditadas`;
    }

    const sortedAuditadas = auditadas.map(name => {
      const s = stats[name];
      const pct = Math.round((s.conforme / s.total) * 100);
      const avgStars = (s.sumStars / s.total).toFixed(1);
      return { name, ...s, pct, avgStars };
    }).sort((a, b) => b.pct - a.pct || b.total - a.total);

    let html = sortedAuditadas.map(c => {
      let badgeClass = "bg-emerald-50 text-emerald-800 border-emerald-200";
      let badgeText = `${c.pct}% Conforme`;
      let barColor = "bg-emerald-500";
      if (c.pct < 60) {
        badgeClass = "bg-rose-50 text-rose-800 border-rose-200";
        badgeText = `${c.pct}% Observado (Ticket)`;
        barColor = "bg-rose-500";
      } else if (c.pct < 100) {
        badgeClass = "bg-amber-50 text-amber-800 border-amber-200";
        badgeText = `${c.pct}% Regular`;
        barColor = "bg-amber-500";
      }

      return `
        <div class="p-2.5 rounded-xl border border-slate-200/80 bg-slate-50/50 space-y-1.5 hover:bg-slate-50 transition">
          <div class="flex items-center justify-between text-xs">
            <div>
              <p class="font-bold text-slate-900">${c.name}</p>
              <p class="text-[10px] text-slate-500">${c.total} cuadrilla${c.total === 1 ? '' : 's'} auditada${c.total === 1 ? '' : 's'} · ⭐ ${c.avgStars}</p>
            </div>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${badgeClass}">
              ${badgeText}
            </span>
          </div>
          <div class="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <div class="h-full rounded-full transition-all duration-500 ${barColor}" style="width: ${c.pct}%"></div>
          </div>
        </div>
      `;
    }).join('');

    if (pendientes.length > 0) {
      html += `
        <details class="text-[11px] text-slate-500 pt-1">
          <summary class="cursor-pointer font-semibold text-slate-600 hover:text-tecsur-blue">
            Ver ${pendientes.length} subcontratistas sin visitas esta semana
          </summary>
          <div class="grid grid-cols-2 gap-1.5 mt-2 pl-2 border-l-2 border-slate-200 text-[10px]">
            ${pendientes.map(p => `<span class="text-slate-600 truncate">• ${p}</span>`).join('')}
          </div>
        </details>
      `;
    }

    container.innerHTML = html;
    this.renderIcons();
  }

  renderAreasBreakdown(tickets) {
    const breakdownEl = document.getElementById('areas-breakdown');
    if (!breakdownEl) return;

    // Conteo por área
    const counts = {};
    AREAS_RESOLUTORAS.forEach(a => counts[a] = 0);
    tickets.forEach(t => {
      counts[t.areaResponsable] = (counts[t.areaResponsable] || 0) + 1;
    });

    const maxCount = Math.max(...Object.values(counts), 1);

    breakdownEl.innerHTML = AREAS_RESOLUTORAS.map(area => {
      const c = counts[area] || 0;
      const pct = Math.round((c / maxCount) * 100);
      return `
        <div class="space-y-1">
          <div class="flex justify-between text-[11px]">
            <span class="font-medium text-slate-700 truncate max-w-[240px]">${area}</span>
            <span class="font-bold text-slate-900">${c} tickets</span>
          </div>
          <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div class="bg-tecsur-blue h-full rounded-full transition-all duration-500" style="width: ${pct}%"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  updateBadgeCounts() {
    const tickets = this.getTickets();
    const openTickets = tickets.filter(t => t.estado !== 'Cerrado').length;
    const dot = document.getElementById('nav-ticket-dot');
    if (dot) {
      if (openTickets > 0) {
        dot.classList.remove('hidden');
      } else {
        dot.classList.add('hidden');
      }
    }
  }

  resetData() {
    if (confirm("¿Deseas reiniciar los datos de demostración con las inspecciones y tickets semilla oficiales?")) {
      localStorage.removeItem('tecsur_gemba_visitas');
      localStorage.removeItem('tecsur_gemba_tickets');
      localStorage.removeItem('tecsur_gemba_active_gerente');
      this.init();
      alert("✅ Datos restaurados exitosamente.");
    }
  }

  // ========================================================
  // NAVEGACIÓN ENTRE TABS
  // ========================================================
  switchTab(tabName) {
    const target = (tabName === 'comite') ? 'dashboard' : tabName;
    this.currentTab = target;

    // Vistas
    const views = {
      visita: document.getElementById('view-visita'),
      tickets: document.getElementById('view-tickets'),
      dashboard: document.getElementById('view-dashboard')
    };

    Object.keys(views).forEach(key => {
      if (views[key]) {
        if (key === target) {
          views[key].classList.remove('hidden');
        } else {
          views[key].classList.add('hidden');
        }
      }
    });

    // Botones de Tab
    const tabBtns = {
      visita: document.getElementById('tab-visita'),
      tickets: document.getElementById('tab-tickets'),
      dashboard: document.getElementById('tab-dashboard')
    };

    Object.keys(tabBtns).forEach(key => {
      const btn = tabBtns[key];
      if (btn) {
        if (key === target) {
          btn.className = 'tab-btn flex flex-col items-center justify-center gap-1 text-tecsur-blue font-bold';
        } else {
          btn.className = 'tab-btn flex flex-col items-center justify-center gap-1 text-slate-400 font-medium hover:text-slate-700';
        }
      }
    });

    if (target === 'tickets') {
      this.renderTickets();
    } else if (target === 'dashboard') {
      this.updateDashboardKPIs();
    }

    this.renderIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Instanciar y exponer globalmente para eventos inline HTML
const app = new TecsurGembaApp();
window.app = app;
// App expuesta globalmente en window.app


})();
