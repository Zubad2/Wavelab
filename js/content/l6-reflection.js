WL.lessons.push({ id: 'reflection', title: 'Reflection of waves', html: `
<div class="goals"><b>Learning goals</b><ul><li>state and use the law of reflection</li><li>label the normal, incident ray and reflected ray</li><li>say what changes and what stays the same</li><li>solve echo problems</li></ul></div>
<p>When a wave meets a barrier it bounces back into the medium it came from. In the ripple tank a straight barrier reflects plane waves cleanly. In the lecture example the barrier is placed at 45° to the incoming waves and the waves reflect from it following the law of reflection.</p>
<div data-sim="reflection"></div>
<div class="def">Law of reflection: the angle of incidence (i) equals the angle of reflection (r).</div>
<ul><li>The <b>normal</b> is a line at 90° to the barrier at the point where the ray hits it.</li>
<li>The <b>incident ray</b> arrives and the <b>reflected ray</b> leaves.</li>
<li><b>Both angles are measured from the normal</b>, not from the barrier.</li>
<li>The incident ray, the normal and the reflected ray lie in the same plane.</li></ul>
<div class="tw"><table><tr><th>After reflection</th><th></th></tr><tr><td>Wavelength λ</td><td>remains the same</td></tr><tr><td>Frequency f</td><td>remains the same</td></tr><tr><td>Speed v</td><td>remains the same</td></tr><tr><td>Direction</td><td>changes so that i = r</td></tr></table></div>
<h3>Drawing reflected wavefronts</h3>
<ol><li>Draw the barrier and the incident wavefronts with spacing λ.</li><li>Draw the normal where a ray meets the barrier.</li><li>Draw the reflected ray with r = i.</li><li>Draw the reflected wavefronts at 90° to the reflected ray with the same spacing λ.</li></ol>
<p>Waves that arrive along the normal (i = 0°) bounce straight back. Where incident and reflected waves overlap you see a criss-cross pattern, in the simulation and in a real tank.</p>
<h3>Echoes and sonar</h3>
<p>Sound reflects from cliffs and walls to give echoes. The sound travels to the surface and back so the distance to the surface is half the total path:</p>
<div class="eq">distance = (v × t) ÷ 2</div>
<div class="box ex"><b>Worked example: echo</b>A shout echoes back from a cliff after 0.60 s. Speed of sound = 340 m/s. Total path = 340 × 0.60 = 204 m so the cliff is <b>102 m</b> away.</div>
<div class="box ex"><b>Worked example: sonar</b>A ship sends a sound pulse down and receives the echo after 0.80 s. Speed of sound in sea water is 1500 m/s. Total path = 1500 × 0.80 = 1200 m so the depth is <b>600 m</b>.</div>
<div class="box ex"><b>Worked example: angles</b>A wave hits a barrier with i = 30°. Then r = 30° so the reflected ray makes 90° − 30° = <b>60° with the barrier</b>.</div>
<p>Other uses: ultrasound scans, radar (reflected radio waves) and mirrors (reflected light). A <b>concave</b> barrier makes plane waves converge to a focus and a <b>convex</b> barrier spreads them out. Satellite dishes use the converging effect.</p>
<div class="box warn"><b>Watch out</b>Measuring i from the barrier surface is the most common slip. If a question gives the angle to the surface subtract it from 90° first.</div>
<div data-quiz="a" data-title="Check yourself"></div>`,
quiz: { a: [
 { q: "A ray hits a barrier with i = 30°. What angle does the reflected ray make with the barrier?", o: ["30°", "60°", "90°", "120°"], a: 1, e: "r = 30° from the normal so 90° − 30° = 60° from the barrier." },
 { q: "After reflection which quantity changes?", o: ["wavelength", "frequency", "speed", "direction of travel"], a: 3, e: "λ, f and v stay the same. Only the direction changes." },
 { q: "The normal is…", o: ["parallel to the barrier", "at 90° to the barrier", "the reflected wavefront", "the same as the ray"], a: 1, e: "The normal is perpendicular to the barrier at the point of incidence." },
 { q: "An echo returns after 2.0 s. The speed of sound is 340 m/s. How far away is the wall?", o: ["170 m", "340 m", "680 m", "1360 m"], a: 1, e: "Distance = 340 × 2.0 ÷ 2 = 340 m." }] } });
