<template>
    <main class="min-h-screen w-full bg-[#0D0F12] text-[#E3E6E9] font-sans flex pt-20 justify-center">
        <div class="w-[80%]">
            <ContentDoc />
        </div>
    </main>
</template>

<style>
pre {
    background: #282A36;
    margin-top: 1rem;
    width: fit-content;
    padding: 1rem 2rem;
    border-radius: 10px;
}

pre>code ::selection {
    background: #FFFFFF20;
}
</style>