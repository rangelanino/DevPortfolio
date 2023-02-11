
<script>
    import Sideicons from '../components/sideicons.svelte';
    import Header from '../components/header.svelte';
    import Skills from '../components/skills.svelte';
</script>

<Header />
<body class="bg-gradient-to-r from-indigo-200 to-indigo-400"> 
    <div class="flex items-center justify-center">        
        <h1 id="lastname" class="ml-5 pt-3">RANGEL</h1>
    </div>
    <div class="flex items-center justify-center">
        <h3>Physicist turned <i>Data Engineer</i></h3>
    </div>
    <Sideicons />
    <Skills />
</body>

<style lang="postcss">

#lastname{
    font-size: 83px;
    font-weight: 1000;
    color: black;
}   

</style>