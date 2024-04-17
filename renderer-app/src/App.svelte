<script>
  export let versions;

  import Counter from './lib/Counter.svelte';
  import Foo from './lib/Foo2.svelte';
  import Nested from './lib/Nested.svelte';
  import Events from './lib/Events.svelte';
  import Bindings from './lib/Bindings.svelte';

  const pkg = {
    answer: '62',
    version: 3,
    website: 'https://svelte.dev',
  };

  const func = async () => {
    const response = await versions.ping();
    console.log('response:', response); // 打印 'pong'
  };

  func();
</script>

<main>
  <div class="component">
    <Foo />
  </div>

  <div class="component">
    <Counter />
  </div>

  <div class="component">
    <Nested {...pkg} />
  </div>

  <div class="component">
    <Events />
  </div>

  <div class="component">
    <Bindings />
  </div>

  <p>Check out, the official Svelte app framework powered by Vite!</p>
  <p>本应用正在使用 Chrome (v{versions.chrome()}), Node.js (v{versions.node()}), 和 Electron (v{versions.electron()})</p>
</main>

<style>
  p {
    color: purple;
    font-family: 'Comic Sans MS', cursive;
    font-size: 2em;
  }

  .component {
    border: 1px solid #535bf2;
    border-radius: 8px;
    padding: 0.6em 1.2em;
    margin: 0.6em 0;
  }
</style>
