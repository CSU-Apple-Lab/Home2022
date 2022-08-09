<script lang="ts">
export let progress = 0;
export let spinnerStyle = "stroke: rgb(82,82,82)";
export let progressStyle = "stroke: rgb(0, 0, 0)";
export let progressBackStyle = "stroke: rgb(219, 219, 219)";
</script>
{#if progress !== 0}
  <svg viewBox="0 0 100 100">
    <line x1="25" y1="50" x2={75} y2="50" style={progressBackStyle} stroke-width="0.5" stroke-linecap="butt"/>
    <line class="transition-all duration-1000" style={progressStyle} x1="25" y1="50" x2={25 + 50*(progress)} y2="50" stroke-width="0.5" stroke-linecap="butt"/>
  </svg>
{:else}
  <svg class="spinner" viewBox="0 0 50 50">
    <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="0.5" style={spinnerStyle}></circle>
  </svg>
  {/if}

<style lang="scss">
.spinner {
  animation: rotate 2s linear infinite;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;
  
  & .path {
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>