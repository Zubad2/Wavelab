WL.lessons.push({ id: 'equation', title: 'The wave equation', html: `
<div class="goals"><b>Learning goals</b><ul><li>use v = f × λ and rearrange it</li><li>say what the source controls and what the medium controls</li><li>solve problems with unit conversions</li></ul></div>
<h3>Where it comes from</h3>
<p>In one period T a wave travels exactly one wavelength λ. Speed = distance ÷ time so v = λ ÷ T. Since f = 1 ÷ T this gives</p>
<div class="eq">v = f × λ</div>
<p>speed (m/s) = frequency (Hz) × wavelength (m). Rearranged, f = v ÷ λ and λ = v ÷ f.</p>
<div data-sim="equation"></div>
<h3>What controls what</h3>
<ul><li><b>Speed</b> depends only on the properties of the medium. Sound is faster in water than in air. Ripples are faster in deep water than in shallow water.</li>
<li><b>Frequency</b> depends only on the source vibration. A wave keeps its frequency when it changes medium.</li>
<li><b>Wavelength</b> is proportional to speed and inversely proportional to frequency. In one medium, doubling f halves λ.</li></ul>
<div class="tw"><table><tr><th>Wave</th><th>Typical speed</th></tr>
<tr><td>Ripples in a ripple tank</td><td>about 0.1 to 0.3 m/s</td></tr><tr><td>Sound in air at 20 °C</td><td>about 340 m/s</td></tr>
<tr><td>Sound in water</td><td>about 1500 m/s</td></tr><tr><td>Sound in steel</td><td>about 5000 m/s</td></tr>
<tr><td>Light and radio waves in a vacuum</td><td>3.0 × 10⁸ m/s</td></tr></table></div>
<div class="box ex"><b>Worked example 1</b>A dipper vibrates at 8.0 Hz and the wavelength is 2.5 cm = 0.025 m. v = f × λ = 8.0 × 0.025 = <b>0.20 m/s</b>.</div>
<div class="box ex"><b>Worked example 2</b>A note of 440 Hz travels at 330 m/s. λ = v ÷ f = 330 ÷ 440 = <b>0.75 m</b>.</div>
<div class="box ex"><b>Worked example 3</b>A radio station broadcasts at 100 MHz = 1.0 × 10⁸ Hz. λ = 3.0 × 10⁸ ÷ 1.0 × 10⁸ = <b>3.0 m</b>.</div>
<div class="box ex"><b>Worked example 4: changing medium</b>Light of wavelength 600 nm in air has f = 3.0 × 10⁸ ÷ 6.0 × 10⁻⁷ = 5.0 × 10¹⁴ Hz. In glass the speed falls to 2.0 × 10⁸ m/s but f is unchanged. λ = 2.0 × 10⁸ ÷ 5.0 × 10¹⁴ = <b>4.0 × 10⁻⁷ m = 400 nm</b>.</div>
<div class="box warn"><b>Watch out</b>Convert to metres, seconds and hertz before you substitute. A higher frequency does not make a wave faster. In one medium it gives a shorter wavelength at the same speed.</div>
<div data-quiz="a" data-title="Check yourself"></div>`,
quiz: { a: [
 { q: "A wave has f = 50 Hz and λ = 6.8 m. What is its speed?", o: ["7.4 m/s", "340 m/s", "0.14 m/s", "57 m/s"], a: 1, e: "v = f × λ = 50 × 6.8 = 340 m/s." },
 { q: "A wave slows down on entering a new medium. Which quantity stays the same?", o: ["wavelength", "speed", "frequency", "none of them"], a: 2, e: "The source fixes the frequency. Speed and wavelength change." },
 { q: "In one medium the frequency is doubled. The wavelength…", o: ["doubles", "halves", "stays the same", "quadruples"], a: 1, e: "v is fixed so λ = v ÷ f halves." },
 { q: "Waves of wavelength 3.0 cm travel at 0.15 m/s. What is f?", o: ["0.2 Hz", "5 Hz", "50 Hz", "0.5 Hz"], a: 1, e: "f = v ÷ λ = 0.15 ÷ 0.030 = 5.0 Hz." }] } });
