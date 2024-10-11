<template>
    <section class="hero">
       
<div>
    <h2 class="text-h2 container-color">Conquer Sickle Cell <br>Together</h2>
    <p class="text-p container-color">Join us in the fight against sickle cell disease!
        Let's work together to provide support, resources, and hope for those affected by this debilitating condition. Together, we can make a difference and ensure a healthier future for our children.</p>
</div>

    </section>
</template>
<script>
export default{
    name:'landingPage'
}
</script>
<style>
*{
    margin: 0;
}
.hero{
    height: 100vh;
    background-image: url('/src/assets/smiling-children.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    border-radius: 10px;
    background-position: center;
    position: relative;
}
.hero > div{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    color: white;
    background-image: linear-gradient(to right, rgb(254, 242, 244) 20%,rgb(254, 242, 244,0.9) 40%, rgb(254, 242, 244,0.8) 55%, rgb(254, 242, 244,0.4) 85%,rgb(254, 242, 244,0) 100%);
}
.container-color{
    color: #D14D72;
}
.text-h2{
    padding-top: 30vh;
    font-size: clamp(1.4238rem, 1.0921rem + 1.6585vw, 2.6469rem);
    padding-left: 1em;
}
.text-p{
    font-size: clamp(1.125rem, 1.0243rem + 0.5034vw, 1.4963rem);
    padding-left: 1.7em;
    max-width: min(90%, 500px);
}
</style>