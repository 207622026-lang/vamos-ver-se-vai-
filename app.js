// App Logic - Mindful Control & Resiliência (Portal Unificado)

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSensoryTimer();
  init24hPromise();
  initConstructiveAnger();
  initCrisisChecklist();
  initCognitiveReframing();
  initLearningReflection();
  initScribbleArea();
  initDecisionWizard();
  initPhysiologyChecklist();
  initAccordion();
  initDignitySimulator();
  initPhilosophySection();
  initComplicationsSection();
  initHardTruthsSection();
  initAutoAnalysisSection();
  initDiaryLogs();
});

/* ==========================================================================
   Navigation (SPA Tabs)
   ========================================================================== */
function initNavigation() {
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section-block');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);

      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      sections.forEach(section => {
        section.classList.remove('active-section');
        if (section.getAttribute('id') === targetId) {
          section.classList.add('active-section');
        }
      });

      window.scrollTo(0, 0);
      playTone(620, 'sine', 0.05);
    });
  });
}

/* ==========================================================================
   Notification Toast
   ========================================================================== */
function showToast(message) {
  const toast = document.getElementById('toast-el');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  if (toast.timeoutId) {
    clearTimeout(toast.timeoutId);
  }

  toast.timeoutId = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* ==========================================================================
   Pilar 1: Quebrando a Visão de Túnel
   ========================================================================== */
function initSensoryTimer() {
  const startBtn = document.getElementById('btn-start-sensory');
  const display = document.getElementById('sensory-timer-val');
  let interval = null;
  let running = false;

  if (!startBtn || !display) return;

  startBtn.addEventListener('click', () => {
    if (running) return;

    running = true;
    startBtn.disabled = true;
    startBtn.textContent = 'Resetando...';
    playTone(320, 'sine', 0.2);

    let seconds = 30;
    display.textContent = `${seconds}s`;

    interval = setInterval(() => {
      seconds--;
      display.textContent = `${seconds}s`;

      if (seconds > 0) {
        playTone(390, 'sine', 0.08);
      } else {
        clearInterval(interval);
        running = false;
        startBtn.disabled = false;
        startBtn.textContent = 'Iniciar Choque Sensorial';
        display.textContent = '30s';

        playTone(523.25, 'sine', 0.3);
        setTimeout(() => playTone(659.25, 'sine', 0.3), 120);

        showToast("Ruptura sensorial concluída! Sistema vagal ativado.");
        registerResilienceAction("Realizei ruptura sensorial fria de 30s");
      }
    }, 1000);
  });
}

function init24hPromise() {
  const promiseBtn = document.getElementById('btn-sign-promise');
  if (!promiseBtn) return;

  promiseBtn.addEventListener('click', () => {
    playTone(587.33, 'sine', 0.25);
    setTimeout(() => playTone(698.46, 'sine', 0.25), 120);

    registerResilienceAction("Assinei o compromisso de 24 horas: decidi adiar decisões definitivas e atravessar as próximas horas.");
    showToast("Compromisso assinado. Decisão adiada por 24 horas.");
    
    promiseBtn.disabled = true;
    promiseBtn.textContent = 'Compromisso Assinado (Válido hoje)';
    promiseBtn.style.opacity = '0.7';
  });
}

/* ==========================================================================
   Pilar 2: Canalizando a Frustração
   ========================================================================== */
function initConstructiveAnger() {
  const input = document.getElementById('fuel-input');
  const btn = document.getElementById('btn-save-fuel');
  const display = document.getElementById('active-fuel-display-el');

  if (!input || !btn || !display) return;

  btn.addEventListener('click', () => {
    const text = input.value.trim();
    if (!text) return;

    playTone(493.88, 'sine', 0.2);
    setTimeout(() => playTone(587.33, 'sine', 0.2), 100);

    display.style.display = 'block';
    display.innerHTML = `<strong>Combustível Ativo:</strong> "Eu recuso aceitar que ${text}"`;

    registerResilienceAction(`Canalizei raiva construtiva: "Eu recuso aceitar que ${text}"`);
    input.value = '';
    showToast("Frustração canalizada em combustível!");
  });

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      btn.click();
    }
  });
}

function initCrisisChecklist() {
  const check1 = document.getElementById('win-check-1');
  const check2 = document.getElementById('win-check-2');
  const check3 = document.getElementById('win-check-3');
  const check4 = document.getElementById('win-check-4');

  const checklist = [check1, check2, check3, check4];

  checklist.forEach((cb, idx) => {
    if (!cb) return;
    cb.addEventListener('change', () => {
      if (cb.checked) {
        const text = cb.parentElement.querySelector('span').textContent;
        playTone(440 + (idx * 60), 'sine', 0.15);
        registerResilienceAction(`Micro-vitória física: ${text}`);
      }
    });
  });
}

/* ==========================================================================
   Pilar 3: Desconstruindo o Sofrimento
   ========================================================================== */
function initCognitiveReframing() {
  const input = document.getElementById('reframing-input');
  const applyBtn = document.getElementById('btn-apply-reframing');
  const resultBox = document.getElementById('reframing-result-el');
  const resultText = document.getElementById('reframing-result-text-el');
  const saveBtn = document.getElementById('btn-save-reframing');

  if (!input || !applyBtn || !resultBox || !resultText || !saveBtn) return;

  applyBtn.addEventListener('click', () => {
    const text = input.value.trim().toLowerCase();
    if (!text) return;

    let reframed = '';

    if (text.includes('sempre') || text.includes('nunca')) {
      reframed = "Esta crise é um contratempo temporário e localizado. Tratar a dor como perpétua ('sempre' ou 'nunca') é um viés cognitivo irracional. Cada dia é um ciclo independente.";
    } else if (text.includes('tudo') || text.includes('nada') || text.includes('estraguei')) {
      reframed = "Eu cometi um erro em uma atividade isolada hoje. Outros aspectos da minha existência (como minha fisiologia, respiração e capacidade de agir) continuam sob meu domínio.";
    } else if (text.includes('fracasso') || text.includes('inutil') || text.includes('inútil')) {
      reframed = "Eu cometi um erro ou falhei em um teste pontual. A falha é um fato técnico que ensina a ajustar o próximo passo, não define o meu valor integral como ser humano.";
    } else {
      reframed = "Eu estou vivenciando um momento de sofrimento intenso hoje. Aceito esse desconforto como temporário e decido focar exclusivamente no menor passo prático seguinte.";
    }

    resultText.textContent = reframed;
    resultBox.style.display = 'block';
    playTone(554.37, 'sine', 0.2);
  });

  saveBtn.addEventListener('click', () => {
    const origVal = input.value;
    const reframedVal = resultText.textContent;
    if (!origVal || !reframedVal) return;

    registerResilienceAction(`Reestruturei o fatalismo: de "${origVal}" para "${reframedVal}"`);
    input.value = '';
    resultBox.style.display = 'none';
    showToast("Reestruturação registrada!");
  });
}

