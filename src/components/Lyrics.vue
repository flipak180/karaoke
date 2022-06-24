<template>
    <div class="lyrics">
        <p class="active">Paranoia is in bloom</p>
        <p class="next">The PR transmissions will resume</p>
        <p>They'll try to push drugs that keep us all dumbed down</p>
        <p>And hope that we will never see the truth around</p>
        <p>(So come on)</p>
        <p>Another promise, another scene</p>
        <p>Another packaged lie to keep us trapped in greed</p>
        <p>And all the green belts wrapped around our minds</p>
        <p>And endless red tape to keep the truth confined</p>
        <p>(So come on)</p>
        <p>They will not force us</p>
        <p>They will stop degrading us</p>
        <p>They will not control us</p>
        <p>We will be victorious</p>
        <p>(So come on)</p>
        <p>Interchanging mind control</p>
        <p>Come, let the revolution take its toll</p>
        <p>If you could flick the switch and open your third eye</p>
        <p>You'd see that we should never be afraid to die</p>
        <p>(So come on)</p>
        <p>Rise up and take the power back</p>
        <p>It's time the fat cats had a heart attack</p>
        <p>You know that their time's coming to an end</p>
        <p>We have to unify and watch our flag ascend</p>
        <p>(So come on)</p>
        <p>They will not force us</p>
        <p>They will stop degrading us</p>
        <p>They will not control us</p>
        <p>We will be victorious</p>
        <p>(So come on)</p>
        <p>They will not force us</p>
        <p>They will stop degrading us</p>
        <p>They will not control us</p>
        <p>We will be victorious</p>
        <p>(So come on)</p>
    </div>
</template>

<script>
export default {
    name: "Test"
}
</script>

<style scoped>

.lyrics {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 900;
    font-size: 1.5rem;
    padding: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.lyrics p {
    display: none;
    margin-bottom: 0;
}

.lyrics .active,
.lyrics .next {
    display: block;
}

.lyrics .next {
    font-size: 1rem;
    opacity: 0.5;
}

</style>
