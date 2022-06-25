<template>
    <div class="control-buttons">
        <router-link to="/player" class="btn">Play</router-link>
        <router-link to="/recorder" class="btn">Recorder</router-link>
    </div>
</template>

<script>
export default {
    name: "HomePage"
}
</script>

<style>
.control-buttons {
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 10;
}
.btn {
    display: block;
    background: #000;
    padding: 10px 30px;
    color: #fff;
    font-size: 42px;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 30px;
}
</style>