const learningQuotes = [
  "A crise atual não descreve quem você é. Ela é apenas a matéria-prima com a qual você esculpirá a sua versão mais forte.",
  "Encontrar um propósito na superação e decidir que uma crise não define o fim é o recurso mental mais poderoso contra a desesperança.",
  "A transformação da dor em combustível para a mudança e a recusa em aceitar o sofrimento são atitudes de enorme coragem.",
  "A dor atual é o teste de resiliência que pavimentará a bagagem de força que guiará você e outras pessoas no futuro."
];

function initLearningReflection() {
  const quoteEl = document.getElementById('reflection-quote-el');
  const btn = document.getElementById('btn-next-reflection');
  let currentIdx = 0;

  if (!quoteEl || !btn) return;

  btn.addEventListener('click', () => {
    currentIdx = (currentIdx + 1) % learningQuotes.length;

    quoteEl.style.opacity = '0';
    quoteEl.style.transform = 'translateX(-10px)';
    quoteEl.style.transition = 'opacity 0.2s, transform 0.2s';
    
    playTone(493.88, 'sine', 0.08);

    setTimeout(() => {
      quoteEl.textContent = `"${learningQuotes[currentIdx]}"`;
      quoteEl.style.opacity = '1';
      quoteEl.style.transform = 'translateX(0)';
      registerResilienceAction("Refleti sobre o propósito da superação e do aprendizado na crise");
    }, 200);
  });
}

/* ==========================================================================
   Pilar 4: Válvula de Escape
   ========================================================================== */
function initScribbleArea() {
  const textarea = document.getElementById('scribble-textarea');
  const count = document.getElementById('scribble-char-count');
  const clearBtn = document.getElementById('btn-clear-scribble');
  const explanation = document.getElementById('scribble-ex-el');

  if (!textarea || !count || !clearBtn || !explanation) return;

  textarea.addEventListener('input', () => {
    count.textContent = `${textarea.value.length} caracteres`;
  });

  clearBtn.addEventListener('click', () => {
    if (!textarea.value.trim()) return;

    textarea.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    textarea.style.opacity = '0';
    textarea.style.transform = 'scale(0.96)';

    playTone(220, 'sawtooth', 0.45);

    setTimeout(() => {
      textarea.value = '';
      count.textContent = '0 caracteres';
      textarea.style.opacity = '1';
      textarea.style.transform = 'scale(1)';
      explanation.style.display = 'block';

      showToast("Pensamentos esvaziados!");
      registerResilienceAction("Utilizei a válvula de escape para esvaziar pensamentos intrusivos e vê-los de fora.");
    }, 450);
  });
}

/* ==========================================================================
   Seção 2: Tomada de Decisão Lógica (Wizard)
   ========================================================================== */
let wizardStep = 1;
const totalWizardSteps = 4;
let selectedWorstOption = null;
let logicalOptionsList = [];

