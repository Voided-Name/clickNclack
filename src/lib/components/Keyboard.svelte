<script lang="ts">
  import { keymap, soundMap } from "../constants";

  let {
    text = $bindable(),
    spacedText = $bindable(),
    spacedToggle = $bindable(),
  } = $props();

  function handleKeydown(e: KeyboardEvent) {
    const keySpace = document.getElementById("keySpace");

    if (e.key == " ") {
      if (!keySpace) {
        return;
      }

      spacedText = text;
      spacedToggle = !spacedToggle;
      text = "";

      if (!e.repeat) {
        soundMap[Math.floor(Math.random() * 4)].play();
      }
      keySpace.classList.add("keypress-effect");
      keySpace.addEventListener(
        "animationend",
        () => {
          keySpace.classList.remove("keypress-effect");
        },
        { once: true },
      );
      return;
    }

    if (e.key == "Backspace") {
      text = text.slice(0, -1);
      if (!e.repeat) {
        soundMap[Math.floor(Math.random() * 4)].play();
      }

      return;
    }

    const id = "key" + e.key.toUpperCase();
    let keyDiv = document.getElementById(id);

    if (!keyDiv) {
      return;
    }

    text += e.key.toUpperCase();

    if (!e.repeat) {
      soundMap[Math.floor(Math.random() * 4)].play();
    }

    keyDiv.classList.add("keypress-effect");

    keyDiv.addEventListener(
      "animationend",
      () => {
        keyDiv.classList.remove("keypress-effect");
      },
      { once: true },
    );
  }
</script>

{#each keymap as keyrow}
  <div class="w-full flex justify-center items-center gap-3">
    {#each keyrow as key}
      <div
        class="border-2 w-12 h-12 flex justify-center items-center border-slate-300 text-slate-300"
        id={"key" + key}
      >
        {key}
      </div>
    {/each}
  </div>
{/each}
<div
  id="keySpace"
  class="w-64 h-12 border-2 flex justify-center items-center border-slate-300 text-slate-300"
>
  SPACE
</div>

<svelte:window onkeydown={handleKeydown} />
