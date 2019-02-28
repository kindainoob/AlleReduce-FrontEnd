$(() => {
  const url = "msmaguro.net:3000/users"
  $.getJSON(url).done((json) => {
    $("#namae").append(json.u_name);
    $("#seibetu").append(json.sex);
    $("#nenrei").append(json.age);

    let data = `<ul class="allergyID">
                  <div class="allergy2">`
    if(json.allergy.match(/egg/)){
      data += `<div class="allergy1">
                <li>
                  <img src="./img/menus/egg.png" alt="たまご" class="allergyname">
                </li>
              </div>`
    }else{
      data += `<div class="allergy1">
                <li>
                  <img src="./img/menus/egg1.png" alt="たまご" class="allergyname">
                </li>
              </div>`
    }
    if(json.allergy.match(/milk/)){
      data += `<div class="allergy1">
                <li>
                  <img src="./img/menus/milk.png" alt="たまご" class="allergyname">
                </li>
              </div>`
    }else{
      data += `<div class="allergy1">
                <li>
                  <img src="./img/menus/milk1.png" alt="たまご" class="allergyname">
                </li>
              </div>`
    }
    if(json.allergy.match(/flour/)){
      data += `<div class="allergy1">
                <li>
                  <img src="./img/menus/flour.png" alt="たまご" class="allergyname">
                </li>
              </div>`
    }else{
      data += `<div class="allergy1">
                <li>
                  <img src="./img/menus/flour1.png" alt="たまご" class="allergyname">
                </li>
              </div>`
    }
    if(json.allergy.match(/crab/)){
      data += `<div class="allergy1">
                <li>
                  <img src="./img/menus/crab.png" alt="たまご" class="allergyname">
                </li>
              </div>`
    }else{
      data += `<div class="allergy1">
                <li>
                  <img src="./img/menus/crab1.png" alt="たまご" class="allergyname">
                </li>
              </div>`
    }

    data += `</div>
              <div class="allergy3">`

    if(json.allergy.match(/shrimp/)){
      data += `<div class="allergy1">
                <li>
                  <img src="./img/menus/shrimp.png" alt="たまご" class="allergyname">
                </li>
              </div>`
    }else{
      data += `<div class="allergy1">
                <li>
                  <img src="./img/menus/shrimp1.png" alt="たまご" class="allergyname">
                </li>
              </div>`
    }
    if(json.allergy.match(/soba/)){
      data += `<div class="allergy1">
                <li>
                  <img src="./img/menus/soba.png" alt="たまご" class="allergyname">
                </li>
              </div>`
    }else{
      data += `<div class="allergy1">
                <li>
                  <img src="./img/menus/soba1.png" alt="たまご" class="allergyname">
                </li>
              </div>`
    }
    if(json.allergy.match(/peanuts/)){
      data += `<div class="allergy1">
                <li>
                  <img src="./img/menus/peanuts.png" alt="たまご" class="allergyname">
                </li>
              </div>`
    }else{
      data += `<div class="allergy1">
                <li>
                  <img src="./img/menus/peanuts1.png" alt="たまご" class="allergyname">
                </li>
              </div>`
    }
    data += `</div>
        </ul>`

    $(".allergy").append(data);


  })
});