function initDecisionWizard() {
  const prevBtn = document.getElementById('wizard-prev-btn');
  const nextBtn = document.getElementById('wizard-next-btn');
  const startBreath = document.getElementById('start-breath-btn');
  const breathCircle = document.getElementById('breath-circle-el');
  const breathInstruction = document.getElementById('breath-instruction-el');
  const worstOpts = document.querySelectorAll('.worst-scenario-option');
  const addOptBtn = document.getElementById('btn-add-option');
  const optInput = document.getElementById('option-input');
  const saveBtn = document.getElementById('btn-save-decision-diary');

  if (!prevBtn || !nextBtn || !startBreath || !breathCircle) return;

  // Breath controller
  let breathingActive = false;
  startBreath.addEventListener('click', () => {
    if (breathingActive) return;
    breathingActive = true;
    startBreath.disabled = true;
    startBreath.textContent = 'Respirando...';

    let count = 10;
    playTone(392, 'sine', 0.15);

    const runTimer = () => {
      if (count > 6) {
        breathCircle.className = 'breath-circle inhale';
        breathCircle.textContent = count;
        breathInstruction.textContent = 'Inspire lentamente...';
      } else if (count > 4) {
        breathCircle.className = 'breath-circle hold';
        breathCircle.textContent = count;
        breathInstruction.textContent = 'Segure a respiração...';
      } else if (count > 0) {
        breathCircle.className = 'breath-circle exhale';
        breathCircle.textContent = count;
        breathInstruction.textContent = 'Solte o ar devagar...';
      } else {
        clearInterval(timerId);
        breathCircle.className = 'breath-circle';
        breathCircle.textContent = 'Pronto';
        breathInstruction.textContent = 'Fisiologia controlada.';
        startBreath.style.display = 'none';
        breathingActive = false;
        playTone(523.25, 'sine', 0.4);
        showToast("Pausa respiratória concluída!");
        return;
      }
      count--;
    };

    runTimer();
    const timerId = setInterval(runTimer, 1000);
  });

  // Worst Scenario Selection
  worstOpts.forEach(opt => {
    opt.addEventListener('click', () => {
      worstOpts.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      selectedWorstOption = opt;
      playTone(480, 'sine', 0.08);
    });
  });

  // Logical Options List
  function renderOptions() {
    const listContainer = document.getElementById('options-list-container');
    if (!listContainer) return;
    
    listContainer.innerHTML = '';
    logicalOptionsList.forEach((opt, idx) => {
      const row = document.createElement('div');
      row.className = 'option-item';
      if (opt.discarded) row.classList.add('discarded');
      if (opt.highlighted) row.classList.add('highlighted');

      row.innerHTML = `
        <span class="option-text">${opt.text}</span>
        <div class="option-actions">
          <button class="action-btn keep-btn" data-index="${idx}" title="Marcar como ideal">✓</button>
          <button class="action-btn discard-btn" data-index="${idx}" title="Descartar opção">✕</button>
        </div>
      `;
      listContainer.appendChild(row);
    });

    document.querySelectorAll('.keep-btn').forEach(b => {
      b.addEventListener('click', () => {
        const i = parseInt(b.getAttribute('data-index'));
        logicalOptionsList.forEach((o, idx) => o.highlighted = (idx === i));
        logicalOptionsList[i].discarded = false;
        renderOptions();
      });
    });

    document.querySelectorAll('.discard-btn').forEach(b => {
      b.addEventListener('click', () => {
        const i = parseInt(b.getAttribute('data-index'));
        logicalOptionsList[i].discarded = !logicalOptionsList[i].discarded;
        if (logicalOptionsList[i].discarded) {
          logicalOptionsList[i].highlighted = false;
        }
        renderOptions();
      });
    });
  }

  addOptBtn.addEventListener('click', () => {
    const val = optInput.value.trim();
    if (!val) return;
    logicalOptionsList.push({ text: val, discarded: false, highlighted: false });
    optInput.value = '';
    renderOptions();
    playTone(520, 'sine', 0.06);
  });

  optInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addOptBtn.click();
  });

  // Navigation logic
  function updateWizardNav() {
    const dots = document.querySelectorAll('#wizard-progress-dots .wizard-step-dot');
    const panels = document.querySelectorAll('.wizard-step-panel');

    dots.forEach((dot, idx) => {
      const stepNum = idx + 1;
      dot.className = 'wizard-step-dot';
      if (stepNum === wizardStep) {
        dot.classList.add('active');
      } else if (stepNum < wizardStep) {
        dot.classList.add('completed');
        dot.textContent = '✓';
      } else {
        dot.textContent = stepNum;
      }
    });

    panels.forEach(p => p.classList.remove('active-panel'));
    if (wizardStep <= totalWizardSteps) {
      document.getElementById(`wizard-step-${wizardStep}`).classList.add('active-panel');
    } else {
      document.getElementById('wizard-step-result').classList.add('active-panel');
      generateFinalPlan();
    }
  }

  nextBtn.addEventListener('click', () => {
    if (wizardStep > totalWizardSteps) {
      // Reset wizard
      wizardStep = 1;
      selectedWorstOption = null;
      logicalOptionsList = [];
      document.getElementById('clarity-input').value = '';
      worstOpts.forEach(o => o.classList.remove('selected'));
      startBreath.style.display = 'inline-flex';
      startBreath.disabled = false;
      startBreath.textContent = 'Iniciar Respiração';
      breathCircle.textContent = 'Pronto';
      renderOptions();
      updateWizardNav();
      return;
    }

    if (wizardStep === 1 && !breathingActive && breathCircle.textContent !== 'Pronto') {
      showToast("Realize o reset de respiração antes de avançar.");
      return;
    }

    if (wizardStep === 2) {
      const stepVal = document.getElementById('clarity-input').value.trim();
      if (!stepVal) {
        showToast("Defina seu menor passo prático antes de avançar.");
        return;
      }
    }

    if (wizardStep === 3 && !selectedWorstOption) {
      showToast("Selecione um impacto temporal do pior cenário.");
      return;
    }

    if (wizardStep === 4 && logicalOptionsList.length === 0) {
      showToast("Adicione ao menos uma alternativa de ação.");
      return;
    }

    wizardStep++;
    updateWizardNav();
    playTone(450 + (wizardStep * 40), 'sine', 0.1);
  });

  prevBtn.addEventListener('click', () => {
    if (wizardStep > 1) {
      wizardStep--;
      updateWizardNav();
      playTone(400, 'sine', 0.08);
    }
  });

  function generateFinalPlan() {
    const clarityText = document.getElementById('clarity-input').value;
    const worstVal = selectedWorstOption ? selectedWorstOption.querySelector('.worst-scenario-time').textContent : 'N/A';
    
    let chosenOption = 'Nenhuma alternativa selecionada';
    const idealOpt = logicalOptionsList.find(o => o.highlighted);
    if (idealOpt) {
      chosenOption = idealOpt.text;
    } else {
      const activeOpts = logicalOptionsList.filter(o => !o.discarded);
      if (activeOpts.length > 0) chosenOption = activeOpts[0].text;
    }

    document.getElementById('result-clarity-val').textContent = clarityText;
    document.getElementById('result-worst-val').textContent = worstVal;
    document.getElementById('result-action-val').textContent = chosenOption;
  }

  saveBtn.addEventListener('click', () => {
    const clarityText = document.getElementById('result-clarity-val').textContent;
    const actionText = document.getElementById('result-action-val').textContent;
    
    registerResilienceAction(`Plano de Decisão Lógica: Focar em "${clarityText}" usando a alternativa "${actionText}"`);
    showToast("Decisão gravada no Diário!");
    
    wizardStep = 1;
    selectedWorstOption = null;
    logicalOptionsList = [];
    document.getElementById('clarity-input').value = '';
    worstOpts.forEach(o => o.classList.remove('selected'));
    startBreath.style.display = 'inline-flex';
    startBreath.disabled = false;
    startBreath.textContent = 'Iniciar Respiração';
    breathCircle.textContent = 'Pronto';
    renderOptions();
    updateWizardNav();
    
    // Switch to diary tab
    document.getElementById('nav-diary-btn').click();
  });
}

