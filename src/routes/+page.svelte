<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<svelte:head>
  <title>0xJSC</title>
</svelte:head>

<div class="flex flex-col items-center gap-y-4 md:gap-y-4 mx-4">
  <h1 class="font-bold text-xl md:text-2xl lg:text-3xl">Essays</h1>
  <div class="flex flex-col gap-y-2 lg:gap-y-4`">
    {#if data.posts.length === 0}
      <p class="text-lg md:text-xl lg:text-2xl">Nothing here 🫠</p>
    {:else}
      {#each data.posts as post}
        <article>
          <p class="text-sm md:text-base lg:text-lg">{post.metadata.date}</p>
          <a
            class="hover:underline decoration-sky-600"
            href={`/post/${post.slug}`}
          >
            <h2 class="text-lg md:text-2xl lg:text-3xl text-sky-600 font-bold">
              {post.metadata.title}
            </h2>
          </a>
        </article>
      {/each}
    {/if}
  </div>
</div>
