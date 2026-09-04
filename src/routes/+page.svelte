<script lang="ts">
  import Keyboard from "../lib/components/Keyboard.svelte";
  import Volume from "$lib/components/Volume.svelte";

  let text = $state("");
  let spacedText = $state("");
  let spacedToggle = $state(false);

  $effect(() => {
    let currentText = spacedText;
    let toggle = spacedToggle;
    const spacedTextElement = document.getElementById("spacedText");

    if (!spacedTextElement) {
      return;
    }

    spacedTextElement.classList.add("textPoof-effect");
    spacedTextElement.addEventListener(
      "animationend",
      () => {
        spacedTextElement.classList.remove("textPoof-effect");
      },
      { once: true },
    );
  });
</script>

<main class="flex w-screen h-screen justify-center items-center bg-slate-950">
  <div
    role="textbox"
    aria-label="keyboard input display"
    class="w-full flex flex-col justify-center items-center gap-3"
  >
    <div class="relative my-5 h-12 w-full text-center">
      <p
        id="spacedText"
        class="absolute inset-0 text-4xl text-slate-500 opacity-0"
      >
        {spacedText}
      </p>

      <p class="absolute inset-0 text-4xl text-slate-500">
        {text}
      </p>
    </div>
    <Volume />
    <Keyboard bind:text bind:spacedText bind:spacedToggle />
  </div>
</main>
