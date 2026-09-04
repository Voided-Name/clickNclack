<script lang="ts">
  import Keyboard from "../lib/components/Keyboard.svelte";
  import Volume from "$lib/components/Volume.svelte";

  let text = $state("");
</script>

<main class="flex w-screen h-screen justify-center items-center bg-slate-950">
  <div
    role="textbox"
    aria-label="keyboard input display"
    class="w-full flex flex-col gap-3 justify-center items-center"
  >
    <p class="h-12 text-slate-500">
      {text}
    </p>
    <Volume />
    <Keyboard bind:text />
  </div>
</main>
