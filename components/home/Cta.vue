<template>
  <div
    class="flex flex-col items-center max-w-4xl p-8 mx-auto my-12 text-center bg-black rounded-lg md:px-20 md:py-20"
  >
    <h2 class="text-4xl tracking-tight text-white md:text-6xl">
      加入本站QQ群
    </h2>
    <p class="mt-4 text-lg text-slate-400 md:text-xl">
      加入梦泽的QQ群，群里啥都聊，还有各路大佬祝你开发之路一路畅通
    </p>
    <div class="flex mt-5">
      <HomeLink
        href="https://qm.qq.com/q/SvMuZWteea"
        type="inverted"
        :title="$t('home.cta.button')"
      >
        立即加入
      </HomeLink>
    </div>
  </div>
</template>
