<!-- 参数
子组件 export 引用参数
$$props 可直接引用【不推荐，少数场景可以使用】

逻辑 
#if
if else
if elseif else
each
await
-->
<script>
  export let answer = 'a mystery';
  export let version;

  import Thing from './Thing.svelte';

  let user = { loggedIn: false };

  let x = 7;

  let cats = [
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
  ];

  let things = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'carrot' },
    { id: 4, name: 'doughnut' },
    { id: 5, name: 'egg' },
  ];

  function toggle() {
    user.loggedIn = !user.loggedIn;
  }

  function handleClick() {
    things = things.slice(1);
  }

  const fetchData = () =>
    new Promise(resolve => {
      setTimeout(() => {
        const text = 100 * Math.random();
        resolve(text);
      }, 0.5 * 1000);
    });

  async function getRandomNumber() {
    // const res = await fetch(`/tutorial/random-number`);
    // const text = await res.text();

    const res = { ok: true };
    const text = await fetchData();

    if (res.ok) {
      return text;
    } else {
      throw new Error(text);
    }
  }

  let promise = getRandomNumber();

  function handleClickNumber() {
    promise = getRandomNumber();
  }
</script>

<p>The answer is {answer}</p>
<p>The version is {version}</p>
<p>The hidden website is {$$props.website}</p>

<p>your status: {user.loggedIn ? 'Log in' : 'Log out'}</p>
{#if user.loggedIn}
  <button on:click={toggle}> Log out </button>
{/if}
{#if !user.loggedIn}
  <button on:click={toggle}> Log in </button>
{/if}

{#if user.loggedIn}
  <button on:click={toggle}> Log out </button>
{:else}
  <button on:click={toggle}> Log in </button>
{/if}

{#if x > 10}
  <p>{x} is greater than 10</p>
{:else if 5 > x}
  <p>{x} is less than 5</p>
{:else}
  <p>{x} is between 5 and 10</p>
{/if}

<p>The Famous Cats of YouTube</p>
<ul>
  <!-- {#each cats as cat, i} -->
  {#each cats as { id, name }, i}
    <li>
      <a target="_blank" href="https://www.youtube.com/watch?v={id}">
        {i + 1}: {name}({id})
      </a>
    </li>
  {/each}
</ul>

<button on:click={handleClick}> Remove first thing </button>
<!-- (thing.id) is the key -->
<!-- {#each things as thing}
不加 key 的话，子组件按照数组下标index进行刷新，不会触发/错误的触发组件刷新
-->
{#each things as thing (thing.id)}
  <Thing name={thing.name} />
{/each}

<button on:click={handleClickNumber}> generate random number </button>

{promise}

{#await promise}
  <p>...waiting</p>
{:then number}
  <p>The number is {number}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