/* ==========================================================================
   Seção 3: Fisiologia & Aprendizado (Checklist + Accordion)
   ========================================================================== */
function initPhysiologyChecklist() {
  const c1 = document.getElementById('phys-check-1');
  const c2 = document.getElementById('phys-check-2');
  const c3 = document.getElementById('phys-check-3');
  const c4 = document.getElementById('phys-check-4');
  const chronic = document.getElementById('phys-check-chronic-sleep');
  const feedbackEl = document.getElementById('phys-checklist-feedback');

  const checklist = [c1, c2, c3, c4, chronic];

  function updateFeedback() {
    const checked = checklist.map(c => c ? c.checked : false);
    let alerts = [];
    let negativeFlags = 0;

    // Check chronic sleep
    if (checked[4]) {
      negativeFlags++;
      alerts.push("😴 <b>Déficit de Sono Crônico:</b> Como sua restrição é crônica (5h-6h/dia) e você não pode simplesmente dormir agora, faça treinos/estudos curtos de <b>20 a 30 minutos</b>, mude seu foco de 'reflexo puro' para 'leitura de padrões' e faça pausas de **NSDR/Yoga Nidra de 10-15 minutos sem telas**.");
    } else {
      if (!checked[0]) {
        negativeFlags++;
        alerts.push("💤 <b>Sono Insuficiente:</b> A falta de descanso impede a fixação de novas sinapses. Durma bem para consolidar seu aprendizado.");
      }
    }

    if (!checked[1]) {
      negativeFlags++;
      alerts.push("💧 <b>Falta de Nutrientes:</b> Glicose cerebral baixa dificulta a retenção. Coma algo leve e beba um copo d'água.");
    }

    if (checked[2]) {
      negativeFlags++;
      alerts.push("🚶‍♂️ <b>Estudo Prolongado (Excesso):</b> Ficar mais de 2h na mesma tarefa satura os receptores. Faça uma pausa de 10 minutos.");
    }

    if (checked[3]) {
      negativeFlags++;
      alerts.push("🧘‍♂️ <b>Tensão Física Elevada:</b> Ombros contraídos acionam o reflexo de perigo. Alongue-se agora.");
    }

    if (negativeFlags > 0) {
      feedbackEl.className = 'checklist-feedback active-alert';
      feedbackEl.innerHTML = `
        <div style="font-weight:700; margin-bottom:0.5rem;">⚠️ Recomendações Biológicas Imediatas:</div>
        <ul style="padding-left:1.2rem; display:flex; flex-direction:column; gap:0.4rem; font-size:0.8rem;">
          ${alerts.map(a => `<li>${a}</li>`).join('')}
        </ul>
      `;
    } else {
      feedbackEl.className = 'checklist-feedback ok-alert';
      feedbackEl.innerHTML = "✅ <b>Fisiologia Básica Atendida.</b> Se o bloqueio persistir, você pode estar em um <b>Platô de Consolidação</b> ou enfrentando o **Paradoxo do Estresse** (verifique os acordeões ao lado).";
    }
  }

  checklist.forEach(cb => {
    if (cb) {
      cb.addEventListener('change', () => {
        updateFeedback();
        if (cb.checked) {
          playTone(400, 'sine', 0.08);
        }
      });
    }
  });
}

function initAccordion() {
  const items = document.querySelectorAll('#motivation-accordion .accordion-item');
  
  items.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      items.forEach(i => i.classList.remove('active'));
      
      if (!isActive) {
        item.classList.add('active');
        playTone(450, 'sine', 0.08);
      }
    });
  });
}

/* ==========================================================================
   Seção 4: Simulador de Dignidade (Chat de 4 Cenários)
   ========================================================================== */
const simulatorScenarios = [
  {
    opponentName: "RivalBemSucedido",
    opponentText: "- Você quer mesmo comparar?<br>- Quer vir falar de responsabilidades?<br>Eu pelo menos tenho um alguém pra eu ter feito o que eu fiz, eu tenho uma namorada, coisa que quem sabe vc algum dia entenda.<br>- A é verdade eu me lembrei agora que você não consegue uma namorada nem se vc estiver pintado de ouro.<br>- Eu posso até só viver de momentos, mas mesmo sem me planejar eu consigo sair muito melhor que você, tanto nos estudos, nos jogos quanto em qualquer outro lugar, vc pode ver é só comparar as notas, literal tudo, mas rlx parceiro que um dia com muito esforço quem sabe vc chegue perto de me alcançar.",
    options: [
      {
        text: "Cara, eu ando exausto ultimamente e mal dou conta das coisas. E sério, nota não define quem é inteligente ou não.",
        reply: "Desculpas são fáceis. O fato é que eu me esforço e tenho resultados, e você só fica na mesma. Aceita que sou melhor.",
        type: "excuse",
        toxicityChange: 15,
        feedback: "❌ <b>Reação de Insegurança (Defensiva):</b> Tentar arranjar desculpas para justificar sua exaustão ou desmerecer as notas apenas valida a superioridade dele. Mostra que o ataque te feriu e você aceitou a régua de valor dele. Dignidade não é ser perfeito, mas perceber que você deu valor ao julgamento dele."
      },
      {
        text: "Você é só um exibido chato que ninguém suporta! Cala a boca e me deixa em paz!",
        reply: "Xingar só mostra como você se sente inferior e não tem argumentos. Fique aí com a sua inveja.",
        type: "rage",
        toxicityChange: 25,
        feedback: "❌ <b>Explosão de Raiva:</b> É a reação humana mais comum quando a dor aperta. Mas xingar mostra que ele conseguiu te descontrolar por completo. A raiva passa para o outro o controle da sua mente. O arrependimento depois faz parte de ser humano; acolha o aprendizado."
      },
      {
        text: "Se precisa diminuir alguém pra se sentir maior, talvez você não seja tão superior quanto pensa.",
        reply: "Hum... É... Enfim, só estava comentando. Deixa pra lá.",
        type: "pragmatic",
        toxicityChange: -100,
        feedback: "✅ <b>Firmeza com Dignidade:</b> Você escolheu não entrar na competição dele. Em vez de lutar com desculpas ou agressões, você colocou um limite direto apontando a insegurança dele. Essa atitude desarma o ataque por completo."
      }
    ]
  }
];

