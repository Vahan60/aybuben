
const alphabet = ["Ա", "Բ", "Գ", "Դ", "Ե", "Զ", "Է", 
                  "Ը", "Թ", "Ժ", "Ի", "Լ", "Խ", "Ծ", 
				  "Կ", "Հ", "Ձ", "Ղ", "Ճ", "Մ", "Յ", 
                  "Ն", "Շ", "Ո", "Չ", "Պ", "Ջ", "Ռ", 
				  "Ս", "Վ", "Տ", "Ր", "Ց", "ՈՒ", "Փ", 
				  "Ք", "և", "Օ", "Ֆ"];

const cell = document.querySelectorAll(".cell"); 

for (let i = 0; i < alphabet.length; i++) {
	cell[i].append(alphabet[i])};

const inset = [["aghves", "apse", "ator"], 
               ["bad", "bazhak", "banali"], 
			   ["gndak", "gayl", "gdal"],  
               ["dahuk", "danak", "dimak"], 
			   ["elak", "yeghevni", "yeghung"], 
			   ["zang", "zarr", "zambyugh"],
               ["excavator", "elf", "ekran"], 
			   ["yndzukht", "ynkuyz", "yndzarryuts"], 
			   ["tatnots", "titerr", "tag"],
			   ["zhantakis", "zhayrr", "zhamatsuyts"], 
			   ["iguan", "ishkhan", "iris"], 
			   ["lapter", "last", "lezu"], 
               ["khach", "khndzor", "khoz"], 
			   ["tsarr", "apricot", "tsitserrnak"], 
			   ["kapik", "kaghamb", "katu"], 
			   ["hats", "hav", "hayeli"],
			   ["dzagar", "dzi", "dzuk"], 
			   ["ghazan", "ghek", "ghorr"], 
			   ["chagar", "champruk", "chanch"], 
			   ["magh", "mahchakal", "murch"], 
               ["yog", "yasaman", "yoyo"], 
			   ["nav", "nurr", "narinj"], 
			   ["shahen", "shakhmat", "shun"], 
			   ["votk", "volorr", "vozni"],
			   ["chmushk", "chibukh", "chagh"], 
			   ["panir", "payusak", "poch"], 
			   ["jaylam", "jutak", "jeyran"], 
			   ["rradio", "rretin", "rranda"],
			   ["sanr", "sayl", "serkevil"], 
			   ["vagr", "vard", "vahan"], 
			   ["takarr", "tiknik", "tabat"], 
			   ["ekran", "iris", "narinj"], 
			   ["tsankapat", "tsntsugh", "tsakhavel"],
			   ["urag", "ught", "usapark"], 
			   ["patil", "pigh", "petur"], 
			   ["kamich", "kit", "kayl"], 
			   ["arev", "andzrev", "serkevil"],
			   ["oghak", "ocharr", "odz"], 
			   ["phootbool", "phicus", "phaeton"]];  
			     			   
