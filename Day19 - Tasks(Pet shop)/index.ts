import { Availability,PetRequest,petConfig,requestConfig } from './Availability';

//To design the index page.
    let container = document.createElement('div');
    container.setAttribute('class','container');
    let headerDivRow = document.createElement('div');
    headerDivRow.setAttribute('class','row');
    let headerDivCol = document.createElement('div');
    headerDivCol.setAttribute('class','col-12');
    let header = document.createElement('h1');
    header.innerHTML = 'Pet Shop';
    headerDivCol.append(header);
    headerDivRow.append(headerDivCol);

    let divRow1 = document.createElement('div');
    divRow1.setAttribute('class','row');
    let divCol1 = document.createElement('div');
    divCol1.setAttribute('class','col-12');
    let btn1 = document.createElement('button');
    btn1.setAttribute('class','btn btn-success btn-lg btn-block');
    btn1.innerHTML = 'To add a pet';
    btn1.setAttribute('id','addpet');
    divCol1.append(btn1);
    divRow1.append(divCol1);

    let divRow2 = document.createElement('div');
    divRow2.setAttribute('class','row');
    let divCol2 = document.createElement('div');
    divCol2.setAttribute('class','col-12');
    let btn2 = document.createElement('button');
    btn2.setAttribute('class','btn btn-success btn-lg btn-block mt-3');
    btn2.innerHTML = 'To check availability';
    btn2.setAttribute('id','checkavail');
    divCol2.append(btn2);
    divRow2.append(divCol2);

    let divRow3 = document.createElement('div');
    divRow3.setAttribute('class','row');
    let divCol3 = document.createElement('div');
    divCol3.setAttribute('class','col-12');
    let btn3 = document.createElement('button');
    btn3.setAttribute('class','btn btn-success btn-lg btn-block mt-3');
    btn3.innerHTML = 'To enquire a pet';
    btn3.setAttribute('id','enquirepet');
    divCol3.append(btn3);
    divRow3.append(divCol3);

    let divRow4 = document.createElement('div');
    divRow4.setAttribute('class','row');
    let divCol4 = document.createElement('div');
    divCol4.setAttribute('class','col-12');
    let btn4 = document.createElement('button');
    btn4.setAttribute('class','btn btn-success btn-lg btn-block mt-3');
    btn4.innerHTML = 'To check the status of enquiries';
    btn4.setAttribute('id','status');
    divCol4.append(btn4);
    divRow4.append(divCol4);



