
<script>
    import Sideicons from '../components/sideicons.svelte';
    import Header from '../components/header.svelte';
    import Skills from '../components/skills.svelte';
    import WorkAnino from '../components/work_anino.svelte';
    import WorkNip from '../components/work_nip.svelte';
</script>

<Header />
<body class="bg-gradient-to-r from-indigo-200 to-indigo-400"> 
    <div class="flex items-center justify-center">        
        <h1 id="lastname" class="ml-5 pt-3">RANGEL</h1>
    </div>
    <div class="flex items-center justify-center">
        <h3>Physicist turned <i>Data Engineer</i></h3>
    </div>
    <div class="h-20">
    </div>
    <Sideicons />
    <div class = "grid grid-cols-8 gap-4">
        <div id="container" class="col-start-3 col-span-4 rounded-2xl">
            <Skills />
        </div>
        <div class="col-start-2 col-span-6 h-20 row-span-3">
        </div>
        <div class="col-start-2 col-span-6 flex">
            <div class="px-5 rounded-2xl bg-slate-200 shadow-2xl">
               <h1> Work Experience </h1>
            </div>
        </div>
        <div class="col-start-2 col-span-6 rounded-2xl bg-slate-50 shadow-2xl">
            <WorkAnino />
        </div>
        <div class="col-start-2 col-span-6 rounded-2xl bg-slate-50 shadow-2xl">
            <WorkNip />
        </div>
    </div>
    <br>

<footer id="footer" class="text-center p-5 text-gray-600 border-t-[1px] border-grey-100">
    &#169; 2023 Jerico Rangel
<footer/>    
</body>

<style lang="postcss">

#lastname{
    font-size: 128px;
    font-weight: 1000;
    color: black;
    letter-spacing: 4px;
}
h3{
    font-size: 24px;
    font-weight: 600;
    margin-top: -12px;
}
h1{
    font-size: 64px;
    font-weight: 900;
}  

</style>