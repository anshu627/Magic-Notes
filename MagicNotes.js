console.log("this is js file");
shownotes();

//if user add a notes add it to local storage

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click",function(e){
	let addtxt = document.getElementById('addtxt');
	let addtitle = document.getElementById('addtitle');
	let notes = localStorage.getItem("notes");
	if(notes == null)
	{
		notesObj = [];
	}
	else{
		notesObj = JSON.parse(notes);
	}
	let myobj = {
		title: addtitle.value,
		text: addtxt.value
	}
	notesObj.push(myobj);
	localStorage.setItem("notes" , JSON.stringify(notesObj));
	addtxt.value = '';
	addtitle.value = '';
	console.log(notesObj);
	shownotes();
})

function shownotes(){
	
let notes = localStorage.getItem("notes");
	if(notes == null)
	{
		notesObj = [];
	}
	else{
		notesObj = JSON.parse(notes);
	}
	let html = "";
	notesObj.forEach(function(element,index){
		html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">${element.text}</p>
    <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
  </div></div>`;

	});
	let notesele = document.getElementById('notes');
	if(notesObj.length!=0)
	{
		notesele.innerHTML = html;
	}
	else{
		notesele.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes`;
	}
}
	//function to delete notes
	function deletenote(index)
	{
		console.log('I am deleting' , index);
		let notes = localStorage.getItem("notes");
	if(notes == null)
	{
		notesObj = [];
	}
	else{
		notesObj = JSON.parse(notes);
	}
	notesObj.splice(index,1);
	localStorage.setItem("notes" , JSON.stringify(notesObj));
	shownotes();
		
	}
	
	let search = document.getElementById('searchtxt');
	search.addEventListener('input', function(){
		let searchval = search.value;
		console.log("input event is fired",searchval);
		let noteCards = document.getElementsByClassName('noteCard');
		Array.from(noteCards).forEach(function(element){
			let cardtxt = element.getElementsByTagName("p")[0];
			if(cardtxt.includes(searchval)){
				element.style.display = "block";
			}
			else{
				element.style.display = "none";
			}
			
		})
		
	})
	
	
