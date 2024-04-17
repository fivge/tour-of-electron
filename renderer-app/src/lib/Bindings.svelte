<script>
  let name = 'world';

  let a = 1;
  let b = 2;

  let yes = false;

  let scoops = 1;
  let flavours = ['Mint choc chip'];

  let menu = ['Cookies and cream', 'Mint choc chip', 'Raspberry ripple'];

  function join(flavours) {
    if (flavours.length === 1) return flavours[0];
    return `${flavours.slice(0, -1).join(', ')} and ${flavours[flavours.length - 1]}`;
  }

  let value = `Some words are *italic*, some are **bold**`;

  let questions = [
    { id: 1, text: `Where did you go to school?` },
    { id: 2, text: `What is your mother's name?` },
    { id: 3, text: `What is another personal fact that an attacker could easily find with Google?` },
  ];

  let selected;

  let answer = '';

  let html = '<p>Write some text!</p>';
</script>

<input bind:value={name} />

<p>Hello {name}!</p>

<label>
  <input type="number" bind:value={a} min="0" max="10" />
  <input type="range" bind:value={a} min="0" max="10" />
</label>

<label>
  <input type="number" bind:value={b} min="0" max="10" />
  <input type="range" bind:value={b} min="0" max="10" />
</label>

<p>{typeof a}</p>

<p>{a} + {b} = {a + b}</p>

<label>
  <input type="checkbox" bind:checked={yes} />
  Yes! Send me regular email spam
</label>

<p>{yes}</p>

<h2>--Group--</h2>

<label>
  <input type="radio" bind:group={scoops} name="scoops" value={1} />
  One scoop
</label>

<label>
  <input type="radio" bind:group={scoops} name="scoops" value={2} />
  Two scoops
</label>

<label>
  <input type="radio" bind:group={scoops} name="scoops" value={3} />
  Three scoops
</label>

<p>Flavours</p>

{#each menu as flavour}
  <label>
    <input type="checkbox" bind:group={flavours} name="flavours" value={flavour} />
    {flavour}
  </label>
{/each}

{#if flavours.length === 0}
  <p>Please select at least one flavour</p>
{:else if flavours.length > scoops}
  <p>Can't order more flavours than scoops!</p>
{:else}
  <p>
    You ordered {scoops}
    {scoops === 1 ? 'scoop' : 'scoops'}
    of {join(flavours)}
  </p>
{/if}

{value}

<textarea bind:value />

<h2>--select--</h2>
<select bind:value={selected} on:change={() => (answer = '')}>
  {#each questions as question}
    <option value={question}>
      {question.text}
    </option>
  {/each}
</select>

<p>Press and hold the control key (or the command key on MacOS) for selecting multiple options.</p>
<select multiple bind:value={flavours}>
  {#each menu as flavour}
    <option value={flavour}>
      {flavour}
    </option>
  {/each}
</select>

<div contenteditable="true" bind:innerHTML={html} />
<pre>{html}</pre>

<style>
  label {
    display: flex;
  }
  input,
  p {
    margin: 6px;
  }
  textarea {
    width: 100%;
    height: 200px;
  }
  [contenteditable] {
    padding: 0.5em;
    border: 1px solid #eee;
    border-radius: 4px;
  }
</style>
