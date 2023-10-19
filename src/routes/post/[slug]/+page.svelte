<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  console.log(data.post);
</script>

<svelte:head>
  <title>{data.post.metadata.title}</title>
  <meta name="description" content={data.post.metadata.description} />
  <meta name="keywords" content={data.post.metadata.tags?.join(", ")} />
  <meta name="author" content={data.post.metadata.author} />
</svelte:head>

<div class="flex flex-col items-center px-2">
  <article class="flex flex-col gap-y-4">
    <header class="flex flex-col items-center lg:items-start gap-y-2">
      <h1 class="text-2xl md:text-4xl lg:text-6xl font-bold lg:font-black">
        {data.post.metadata.title}
      </h1>
      <p class="lg:text-lg text-gray-500">{data.post.metadata.date}</p>
    </header>
    <div class="prose prose-yellow lg:prose-lg">
      {@html data.post.content}
    </div>
  </article>
</div>
