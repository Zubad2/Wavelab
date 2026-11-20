WL.lessons.push({ id: 'describing', title: 'Describing waves', html: `
<div class="goals"><b>Learning goals</b><ul><li>define amplitude, wavelength, period and frequency</li><li>read these from both kinds of graph</li><li>use f = 1 ÷ T and convert units</li></ul></div>
<div class="tw"><table><tr><th>Term</th><th>Symbol</th><th>Meaning</th><th>Unit</th></tr>
<tr><td>Amplitude</td><td>A</td><td>maximum displacement from the mean (equilibrium) position</td><td>m, cm or mm</td></tr>
<tr><td>Wavelength</td><td>λ</td><td>shortest distance between two points in phase, e.g. crest to crest</td><td>m, cm or mm</td></tr>
<tr><td>Period</td><td>T</td><td>time taken to complete one full oscillation</td><td>s or ms</td></tr>
<tr><td>Frequency</td><td>f</td><td>number of oscillations completed per second</td><td>hertz (Hz)</td></tr>
<tr><td>Wave speed</td><td>v</td><td>distance the wave travels per second</td><td>m/s</td></tr></table></div>
<div class="eq">f = 1 ÷ T</div>
<p>A bigger amplitude means more energy (louder sound or brighter light). It does not change the speed or the wavelength. Two points are <b>in phase</b> when they are at the same stage of the oscillation, for example both at a crest. Their separation is a whole number of wavelengths.</p>
<h3>Two graphs, two different questions</h3>
<div data-sim="graphs"></div>
<ul><li><b>Displacement against distance.</b> This is a snapshot showing many points on the wave at one instant. Read <b>A</b> and <b>λ</b>.</li>
<li><b>Displacement against time.</b> This follows one single particle as time passes. Read <b>A</b> and <b>T</b>, then work out f = 1 ÷ T.</li></ul>
<h3>Unit conversions you need</h3>
<div class="tw"><table><tr><th>1 cm = 0.01 m</th><th>1 mm = 0.001 m</th><th>1 ms = 0.001 s</th><th>1 kHz = 1000 Hz</th><th>1 MHz = 10⁶ Hz</th><th>1 GHz = 10⁹ Hz</th></tr></table></div>
<div class="box ex"><b>Worked example 1</b>A particle in a rope wave takes 0.050 s for one oscillation. T = 0.050 s so f = 1 ÷ 0.050 = <b>20 Hz</b>.</div>
<div class="box ex"><b>Worked example 2</b>Thirty waves pass a point in 12 s. f = 30 ÷ 12 = 2.5 Hz and T = 1 ÷ 2.5 = <b>0.40 s</b>.</div>
<div class="box ex"><b>Worked example 3</b>On a displacement–distance graph the first crest is at 0.10 m and the fifth crest is at 0.90 m. That is 4 wavelengths, so λ = 0.80 ÷ 4 = <b>0.20 m</b>. Measuring across several wavelengths is more accurate than measuring one.</div>
<div class="box warn"><b>Watch out</b><ul><li>Check the x-axis label before reading. Wavelength comes from a distance axis and period from a time axis.</li><li>Amplitude is measured from the mean line to a crest, not from trough to crest.</li><li>Write units every time. A bare number loses a mark.</li></ul></div>
<div data-quiz="a" data-title="Check yourself"></div>`,
quiz: { a: [
 { q: "A particle makes one oscillation in 0.05 s. What is the frequency?", o: ["0.05 Hz", "5 Hz", "20 Hz", "50 Hz"], a: 2, e: "f = 1 ÷ T = 1 ÷ 0.05 = 20 Hz." },
 { q: "Which quantity can be read directly from a displacement–time graph?", o: ["wavelength", "period", "wave speed", "wavefront spacing"], a: 1, e: "The time axis shows how long one oscillation takes." },
 { q: "Amplitude is measured from…", o: ["trough to crest", "the mean position to a crest", "one crest to the next", "the start to the end of the wave"], a: 1, e: "It is the maximum displacement from the mean position." },
 { q: "The distance between the 1st and 6th crest is 1.0 m. What is λ?", o: ["1.0 m", "0.20 m", "0.17 m", "0.50 m"], a: 1, e: "Five wavelengths fit between them so λ = 1.0 ÷ 5 = 0.20 m." }] } });
