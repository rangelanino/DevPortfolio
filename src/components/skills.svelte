<div id="container" class="py-12 mx-auto w-16 md:w-32 lg:w-48">
    <h1 style="font-size: 32px"> Core Competencies</h1>
    <div id="outer" class="flex">
        <div id="inner">
            <ul>
                <li id="head">Languages</li>
                {#each languages as lang, i}
                <li class="py-2"> {lang} </li>
                {/each}
            </ul>
        </div>
        <div id="inner">
            <ul>
                <li id="head">Analytics</li>
                {#each data_engg as engg, i}
                <li class="py-2"> {engg} </li>
                {/each}
            </ul>    
        </div>
        <div id="inner">
            <ul>
                <li id="head">Dev Tools</li>
                {#each dev_tools as tool, i}
                <li class="py-2"> {tool} </li>
                {/each}
            </ul>    
        </div>
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

#container{
    display: table;
    margin-right: auto;
    margin-left: auto;
}
#outer{
    flex-direction: row;
}
#inner{
    margin-top: 1em;
}
#head {
    font-size: 32px;
    font-weight: 800;
}

@media (max-width:1100px){
    #outer {
        flex-direction: column;
    }
}

ul {
    min-width: 20em;
}
h1{
    font-size: 100px;
    font-weight: 900;
}
li {
    font-size: 24px;
    text-align: center;
}
</style>