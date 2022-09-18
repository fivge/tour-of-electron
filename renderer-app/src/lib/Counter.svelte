<!-- $: 声明
数组对象的变更检测 -->
<script>
  let count = 0;
  $: doubled = count * 2;
  $: {
    console.log('the count is ' + count);
  }
  $: if (count >= 10) {
    alert('count is dangerously high!');
    count = 9;
  }

  //数组、对象： Svelte 的反应性是由赋值语句触发的
  let numbers = [1, 2, 3, 4];
  $: sum = numbers.reduce((t, n) => t + n, 0);

  const increment = () => {
    count += 1;
  };

  function addNumber() {
    numbers = [...numbers, numbers.length + 1];
  }
</script>

<button on:click={increment}>
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
</button>
<p>{count} doubled is {doubled}</p>

<button on:click={addNumber}> Add a number </button>
<p>{numbers.join(' + ')} = {sum}</p>
