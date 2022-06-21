<template>
    <video src="@/assets/video/uprising.mp4" playsinline id="video"></video>
</template>

<script>
export default {
    name: "Video",
}
</script>

<style scoped>

video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
}

</style>
