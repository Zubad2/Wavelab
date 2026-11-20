WL.lessons.push({ id: 'summary', tag: 'End', title: 'Summary and final test', html: `
<h3>Equations</h3>
<div class="tw"><table><tr><th>v = f × λ</th><th>f = 1 ÷ T</th><th>n = sin i ÷ sin r</th><th>n = c ÷ v</th><th>sin c = 1 ÷ n</th><th>distance = v × t ÷ 2 (echo)</th></tr></table></div>
<h3>Reflection, refraction and diffraction compared</h3>
<div class="tw"><table><tr><th></th><th>Reflection</th><th>Refraction</th><th>Diffraction</th></tr>
<tr><td>What happens</td><td>wave bounces off a barrier</td><td>wave enters a new medium</td><td>wave spreads through a gap or round an edge</td></tr>
<tr><td>Direction</td><td>changes so that i = r</td><td>changes unless along the normal</td><td>spreads out</td></tr>
<tr><td>Wavelength</td><td>same</td><td>changes</td><td>same</td></tr>
<tr><td>Frequency</td><td>same</td><td>same</td><td>same</td></tr>
<tr><td>Speed</td><td>same</td><td>changes</td><td>same</td></tr></table></div>
<h3>Bending rules</h3>
<div class="tw"><table><tr><th>Wave slows (shallow water or entering glass)</th><th>Wave speeds up (deep water or leaving glass)</th></tr>
<tr><td>λ decreases and ray bends towards the normal</td><td>λ increases and ray bends away from the normal</td></tr></table></div>
<div class="box key"><b>Last minute checklist</b><ul><li>Energy moves, matter does not.</li><li>Transverse is 90° and longitudinal is 0° to the energy transfer.</li><li>Source sets f. Medium sets v. Then λ = v ÷ f.</li><li>Rays are at 90° to wavefronts and angles are measured from the normal.</li><li>Refraction changes v and λ but never f.</li><li>TIR needs dense to less dense and i greater than c.</li></ul></div>
<div data-quiz="final" data-title="Final test"></div>`,
quiz: { final: [
 { q: "Which statement about wave motion is correct?", o: ["matter moves with the wave", "energy moves but the medium does not", "both energy and matter move", "nothing moves"], a: 1, e: "Waves transfer energy without transferring the medium." },
 { q: "Which pair is both transverse?", o: ["sound and light", "light and water ripples", "sound and P waves", "slinky push and ripples"], a: 1, e: "Light and water ripples are transverse. Sound and P waves are longitudinal." },
 { q: "5 complete waves pass a point in 2.0 s. What is f?", o: ["0.4 Hz", "2.5 Hz", "5 Hz", "10 Hz"], a: 1, e: "f = 5 ÷ 2.0 = 2.5 Hz." },
 { q: "A wave of f = 4.0 Hz and λ = 0.30 m has speed…", o: ["0.075 m/s", "1.2 m/s", "13 m/s", "4.3 m/s"], a: 1, e: "v = 4.0 × 0.30 = 1.2 m/s." },
 { q: "A stroboscope is set equal to the dipper frequency. The waves appear…", o: ["to move faster", "stationary", "to reverse", "to vanish"], a: 1, e: "The crests are in the same place at every flash." },
 { q: "A ray strikes a barrier at 40° to the normal. The reflected ray makes what angle with the normal?", o: ["20°", "40°", "50°", "80°"], a: 1, e: "r = i = 40°." },
 { q: "Water waves go from shallow into deep water. Which is true?", o: ["λ decreases", "f increases", "they speed up and bend away from the normal", "they stop"], a: 2, e: "Deeper water means faster waves, longer λ and bending away from the normal." },
 { q: "Which gap gives the most obvious diffraction of 3 cm waves?", o: ["30 cm", "3 cm", "300 cm", "no gap"], a: 1, e: "Maximum diffraction occurs when the gap is about one wavelength." },
 { q: "Light enters glass (n = 1.5) at i = 30°. Which is r?", o: ["19.5°", "20.5°", "30°", "45°"], a: 0, e: "sin r = sin 30° ÷ 1.5 = 0.333 so r = 19.5°." },
 { q: "The speed of light in water is 2.26 × 10⁸ m/s. The refractive index is…", o: ["0.75", "1.33", "1.50", "2.26"], a: 1, e: "n = 3.0 × 10⁸ ÷ 2.26 × 10⁸ = 1.33." },
 { q: "The critical angle of water (n = 1.33) is…", o: ["24°", "42°", "49°", "90°"], a: 2, e: "sin c = 1 ÷ 1.33 = 0.752 so c = 48.8°." },
 { q: "Total internal reflection can occur when light goes from…", o: ["air to water", "air to glass", "glass to air", "vacuum to diamond"], a: 2, e: "The light must start in the denser medium." },
 { q: "A pulse takes 0.50 s to reach a cliff and come back. The speed of sound is 340 m/s. How far is the cliff?", o: ["42.5 m", "85 m", "170 m", "340 m"], a: 1, e: "Distance = 340 × 0.50 ÷ 2 = 85 m." },
 { q: "A light wave passes from air into glass. Which quantity stays the same?", o: ["speed", "wavelength", "frequency", "all of them"], a: 2, e: "Frequency is set by the source." },
 { q: "Long-wave radio can be received behind a hill because it…", o: ["reflects off the hill", "diffracts round the hill", "refracts through the hill", "travels faster"], a: 1, e: "Long wavelengths diffract more round large obstacles." }] } });
