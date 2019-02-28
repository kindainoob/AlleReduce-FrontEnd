$(()=> {//ページ読み込み時の処理
  // alert('helloworld')
  const url = "msmaguro.net:3000/restaurants"
  $.getJSON(url).done( (json) => {
    console.log(json);
    for(let i = 0 ; i < 3 ; i++){
      // console.log(i)
      let h = `<div class="store1">
                <li>
                  <a href="http://www.inatatsu.com/AlleReduce/menu.html?id=${i}">
                  <img src="./img/restaurants/${i+1}.png">
                  </a>
                  <h3>${json[i].r_name}</h3>
                </li>
              </div>
                  `

      $(".store2").append(h);
    }
    for(let i = 3 ; i < 5 ; i++){
      // console.log(i)
      let h = `<div class="store1">
                <li>
                  <a href="http://www.inatatsu.com/AlleReduce/menu.html?id=${i}">
                  <img src="./img/restaurants/${i+1}.png">
                  </a>
                  <h3>${json[i].r_name}</h3>
                </li>
              </div>
                  `

      $(".store3").append(h);
    }

  })
});
