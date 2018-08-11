var city = new Array();
city[0] = new Array("");
city[1] = new Array("秦皇岛", "唐山");
city[2] = new Array("济南", "青岛");
function changecontent(){
    var id = document.getElementById("provice").value;
    var opts = document.getElementById("city").options;
    //noinspection JSAnnotator
    opts.length = 0;
    for (var i = 0; i < city[id].length; i++) {
        opts[opts.length] = new Option(city[id][i], i);
    }
}
/**
 * Created by 阮泽 on 2018/8/11.
 */
