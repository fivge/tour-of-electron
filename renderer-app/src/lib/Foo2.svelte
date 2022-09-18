<script>
  import svelteLogo from '../assets/svelte.svg';

  let name = 'electron';
  let string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<div>
  <a href="https://vitejs.dev" target="_blank">
    <img src="./vite.svg" class="logo" alt="Vite Logo" />
  </a>
  <a href="https://svelte.dev" target="_blank">
    <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
  </a>
</div>
<h1>Hello {name.toUpperCase()}!</h1>
<p>This is inner paragraph.</p>
<p>{@html string}</p>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
