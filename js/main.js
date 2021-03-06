let dota = [
  {
    id: "pudge",
    name: "Pudge",
    image: "/img/pudge.png",
    description:
      "Pudge — это герой с ближним типом атаки, основным атрибутом которого является сила.Его первая способность,  Meat Hook, бросает окровавленный крюк в определенную область или юнита. Крюк зацепится за первого юнита, в которого попадет, притащит его к Pudge и нанесет урон, если это враг. Вторая способность,  Rot, токсичное облако, вызванное из-за гноения, постоянно наносит урон и замедляет противников, ранит не только вражеских юнитов, но и самого Pudge. Пассивная способность,  Flesh Heap, дает Pudge дополнительное сопротивление магии, а также дополнительную силу, которая увеличивается, когда Pudge убивает вражеского героя, или тот умирает поблизости. Способность начинает накапливать заряды уже до того, как будет выучена, но получить силу герой сможет, только изучив ее. Ультимативной способностью,  Dismember, Pudge начинает заживо пожирать вражеского юнита, обездвиживая его и нанося периодический урон. ",
  },
  {
    id: "Bristleback",
    name: "Bristleback",
    image: "/img/brist.png",
    description:
      "Bristleback — это герой с ближним типом атаки, основным атрибутом которого является сила.Герой известен своим набором синергичных, упрощенных, и в то же время эффективных заклинаний с низкими затратами маны и временем перезарядки. Хотя каждое произнесение его заклинаний само по себе имеет относительно слабую силу, их применения имеют кумулятивный эффект, что делает Bristleback тем более смертоносным, чем дольше он остается живым в бою; это напрямую отражается в его ультимативной способности,  Warpath, которая увеличивает скорость передвижения и урон от атак героя в зависимости от количества заклинаний, которые он недавно использовал. Герой может по нарастанию замедлять своих врагов и уменьшать их броню с помощью  Viscous Nasal Goo и поражать их шквалом  Quill Spray, что делает его эффективным преследователем при ганках. Из-за его низкого прироста силы он, на первый взгляд, кажется менее живучим, чем большинство героев класса Strength attribute symbol.png сила, но его фирменная пассивная способность  Bristleback существенно снижает весь урон, который герой получает с боков и особенно со спины, что делает его очень сложной целью для убийства, если он отвернут от своих врагов.",
  },
  {
    id: "shadowFiend",
    name: "Shadow Fiend",
    image: "/img/Sf.png",
    description:
      "Shadow Fiend — это герой с дальним типом атаки, основным атрибутом которого является Ловкость. Первые три способности,  Shadowraze, разрывают участок земли перед Shadow Fiend, нанося урон всем врагам в зоне действия. Разница между этими способностями заключается в дальности применения. Первая пассивная способность,  Necromastery, крадет душу каждого убитого врага, давая бонус к урону атак. После смерти половина из них теряется. Вторая пассивная способность,  Presence of the Dark Lord, снижает броню ближайших врагов. Ультимативная способность,  Requiem of Souls, выпускает собранные души, которые наносят урон всем существам вокруг, также они снижают наносимый ими урон и накладывают эффект страха. Если Shadow Fiend погибает, то способность автоматически срабатывает вне зависимости от ее готовности, но не применяет страх и действует вполсилы.",
  },
  {
    id: "queenOfpain",
    name: "Queen of Pain",
    image: "/img/Qp.png",
    description:
      "Queen of Pain — герой с дальним типом атаки и основным атрибутом интеллект. Она использует свои способности, чтобы приблизиться к врагам и нанести им огромный урон по области. Благодаря этой возможности, а также умению легко преследовать одиночные цели, обычно стоит на средней линии и играет роль ганкер и полу-фарм.  Blink — это основа набора способностей героини. Именно он позволяет ей врываться в драки и избегать их. Заняв атакующую позицию, Акаша со  Scream of Pain и  Sonic Wave способна сразу сокрушить целую команду. Погоня за блуждающими врагами — ещё одна сильная сторона Queen of Pain: с  Shadow Strike она никому не оставит шанса убежать. Акаша очень ловко совершает убийства в ранней игре, и при правильной сборке превращается в отличного героя полу-фарм.",
  },
];
const listOfCreature = document.querySelector("#list-of-creature");
listOfCreature.addEventListener("click", function (character) {
  console.log(character.target);
});
const contentBlock = document.createElement("div");
contentBlock.className = "contentBlock";
const headerCreatures = document.createElement("h2");
const imageCreatures = document.createElement("img");
const paragraphP = document.createElement("p");
function ifClicked(creature) {
  if (creature.target.id === "pudge") {
    headerCreatures.innerHTML = dota[0].name;
    imageCreatures.src = dota[0].image;
    paragraphP.innerHTML = dota[0].description;
  } else if (creature.target.id === "bristleback") {
    headerCreatures.innerHTML = dota[1].name;
    imageCreatures.src = dota[1].image;
    paragraphP.innerHTML = dota[1].description;
  } else if (creature.target.id === "shadowFiend") {
    headerCreatures.innerHTML = dota[2].name;
    imageCreatures.src = dota[2].image;
    paragraphP.innerHTML = dota[2].description;
  } else if (creature.target.id === "queenOfpain") {
    headerCreatures.innerHTML = dota[3].name;
    imageCreatures.src = dota[3].image;
    paragraphP.innerHTML = dota[3].description;
  }
  contentBlock.appendChild(headerCreatures);
  contentBlock.appendChild(imageCreatures);
  contentBlock.appendChild(paragraphP);
  let mainBlock = document.querySelector("main");
  mainBlock.className = "mainBlock";
  mainBlock.appendChild(contentBlock);
}
listOfCreature.addEventListener("click", (creature) => ifClicked(creature));

const addInfo = document.querySelector("description-of-creature");