let activeScenarioIdx = 0;
let currentToxicity = 100;

function initDignitySimulator() {
  const selector = document.getElementById('scenario-selector');
  if (selector) {
    selector.addEventListener('change', (e) => {
      activeScenarioIdx = parseInt(e.target.value);
      resetScenario();
    });
  }

  resetScenario();
}

function resetScenario() {
  const chatContainer = document.getElementById('simulator-chat-container');
  const optionsContainer = document.getElementById('chat-options-container');
  const feedback = document.getElementById('chat-scenario-feedback');
  
  if (!chatContainer || !optionsContainer || !feedback) return;

  currentToxicity = 100;
  updateToxicityGauge();
  
  chatContainer.innerHTML = '';
  optionsContainer.innerHTML = '';
  feedback.style.display = 'none';

  const scenario = simulatorScenarios[0];
  appendBubble(scenario.opponentText, 'opponent', scenario.opponentName, chatContainer, false);

  scenario.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'chat-option-btn';
    btn.textContent = opt.text;
    
    btn.addEventListener('click', () => {
      optionsContainer.innerHTML = '';
      appendBubble(opt.text, 'user', '', chatContainer, true);
      playTone(450, 'sine', 0.1);

      setTimeout(() => {
        appendBubble(opt.reply, 'opponent', scenario.opponentName, chatContainer, true);
        
        currentToxicity = Math.max(0, Math.min(100, currentToxicity + opt.toxicityChange));
        if (opt.toxicityChange < 0) currentToxicity = 0; // complete de-escalation
        
        updateToxicityGauge();

        feedback.style.display = 'block';
        let feedbackClass = 'failure';
        if (currentToxicity === 0) {
          feedbackClass = 'success';
        } else if (currentToxicity === 50) {
          feedbackClass = 'warning-feedback';
        }
        
        feedback.className = `simulator-feedback ${feedbackClass}`;
        
        let btnLabel = currentToxicity === 0 ? "Registrar Limite no Diário" : "Registrar Reflexão no Diário";
        
        feedback.innerHTML = `
          <p>${opt.feedback}</p>
          <div style="display:flex; gap:0.5rem; margin-top:0.75rem;">
            <button class="btn btn-primary btn-sm" id="btn-save-dignity-win" style="flex:1;">${btnLabel}</button>
            <button class="btn btn-secondary btn-sm" id="btn-retry-dignity" style="flex:1;">Refazer Caminho</button>
          </div>
        `;
        
        if (currentToxicity === 0) {
          playTone(660, 'sine', 0.25);
        } else {
          playTone(220, 'sawtooth', 0.3);
        }
        
        document.getElementById('btn-save-dignity-win')?.addEventListener('click', () => {
          let logText = currentToxicity === 0 
            ? "Defini um limite de dignidade assertivo diante de comparações alheias"
            : `Refleti sobre minha reação de ${currentToxicity === 50 ? 'competição' : 'explosão'} diante de comparações`;
          registerResilienceAction(logText);
          showToast("Reflexão gravada no Diário!");
          resetScenario();
          document.getElementById('nav-diary-btn').click();
        });
        
        document.getElementById('btn-retry-dignity')?.addEventListener('click', () => {
          resetScenario();
        });
      }, 800);
    });

    optionsContainer.appendChild(btn);
  });
}