//To Design the 'Add Pet' page.
    let headerDivRow1 = document.createElement('div');
    headerDivRow1.setAttribute('class','row');
    let headerDivCol1 = document.createElement('div');
    headerDivCol1.setAttribute('class','col-12');
    let header1 = document.createElement('h1');
    header1.innerHTML = 'To Add a Pet';
    headerDivCol1.append(header1);
    headerDivRow1.append(headerDivCol1);

    let divRow5 = document.createElement('div');
    divRow5.setAttribute('class','row');
    let divCol5a = document.createElement('div');
    divCol5a.setAttribute('class','col-3');
    let divCol5b = document.createElement('div');
    divCol5b.setAttribute('class','col-6');
    let divCol5c = document.createElement('div');
    divCol5c.setAttribute('class','form-group');
    let divCol5cLabel = document.createElement('label');
    divCol5cLabel.setAttribute('for','pettype');
    divCol5cLabel.innerHTML = 'Enter Pet Type';
    let divCol5cSelect = document.createElement('select');
    divCol5cSelect.setAttribute('id','pettype');
    divCol5cSelect.setAttribute('class','form-control');
    let divCol5cOption1 = document.createElement('option');
    divCol5cOption1.setAttribute('value','Cat');
    divCol5cOption1.innerHTML = 'Cat';
    let divCol5cOption2 = document.createElement('option');
    divCol5cOption2.setAttribute('value','Dog');
    divCol5cOption2.innerHTML = 'Dog';
    let divCol5cOption3 = document.createElement('option');
    divCol5cOption3.setAttribute('value','Parrot');
    divCol5cOption3.innerHTML = 'Parrot';
    divCol5cSelect.append(divCol5cOption1,divCol5cOption2,divCol5cOption3);
    divCol5c.append(divCol5cLabel,divCol5cSelect);

    let divCol5d = document.createElement('div');
    divCol5d.setAttribute('class','form-group');
    let divCol5dLabel = document.createElement('label');
    divCol5dLabel.setAttribute('for','country');
    divCol5dLabel.innerHTML = 'Enter pet country';
    let divCol5dInput = document.createElement('input');
    divCol5dInput.setAttribute('type','text');
    divCol5dInput.setAttribute('id','country');
    divCol5dInput.setAttribute('class','form-control');
    divCol5d.append(divCol5dLabel,divCol5dInput);

    let divCol5e = document.createElement('div');
    divCol5e.setAttribute('class','form-group');
    let divCol5eLabel = document.createElement('label');
    divCol5eLabel.setAttribute('for','age');
    divCol5eLabel.innerHTML = 'Enter pet age';
    let divCol5eInput = document.createElement('input');
    divCol5eInput.setAttribute('type','text');
    divCol5eInput.setAttribute('id','age');
    divCol5eInput.setAttribute('class','form-control');
    divCol5e.append(divCol5eLabel,divCol5eInput);

    let divCol5f = document.createElement('div');
    divCol5f.setAttribute('class','form-group');
    let divCol5fLabel = document.createElement('label');
    divCol5fLabel.setAttribute('for','health');
    divCol5fLabel.innerHTML = 'Enter Pet Health';
    let divCol5fSelect = document.createElement('select');
    divCol5fSelect.setAttribute('id','health');
    divCol5fSelect.setAttribute('class','form-control');
    let divCol5fOption1 = document.createElement('option');
    divCol5fOption1.setAttribute('value','Good');
    divCol5fOption1.innerHTML = 'Good';
    let divCol5fOption2 = document.createElement('option');
    divCol5fOption2.setAttribute('value','Moderate');
    divCol5fOption2.innerHTML = 'Moderate';
    let divCol5fOption3 = document.createElement('option');
    divCol5fOption3.setAttribute('value','Bad');
    divCol5fOption3.innerHTML = 'Bad';
    divCol5fSelect.append(divCol5fOption1,divCol5fOption2,divCol5fOption3);
    divCol5f.append(divCol5fLabel,divCol5fSelect);

    let divCol5g = document.createElement('div');
    divCol5g.setAttribute('class','form-group');
    let divCol5gLabel = document.createElement('label');
    divCol5gLabel.setAttribute('for','color');
    divCol5gLabel.innerHTML = 'Enter pet color';
    let divCol5gInput = document.createElement('input');
    divCol5gInput.setAttribute('type','text');
    divCol5gInput.setAttribute('id','color');
    divCol5gInput.setAttribute('class','form-control');
    divCol5g.append(divCol5gLabel,divCol5gInput);

    let btn5 = document.createElement('button');
    btn5.setAttribute('class','btn btn-success btn-lg btn-block');
    btn5.setAttribute('id','submitPetDetails');
    btn5.innerHTML = 'Submit';
    btn5.onclick = () => {
        let petType = (<HTMLFormElement>document.getElementById('pettype')).value;
        let country = (<HTMLFormElement>document.getElementById('country')).value;
        let age = Number((<HTMLFormElement>document.getElementById('age')).value);
        let health = (<HTMLFormElement>document.getElementById('health')).value;
        let color = (<HTMLFormElement>document.getElementById('color')).value;
    
        newPet.storePetDetails({petFamily:petType,country:country,age:age,health:health,color:color});

        alert('New pet has been added. Thank you!');
};

    let btn6 = document.createElement('button');
    btn6.setAttribute('class','btn btn-success btn-lg btn-block');
    btn6.setAttribute('id','gohome');
    btn6.innerHTML = ' Go Home';
    btn6.onclick = () => {
        home();
    }

    let divCol5h = document.createElement('div');
    divCol5h.setAttribute('class','col-3');



