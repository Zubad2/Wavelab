WL.lessons.push({ id: 'diffraction', title: 'Diffraction of waves', html: `
<div class="goals"><b>Learning goals</b><ul><li>define diffraction</li><li>explain how gap size compared with wavelength changes the pattern</li><li>describe diffraction round obstacles</li><li>give everyday examples</li></ul></div>
<div class="def">Diffraction is the spreading out of waves when they pass through a gap or round an edge.</div>
<p>The extent to which ripples spread depends on the relationship between their wavelength and the width of the gap. Use the preset buttons in the demonstration to compare the cases.</p>
<div data-sim="diffraction"></div>
<div class="tw"><table><tr><th>Gap compared with λ</th><th>What you see</th></tr>
<tr><td>Wide gap (gap &gt; λ)</td><td>waves pass straight through with slight spreading at the edges only</td></tr>
<tr><td>Narrow gap (gap ≈ λ)</td><td>maximum diffraction: nearly circular waves spread out from the gap</td></tr>
<tr><td>Narrow gap (gap &lt; λ)</td><td>circular waves again but weaker because less energy gets through</td></tr></table></div>
<h3>Round an obstacle</h3>
<p>Waves also bend round the edge of an obstacle such as a half wall, a building or a hill. This happens to sound waves as well. <b>Longer wavelengths produce more diffraction</b> because the wavelength is closer to the height or length of the obstacle.</p>
<div class="box key"><b>What does not change</b>After diffraction the wavelength, frequency and speed are the same as before. The waves spread out so the amplitude falls.</div>
<h3>Diffraction around you</h3>
<ul><li><b>Sound round a corner.</b> Speech has λ of roughly 0.1 m to 3 m, similar to a doorway width, so you can hear someone in the next room.</li>
<li><b>Light.</b> Visible light has λ of about 5 × 10⁻⁷ m, far smaller than any doorway, so it hardly diffracts and seems to travel in straight lines.</li>
<li><b>Radio.</b> Long wavelength radio (hundreds of metres) bends round hills. Short wavelength television and mobile signals are blocked more easily.</li>
<li><b>Water waves</b> spread into the sheltered side of a harbour through a narrow entrance.</li></ul>
<div class="box ex"><b>Worked example</b>A 340 Hz sound travels at 340 m/s so λ = 1.0 m. A doorway 0.9 m wide is about one wavelength, so the sound spreads strongly into the next room. Light of λ = 5 × 10⁻⁷ m through the same doorway: the gap is about two million wavelengths wide so there is almost no visible spreading.</div>
<div class="box warn"><b>Watch out</b>Diffraction does not change the wavelength. It is greatest when the gap is about the same size as λ, not when the gap is large. In an answer compare the gap with the wavelength, do not just write "the gap is small".</div>
<div data-quiz="a" data-title="Check yourself"></div>`,
quiz: { a: [
 { q: "Diffraction is greatest when the gap is…", o: ["much wider than λ", "about the same size as λ", "ten times λ", "zero"], a: 1, e: "Gap ≈ λ gives maximum spreading." },
 { q: "Why can you hear someone round a corner but not see them?", o: ["sound is faster", "sound has λ comparable to a doorway while light's λ is far smaller", "light is longitudinal", "sound reflects better"], a: 1, e: "Diffraction is large only when λ is comparable to the gap." },
 { q: "After diffraction through a gap which properties are unchanged?", o: ["λ, f and v", "only f", "only direction", "none"], a: 0, e: "Diffraction changes the spreading and the amplitude but not λ, f or v." },
 { q: "Which radio waves bend best round a hill?", o: ["short wavelength", "long wavelength", "high frequency", "all equally"], a: 1, e: "Longer wavelengths are closer in size to the obstacle so they diffract more." }] } });
