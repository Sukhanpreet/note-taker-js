let count=0;

// note variables
let note=document.getElementById('note');
let notesArea=document.getElementById('notes');

let add_button=document.getElementById('add-note');
add_button.addEventListener('click',addTask);

// add Note function 
function addTask(){
    if(note.value!==""){
        count +=1;

        let newDiv= document.createElement('div');
        notesArea.append(newDiv);
        newDiv.setAttribute('class','note-content');

        let noteHeading=document.createElement('h3');
        let noteText=document.createElement('p');
        let editButton=document.createElement('input');
        let viewMoreButton=document.createElement('input');
        let deleteButton=document.createElement('input');

        noteHeading.innerText="Note "+count;
        noteText.innerText=note.value;
        noteText.setAttribute('id','noteText');
        
        // view more button
        Object.assign(viewMoreButton,{
            type:'button',
            value:'View More'
        });
        viewMoreButton.setAttribute('class','blue-button');

        viewMoreButton.addEventListener('click',viewNote);

        // edit button
        Object.assign(editButton,{
            type: 'image',
            src: 'img/edit-icon.png',
            id:'edit-button'
        });

        editButton.addEventListener('click',editNote);

        // delete button
        Object.assign(deleteButton,{
            type:'button',
            id: 'delete-button',
            value: '🗙'
        });

        deleteButton.addEventListener('click',deleteNote);    
        
        newDiv.append(noteHeading);
        newDiv.append(noteText);
        newDiv.append(viewMoreButton);
        newDiv.append(editButton);
        newDiv.append(deleteButton);
        
        note.value='';

    } else{
        alert("Please write something");
    }

}

// edit variable
let editContainer=document.querySelector('.edit-container');
let editHeading=document.getElementById('editHeading')
let editedNote=document.getElementById('editNote');

let tempNote;

// edit note Function 
function editNote(){    
    editContainer.setAttribute('style','display:block');
    
    editHeading.innerText=this.parentElement.querySelector('h3').innerText;
    editedNote.value=this.parentElement.querySelector('#noteText').innerText;

    tempNote=this.parentElement;
}

// save button
let saveButton=document.getElementById('save-button');
saveButton.addEventListener('click',()=>{    
    tempNote.querySelector('#noteText').innerText=editedNote.value;
    editContainer.setAttribute('style','display:none');
});

// cancel button
let cancelButton=document.querySelectorAll('#cancel-button');

for(let i=0;i<cancelButton.length;i++){
    cancelButton[i].addEventListener('click', function(){
        cancelButton[i].parentElement.parentElement.setAttribute('style','display:none;');
    }); 
        
    window.addEventListener('click',function(e){
        if(e.target === cancelButton[i].parentElement.parentElement){
        cancelButton[i].parentElement.parentElement.setAttribute('style','display:none;');
        }
    });
}

// view variable
let viewContainer=document.querySelector('.view-container');
let view=viewContainer.querySelector('p');

// view note function
function viewNote(){
    viewContainer.setAttribute('style','display:block;');
    view.innerText=this.parentElement.querySelector('p').innerText;
}

// delete Note
function deleteNote(){
        this.parentElement.remove();
}