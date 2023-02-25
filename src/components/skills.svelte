<div class="grid grid-cols-3 gap-4 p-4 mx-auto">
    <div class="col-span-3">
        <div class ="flex">
            <div class="px-5 bg-slate-200 rounded-2xl shadow-xl">
                <h1> Core Competencies</h1>
            </div>
            <div>
            </div>   
        </div>
    </div>
    <div class="col-start-1">
        <ul class="bg-slate-200 rounded-2xl shadow-xl">
            <li id="head" class="my-2">Languages</li>
            {#each languages as lang, i}
            <li class="py-2"> {lang} </li>
            {/each}
        </ul>
    </div>
    <div class="col-start-2">
        <ul class="bg-slate-200 rounded-2xl shadow-xl">
            <li id="head" class="my-2">Analytics</li>
            {#each data_engg as engg, i}
            <li class="py-2"> {engg} </li>
            {/each}
        </ul>    
    </div>
    <div class="col-start-3">
        <ul class="bg-slate-200 rounded-2xl shadow-xl">
            <li id="head" class="my-2">Dev Tools</li>
            {#each dev_tools as tool, i}
            <li class="py-2"> {tool} </li>
            {/each}
        </ul>    
    </div>    
    
</div>

<script>
const languages = ["Python", "SQL", "Vue", "Typescript", 
                   "Latex", "Bash"];
const data_engg = ["HighCharts", "DuckDB", "Apache Spark", 
                   "Pandas", "Matplotlib", "Seaborn"];
const dev_tools = ["Docker", "Airflow", "Kubernetes", 
                   "ArgoCD", "CircleCI", "WebPack"]
</script>

<style lang="postcss">
#head {
    font-size: 32px;
    font-weight: 900;
}

h1{
    font-size: 39px;
    font-weight: 900;
}
li {
    font-size: 24px;
    text-align: center;
}
</style>