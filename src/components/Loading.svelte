<script lang="ts">
import { fade } from "svelte/transition";
import { slide } from "svelte/transition";
export let endLoading = false;
const contents = [
    "Comunicate()",
    "Share()",
    "Create()",
    "Study()",
    "Listen()"
];
let displayContents:string[] = [];
let hidden = false;
let id: any;
function animation(el:HTMLElement) {
    let count = 0;
    id = setInterval(()=>{
        if ( count < contents.length ) {
            const last = contents[count];
            displayContents.push(last);
            displayContents = displayContents;
            count++;
        }else if(endLoading){
            hidden = true;
        }else{
           displayContents = [];
           count = 0;
        }
    },1000);
    return {
        destroy() {
            clearInterval(id);
        }
    }
}
</script>
{#if !hidden}
<div transition:fade use:animation class={`fixed top-0 w-full h-full bg-white flex justify-center items-center`}>
    <div class="w-60 flex flex-col gap-1 justify-center items-start text-4xl">
        <p>{"func Join(){"}</p>
        <div class="pl-5">
            {#each displayContents as content }
                <p transition:slide>{content}</p>
            {/each}
        </div>
        <p>{"}"}</p>
    </div>
</div>
{/if}