//To Design the 'Availability' page.
    let headerDivRow2 = document.createElement('div');
    headerDivRow2.setAttribute('class','row');
    let headerDivCol2 = document.createElement('div');
    headerDivCol2.setAttribute('class','col-12');
    let header2 = document.createElement('h1');
    header2.innerHTML = 'Availability';
    headerDivCol2.append(header2);
    headerDivRow2.append(headerDivCol2);

    let table1 = document.createElement('table');
    table1.setAttribute('class','table');
    let tableHead1 = document.createElement('thead');
    tableHead1.setAttribute('class','bg-success');
    let tableRow1 = document.createElement('tr');
    let tableHeadCol1 = document.createElement('th');
    tableHeadCol1.setAttribute('scope','col');
    tableHeadCol1.innerHTML = '#';
    let tableHeadCol2 = document.createElement('th');
    tableHeadCol2.setAttribute('scope','col');
    tableHeadCol2.innerHTML = 'Pet Type';
    let tableHeadCol3 = document.createElement('th');
    tableHeadCol3.setAttribute('scope','col');
    tableHeadCol3.innerHTML = 'Available Qty';
    tableRow1.append(tableHeadCol1,tableHeadCol2,tableHeadCol3);
    tableHead1.append(tableRow1);

    let tableBody1 = document.createElement('tbody');
    let tableRow2 = document.createElement('tr');
    let tableHeadCol4 = document.createElement('th');
    tableHeadCol4.setAttribute('scope','row');
    tableHeadCol4.innerHTML = '1';
    let tableDataCol1 = document.createElement('td');
    tableDataCol1.innerHTML = 'Cat';
    let tableDataCol2 = document.createElement('td');
    tableDataCol2.setAttribute('id','tableDataCol2')
    tableRow2.append(tableHeadCol4,tableDataCol1,tableDataCol2);

    let tableRow3 = document.createElement('tr');
    let tableHeadCol5 = document.createElement('th');
    tableHeadCol5.setAttribute('scope','row');
    tableHeadCol5.innerHTML = '2';
    let tableDataCol3 = document.createElement('td');
    tableDataCol3.innerHTML = 'Dog';
    let tableDataCol4 = document.createElement('td');
    tableDataCol4.setAttribute('id','tableDataCol4')
    tableRow3.append(tableHeadCol5,tableDataCol3,tableDataCol4);

    let tableRow4 = document.createElement('tr');
    let tableHeadCol6 = document.createElement('th');
    tableHeadCol6.setAttribute('scope','row');
    tableHeadCol6.innerHTML = '3';
    let tableDataCol5 = document.createElement('td');
    tableDataCol5.innerHTML = 'Parrot';
    let tableDataCol6 = document.createElement('td');
    tableDataCol6.setAttribute('id','tableDataCol6')
    tableRow4.append(tableHeadCol6,tableDataCol5,tableDataCol6);


    tableBody1.append(tableRow2,tableRow3,tableRow4);
    table1.append(tableHead1,tableBody1);


