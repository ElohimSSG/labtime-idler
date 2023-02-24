let nodes;

$(document).ready(function () {
    nodes = fetch("/labtime-idler/js/data/skill_nodes.json").then(response => {return response.json()});
    console.log(nodes);
});