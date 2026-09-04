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
  class="outline-none"
/>