//To design 'Pet Enquiry' page
    let headerDivRow3 = document.createElement('div');
    headerDivRow3.setAttribute('class','row');
    let headerDivCol3 = document.createElement('div');
    headerDivCol3.setAttribute('class','col-12');
    let header3 = document.createElement('h1');
    header3.innerHTML = 'Pet Enquiry';
    headerDivCol3.append(header3);
    headerDivRow3.append(headerDivCol3);

    let divRow6 = document.createElement('div');
    divRow6.setAttribute('class','row');
    let divCol6a = document.createElement('div');
    divCol6a.setAttribute('class','col-3');
    let divCol6b = document.createElement('div');
    divCol6b.setAttribute('class','col-6');
    let divCol6c = document.createElement('div');
    divCol6c.setAttribute('class','form-group');
    let divCol6cLabel = document.createElement('label');
    divCol6cLabel.setAttribute('for','pettype1');
    divCol6cLabel.innerHTML = 'Enter Pet Type';
    let divCol6cSelect = document.createElement('select');
    divCol6cSelect.setAttribute('id','pettype1');
    divCol6cSelect.setAttribute('class','form-control');
    let divCol6cOption1 = document.createElement('option');
    divCol6cOption1.setAttribute('value','Cat');
    divCol6cOption1.innerHTML = 'Cat';
    let divCol6cOption2 = document.createElement('option');
    divCol6cOption2.setAttribute('value','Dog');
    divCol6cOption2.innerHTML = 'Dog';
    let divCol6cOption3 = document.createElement('option');
    divCol6cOption3.setAttribute('value','Parrot');
    divCol6cOption3.innerHTML = 'Parrot';
    divCol6cSelect.append(divCol6cOption1,divCol6cOption2,divCol6cOption3);
    divCol6c.append(divCol6cLabel,divCol6cSelect);


    let divCol6d = document.createElement('div');
    divCol6d.setAttribute('class','form-group');
    let divCol6dLabel = document.createElement('label');
    divCol6dLabel.setAttribute('for','qty');
    divCol6dLabel.innerHTML = 'Enter qty';
    let divCol6dInput = document.createElement('input');
    divCol6dInput.setAttribute('type','text');
    divCol6dInput.setAttribute('id','qty');
    divCol6dInput.setAttribute('class','form-control');
    divCol6d.append(divCol6dLabel,divCol6dInput);

    let btn7 = document.createElement('button');
    btn7.setAttribute('class','btn btn-success btn-lg btn-block');
    btn7.setAttribute('id','submitPetEnquiry');
    btn7.innerHTML = 'Submit';
    btn7.onclick = () => {
        let petTypea = (<HTMLFormElement>document.getElementById('pettype1')).value;
        let petCounta = Number((<HTMLFormElement>document.getElementById('qty')).value);
    
        newEnquiry.addEnquiry({petType:petTypea,petCount:petCounta});
        alert('Pet enquiry has been submitted. Thank you!');
};


//To Design the 'Enquiry Status' page.
    let headerDivRow4 = document.createElement('div');
    headerDivRow4.setAttribute('class','row');
    let headerDivCol4 = document.createElement('div');
    headerDivCol4.setAttribute('class','col-12');
    let header4 = document.createElement('h1');
    header4.innerHTML = 'Enquiry Status';
    headerDivCol4.append(header4);
    headerDivRow4.append(headerDivCol4);

    let table2 = document.createElement('table');
    table2.setAttribute('class','table');
    let tableHead2 = document.createElement('thead');
    tableHead2.setAttribute('class','bg-success');
    let tableRow5 = document.createElement('tr');
    let tableHead2Col1 = document.createElement('th');
    tableHead2Col1.setAttribute('scope','col');
    tableHead2Col1.innerHTML = 'Enquiry #';
    let tableHead2Col2 = document.createElement('th');
    tableHead2Col2.setAttribute('scope','col');
    tableHead2Col2.innerHTML = 'Pet Type';
    let tableHead2Col3 = document.createElement('th');
    tableHead2Col3.setAttribute('scope','col');
    tableHead2Col3.innerHTML = 'Enquired Qty';
    let tableHead2Col4 = document.createElement('th');
    tableHead2Col4.setAttribute('scope','col');
    tableHead2Col4.innerHTML = 'Status';
    tableRow5.append(tableHead2Col1,tableHead2Col2,tableHead2Col3,tableHead2Col4);
    tableHead2.append(tableRow5);

    let tableBody2 = document.createElement('tbody');

    
    table2.append(tableHead2,tableBody2);

    
function home(){
    container.innerHTML = '';
    container.append(headerDivRow,divRow1,divRow2,divRow3,divRow4);
    document.body.append(container);
}

function addPet(){
    container.innerHTML = '';
    divCol5b.innerHTML = '';
    divRow5.innerHTML = '';
    divCol5b.append(divCol5c,divCol5d,divCol5e,divCol5f,divCol5g,btn5,btn6)
    divRow5.append(divCol5a,divCol5b,divCol5h);
    container.append(headerDivRow1,divRow5);
    document.body.append(container);
}

function enquirePet(){
    container.innerHTML = '';
    divCol6b.innerHTML = '';
    divRow6.innerHTML = '';
    divCol6b.append(divCol6c,divCol6d,btn7,btn6)
    divRow6.append(divCol6a,divCol6b,divCol5h);
    container.append(headerDivRow3,divRow6);
    document.body.append(container);
}

