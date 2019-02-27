$(() => {
  const url = "http://localhost:3000/users"
  $.getJSON(url).done((json) => {
    let data = `<p>${json.u_name}</p>`
    if(json.allergy.match(/egg/)){
      data += '<p style="color:red">卵</p>'
    }else{
      data += '<p>卵</p>'
    }
    if(json.allergy.match(/milk/)){
      data += '<p style="color:red">乳</p>'
    }else{
      data += '<p>乳</p>'
    }
    if(json.allergy.match(/flour/)){
      data += '<p style="color:red">小麦</p>'
    }else{
      data += '<p>小麦</p>'
    }
    if(json.allergy.match(/crab/)){
      data += '<p style="color:red">かに</p>'
    }else{
      data += '<p>かに</p>'
    }
    if(json.allergy.match(/shrimp/)){
      data += '<p style="color:red">えび</p>'
    }else{
      data += '<p>えび</p>'
    }
    if(json.allergy.match(/soba/)){
      data += '<p style="color:red">そば</p>'
    }else{
      data += '<p>そば</p>'
    }
    if(json.allergy.match(/peanuts/)){
      data += '<p style="color:red">落花生</p>'
    }else{
      data += '<p>落花生</p>'
    }
    $("div#user_name").append(data);
  })
});
