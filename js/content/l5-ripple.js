WL.lessons.push({ id: 'ripple', title: 'The ripple tank and wavefronts', html: `
<div class="goals"><b>Learning goals</b><ul><li>describe the ripple tank and say why it shows waves</li><li>explain what a stroboscope does</li><li>define wavefront and ray</li><li>measure λ and calculate v</li></ul></div>
<h3>The apparatus</h3>
<p>A ripple tank is a shallow, level, transparent tray of water. A lamp above it shines through the water onto a white screen below. A motor-driven <b>dipper</b> touches the surface and makes ripples.</p>
<ul><li>A <b>straight dipper</b> produces <b>plane</b> wavefronts.</li><li>A <b>spherical dipper</b> produces <b>circular</b> wavefronts.</li>
<li>Each crest acts like a converging lens and focuses light into a <b>bright line</b>. Each trough spreads light out into a <b>dark line</b>. The pattern on the screen is a picture of the wavefronts.</li>
<li>Barriers, a glass block and gaps let us study reflection, refraction and diffraction.</li></ul>
<h3>Wavefronts and rays</h3>
<div class="def">Wavefronts are imaginary lines joining all adjacent crests or troughs that are in phase.</div>
<ul><li>Wavefronts are always at 90° to the direction of travel.</li><li>The gap between successive wavefronts equals the wavelength λ.</li>
<li>A <b>ray</b> shows the direction of travel. It is drawn at 90° to the wavefronts.</li></ul>
<h3>Freezing the waves with a stroboscope</h3>
<p>Moving ripples are hard to measure. A <b>stroboscope</b> flashes the lamp at an adjustable rate. When the flash rate equals the dipper frequency the crests are in the same place at every flash so the pattern looks <b>stationary</b>. Try it: set the strobe frequency equal to f.</p>
<div data-sim="ripple"></div>
<h3>Measuring the wave speed</h3>
<ol><li>Freeze the pattern and note the dipper frequency f.</li><li>Measure across several wavefronts with a ruler (for example 5 wavefronts) then divide by the number of gaps. Using many wavelengths reduces the error.</li><li>Calculate v = f × λ. If the pattern is projected larger than life, correct for the magnification.</li></ol>
<div class="box ex"><b>Worked example</b>The frozen pattern shows 5 wavefronts spanning 8.0 cm. That is 4 wavelengths so λ = 2.0 cm. With f = 12 Hz, v = 12 × 2.0 = <b>24 cm/s = 0.24 m/s</b>.</div>
<div class="box key"><b>Exam tip</b>To improve accuracy say: measure across many wavefronts, use a stroboscope to freeze the pattern, keep the tank level so the depth is the same everywhere and repeat the reading.</div>
<div class="box extra"><b>Going further</b>For shallow water the speed increases with depth, which is why a glass sheet on the bottom makes a slow, shallow region. A plane wave needs the dipper bar to be parallel to the water surface.</div>
<div data-quiz="a" data-title="Check yourself"></div>`,
quiz: { a: [
 { q: "What does the stroboscope do in a ripple tank?", o: ["makes waves bigger", "makes the moving pattern look stationary so it can be measured", "speeds up the waves", "warms the water"], a: 1, e: "When the flash rate equals the wave frequency the crests seem to stand still." },
 { q: "Waves of wavelength 2.0 cm have frequency 12 Hz. What is v?", o: ["6 cm/s", "24 cm/s", "0.17 cm/s", "14 cm/s"], a: 1, e: "v = f × λ = 12 × 2.0 = 24 cm/s." },
 { q: "A ray is drawn…", o: ["along the wavefronts", "at 90° to the wavefronts", "at 45° to the wavefronts", "from crest to trough"], a: 1, e: "Rays show the direction of travel and are perpendicular to wavefronts." },
 { q: "A spherical dipper produces…", o: ["plane wavefronts", "circular wavefronts", "no wavefronts", "longitudinal waves"], a: 1, e: "A point source spreads circular wavefronts." }] } });
