$(()=> {//ページ読み込み時の処理
  let param = location.search;
  let tmp = param.split("=");
  let id = Number(tmp[1]) + 1;

  const url = "http://localhost:3000/restaurants/" + id
  $.getJSON(url).done( (json) => {
    console.log(json);
    for(let i in json){
      let h = '<li>'
            + json[i].m_name
            +'<li>';

      $("ul#wrap").append(h);
    }
  }).fail( () => {
    console.log("失敗");
  }).always( () => {
    console.log("実行")
  })
})
