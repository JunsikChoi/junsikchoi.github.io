<script>
  import "../app.css";
</script>

<div class="">
  <header
    class="
  p-4 md:p-6 lg:p-8 flex flex-row justify-between"
  >
    <a href="/">
      <h1 class="text-xl md:text-2xl font-black">0xJSC</h1>
    </a>
    <!-- <nav>
      <ul class="flex gap-x-4 md:gap-x-6 lg:gap-x-8">
        <li>
          <a class="hover:underline" href="/about">About</a>
        </li>
        <li>
          <a class="hover:underline" href="/posts">Posts</a>
        </li>
      </ul>
    </nav> -->
  </header>
  <main class="mx-auto lg:max-w-4xl min-h-screen">
    <slot />
  </main>
  <footer class="my-4 py-4 flex flex-col gap-y-2 items-center justify-center">
    <ul class="flex gap-x-3">
      <li class="text-gray-500">
        <a href="https://twitter.com/0xjsc"> Twitter </a>
      </li>
      <li class="text-gray-500">
        <a href="https://www.linkedin.com/in/junsikchoi91"> LinkedIn </a>
      </li>
      <li class="text-gray-500">
        <a href="https://github.com/JunsikChoi"> Github </a>
      </li>
    </ul>
    <p class="text-gray-500">Copyright © 2023 0xJSC</p>
  </footer>
</div>
