<div id="container" class="py-12 mx-auto">
    <h1 style="font-size: 32px"> Core Competencies</h1>
    <div class="flex space-x-10">
    <ul>
        <li id="head"> Programming Languages </li>
        {#each languages as lang, i}
        <li> {lang} </li>
        {/each}
    </ul>
    <ul>
        <li id="head">Data Analytics and ETL</li>
        {#each data_engg as engg, i}
        <li> {engg} </li>
        {/each}
    </ul>
    <ul>
        <li id="head">Dev Tools</li>
        {#each dev_tools as tool, i}
        <li> {tool} </li>
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

#container{
    display: table;
  margin-right: auto;
  margin-left: auto;

}

h1{
    font-size: larger;
    font-weight: 900;
}

li {
    text-align: center;
}

#head {
    font-size: larger;
    font-weight: 800;
}
</style>