$(()=> {//ページ読み込み時の処理
  // alert('helloworld')
  const url = "http://localhost:3000/restaurants"
  $.getJSON(url).done( (json) => {
    console.log(json);
    for(let i in json){
      let h = '<li>'
            + '<a href="menu.html?id='+i+'">'
            + json[i].r_name
            + '</li>'
            + '</a>'
            + '<li>'
            + json[i].genre
            + '</li>';

      $("ul#wrap").append(h);
    }
  })
});
