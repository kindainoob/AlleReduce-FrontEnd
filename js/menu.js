let json;
$(() => {//ページ読み込み時の処理
  let param = location.search;
  let tmp = param.split("=");
  let id = Number(tmp[1]) + 1;

  // let req = "";
  // let latlon;

  const url = "http://localhost:3000/restaurants/" + id
  // const url = "http://inatatsu.com/AlleReduce/restaurants/" + id
  $.getJSON(url).done( (j) => {
    json = j;
    // console.log(json[1]);
    // console.log(json[2]);
    $(".name").append(json[0].r_name);
    $(".addr").append(json[0].address);
    for(let i in json[1]) {
      let h = `<tr id="tr-${i}">
            <td>${json[1][i].m_name}</td>
            <td>${json[1][i].price}</td>
            <td>${check("egg",json[1][i].allergy)}</td>
            <td>${check("flour",json[1][i].allergy)}</td>
            <td>${check("milk",json[1][i].allergy)}</td>
            <td>${check("shrimp",json[1][i].allergy)}</td>
            <td>${check("crab",json[1][i].allergy)}</td>
            <td>${check("soba",json[1][i].allergy)}</td>
            <td>${check("peanuts",json[2].allergy,json[1][i].allergy)}</td>
          </tr>`

      $("#tbody-wrap").append(h);
    }
    let addr = json[0].address;
    let req = `https://map.yahooapis.jp/geocode/V1/geoCoder?appid=dj00aiZpPTE2YlhwM2lycEc0TiZzPWNvbnN1bWVyc2VjcmV0Jng9NWQ-&query=${addr}&output=json`
    $.getJSON(req).done((j) => {
      let latlon = j["Feature"][0]["Geometry"]["Coordinates"].split(",");
      // console.log(latlon);
      let ymap = new Y.Map("map", {
            dragging : false
        });
        ymap.drawMap(new Y.LatLng(latlon[1],latlon[0]), 17, Y.LayerSetId.NORMAL);
        // ymap.drawMap(new Y.LatLng(34.65123, 135.587042), 17, Y.LayerSetId.NORMAL);

    })
  }).done( () => {
    for(let i in json[1]) {
      check2("egg",json[2].allergy,json[1][i].allergy,i);
      check2("flour",json[2].allergy,json[1][i].allergy,i);
      check2("milk",json[2].allergy,json[1][i].allergy,i);
      check2("shrimp",json[2].allergy,json[1][i].allergy,i);
      check2("crab",json[2].allergy,json[1][i].allergy,i);
      check2("soba",json[2].allergy,json[1][i].allergy,i);
      check2("peanuts",json[2].allergy,json[1][i].allergy,i);
    }
  })

})

check = (e,r) => {// e <- あlエルギーの要素(element) u <- user r <- restaurant
  if (!(r.match(e))) {
    return '-'
  }
  else {
    return '◯'
  }

}

check2 = (e,u,r,i) => {
  // console.log(r)
  if((r.match(e)) && (u.match(e))){
    let tr = document.getElementById(`tr-${i}`);
    tr.setAttribute("class", "bb");
  }
}
