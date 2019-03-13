var balloonText = 
    '<p style="font-size: 100%; font-weight: bold; margin-bottom: 10px;">[[category]]</p>\
    <colspan="1" class="divider"><hr/>\
    <table class="dividers">\
        </thead>\
            <tr>\
                <th>Fase</th>\
                <th>Estimado</th>\
                <th>Real</th>\
            </tr>\
        </thead>\
        <tbody>\
        <tr>\
            <td>01-Movimiento de suelos</td>\
            <td>[[01]]</td>\
            <td><font color="#276530">[[01R]]</font></td></tr>\
        <tr>\
            <td>02- Caminos, Cercos, Canales y Cañeros</td>\
            <td>[[02]]</td>\
            <td><font color="#276530">[[02R]]</font></td>\
        </tr>\
        <tr>\
            <td>03- Fundaciones Transformadores, Pórticos y Equipos</td>\
            <td>[[03]]</td>\
            <td><font color="#276530">[[03R]]</font></td>\
        </tr>\
        <tr>\
            <td>04-Edificio</td>\
            <td>[[04]]</td>\
            <td><font color="#276530">[[04R]]</font></td>\
        </tr>\
        <tr>\
            <td>05-Montaje de Estructuras, Antenas y Equipos</td>\
            <td>[[05]]</td>\
            <td><font color="#276530">[[05R]]</font></td>\
        </tr>\
        <tr>\
            <td>08-Montaje Tableros, Tendido y Conexionado BT</td>\
            <td>[[08]]</td>\
            <td><font color="#276530">[[08R]]</font></td>\
        </tr>\
        <tr>\
            <td>09-Montaje Equipos MT</td>\
            <td>[[09]]</td>\
            <td><font color="#276530">[[09R]]</font></td>\
        </tr>\
        <tr>\
            <td>10-Comunicaciones y PEM</td>\
            <td>[[10]]</td>\
            <td><font color="#276530">[[10R]]</font></td>\
        </tr>\
        <tr>\
            <td>11-Indirectos</td>\
            <td>[[11]]</td>\
            <td><font color="#276530">[[11R]]</font></td>\
        </tr>\
      </tbody>\
    </table>';
    
    
