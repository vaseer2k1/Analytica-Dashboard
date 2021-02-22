am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);

    var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
    networkSeries.dataFields.linkWith = "linkWith";
    networkSeries.dataFields.name = "name";
    networkSeries.dataFields.id = "name";
    networkSeries.dataFields.value = "value";
    networkSeries.dataFields.children = "children";

    networkSeries.nodes.template.label.text = "{name}"
    networkSeries.fontSize = 8;
    networkSeries.linkWithStrength = 0;

    var nodeTemplate = networkSeries.nodes.template;
    nodeTemplate.tooltipText = "{name}";
    nodeTemplate.fillOpacity = 1;
    nodeTemplate.label.hideOversized = true;
    nodeTemplate.label.truncate = true;

    var linkTemplate = networkSeries.links.template;
    linkTemplate.strokeWidth = 1;
    var linkHoverState = linkTemplate.states.create("hover");
    linkHoverState.properties.strokeOpacity = 1;
    linkHoverState.properties.strokeWidth = 2;


    nodeTemplate.events.on("over", function (event) {
        var dataItem = event.target.dataItem;
        dataItem.childLinks.each(function (link) {
            link.isHover = true;
        })
    })

    nodeTemplate.events.on("out", function (event) {
        var dataItem = event.target.dataItem;
        dataItem.childLinks.each(function (link) {
            link.isHover = false;
        })
    })

    networkSeries.data = [{
            "name": "Chennai",
            "value": 204,
            "linkWith": [

            ],
            "children": [{
                    "name": "marina",
                    "value": 100
                },
                {
                    "name": "phoenix",
                    "value": 100
                },
                {
                    "name": "beach",
                    "value": 80
                },
                {
                    "name": "ea",
                    "value": 75
                },

            ]
        },
        {
            "name": "shopping",
            "value": 216,
            "linkWith": [

            ],
            "children": [{
                    "name": "clothing",
                    "value": 100
                },
                {
                    "name": "mall",
                    "value": 80
                },
                {
                    "name": "fun",
                    "value": 110
                },
                {
                    "name": "grocery",
                    "value": 80
                },

            ]
        },
        {
            "name": "cinema",
            "value": 167,
            "linkWith": [

            ],
            "children": [{
                    "name": "imax",
                    "value": 105
                },
                {
                    "name": "luxe",
                    "value": 60
                },
                {
                    "name": "sathyam",
                    "value": 80
                },
                {
                    "name": "pvr",
                    "value": 60
                },
            ]
        },
        {
            "name": "uber",
            "value": 158,
            "linkWith": [

            ],
            "children": [{
                    "name": "driver",
                    "value": 80
                },
                {
                    "name": "cab",
                    "value": 70
                },
                {
                    "name": "toll",
                    "value": 60
                },
                {
                    "name": "ubersupport",
                    "value": 80
                },
                {
                    "name": "ride",
                    "value": 60
                },
            ]
        },
        {
            "name": "foodcourt",
            "value": 158,
            "linkWith": [

            ],
            "children": [{
                    "name": "kfc",
                    "value": 80
                },
                {
                    "name": "dominos",
                    "value": 70
                },
                {
                    "name": "arabiangrill",
                    "value": 60
                },
                {
                    "name": "a2b",
                    "value": 80
                },
                {
                    "name": "coke",
                    "value": 60
                },
                {
                    "name": "thickshakefactory",
                    "value": 60
                },
                {
                    "name": "tasty",
                    "value": 60
                },

            ]
        },
        {
            "name": "security",
            "value": 108,
            "linkWith": [

            ],
            "children": [{
                    "name": "check",
                    "value": 60
                },
                {
                    "name": "customers",
                    "value": 70
                },
                {
                    "name": "staff",
                    "value": 50
                },
                {
                    "name": "long",
                    "value": 60
                },
                {
                    "name": "queues",
                    "value": 60
                }

            ]
        },
        {
            "name": "Covid-19",
            "value": 108,
            "linkWith": [

            ],
            "children": [{
                    "name": "masks",
                    "value": 60
                },
                {
                    "name": "sanitization",
                    "value": 70
                },
                {
                    "name": "socialdistancing",
                    "value": 50
                },
                {
                    "name": "tempraturecheck",
                    "value": 60
                },
                {
                    "name": "limit",
                    "value": 60
                }

            ]
        }
    ];


}); // end am4core.ready()