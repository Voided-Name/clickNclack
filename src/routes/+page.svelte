<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";
  import { Howl, Howler } from "howler";

  let name = $state("");
  let greetMsg = $state("");
  const keymap = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  const keymapMap = new Map([
    // Row 0
    ["Q", [0, 0]],
    ["W", [0, 1]],
    ["E", [0, 2]],
    ["R", [0, 3]],
    ["T", [0, 4]],
    ["Y", [0, 5]],
    ["U", [0, 6]],
    ["I", [0, 7]],
    ["O", [0, 8]],
    ["P", [0, 9]],

    // Row 1
    ["A", [1, 0]],
    ["S", [1, 1]],
    ["D", [1, 2]],
    ["F", [1, 3]],
    ["G", [1, 4]],
    ["H", [1, 5]],
    ["J", [1, 6]],
    ["K", [1, 7]],
    ["L", [1, 8]],

    // Row 2
    ["Z", [2, 0]],
    ["X", [2, 1]],
    ["C", [2, 2]],
    ["V", [2, 3]],
    ["B", [2, 4]],
    ["N", [2, 5]],
    ["M", [2, 6]],
  ]);

  async function greet(event: Event) {
    event.preventDefault();
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsg = await invoke("greet", { name });
  }

  function handleKeydown(e: KeyboardEvent) {
    const keySpace = document.getElementById("keySpace");
    if (e.key == " ") {
      if (!keySpace) {
        return;
      }
      console.log("Spacebar pressed");

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

    const id = "key" + e.key.toUpperCase();
    let keyDiv = document.getElementById(id);

    if (!keyDiv) {
      return;
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

<svelte:window onkeydown={handleKeydown} />

<main class="flex w-screen h-screen justify-center items-center">
  <div
    role="textbox"
    aria-label="keyboard input display"
    class="w-full flex flex-col gap-3 justify-center items-center"
  >
    {#each keymap as keyrow}
      <div class="w-full flex justify-center items-center gap-3">
        {#each keyrow as key}
          <div
            class="border-2 w-12 h-12 flex justify-center items-center"
            id={"key" + key}
          >
            {key}
          </div>
        {/each}
      </div>
    {/each}
    <div
      id="keySpace"
      class="w-64 h-12 border-2 flex justify-center items-center"
    >
      SPACE
    </div>
  </div>
</main>