var chart = AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "theme": "light",
  "language": "es",
  "dataDateFormat": "YYYY-MM-DD",
  "precision": 0,

    "dataLoader": {
        //"url":"C:\Users\danie\Documents\NetBeansProjects\DataProviderChart.json",
        //"url": "http://200.69.217.81:8021/SinecProjects/DataProviderChart",
        //"url": "../../../../DataProviderChart",
        "url": "DataProviderChart.json",
        "format": "json",
        "complete": function( data ){
            console.log("COMPLETE "  + data);
            //$("#dialog-confirmation").show();  
        }
    },
    "valueAxes": [{
            "id": "v1",
            "logarithmic":false,
            "title": "Estimated Scale",
            "position": "left",
            "autoGridCount": false,
        }
  
  , {
            "id": "v2",
            "title": "Real Scale",
            "gridAlpha": 0,
            "position": "right",
            "autoGridCount": false,
            "logarithmic":true
        }
    ],
    "graphs": [{
        "id": "g3",
        "valueAxis": "v1",
        "lineColor": "#e1ede9",
        "fillColors": "#e1ede9",
        "fillAlphas": 1,
        "type": "column",
        "title": "Estimados",
        "valueField": "Estimado",
        "clustered": false,
        "columnWidth": 8.5,
        "labelText": "[[value]]",
        "labelAnchor":"auto",
        //"legendValueText": "$[[value]]M",
        "balloonText": balloonText // "[[title]]<br/><b style='font-size: 130%'>$[[value]]M</b>"
      }, {
        "id": "g4",
        "valueAxis": "v1",
        "lineColor": "#62cf73",
        "fillColors": "#62cf73",
        "fillAlphas": 1,
        "type": "column",
        "title": "Reales",
        "valueField": "Real",
        "clustered": false,
        "columnWidth": 8.1,
        "labelText": "[[value]]",
        "showBalloon": false
        //"legendValueText": "$[[value]]M"
        //"balloonText": "[[title]]<br/><b style='font-size: 130%'>$[[value]]M</b>"
      }, {
        "id": "g1",
        "valueAxis": "v1",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": "#20acd4",
        "type": "smoothedLine",
        "title": "Curva Real",
        "useLineColorForBulletBorder": true,
        "valueField": "Real",
        "showBalloon": false
        //"balloonText": balloonText
      }, {
        "id": "g2",
        "valueAxis": "v1",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": "#e1ede9",
        "type": "smoothedLine",
        "dashLength": 2,
        "title": "Curva Estimada",
        "useLineColorForBulletBorder": true,
        "valueField": "Estimado",
         "showBalloon": false
        //"balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"
      }
  
    ],
  "chartScrollbar": {
    "graph": "g1",
    "oppositeAxis": false,
    "offset": 30,
    "scrollbarHeight": 50,
    "backgroundAlpha": 0,
    "selectedBackgroundAlpha": 0.1,
    "selectedBackgroundColor": "#888888",
    "graphFillAlpha": 0,
    "graphLineAlpha": 0.5,
    "selectedGraphFillAlpha": 0,
    "selectedGraphLineAlpha": 1,
    "autoGridCount": true,
    "color": "#AAAAAA"
  },
  "chartCursor": {
    "pan": false,
    "valueLineEnabled": true,
    "valueLineBalloonEnabled": true,
    "cursorAlpha": 0,
    "valueLineAlpha": 0.2
  },
  "categoryField": "Fecha",
  "categoryAxis": {
    "parseDates": true,
    "dashLength": 1,
    "minorGridEnabled": true
  },
  "legend": {
    "forceWidth":true,
    "useGraphSettings": true,
    "position": "top",
    "align":"center"
  },
  "balloon": {
    "borderThickness": 1,
    "shadowAlpha": 0
  },
  "export": {
    enabled: true,
    fileName: "Informe-de-Obra-Bauchaceta",
  },
  "listeners": [{
    "event": "clickGraphItem",
    "method": function(event) {
        updateshow();
        try{
            console.log("SIZE >> " + event.item.dataContext.Real);
            if (event.item.dataContext.Real >0){
                var chartPie = AmCharts.makeChart( "divchart", {
                    "type": "pie",
                    "theme": "none",
                    "dataProvider": event.item.dataContext.detalle,
                    "valueField": "importe",
                    "titleField": "concepto",
                    "outlineAlpha": 0.4,
                    "depth3D": 15,
                    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                    "angle": 30,
                    "export": {
                    "enabled": true
                    },
                    "listeners": [{
                        "event": "clickSlice",
                        "method": function(event) {
                            try{
                                //$('#table').bootstrapTable('removeAll');
                                console.log(event.dataItem.dataContext.gastos);   

                                $('#table').bootstrapTable({
                                  data: event.dataItem.dataContext.gastos
                                 });
                                  $('#table').bootstrapTable('load',event.dataItem.dataContext.gastos);
                                  // $('#table').DataTable({
                                  //    "paging": true // false to disable pagination (or any other option)
                                  //});
                            }catch(error){
                               console.log("ERROR :" + error.message);            
                            }
                        }
                    }]
                }); 
                var date = new moment(event.item.category,"YYYY/MM/DD");
                opt.title = " DETALLE DE CONCEPTOS " + date.format('ddd, ll');
                document.getElementById("titleh3").innerHTML= date.format('MM-YYYY');
                //$("#dialog-confirmation").show();
                //var theDialog = $("#dialog-confirmation").dialog(opt);
                //$("#theDialog").css({background: "#FFFFFF", opacity: 0.9});
                theDialog.dialog("open");
                theDialog.dialog();
            }
        }catch(error){
            console.log(error.message);            
        }
    }
  }]

});
$('#selectProject').on('change', function() {
   $('#table').bootstrapTable('removeAll');
    //chart.dataLoader.url= 
    //var urlDataSource = "../../../../DataProviderChart?proyectocentrocosto="+this.value;
    //var urlDataSource="http://200.69.217.81:8021/SinecProjects/DataProviderChart?proyectocentrocosto="+this.value;
    var urlDataSource = "DataProviderChart.json="+this.value;
    console.log("CHANGE >> " +urlDataSource);
    setDataSet(urlDataSource);
    //$("#dialog-confirmation").hide();  
    
});
function setDataSet(dataset_url) {
    console.log("CHANGE >> " +chart.dataLoader.url);
    chart.dataLoader.url = dataset_url;
    chart.dataLoader.loadData(dataset_url);
    chart.validateData();
    //AmCharts.loadFile(dataset_url, {}, function(data) {
    //    chart.dataProvider = AmCharts.parseJSON(data);
    //    chart.validateData();
    //});
};
var opt = {
        autoOpen: false,
        modal: true,
        width: 600,
        height:300,
        title: 'Detalle Conceptos ',
        buttons: {
            "Cerrar": function () {
                $(this).dialog("close");
            }
        }    
};
function updateshow(){
    //document.getElementById('divshow').style.display='block';
    $("#divshow").show();
    switch(document.getElementById("selectProject").value){
        case "A0410A03":
            document.getElementById("titleh2").innerHTML="Proyecto Bauchaceta";
        break;
        case "A1110A01":
            document.getElementById("titleh2").innerHTML="Proyecto Madryn";
        break;
    }
};
function fnExcelReport()
{
    var tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
    var textRange; var j=0;
    tab = document.getElementById('table'); // id of table

    for(j = 0 ; j < tab.rows.length ; j++) 
    {     
        tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
        //tab_text=tab_text+"</tr>";
    }

    tab_text=tab_text+"</table>";
    tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
    tab_text= tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table
    tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE "); 

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
    {
        txtArea1.document.open("txt/html","replace");
        txtArea1.document.write(tab_text);
        txtArea1.document.close();
        txtArea1.focus(); 
        sa=txtArea1.document.execCommand("SaveAs",true,"Say Thanks to Sumit.xls");
    }  
    else                 //other browser not tested on IE 11
        sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));  

    return (sa);
}