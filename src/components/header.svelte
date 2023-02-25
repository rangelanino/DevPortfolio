<nav class="bg-slate-300"> 
    <div id="bar" class="mx-auto border border-slate-400">
        <div class="flex py-4 px-2">
            <div style="width: 20%;" class="ml-3">
                <a href="/">
                 J.R.   
                </a>
            </div>
            <div class="flex items-center justify-between" style="width: 60%;">
                <div>
                    <!-- <a href="/work"> -->
                        Work  
                    <!-- </a> -->
                </div>
                <div>
                    <!-- <a href="/samples"> -->
                        Samples
                    <!-- </a> -->
                </div>
                <div>
                    <!-- <a href="/rcv"> -->
                        Resume/CV  
                    <!-- </a> -->
                </div>
                <div>
                    <!-- <a href="/contact"> -->
                        Contact  
                    <!-- </a> -->
                </div>    
            </div>
            <div id="menu" style="width: 20%;" class="mr-3">  
                <a  id="menu">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</nav>
<svelte:window bind:innerWidth bind:innerHeight />
<!-- <p> Inner Width: {innerWidth} </p>
<p> Inner Height: {innerHeight} </p>
<p> condition: {condition} </p> -->

<script>
    let innerWidth = 0
    let innerHeight = 0
    
    $: condition = innerWidth*1.33 <= innerHeight
</script>

<style>
#bar{
    max-width:device-width;
}
#menu{
    float:right;
}
</style>