<script>
  import { page } from "$app/stores";
</script>

<div class="w-full flex flex-col gap-y-4 pt-12 items-center">
  <p class="text-4xl">👻</p>
  <p class="text-4xl font-black">{$page.status}</p>
  <h1 class="text-2xl font-bold">{$page.error?.message}</h1>
  <a href="/" class="text-blue-700 underline">Back to home</a>
</div>
