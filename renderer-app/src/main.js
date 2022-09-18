import './app.css';
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app'),
  props: {
    // @ts-ignore
    versions: window.versions,
  },
});

export default app;