function appendBubble(text, sender, name, container, autoScroll = true) {
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${sender}`;
  
  const prefix = name ? `<strong style="display:block; font-size:0.7rem; margin-bottom:0.15rem; opacity:0.85;">${name}</strong>` : '';
  bubble.innerHTML = `${prefix}${text}`;
  
  container.appendChild(bubble);
  if (autoScroll) {
    container.scrollTop = container.scrollHeight;
  } else {
    container.scrollTop = 0;
  }
}

function updateToxicityGauge() {
  const fill = document.getElementById('toxicity-gauge-fill');
  const text = document.getElementById('toxicity-pct-val');
  const label = document.querySelector('.toxicity-gauge .gauge-label');
  if (!fill || !text) return;

  if (label) label.textContent = "Intensidade Emocional:";

  fill.style.width = `${currentToxicity}%`;
  text.textContent = `${currentToxicity}%`;

  if (currentToxicity > 70) {
    fill.style.background = 'var(--color-danger)';
  } else if (currentToxicity > 30) {
    fill.style.background = 'var(--color-warning)';
  } else {
    fill.style.background = 'var(--color-success)';
  }
}

/* ==========================================================================
   Seção 5: Filosofia de Vida & Escolhas (Filtros & Marcar como Lido)
   ========================================================================== */
function initPhilosophySection() {
  const items = document.querySelectorAll('#philosophy-accordion .philosophy-item');
  const chips = document.querySelectorAll('.filter-chip-ph');

  // Accordion Expand/Collapse
  items.forEach(item => {
    const trigger = item.querySelector('.philosophy-trigger');
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all active philosophy items
      items.forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
        playTone(550, 'sine', 0.08);
      }
    });
  });

  // Category Filtering
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filter = chip.getAttribute('data-filter');

      items.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      playTone(600, 'sine', 0.05);
    });
  });

  // Mark as Read / Reflected Buttons
  const readButtons = document.querySelectorAll('.btn-mark-read');
  readButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent accordion collapse
      const title = btn.getAttribute('data-title');
      
      playTone(587.33, 'sine', 0.2);
      setTimeout(() => playTone(698.46, 'sine', 0.2), 100);

      registerResilienceAction(`Refleti deliberadamente sobre: "${title}"`);
      showToast("Reflexão registrada no Diário!");

      btn.disabled = true;
      btn.textContent = '✓ Reflexão Registrada';
      btn.style.opacity = '0.7';
    });
  });

  // Topic 18: Mas e se nada fizer sentido? checklist logic
  const senseCheckboxes = document.querySelectorAll('.sense-item-cb');
  const senseFeedback = document.getElementById('sense-feedback-note-el');

  senseCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const anyChecked = Array.from(senseCheckboxes).some(c => c.checked);
      if (anyChecked) {
        if (senseFeedback) senseFeedback.style.display = 'block';
      } else {
        if (senseFeedback) senseFeedback.style.display = 'none';
      }

      if (cb.checked) {
        playTone(480, 'sine', 0.08);
        const name = cb.getAttribute('data-name');
        registerResilienceAction(`Identifiquei algo que importa hoje: ${name}`);
      }
    });
  });
}

/* ==========================================================================
   Diário de Resiliência Log System
   ========================================================================== */
let resilienceLogs = [];

function initDiaryLogs() {
  const stored = localStorage.getItem('mindful_control_resilience_wins');
  if (stored) {
    try {
      resilienceLogs = JSON.parse(stored);
    } catch(e) {
      resilienceLogs = [];
    }
  }

  renderDiaryLogs();
  updateDiaryStats();
}

function registerResilienceAction(text) {
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];

  const lastEntry = resilienceLogs[resilienceLogs.length - 1];
  if (lastEntry && lastEntry.text === text && (now.getTime() - lastEntry.timestamp) < 3000) {
    return;
  }

  const newLog = {
    text: text,
    timestamp: now.getTime(),
    dateStr: dateStr
  };

  resilienceLogs.push(newLog);
  localStorage.setItem('mindful_control_resilience_wins', JSON.stringify(resilienceLogs));

  renderDiaryLogs();
  updateDiaryStats();
  triggerConfetti();
}

function renderDiaryLogs() {
  const container = document.getElementById('logs-list-el');
  const emptyMsg = document.getElementById('logs-empty-msg-el');
  if (!container) return;

  container.innerHTML = '';

  if (resilienceLogs.length === 0) {
    if (emptyMsg) container.appendChild(emptyMsg);
    return;
  }

  resilienceLogs.slice().reverse().slice(0, 20).forEach(act => {
    const row = document.createElement('div');
    row.className = 'logs-row';
    row.innerHTML = `
      <span class="logs-row-text">🛡️ ${act.text}</span>
      <span class="logs-row-time">${formatTime(act.timestamp)}</span>
    `;
    container.appendChild(row);
  });
}

function updateDiaryStats() {
  const totalEl = document.getElementById('total-actions-val');
  const streakEl = document.getElementById('streak-days-val');
  if (!totalEl || !streakEl) return;

  totalEl.textContent = resilienceLogs.length;

  if (resilienceLogs.length === 0) {
    streakEl.textContent = '0';
    return;
  }

  const uniqueDates = Array.from(new Set(resilienceLogs.map(a => a.dateStr)))
    .map(dStr => new Date(dStr))
    .sort((a, b) => b - a);

  let streak = 0;
  const today = new Date();
  today.setHours(0,0,0,0);

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  if (uniqueDates.length > 0) {
    const latestDate = uniqueDates[0];
    latestDate.setHours(0,0,0,0);

    if (latestDate.getTime() === today.getTime() || latestDate.getTime() === yesterday.getTime()) {
      streak = 1;
      for (let i = 0; i < uniqueDates.length - 1; i++) {
        const current = new Date(uniqueDates[i]);
        current.setHours(0,0,0,0);

        const next = new Date(uniqueDates[i+1]);
        next.setHours(0,0,0,0);

        const diffTime = Math.abs(current.getTime() - next.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          streak++;
        } else {
          break;
        }
      }
    }
  }

  streakEl.textContent = streak;
}

function formatTime(timestamp) {
  const d = new Date(timestamp);
  const hour = d.getHours().toString().padStart(2, '0');
  const min = d.getMinutes().toString().padStart(2, '0');
  return `às ${hour}:${min}`;
}

/* ==========================================================================
   Web Audio API Tone Generator
   ========================================================================== */
function playTone(frequency, type = 'sine', duration = 0.5) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch(e) {
    console.warn("Audio context blocked: ", e);
  }
}

/* ==========================================================================
   Confetti Particles System
   ========================================================================== */
function triggerConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#7ea383', '#9dbca1', '#4a6a8a', '#b28e93', '#88aa8d', '#ebcb8b'];
  const particles = [];
  const particleCount = 35;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() * 80 - 40),
      y: canvas.height - 20,
      vx: (Math.random() * 10 - 5),
      vy: -10 - (Math.random() * 8),
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 4 + Math.random() * 5,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() * 0.18) - 0.09,
      opacity: 1
    });
  }

  let aniFrameId = null;

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.4;
      p.vx *= 0.98;
      p.rotation += p.rotationSpeed;
      p.opacity -= 0.018;

      if (p.opacity > 0) {
        active = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (active) {
      aniFrameId = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(aniFrameId);
    }
  }

  animate();
}

function initComplicationsSection() {
  const assessBtn = document.getElementById('btn-assess-reciprocity');
  const feedbackEl = document.getElementById('assessment-feedback-el');
  const dryBtn = document.getElementById('btn-dry-retreat');
  const dryFeedbackEl = document.getElementById('dry-retreat-feedback');
  const dryChatContainer = document.getElementById('dry-chat-container');

  // Reciprocity Assessment
  if (assessBtn && feedbackEl) {
    assessBtn.addEventListener('click', () => {
      const cbInterest = document.getElementById('recip-cb-interest');
      const cbEffort = document.getElementById('recip-cb-effort');
      const cbCare = document.getElementById('recip-cb-care');
      
      if (!cbInterest || !cbEffort || !cbCare) return;

      let score = 0;
      if (cbInterest.checked) score++;
      if (cbEffort.checked) score++;
      if (cbCare.checked) score++;

      feedbackEl.style.display = 'block';
      
      let feedbackClass = 'failure';
      let title = '';
      let desc = '';

      if (score === 3) {
        feedbackClass = 'success';
        title = '🧘 Relação Equilibrada';
        desc = 'Há demonstração de interesse, esforço e cuidado mútuo na maior parte do tempo. Diferenças de ritmo ou comunicação são normais em seres humanos. Vocês funcionam de formas diferentes, mas coexistindo em equilíbrio.';
        playTone(660, 'sine', 0.2);
      } else if (score === 1 || score === 2) {
        feedbackClass = 'warning-feedback';
        title = '⚠️ Relação Oscilante ou Descompensada';
        desc = 'A outra pessoa falha em alguns aspectos fundamentais (como no interesse consistente ou no esforço de manter o contato). Experimente dar espaço, diminuir o esforço unilateral e observar se o padrão muda.';
        playTone(390, 'sine', 0.2);
      } else {
        feedbackClass = 'failure';
        title = '❌ Relação Desequilibrada';
        desc = 'Nenhum dos três pilares fundamentais está presente. Você não consegue carregar a relação sozinho. Lembre-se: não se trata de alguém complicado, mas de um padrão de ausência de reciprocidade.';
        playTone(220, 'sawtooth', 0.35);
      }

      feedbackEl.className = `simulator-feedback ${feedbackClass}`;
      feedbackEl.innerHTML = `
        <p><strong>${title}:</strong> ${desc}</p>
        <button class="btn btn-secondary btn-sm" id="btn-save-reciprocity-log" style="margin-top:0.75rem; width:100%;">Registrar Diagnóstico no Diário</button>
      `;

      document.getElementById('btn-save-reciprocity-log')?.addEventListener('click', (e) => {
        e.target.disabled = true;
        e.target.textContent = 'Gravado!';
        let textLog = score === 3 
          ? "Avaliei um relacionamento: diagnóstico de Relação Equilibrada"
          : (score > 0 ? "Avaliei um relacionamento: diagnóstico de Relação Oscilante (decidi dar espaço)" : "Avaliei um relacionamento: diagnóstico de Relação Desequilibrada (decidi impor limites)");
        registerResilienceAction(textLog);
        showToast("Diagnóstico registrado no Diário!");
        document.getElementById('nav-diary-btn').click();
      });
    });
  }

  // Dry message simulator
  if (dryBtn && dryFeedbackEl && dryChatContainer) {
    dryBtn.addEventListener('click', () => {
      dryBtn.disabled = true;
      dryBtn.textContent = 'Recuando...';
      playTone(450, 'sine', 0.1);

      // Append bubble simulating retreat
      const retreatBubble = document.createElement('div');
      retreatBubble.className = 'chat-bubble user';
      retreatBubble.style.opacity = '0.7';
      retreatBubble.style.fontStyle = 'italic';
      retreatBubble.innerHTML = '[Recuo Tático: Parei de enviar mensagens e dei espaço]';
      
      dryChatContainer.appendChild(retreatBubble);
      dryChatContainer.scrollTop = dryChatContainer.scrollHeight;

      setTimeout(() => {
        dryBtn.textContent = 'Simular Recuo (Dar Espaço)';
        dryFeedbackEl.style.display = 'block';
        dryFeedbackEl.innerHTML = `
          <p>✨ <b>Recuo Efetuado:</b> Você optou por não insistir nem implorar por atenção de quem responde seco. Se você parar de puxar, a relação continuará existindo? Deixe essa pergunta ser respondida pela atitude do outro, sem que isso mude o seu valor próprio.</p>
          <button class="btn btn-primary btn-sm" id="btn-save-dry-retreat" style="margin-top:0.75rem; width:100%;">Registrar Autonomia no Diário</button>
        `;
        playTone(660, 'sine', 0.2);

        document.getElementById('btn-save-dry-retreat')?.addEventListener('click', (e) => {
          e.target.disabled = true;
          e.target.textContent = 'Gravado!';
          registerResilienceAction("Simulei recuo em diálogo seco e decidi preservar minha autonomia e espaço");
          showToast("Reflexão registrada no Diário!");
          document.getElementById('nav-diary-btn').click();
        });
      }, 1000);
    });
  }
}

function initHardTruthsSection() {
  const cbItems = document.querySelectorAll('.cb-truth-item');
  const progressVal = document.getElementById('truth-progress-val');
  const progressFill = document.getElementById('truth-progress-fill');
  const randomBtn = document.getElementById('btn-meditate-random-truth');
  const saveBtn = document.getElementById('btn-save-truths-diary');

  if (cbItems.length === 0) return;

  function updateProgress() {
    let checkedCount = 0;
    cbItems.forEach(cb => {
      const idx = cb.getAttribute('data-index');
      const card = document.getElementById(`truth-card-${idx}`);
      const dot = document.querySelector(`.mini-truth-dot[data-dot="${idx}"]`);
      
      if (cb.checked) {
        checkedCount++;
        if (card) {
          card.style.borderLeftColor = 'var(--color-success)';
          card.style.background = 'linear-gradient(135deg, rgba(16, 23, 38, 0.75), rgba(136, 170, 141, 0.04))';
          card.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2), inset 0 0 12px rgba(136, 170, 141, 0.05)';
        }
        if (dot) {
          dot.style.background = 'var(--color-primary-light)';
          dot.style.color = 'var(--bg-dark)';
          dot.style.borderColor = 'var(--color-primary-light)';
          dot.style.boxShadow = '0 0 10px rgba(157, 188, 161, 0.3)';
        }
      } else {
        if (card) {
          const index = parseInt(idx);
          card.style.borderLeftColor = index % 2 === 0 ? 'var(--color-accent)' : 'var(--color-primary-light)';
          card.style.background = '';
          card.style.boxShadow = '';
        }
        if (dot) {
          dot.style.background = 'rgba(255, 255, 255, 0.01)';
          dot.style.color = 'var(--text-secondary)';
          dot.style.borderColor = 'var(--border-color)';
          dot.style.boxShadow = '';
        }
      }
    });

    if (progressVal) progressVal.textContent = `${checkedCount} / ${cbItems.length}`;
    
    // Update SVG Progress Ring
    const progressRing = document.getElementById('truth-progress-ring');
    const progressPctText = document.getElementById('truth-progress-pct');
    if (progressRing) {
      const radius = 28;
      const circumference = 2 * Math.PI * radius; // ~175.92
      const pct = checkedCount / cbItems.length;
      const offset = circumference - (pct * circumference);
      progressRing.style.strokeDashoffset = offset;
      
      // Update color based on level
      if (checkedCount === cbItems.length) {
        progressRing.style.stroke = 'var(--color-success)';
      } else if (checkedCount > 6) {
        progressRing.style.stroke = 'var(--color-warning)';
      } else {
        progressRing.style.stroke = 'var(--color-primary-light)';
      }
    }
    if (progressPctText) {
      const percent = Math.round((checkedCount / cbItems.length) * 100);
      progressPctText.textContent = `${percent}%`;
      if (checkedCount === cbItems.length) {
        progressPctText.style.color = 'var(--color-success)';
      } else {
        progressPctText.style.color = '#ffffff';
      }
    }
  }

  cbItems.forEach(cb => {
    cb.addEventListener('change', () => {
      playTone(450, 'sine', 0.05);
      updateProgress();
    });
  });

  // Meditate Random Truth
  if (randomBtn) {
    randomBtn.addEventListener('click', () => {
      const randIdx = Math.floor(Math.random() * cbItems.length) + 1;
      const card = document.getElementById(`truth-card-${randIdx}`);
      
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Glow effect
        const originalBorderColor = card.style.borderLeftColor;
        card.style.borderColor = 'var(--color-primary-light)';
        card.style.boxShadow = '0 0 20px rgba(136, 170, 141, 0.4)';
        
        playTone(520, 'sine', 0.15);
        setTimeout(() => {
          playTone(660, 'sine', 0.15);
        }, 120);

        showToast(`Reflita sobre a Verdade dura #${randIdx}`);

        setTimeout(() => {
          card.style.borderColor = '';
          card.style.boxShadow = '';
          card.style.borderLeftColor = originalBorderColor;
        }, 2000);
      }
    });
  }

  // Save to diary
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      let checkedCount = 0;
      cbItems.forEach(cb => { if (cb.checked) checkedCount++; });

      if (checkedCount === 0) {
        showToast("Marque pelo menos uma reflexão como concluída!");
        playTone(200, 'sawtooth', 0.2);
        return;
      }

      saveBtn.disabled = true;
      saveBtn.textContent = 'Gravado!';
      
      registerResilienceAction(`Meditei e encarei ${checkedCount} verdades duras sobre a vida e incerteza`);
      showToast("Reflexões salvas no Diário!");
      playTone(660, 'sine', 0.25);
      
      if (checkedCount === cbItems.length) {
        fireConfetti();
      }

      setTimeout(() => {
        resetTruths();
        document.getElementById('nav-diary-btn').click();
      }, 1000);
    });
  }

  function resetTruths() {
    cbItems.forEach(cb => { cb.checked = false; cb.disabled = false; });
    if (saveBtn) {
      saveBtn.disabled = false;
      saveBtn.textContent = 'Registrar Meditações no Diário';
    }
    updateProgress();
  }

  updateProgress();
}

