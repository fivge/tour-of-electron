# Svelte + Vite

## tour

### Events

```svelte
<div on:mousemove={handleMousemove}>
  The mouse position is {m.x} x {m.y}
</div>

<div on:mousemove={e => (m = { x: e.clientX, y: e.clientY })}>
  The mouse position is {m.x} x {m.y}
</div>

<button on:click|once={handleClick}> Click me </button>

<Inner on:message={handleMessage}/>

dispatch('message', { text: 'Hello!' });

<!-- 向上透传 -->
<Inner on:message/>

<button on:click> Click me </button>

<Outer on:message={handleMessage} on:click={handleClick} />
```

- `on:mousemove` 事件
- 可以使用 `|` 管道
- `dispatch()` 向上传递事件 (`on:`监听)
- 向上透传可以简写为不带参数的形式 `on:message`
- DOM 事件同理 `on:click`

### Bindings 绑定

```
<input bind:value={name} />

  <input type="number" bind:value={a} min="0" max="10" />
  <input type="range" bind:value={a} min="0" max="10" />
  <input type="checkbox" bind:checked={yes} />
  <input type="radio" bind:group={scoops} name="scoops" value={1} />
```

- `bind:value` 绑定
- `<input />` 可指定类型，并且绑定值类型也进行转换
- `input`: `number` `range` `checkbox` `radio`
- `input`: `bind:group` 组
- 当绑定的变量名为 value 时，可简写为 `bind:value`
- `select`
- `contenteditable="true"` support `textContent` and `innerHTML`
- `media` <https://svelte.dev/tutorial/media-elements>
- Every block-level element has clientWidth, clientHeight, offsetWidth and offsetHeight bindings
- `bind:this`
- ...more

### Lifecycle 生命周期
