// window.onload = () => {
//   alert('hello')
// }
$(()=> {//ページ読み込み時の処理
  // alert('helloworld')
  const url = "http://localhost:3000/restaurants"
  $.getJSON(url).done( (json) => {
    console.log(json);
    for(let i in json){
      let h = '<li>'
            + json[i].r_name
            + " "
            + json[i].genre
            + '</li>';
      $("ul#wrap").append(h);
    }
  }).fail( () => {
    console.log("失敗");
  }).always( () => {
    console.log("実行")
  })
})