const arr = [["<b>ա</b>ղվես", "<b>ա</b>փսե", "<b>ա</b>թոռ"], 
             ["<b>բ</b>ադ", "<b>բ</b>աժակ", "<b>բ</b>անալի"],			 
			 ["<b>գ</b>նդակ", "<b>գ</b>այլ", "<b>գ</b>դալ"],			 
			 ["<b>դ</b>ահուկներ", "<b>դ</b>անակ", "<b>դ</b>իմակ"],			 
			 ["<b>ե</b>լակ", "<b>ե</b>ղևնի", "<b>ե</b>ղունգ"],		 
			 ["<b>զ</b>անգ", "<b>զ</b>առ", "<b>զ</b>ամբյուղ"],			 
			 ["<b>է</b>քսկավատոր", "<b>է</b>լֆ", "<b>է</b>կրան"],			 
			 ["<b>ը</b>նձուղտ", "<b>ը</b>նկույզ", "<b>ը</b>նձառյուծ"],			 
			 ["<b>թ</b>աթմանններ", "<b>թ</b>իթեռ", "<b>թ</b>ագ"],			 
			 ["<b>ժ</b>անտաքիս", "<b>ժ</b>այռ", "<b>ժ</b>ամացույց"],			 
			 ["<b>ի</b>գուանա", "<b>ի</b>շխան", "<b>ի</b>րիս"],			 
			 ["<b>լ</b>ապտեր", "<b>լ</b>աստ", "<b>լ</b>եզու"],			 
			 ["<b>խ</b>աչ", "<b>խ</b>նձոր", "<b>խ</b>ոզ"],			 
			 ["<b>ծ</b>առ", "<b>ծ</b>իրան", "<b>ծ</b>իծեռնակ"],			 
			 ["<b>կ</b>ապիկ", "<b>կ</b>աղամբ", "<b>կ</b>ատու"],			 
			 ["<b>հ</b>աց", "<b>հ</b>ավ", "<b>հ</b>այելի"],			 
			 ["<b>ձ</b>ագար", "<b>ձ</b>ի", "<b>ձ</b>ուկ"],			 
			 ["<b>ղ</b>ազան", "<b>ղ</b>եկ", "<b>ղ</b>ոռ"],			 
			 ["<b>ճ</b>ագար", "<b>ճ</b>ամպրուկ", "<b>ճ</b>անճ"],			 
			 ["<b>մ</b>աղ", "<b>մ</b>ահճակալ", "<b>մ</b>ուրճ"],			 
			 ["<b>յ</b>ոգ", "<b>յ</b>ասաման", "<b>յ</b>ո-յո"],			 
			 ["<b>ն</b>ավ", "<b>ն</b>ուռ", "<b>ն</b>արինջ"],			 
			 ["<b>շ</b>ահեն", "<b>շ</b>ախմատ", "<b>շ</b>ուն"],			 
			 ["<b>ո</b>տք", "<b>ո</b>լոռ", "<b>ո</b>զնի"],			 
			 ["<b>չ</b>մուշկ", "<b>չ</b>իբուխ", "<b>չ</b>աղ"],			 
			 ["<b>պ</b>անիր", "<b>պ</b>այուսակ", "<b>պ</b>ոչ"],			 		 
			 ["<b>ջ</b>այլամ", "<b>ջ</b>ութակ", "<b>ջ</b>եյրան"],
			 ["<b>ռ</b>ադիո", "<b>ռ</b>ետին", "<b>ռ</b>անդա"],			 
			 ["<b>ս</b>անր", "<b>ս</b>այլ", "<b>ս</b>երկևիլ"],			 
			 ["<b>վ</b>ագր", "<b>վ</b>արդ", "<b>վ</b>ահան"],		 			 
			 ["<b>տ</b>ակառ", "<b>տ</b>իկնիկ", "<b>տ</b>աբատ"],
			 ["էկ<b>ր</b>ան", "ի<b>ր</b>իս", "նա<b>ր</b>ինջ"],			
		     ["<b>ց</b>անկապատ", "<b>ց</b>նցուղ", "<b>ց</b>ախավել"],			 
			 ["<b>ու</b>րագ", "<b>ու</b>ղտ", "<b>ու</b>սապարկ"],			 
			 ["<b>փ</b>աթիլ", "<b>փ</b>իղ", "<b>փ</b>ետուր"],		 
			 ["<b>ք</b>ամիչ", "<b>ք</b>իթ", "<b>ք</b>այլ"],			  
			 ["ար<b>և</b>", "անձր<b>և</b>", "սերկ<b>և</b>իլ"],			 
			 ["<b>օ</b>ղակ", "<b>օ</b>ճառ", "<b>օ</b>ձ"],
			 ["<b>ֆ</b>ուտբոլ", "<b>ֆ</b>իկուս", "<b>ֆ</b>այտոն"]];
			 	  
cell[1].style.color = "White";
cell[3].style.color = "DeepSkyBlue";
cell[7].style.color = "Yellow";
cell[8].style.color = "Green";
cell[11].style.color = "Red";;
cell[13].style.color = "Crimson";
cell[15].style.color = "Orange";
cell[18].style.color = "Blue";
cell[21].style.color = "Violet";
cell[24].style.color = "Black";

const table	= document.getElementById("alphabet");
let selectedTh;

    table.onclick = function(event) {
      let target = event.target;

      while (target != this) {
        if (target.tagName == 'TH') {
          highlight(target);
          return;
        }
        target = target.parentNode;
      }
    };
    function highlight(node) {
      if (selectedTh) {
        selectedTh.classList.remove('highlight');
      }
      selectedTh = node;
      selectedTh.classList.add('highlight');
    };

let activeCell;
let dial = document.getElementById("letter");
let img = document.querySelectorAll(".fond");


for (let i = 0; i < alphabet.length; i++){
      cell[i].addEventListener("click", function( ) {
	    activeCell = i;
        for (let j = 0; j < img.length; j++) {
	      img[j].src = "pic/".concat(inset[activeCell][j].concat(".webp"))		 
          };
	    location.href="#shellLetter"	  
	   }) 
   };  

let small = document.querySelectorAll(".area");
let sound = document.createElement("audio");
let str = document.getElementById ("say"); 

    
for (let j = 0; j < small.length; j++){
      small[j].addEventListener ("click", function() {	  
	  sound.src = "audio/".concat(inset[activeCell][j].concat(".mp3")); 
	  sound.play();
	  str.innerHTML = arr[activeCell][j];
	  })   
}; 
  
let toabc = document.getElementById("toabc");

toabc.addEventListener("click", function() {
	  str.innerHTML = "";
	  img.innerHTML = "";	  
      location.href="#shellAlphabet"
}); 

/*
let btn = document.getElementById("btn");
	  
	  btn0.addEventListener ("click", function() {
        document.location.href = "";	      
}) ; */
	  
let btn1 = document.getElementById("btn1");
	  
	  btn1.addEventListener ("click", function() {      
        if (!event.target.hasAttribute('data-toggle-fullscreen')) return;
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } 
		else {document.documentElement.requestFullscreen();
        }
}, false);

	      