(function() { 
        
        var input = document.getElementById('input');
        var btn = document.getElementById('btn');
        var lists = {
            todo: document.getElementById('todo'),
            done: document.getElementById('done')
        };
        
        var lol = document.getElementById('omg');
    
        var makeTaskHtml = function(str, onCheck) {
            var el = document.createElement('li');
            var label = document.createElement('span');
            var i = document.createElement("i");
            
            i.className = 'fa fa-times';
            
            i.addEventListener('click', onCheck);
            label.textContent = str;
  
            el.appendChild(label);
            el.appendChild(i);
            
            return el;
        };
        
      var addTask = function(task) {  
          lists.todo.appendChild(task);
          
        };
        
        var onCheck = function(event) {
            var task = event.target.parentElement;
            var list = task.parentElement.id;
            
            done.appendChild(task);
            input.focus();
        };
      
        var onInput = function() {
            var str = input.value.trim();
            
            if (str.length > 0) {
                addTask(makeTaskHtml(str, onCheck));
                input.value = '';
                input.focus();
                document.getElementById('empty').style.display='none';
            }
        };
        
        btn.addEventListener('click', onInput);
        input.addEventListener('keyup', function(event) {
            var code = event.keyCode;
            
            if (code === 13) {
                onInput();
            }
        });
        input.focus();
        
    }()); 