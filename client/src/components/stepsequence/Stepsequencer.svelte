<script>
    import * as Tone from "tone";
const synths = [
  new Tone.Synth().toDestination(),
  new Tone.Synth().toDestination(),
  new Tone.Synth().toDestination()
];

synths[0].oscillator.type = 'triangle';
synths[1].oscillator.type = 'sine';
synths[2].oscillator.type = 'sawtooth';

</script>
<body>
<div>
    <div>
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
    </div>
    <div>
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
    </div>
    <div>
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
    </div>
  </div>
</body>
  <style>
      body > div {
        text-align: center;
        margin-top: 4rem;
    }
  </style>