function availability(){
    container.innerHTML = '';

    let availData:Array<petConfig> = newPet.getPetDetails();
    let catCount:number = getCatCount(availData);
    let dogCount:number = getDogCount(availData);
    let parrotCount:number = getParrotCount(availData);

    container.append(headerDivRow2,table1,btn6);
    document.body.append(container);

    (<HTMLElement>document.getElementById('tableDataCol2')).innerHTML = JSON.stringify(catCount); 
    (<HTMLElement>document.getElementById('tableDataCol4')).innerHTML = JSON.stringify(dogCount); 
    (<HTMLElement>document.getElementById('tableDataCol6')).innerHTML = JSON.stringify(parrotCount); 
    
}

function getCatCount(availData:Array<petConfig>):number{

    let catCount:number = availData.reduce((acc,element):number => {
       return element.petFamily === 'Cat' ? acc + 1 : acc;
    },0);

    return catCount;
}

function getDogCount(availData:Array<petConfig>):number{

    let dogCount:number = availData.reduce((acc,element):number => {
        return element.petFamily === 'Dog' ? acc + 1 : acc;
     },0);

    return dogCount;
}


function getParrotCount(availData:Array<petConfig>):number{


    let parrotCount:number = availData.reduce((acc,element):number => {
        return element.petFamily === 'Parrot' ? acc + 1 : acc;
        },0);

    return parrotCount;
}


function enquiryStatus(){
    container.innerHTML = '';
    tableBody2.innerHTML = '';
    container.append(headerDivRow4,table2,btn6);
    document.body.append(container);

    let availData:Array<petConfig> = newPet.getPetDetails();
    let enquiryData:Array<requestConfig> = newEnquiry.getEnquiry();

    let totEnquiry:number = enquiryData.length;
    let enquiryLimit:number = 0;
    let enquiryStatus:string = '';

    let catCount:number = getCatCount(availData);
    let dogCount:number = getDogCount(availData);
    let parrotCount:number = getParrotCount(availData);


    if(totEnquiry > 5){
        enquiryLimit = 5;
    }
    else{
        enquiryLimit = totEnquiry;
    }

    for (let i=0; i<enquiryLimit; i++){
        if(enquiryData[i].petType === 'Cat'){
            if (catCount - enquiryData[i].petCount >= 0){
                catCount = catCount - enquiryData[i].petCount;
                enquiryStatus = 'Available'
            }
            else{
                enquiryStatus = 'Not Available'
            }
        }
        else if(enquiryData[i].petType === 'Dog'){
            if (dogCount - enquiryData[i].petCount >= 0){
                dogCount = dogCount - enquiryData[i].petCount;
                enquiryStatus = 'Available'
            }
            else{
                enquiryStatus = 'Not Available'
            }
        }
        else{
            if (parrotCount - enquiryData[i].petCount >= 0){
                parrotCount = parrotCount - enquiryData[i].petCount;
                enquiryStatus = 'Available'
            }
            else{
                enquiryStatus = 'Not Available'
            }
        }

        let tableRowa = document.createElement('tr');
        let tableHeadCola = document.createElement('th');
        tableHeadCola.setAttribute('scope','row');
        tableHeadCola.innerHTML = JSON.stringify(i+1);
        let tableDataCola = document.createElement('td');
        tableDataCola.innerHTML = enquiryData[i].petType;
        let tableDataColb = document.createElement('td');
        tableDataColb.innerHTML = JSON.stringify(enquiryData[i].petCount);
        let tableDataColc = document.createElement('td');
        tableDataColc.innerHTML = enquiryStatus;
        tableRowa.append(tableHeadCola,tableDataCola,tableDataColb,tableDataColc);

        tableBody2.appendChild(tableRowa);
    
    }    

}

home();

let newPet = new Availability();
newPet.storePetDetails({petFamily:'Dog',country:'India',age:3,health:'Good',color:'Black'});

let newEnquiry = new PetRequest();
newEnquiry.addEnquiry({petType:'Dog', petCount: 1});

(<HTMLElement>document.getElementById('addpet')).onclick = () => {
    addPet();
};

(<HTMLElement>document.getElementById('checkavail')).onclick = () => {
    availability();
};

(<HTMLElement>document.getElementById('enquirepet')).onclick = () => {
    enquirePet();
};

(<HTMLElement>document.getElementById('status')).onclick = () => {
    enquiryStatus();
};




