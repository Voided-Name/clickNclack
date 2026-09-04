<script lang="ts">
  let volume = "1";

  function handleVolumeChange(event: Event) {
    Howler.volume(Number(volume));
  }
</script>

<input
  type="range"
  tabindex="-1"
  id="volume"
  min="0"
  max="1"
  step="0.05"
  bind:value={volume}
  onchange={handleVolumeChange}
  class="outline-none accent-orange-600 appearance-none bg-slate-800 h-2 rounded-full my-3"
/>