function initAutoAnalysisSection() {
  const relatoInput = document.getElementById('auto-analysis-relato');
  const egoSlider = document.getElementById('ego-slider');
  const egoVal = document.getElementById('ego-val');
  const egoFeedback = document.getElementById('ego-feedback-msg');
  const cbSteps = document.querySelectorAll('.cb-auto-step');
  const saveBtn = document.getElementById('btn-save-auto-analysis');

  if (!egoSlider) return;

  egoSlider.addEventListener('input', () => {
    const val = egoSlider.value;
    egoVal.textContent = `${val}%`;

    let feedbackMsg = '';
    if (val <= 25) {
      feedbackMsg = 'Humildade: Ego silenciado. Você tem plena abertura para identificar seus erros e priorizar a solução real.';
    } else if (val <= 55) {
      feedbackMsg = 'Equilíbrio: Seu ego tenta se justificar, mas há espaço para autocrítica sincera e reconhecimento de deslizes.';
    } else if (val <= 80) {
      feedbackMsg = 'Resistência: Você está gastando energia para provar que está certo. Cuidado para não focar apenas em autodefesa.';
    } else {
      feedbackMsg = 'Defesa Absoluta: Orgulho ativo. Você está tentando convencer a si mesmo de que é perfeito e a culpa é totalmente do outro.';
    }

    egoFeedback.textContent = feedbackMsg;
    playTone(400 + val * 2, 'sine', 0.01);
  });

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const relato = relatoInput.value.trim();
      const ego = egoSlider.value;
      
      let checkedCount = 0;
      cbSteps.forEach(cb => { if (cb.checked) checkedCount++; });

      if (!relato) {
        showToast("Escreva um relato honesto do conflito primeiro!");
        playTone(200, 'sawtooth', 0.2);
        return;
      }

      saveBtn.disabled = true;
      saveBtn.textContent = 'Gravado!';

      const text = `Realizei Auto-análise: "${relato.substring(0, 60)}..." (Ego: ${ego}%, Checklist: ${checkedCount}/3)`;
      registerResilienceAction(text);

      showToast("Auto-análise registrada no Diário!");
      playTone(660, 'sine', 0.25);
      
      if (ego <= 25 && checkedCount === 3) {
        fireConfetti();
      }

      setTimeout(() => {
        relatoInput.value = '';
        egoSlider.value = 50;
        egoVal.textContent = '50%';
        egoFeedback.textContent = 'Equilíbrio: Seu ego tenta se justificar, mas há espaço para autocrítica sincera e reconhecimento de deslizes.';
        cbSteps.forEach(cb => cb.checked = false);
        saveBtn.disabled = false;
        saveBtn.textContent = 'Registrar Auto-análise no Diário';
        
        document.getElementById('nav-diary-btn').click();
      }, 1200);
    });
  }
}
