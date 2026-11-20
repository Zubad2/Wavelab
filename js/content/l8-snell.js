WL.lessons.push({ id: 'snell', title: "Snell's law and refractive index", html: `
<div class="goals"><b>Learning goals</b><ul><li>state Snell's law and the refractive index n</li><li>calculate n, an angle of refraction or a speed of light</li><li>describe the experiment with a glass block and its graph</li><li>link Snell's law to the change in wave speed</li></ul></div>
<p>The last lesson told us <i>which way</i> a ray bends. Snell's law tells us <i>by how much</i>. For light the same idea applies: light slows down when it enters glass or water so it bends towards the normal.</p>
<div class="def">Refractive index: for light going from air (or a vacuum) into a material, n = sin i ÷ sin r, where i is the angle of incidence and r the angle of refraction, both measured from the normal.</div>
<div class="eq">n = sin i ÷ sin r</div>
<div data-sim="snell"></div>
<h3>Why the ratio of sines is constant</h3>
<p>Take a plane wavefront reaching a boundary at an angle. In a short time t one end of the wavefront travels a distance v₁t in medium 1 while the other end has travelled v₂t in medium 2. Both distances are measured along rays and each ray is at 90° to its wavefront. Let L be the length of the boundary between the two ends of the wavefront. Then</p>
<div class="eq">sin i = v₁t ÷ L &nbsp; sin r = v₂t ÷ L</div>
<p>Dividing, sin i ÷ sin r = v₁ ÷ v₂. Because the wavelength changes in the same ratio (f is constant), we also have</p>
<div class="eq">sin i ÷ sin r = v₁ ÷ v₂ = λ₁ ÷ λ₂</div>
<p>This is the same relation you saw in the ripple-tank refraction demonstration. When light goes from a vacuum (speed c = 3.0 × 10⁸ m/s) into a material of speed v we get</p>
<div class="eq">n = c ÷ v</div>
<div class="tw"><table><tr><th>Material</th><th>n</th><th>Speed of light (× 10⁸ m/s)</th></tr>
<tr><td>Air</td><td>1.00</td><td>3.00</td></tr><tr><td>Water</td><td>1.33</td><td>2.26</td></tr><tr><td>Perspex</td><td>1.49</td><td>2.01</td></tr><tr><td>Glass (typical)</td><td>1.50</td><td>2.00</td></tr><tr><td>Diamond</td><td>2.42</td><td>1.24</td></tr></table></div>
<p>A bigger n means the light slows more and bends more towards the normal. n has no unit. A medium with a larger n is called <b>optically denser</b>.</p>
<div class="box ex"><b>Worked example 1: find n</b>A ray in air hits glass with i = 45° and r = 28°. n = sin 45° ÷ sin 28° = 0.7071 ÷ 0.4695 = <b>1.51</b>.</div>
<div class="box ex"><b>Worked example 2: find r</b>Light enters water (n = 1.33) with i = 50°. sin r = sin 50° ÷ 1.33 = 0.7660 ÷ 1.33 = 0.576 so r = <b>35°</b>.</div>
<div class="box ex"><b>Worked example 3: find the speed</b>In glass n = 1.50 so v = c ÷ n = 3.0 × 10⁸ ÷ 1.50 = <b>2.0 × 10⁸ m/s</b>. Frequency is unchanged, so λ in glass is the air wavelength divided by 1.50.</div>
<h3>Experiment: finding n for a glass block</h3>
<ol><li>Draw an outline of the block on paper and mark the normal at a point on one face.</li>
<li>Place two pins on a line making angle i with the normal. Look through the opposite face and place two more pins so that all four appear in a straight line.</li>
<li>Remove the block. Join the pin positions to draw the incident and the emergent rays. Join the entry point to the exit point to draw the refracted ray inside the glass.</li>
<li>Measure i and r with a protractor. Repeat for at least five values of i from about 20° to 70°.</li>
<li>Plot sin i (y-axis) against sin r (x-axis). The points lie on a straight line through the origin. The <b>gradient is n</b>.</li></ol>
<p>Use the demonstration above to practise. Press <i>Record reading</i> at several angles. The points are rounded to the nearest degree as with a real protractor. The dashed line is the true gradient.</p>
<div class="box key"><b>Exam tip</b>Why plot a graph instead of calculating n once? A graph averages out random errors and a point that does not fit stands out as an anomaly. To reduce error use a sharp pencil, thin pins set far apart and a large range of angles.</div>
<div class="box extra"><b>Going further</b>Light from the Sun is a mixture of colours. Each colour has a slightly different n in glass, with violet bending most and red least. This is why a prism spreads white light into a spectrum, called dispersion. For two materials the general form is n₁ sin θ₁ = n₂ sin θ₂ and the ratio of the two indices equals v₁ ÷ v₂.</div>
<div class="box warn"><b>Watch out</b>Use sin of the angle to the normal, never the angle to the surface. Check your calculator is in degree mode. If a calculated sin r comes out bigger than 1 you have divided the wrong way round.</div>
<div data-quiz="a" data-title="Check yourself"></div>`,
quiz: { a: [
 { q: "Light in air hits glass with i = 60° and r = 35°. What is n?", o: ["0.66", "1.5", "1.7", "2.5"], a: 1, e: "n = sin 60° ÷ sin 35° = 0.866 ÷ 0.574 = 1.51." },
 { q: "The refractive index of water is 1.33. For i = 30° in air, what is r?", o: ["22°", "23°", "40°", "45°"], a: 1, e: "sin r = sin 30° ÷ 1.33 = 0.376 so r = 22°." },
 { q: "The speed of light in a material is 2.0 × 10⁸ m/s. What is n?", o: ["0.67", "1.5", "2.0", "6.0"], a: 1, e: "n = c ÷ v = 3.0 × 10⁸ ÷ 2.0 × 10⁸ = 1.5." },
 { q: "On a graph of sin i against sin r the gradient equals…", o: ["the critical angle", "the refractive index", "the wavelength", "1 ÷ n"], a: 1, e: "Since n = sin i ÷ sin r the gradient of sin i against sin r is n." },
 { q: "When light enters glass from air which quantity is unchanged?", o: ["speed", "wavelength", "frequency", "direction"], a: 2, e: "The frequency is set by the source and never changes." }] } });
