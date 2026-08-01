<div class="cafe-ambience" id="cafe-ambience-widget">
    <button class="cafe-ambience__button" type="button" id="cafe-ambience-toggle" aria-pressed="false">
        <span class="cafe-ambience__icon">&#9835;</span>
        <span class="cafe-ambience__label">تشغيل الأجواء</span>
    </button>
</div>

<script>
    (function () {
        const button = document.getElementById('cafe-ambience-toggle');
        const label = button ? button.querySelector('.cafe-ambience__label') : null;
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;

        if (!button || !AudioContextClass) {
            return;
        }

        const state = {
            context: null,
            master: null,
            timer: null,
            started: false,
            index: 0,
        };

        const progressions = [
            [220.00, 277.18, 329.63],
            [196.00, 246.94, 293.66],
            [174.61, 220.00, 261.63],
            [164.81, 207.65, 246.94],
        ];

        function setLabel(text, pressed) {
            label.textContent = text;
            button.setAttribute('aria-pressed', pressed ? 'true' : 'false');
        }

        function ensureAudio() {
            if (state.context) {
                return;
            }

            state.context = new AudioContextClass();
            state.master = state.context.createGain();
            state.master.gain.value = 0.045;
            state.master.connect(state.context.destination);
        }

        function playChord(notes) {
            if (!state.context || !state.master) {
                return;
            }

            const now = state.context.currentTime;

            notes.forEach(function (note, index) {
                const oscillator = state.context.createOscillator();
                const gainNode = state.context.createGain();
                const filter = state.context.createBiquadFilter();

                oscillator.type = index === 0 ? 'sine' : 'triangle';
                oscillator.frequency.setValueAtTime(note, now);

                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(680 - (index * 80), now);
                filter.Q.value = 0.8;

                gainNode.gain.setValueAtTime(0.0001, now);
                gainNode.gain.exponentialRampToValueAtTime(0.016 - (index * 0.003), now + 0.85);
                gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 3.9);

                oscillator.connect(filter);
                filter.connect(gainNode);
                gainNode.connect(state.master);

                oscillator.start(now + (index * 0.04));
                oscillator.stop(now + 4.05);
            });
        }

        function loopAmbience() {
            if (!state.started) {
                return;
            }

            playChord(progressions[state.index % progressions.length]);
            state.index += 1;
            state.timer = window.setTimeout(loopAmbience, 3200);
        }

        function startAmbience() {
            ensureAudio();

            state.context.resume().then(function () {
                if (state.started) {
                    return;
                }

                state.started = true;
                setLabel('الأجواء تعمل', true);
                loopAmbience();
            }).catch(function () {
                setLabel('شغّل الأجواء', false);
            });
        }

        function stopAmbience() {
            state.started = false;
            window.clearTimeout(state.timer);
            state.timer = null;
            setLabel('تشغيل الأجواء', false);
        }

        function toggleAmbience() {
            if (state.started) {
                stopAmbience();
                return;
            }

            startAmbience();
        }

        button.addEventListener('click', toggleAmbience);

        window.addEventListener('load', startAmbience, { once: true });

        ['pointerdown', 'touchstart', 'keydown'].forEach(function (eventName) {
            window.addEventListener(eventName, startAmbience, { once: true, passive: true });
        });
    }());
</script>
