let count=0;

let note=document.getElementById('note');

let add_button=document.getElementById('add-note');

let notesArea=document.getElementById('notes');

add_button.addEventListener('click',addTask);

function addTask(){
    if(note.value!==""){
        count +=1;
        // console.log(count);
        let newDiv= document.createElement('div');

        notesArea.append(newDiv);
        newDiv.setAttribute('class','note-content');


        let noteHeading=document.createElement('h3');
        let noteText=document.createElement('p');
        let viewMoreButton=document.createElement('input');
        let deleteButton=document.createElement('input');

        noteHeading.innerText="Note "+count;
        noteText.innerText=note.value;
        
        Object.assign(viewMoreButton,{
            type:'button',
            value:'View More'
        });

        Object.assign(deleteButton,{
            type:'button',
            id: 'delete-button',
            value: '🗙'
        });

        viewMoreButton.addEventListener('click',showModel);
        deleteButton.addEventListener('click',deleteNote);

        newDiv.append(noteHeading);
        newDiv.append(noteText);
        newDiv.append(viewMoreButton);
        newDiv.append(deleteButton);
        
        note.value='';

    } else{
        // console.log(count);
        alert("Please write something");
    }

}

let modelContainer=document.querySelector('.model-container');

function showModel(){
   
    modelContainer.setAttribute('style','display:block;');

    let model=modelContainer.querySelector('p');

    model.innerText=this.previousElementSibling.innerText;
    
    let closeButton=modelContainer.querySelector('input');

    closeButton.addEventListener('click', function(){
        modelContainer.setAttribute('style','display:none;');
    });

    window.addEventListener('click',function(e){
        if(e.target === modelContainer){
            modelContainer.setAttribute('style','display:none;');
        }
    });

}

function deleteNote(){
    this.parentElement.remove();
}
