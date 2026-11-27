/* ==========================================================================
   TACTILE WEB AUDIO SOUND ENGINE — 0 AUDIO FILES, DEFAULT MUTE (OPT-IN)
   Whisper-soft design-engineering micro-sounds synthesized via Web Audio API
   ========================================================================== */

(function () {
  'use strict';

  window.RO_APP = window.RO_APP || {};

  var SOUND_ON_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>';
  var SOUND_OFF_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/></svg>';

  var enabled = false;
  var ctx = null;

  try {
    enabled = localStorage.getItem('ro_porto_sound') === 'on';
  } catch (e) {}

  function ensureContext() {
    if (ctx) {
      if (ctx.state === 'suspended') ctx.resume().catch(function () {});
      return ctx;
    }
    var AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    try {
      ctx = new AudioCtx();
    } catch (e) {
      return null;
    }
    return ctx;
  }

  function playTone(freqStart, freqEnd, durationSec, peakGain, waveType) {
    if (!enabled) return;
    var ac = ensureContext();
    if (!ac) return;
    try {
      var now = ac.currentTime;
      var osc = ac.createOscillator();
      var gain = ac.createGain();
      osc.type = waveType || 'sine';
      osc.frequency.setValueAtTime(freqStart, now);
      if (freqEnd && freqEnd !== freqStart) {
        osc.frequency.exponentialRampToValueAtTime(freqEnd, now + durationSec);
      }
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(peakGain || 0.032, now + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

      osc.connect(gain);
      gain.connect(ac.destination);
      osc.start(now);
      osc.stop(now + durationSec + 0.01);
    } catch (e) {}
  }

  function click() {
    playTone(620, 420, 0.045, 0.024, 'triangle');
  }

  function toggleTone(isOn) {
    if (isOn) {
      playTone(520, 780, 0.085, 0.032, 'sine');
    } else {
      playTone(540, 340, 0.075, 0.026, 'sine');
    }
  }

  function open() {
    playTone(460, 740, 0.095, 0.028, 'sine');
  }

  function close() {
    playTone(520, 320, 0.07, 0.024, 'sine');
  }

  function syncUI() {
    var icon = document.getElementById('soundIcon');
    var btn = document.getElementById('soundToggle');
    if (icon) icon.innerHTML = enabled ? SOUND_ON_SVG : SOUND_OFF_SVG;
    if (btn) {
      btn.setAttribute('aria-pressed', enabled ? 'true' : 'false');
      btn.style.color = enabled ? 'var(--accent-cyan)' : 'var(--text-muted)';
      btn.style.borderColor = enabled ? 'var(--border-active)' : '';
    }
  }

  function toggleSound() {
    enabled = !enabled;
    try { localStorage.setItem('ro_porto_sound', enabled ? 'on' : 'off'); } catch (e) {}
    syncUI();
    if (enabled) toggleTone(true);
  }

  function initSound() {
    syncUI();
    var btn = document.getElementById('soundToggle');
    if (btn) btn.addEventListener('click', toggleSound);

    /* Subtle delegated tactile feedback on key UI controls (only when user opted-in!) */
    document.addEventListener('click', function (ev) {
      if (!enabled) return;
      var target = ev.target.closest('.filter-pill, .evo-btn, .live-arch-node, .comp-tab, .qr-tab, .tech-pill, .lang-btn, .nav-link, #themeToggle, #motionToggle, #fullscreenToggle');
      if (target && target.id !== 'soundToggle') {
        click();
      }
    });
  }

  window.RO_APP.sound = {
    init: initSound,
    toggle: toggleSound,
    isEnabled: function () { return enabled; },
    click: click,
    toggleTone: toggleTone,
    open: open,
    close: close
  };
})();
