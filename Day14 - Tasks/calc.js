var div1 = createCustomElement('div','container div1','div1');

var div2 = createCustomElement('div','div2 row','div2');
var text1 = createCustomElement('input','text1 col-12','text1');
text1.setAttribute('type','textarea');
div2.append(text1);

var div3 = createCustomElement('div','div3','div3');

var div4 = createCustomElement('div','div4 row','div4');
var span1 = createCustomElementS('span', 'span1 col-3 font1', 'C','span1');
var span2 = createCustomElementS('span', 'span2 col-3 font1','%','span2');
var span3 = createCustomElementS('span', 'span3 col-3 font1','/','span3');
var span4 = createCustomElementS('span', 'span4 col-3 font1','*','span4');
div4.append(span1,span2,span3,span4);

var div5 = createCustomElement('div','div5 row','div5');
var span5 = createCustomElementS('span', 'span5 col-3 font1','7','span5');
var span6 = createCustomElementS('span', 'span6 col-3 font1','8','span6');
var span7 = createCustomElementS('span', 'span7 col-3 font1','9','span7');
var span8 = createCustomElementS('span', 'span8 col-3 font1','-','span8');
div5.append(span5,span6,span7,span8);

var div6 = createCustomElement('div','div6 row','div6');
var span9 = createCustomElementS('span', 'span9 col-3 font1','4','span9');
var span10 = createCustomElementS('span', 'span10 col-3 font1','5','span10');
var span11 = createCustomElementS('span', 'span11 col-3 font1','6','span11');
var span12 = createCustomElementS('span', 'span12 col-3 font1','+','span12');
div6.append(span9,span10,span11,span12);

var div7 = createCustomElement('div','div7 row','div7');
var span13 = createCustomElementS('span', 'span13 col-3 font1','1','span13');
var span14 = createCustomElementS('span', 'span14 col-3 font1','2','span14');
var span15 = createCustomElementS('span', 'span15 col-3 font1','3','span15');
var span16 = createCustomElementS('span', 'span16 col-3 font1','.','span16');
div7.append(span13,span14,span15,span16);

var div8 = createCustomElement('div','div8 row','div8');
var span17 = createCustomElementS('span', 'span17 col-6 font1','0','span17');
var span18 = createCustomElementS('span', 'span18 col-6 font1','ENTER','span18');
div8.append(span17,span18);


div3.append(div4,div5,div6,div7,div8)

div1.append(div2,div3);

document.body.append(div1);


function createCustomElement(type,classa,id){
    let aVar = document.createElement(type);
    aVar.setAttribute('class',classa);
    aVar.setAttribute('id',id);
    return aVar;
}

function createCustomElementS(type,classa,HTML,id){
    let aVar = document.createElement(type);
    aVar.setAttribute('class',classa);
    aVar.setAttribute('id',id);
    aVar.innerHTML = HTML;
    aVar.onclick = function() {
        if(HTML === 'ENTER'){
            let exp = document.getElementById('text1').value;
            if (exp === ''){
                document.getElementById('text1').value = '';
            }
            else{
                document.getElementById('text1').value = eval(exp);
            }
        }
        else if (HTML === 'C'){
            document.getElementById('text1').value = '';
        }
        else
        {
            document.getElementById('text1').value += HTML;
        }
    }
    return aVar;
}

document.getElementById('text1').onkeydown = function(e) {
        return false;
} 

document.body.onkeydown = function(e) {
    if(parseInt(String.fromCharCode(e.keyCode)) <= 9){
        document.getElementById('text1').value += String.fromCharCode(e.keyCode);
    }
    else{
        return false;
    }

}