WL.lessons.push({ id: 'refraction', title: 'Refraction of waves', html: `
<div class="goals"><b>Learning goals</b><ul><li>define refraction and explain why it happens</li><li>predict the change in speed, wavelength and direction</li><li>draw refracted wavefronts with the RNAR method</li></ul></div>
<div class="def">Refraction is the change in speed of a wave when it passes from one medium into another. The wavelength changes and the direction usually changes too.</div>
<p>In a ripple tank a glass block or sheet lying on the bottom makes a <b>shallow</b> region. Waves travel more slowly in shallow water than in deep water. The frequency never changes because the source sets it. Only the wavelength and the wave speed change.</p>
<div data-sim="refraction"></div>
<div class="tw"><table><tr><th></th><th>Entering shallow water</th><th>Entering deep water</th></tr>
<tr><td>Speed v</td><td>decreases</td><td>increases</td></tr>
<tr><td>Wavelength λ</td><td>decreases</td><td>increases</td></tr>
<tr><td>Frequency f</td><td colspan="2">constant (set by the source)</td></tr>
<tr><td>Ray</td><td>bends towards the normal</td><td>bends away from the normal</td></tr>
<tr><td>Wavefronts</td><td>closer together</td><td>further apart</td></tr></table></div>
<h3>Straight boundary and angled boundary</h3>
<ul><li><b>Waves arriving straight at the boundary</b> (along the normal): the direction does not change. The whole wavefront slows or speeds up together. Only the wavelength changes.</li>
<li><b>Waves arriving at an angle:</b> the direction changes. One end of each wavefront enters the new medium first and changes speed while the other end has not yet arrived, so the wavefront pivots like a pair of wheels where one wheel reaches mud first.</li></ul>
<h3>How to construct the diagram: the RNAR method</h3>
<p><b>Shallow water</b> (waves slow down)</p>
<ol><li>Identify the incident wave on the wavefronts. The ray and the wavefronts are at 90° to each other.</li>
<li>Draw the incident ray and project it onto the boundary.</li>
<li>Draw the normal at the boundary, at the point where the incident ray lands.</li>
<li>For a shallow medium the refraction is less, so the refracted ray is closer to the normal. Draw the refracted ray.</li>
<li>Draw the wavefronts on the refracted ray. The wavelength must decrease because the speed has decreased.</li>
<li>Keep the wavefronts at 90° to the refracted ray.</li></ol>
<p><b>Deeper water</b> (waves speed up). Use the same steps but at step 4 the refraction is greater, so the refracted ray bends <b>away</b> from the normal. At step 5 the wavelength increases because the speed has increased.</p>
<div class="box key"><b>Exam tip</b>Marks are usually for three things: wavefronts closer together (or further apart) in the second region, a change of direction that bends the correct way and wavefronts that join up at the boundary. Use a ruler for the normal and wavefronts.</div>
<div class="box ex"><b>Worked example 1</b>Waves with f = 10 Hz have λ = 2.0 cm in deep water so v = 10 × 2.0 = 20 cm/s. They enter shallow water where v = 12 cm/s. Frequency is still 10 Hz so λ = 12 ÷ 10 = <b>1.2 cm</b>.</div>
<div class="box ex"><b>Worked example 2</b>In the demonstration above set the speed ratio to 0.6 and the angle to 40°. Then sin θ₂ = 0.6 × sin 40° = 0.386 so θ₂ = <b>22.7°</b>. The ray bends towards the normal as it enters the slower region. The next lesson turns this pattern into Snell's law.</div>
<h3>Refraction in nature</h3>
<ul><li>Sea waves approaching a beach slow down as the water gets shallower so they swing round and arrive nearly parallel to the shore.</li>
<li>Sound carries further on a cool evening because it bends back down towards the ground.</li>
<li>Light bends on entering glass or water, which is why a straw in a glass looks bent.</li></ul>
<div data-quiz="a" data-title="Check yourself"></div>`,
quiz: { a: [
 { q: "Waves move from deep water into shallow water. What happens?", o: ["speed and λ increase and the ray bends away from the normal", "speed and λ decrease and the ray bends towards the normal", "speed and f decrease and the ray bends towards the normal", "nothing changes"], a: 1, e: "Slower waves have a shorter λ and bend towards the normal. The frequency is unchanged." },
 { q: "Plane waves hit a boundary along the normal (0°). The wave…", o: ["changes direction and wavelength", "keeps its direction but changes wavelength", "keeps both", "is reflected"], a: 1, e: "No bending along the normal but the speed and wavelength still change." },
 { q: "Which quantity never changes during refraction?", o: ["speed", "wavelength", "frequency", "direction"], a: 2, e: "Frequency is set by the source." },
 { q: "In the RNAR construction the wavefronts must be drawn…", o: ["parallel to the refracted ray", "at 90° to the refracted ray", "along the normal", "with the same spacing as before"], a: 1, e: "Wavefronts are always perpendicular to the ray and their spacing is the new wavelength." }] } });
