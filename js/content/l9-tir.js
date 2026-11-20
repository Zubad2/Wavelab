WL.lessons.push({ id: 'tir', title: 'Critical angle and total internal reflection', html: `
<div class="goals"><b>Learning goals</b><ul><li>define the critical angle and total internal reflection</li><li>state the two conditions for total internal reflection</li><li>use sin c = 1 ÷ n</li><li>explain optical fibres and prisms</li></ul></div>
<p>When light goes from glass to air it speeds up so it bends <i>away</i> from the normal. As the angle of incidence grows, the refracted ray gets closer and closer to the surface of the glass. At one special angle it just skims along the boundary. Beyond that angle no light escapes at all.</p>
<div class="def">The critical angle c is the angle of incidence in the denser medium for which the angle of refraction in the less dense medium is 90°.</div>
<div class="def">Total internal reflection (TIR) happens when light in a denser medium meets the boundary with a less dense medium at an angle of incidence greater than the critical angle. All the light is reflected back into the denser medium.</div>
<div data-sim="tir"></div>
<h3>Two conditions for TIR</h3>
<ol><li>The light must be travelling from a more dense to a less dense medium (glass to air for example).</li><li>The angle of incidence must be greater than the critical angle.</li></ol>
<h3>Finding c from Snell's law</h3>
<p>Light travelling from the material into air has air as the second medium. Reverse the ray in the Snell's law diagram: the air angle is 90° when the glass angle is c. Then n = sin 90° ÷ sin c. Since sin 90° = 1</p>
<div class="eq">sin c = 1 ÷ n</div>
<div class="tw"><table><tr><th>Material</th><th>n</th><th>Critical angle (to air)</th></tr><tr><td>Water</td><td>1.33</td><td>48.8°</td></tr><tr><td>Glass</td><td>1.50</td><td>41.8°</td></tr><tr><td>Diamond</td><td>2.42</td><td>24.4°</td></tr></table></div>
<p>A higher n gives a smaller critical angle. Diamond has such a small c that most light entering it is trapped and reflected around inside, which is why it sparkles.</p>
<div class="box ex"><b>Worked example 1</b>Find c for glass with n = 1.50. sin c = 1 ÷ 1.50 = 0.667 so <b>c = 41.8°</b>.</div>
<div class="box ex"><b>Worked example 2</b>A ray inside glass hits the glass–air boundary at 50°. Since 50° is greater than 41.8° there is total internal reflection and the ray is reflected at 50° back into the glass. At 30° most of the light would refract out into air with a little reflected.</div>
<div class="box ex"><b>Worked example 3</b>A 45° glass prism in a periscope: the light meets the slanted face at 45°. This is greater than 41.8° so TIR occurs and the prism acts as a perfect mirror.</div>
<h3>Uses of total internal reflection</h3>
<ul><li><b>Optical fibres.</b> Light is sent down a thin glass fibre and hits the wall at an angle greater than c every time, so it zigzags along with almost no loss. Fibres carry telephone and internet signals as pulses of light. Bundles let doctors see inside the body with an endoscope.</li>
<li><b>Prisms.</b> Periscopes and binoculars use 45° glass prisms in place of silvered mirrors because TIR reflects all the light and never tarnishes.</li>
<li><b>Reflectors.</b> Bicycle reflectors and road signs use plastic corner prisms that send light back towards its source.</li></ul>
<div class="box warn"><b>Watch out</b>TIR cannot happen when light goes from air into glass. Check that the light starts in the denser material. The angle compared with c is the angle of incidence measured from the normal.</div>
<div data-quiz="a" data-title="Check yourself"></div>`,
quiz: { a: [
 { q: "The critical angle for glass of n = 1.50 is closest to…", o: ["24°", "42°", "49°", "60°"], a: 1, e: "sin c = 1 ÷ 1.5 = 0.667 so c = 41.8°." },
 { q: "Which pair of conditions is needed for total internal reflection?", o: ["air to glass and i < c", "glass to air and i > c", "glass to air and i < c", "air to water and i > c"], a: 1, e: "Light must be travelling in the denser medium and i must exceed the critical angle." },
 { q: "Why does diamond sparkle more than glass?", o: ["it is harder", "it has a smaller critical angle", "it has a lower n", "it absorbs light"], a: 1, e: "A higher n gives a smaller c so more light is totally internally reflected." },
 { q: "Light in an optical fibre stays inside because…", o: ["the fibre is silvered", "it hits the wall at an angle bigger than c", "it travels along the normal", "glass absorbs light"], a: 1, e: "Total internal reflection occurs at every wall because i > c." }] } });
