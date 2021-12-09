import React from 'react'

export default class MainStart extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {

      }
      this.inputChange = this.inputChange.bind(this)
    }
    
    // Инпут
    inputChange(e){
      document.querySelector(".inputAdd").oninput = () => {
        if(e.target.value.length > 0){
          document.querySelector('.addCard-submit').style.background = 'rgba(0, 121, 191, 1)';
          document.querySelector('.addCard-submit').style.color = 'white';
        }else {
          document.querySelector('.addCard-submit').style.background = 'white';
          document.querySelector('.addCard-submit').style.color = '#5E6C84';
        }
      }
    }

  render() {
    
    //items
    let dataMock = [
      //backlog
      {
        id: 1,
        title: 'backlog',
        name: 'Sprint bugfix',
        description: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.'
      },
      {
        id: 2,
        title: 'backlog',
        name: 'Login page – performance issues',
        description: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.'
      },
      {
        id: 3,
        title: 'backlog',
        name: 'Issues3',
        description: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.'
      },
      //ready
      {
        id: 4,
        title: 'ready',
        name: 'Sprint bugfix2',
        description: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.'
      },
      //inProgress
      {
        id: 5,
        title: 'inProgress',
        name: 'Sprint bugfix3',
        description: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.'
      },
      //finished
      {
        id: 6,
        title: 'finished',
        name: 'Sprint bugfix4',
        description: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.'
      }
    ];

    // Очищаем весь список
    function clean() {
      var parent1 = document.querySelector('#backlog').children[1];
      while (parent1.firstChild) {
        parent1.removeChild(parent1.firstChild)
      }
      var parent2 = document.querySelector('#ready').children[1];
      while (parent2.firstChild) {
        parent2.removeChild(parent2.firstChild)
      }
      var parent3 = document.querySelector('#inProgress').children[1];
      while (parent3.firstChild) {
        parent3.removeChild(parent3.firstChild)
      }
      var parent4 = document.querySelector('#finished').children[1];
      while (parent4.firstChild) {
        parent4.removeChild(parent4.firstChild)
      }
    }

    // Обновляем весь список
    function refresh() {
      dataMock.map(b => {
        var btn = document.createElement('button')
        btn.className='item'
        btn.onclick = (event) => {
          document.querySelector(".main-grid").classList.toggle("show");
          document.querySelector(".itemInfo").classList.toggle("show");
          document.querySelector(".itemInfo-title").innerHTML = event.target.firstChild.textContent;
          document.querySelector(".id-hidden").innerHTML = event.target.firstChild.nextSibling.textContent;
          document.querySelector(".itemInfo-description").innerHTML = event.target.children[1].lastChild.textContent;
        }
        if(b.title === 'backlog'){
          btn.innerHTML = 
          `
            ${b.name}
            <div hidden>${b.id}</div>
            <div hidden>${b.description}</div>
          `
          document.querySelector('#backlog .itemList').appendChild(btn);
        }else if(b.title === 'ready'){
          btn.innerHTML = 
          `
            ${b.name}
            <div hidden>${b.id}</div>
            <div hidden>${b.description}</div>
          `
          document.querySelector('#ready .itemList').appendChild(btn);
        }else if(b.title === 'inProgress'){
          btn.innerHTML = 
          `
            ${b.name}
            <div hidden>${b.id}</div>
            <div hidden>${b.description}</div>
          `
          document.querySelector('#inProgress .itemList').appendChild(btn);
        }else if(b.title === 'finished'){
          btn.innerHTML = 
          `
            ${b.name}
            <div hidden>${b.id}</div>
            <div hidden>${b.description}</div>
          `
          document.querySelector('#finished .itemList').appendChild(btn);
        }
      })
    }

    //Обновляем активные и завершенные задачи
    function footerTask() {
      //active
      const active_task = document.querySelector('.active-task')
      let active_count = 0;
      dataMock.map((count) => {
        if(count.title === 'backlog'){
          active_count++;
        }
      })
      active_task.innerHTML = `${active_count}`
      //finish
      const finish_task = document.querySelector('.finish-task')
      let finish_count = 0;
      dataMock.map((count) => {
        if(count.title === 'finished'){
          finish_count++;
        }
      })
      finish_task.innerHTML = `${finish_count}`
    }

    return (
      <div>
        {/* Item Information (New Task) */}
        <div className="itemInfo">
          {/* название */}
          <div className="itemInfo-title"></div>
          {/* id */}
          <div className="id-hidden" hidden></div>
          {/* описание */}
          <button className="edit" onClick={() => {document.querySelector(".newDescription").classList.toggle("show")}}>Описание &#9998;</button>
          <div className="newDescription">
            {/* новое описание инпут */}
            <input className="inputDescription" type='text' placeholder='Новое описание...'></input>
            {/* кнопка сохранить */}
            <button className="addDescription" onClick={(e) => {
              // value инпута - новое описание
              var val = document.querySelector(".inputDescription").value;
              if(val.length > 0){
                document.querySelector(".itemInfo-description").innerHTML = val;
                document.querySelector(".newDescription").classList.toggle("show");
              }
              // находим этот элемент и задаем новое описание
              dataMock.findIndex((item) => {
                if(item.id == e.target.parentNode.previousSibling.previousSibling.textContent){
                  item.description = val;
                }
              })
            }}>Сохранить</button>
          </div>
          {/* описание */}
          <div className="itemInfo-description"></div>
          {/* кнопка закрыть окно */}
          <button className="closeItem" onClick={() => {
              // Очищаем все items
              clean()
              // Обновляем элементы dataMock
              refresh()
              document.querySelector(".main-grid").classList.toggle("show");
              document.querySelector(".itemInfo").classList.toggle("show");
            }}>✖</button>
        </div>
        {/* Blocks */}
        <div className="main-grid">


          {/* backlog */}
          <div id="backlog" className="main-grid-item">
            <div className="main-grid-title">Backlog</div>
            <div className="itemList">
              {/* Добавление элементов */}
              {dataMock.map(e => {
                if(e.title === 'backlog'){
                  return (
                  <button className="item" onClick={(event) => {
                      document.querySelector(".main-grid").classList.toggle("show");
                      document.querySelector(".itemInfo").classList.toggle("show");
                      document.querySelector(".itemInfo-title").innerHTML = event.target.firstChild.textContent;
                      document.querySelector(".id-hidden").innerHTML = event.target.firstChild.nextSibling.textContent;
                      document.querySelector(".itemInfo-description").innerHTML = event.target.lastChild.textContent;
                    }}>
                      {e.name}
                      <div hidden>{e.id}</div>
                      <div hidden>{e.description}</div>
                  </button>
                  )
                }
              })} 
            </div>
            {/* AddCard */}
            <button id="addCard-backlog" className="addCard" onClick={() => {
              // Создание Инпута
              var inp = document.createElement('input');
              inp.setAttribute('type', 'text');
              inp.className = 'inputAdd';
              inp.onchange = this.inputChange;
              document.querySelector('.addCard').before(inp);
              document.querySelector('.addCard').style.display = 'none';
              document.querySelector('.addCard-submit').style.display = 'block';
            }}>+ Add card</button>
            {/* Submit */}
            <button id="addCardSubmit" className="addCard-submit" onClick={(e) => {
              let input_bool = true;
              dataMock.map(e => {
                if(e.name === document.querySelector('.inputAdd').value){
                  input_bool = false;
                }
              })
              // Если инпут не пустой
              if(document.querySelector('.inputAdd').value !== '' && e.target.parentNode.id === 'backlog' && input_bool){
                // Создание нового объекта
                var obj = {
                  id: '',
                  title: '',
                  name: '',
                  description: ''
                };
                // title объекта
                obj.title = 'backlog';
                // name объекта
                obj.name = document.querySelector('.inputAdd').value;
                // description объекта
                obj.description = '...';
                // Получение индекса для нового объекта
                var count;
                dataMock.findIndex((item, index) => {
                  if(item.title === 'ready'){
                    count = index;
                  }
                })
                // размещаем новый объект под индекс (count)
                obj.id = count + 1;
                dataMock.splice(count,0,obj);
                // Очищаем все items
                clean()
                // Обновляем dataMock
                refresh()
                //Обновляем footer tasks
                footerTask()
              }
              document.querySelector('.addCard-submit').style.display = 'none';
              document.querySelector('.inputAdd').remove();
              document.querySelector('.addCard').style.display = 'block';
            }}>Submit</button>
          </div>


          {/* ready */}
          <div id="ready" className="main-grid-item">
            <div className="main-grid-title">Ready</div>
            <div className="itemList">
              {/* Добавление элементов */}
              {dataMock.map(e => {
                if(e.title === 'ready'){
                  return (
                  <button className="item" onClick={(event) => {
                      document.querySelector(".main-grid").classList.toggle("show");
                      document.querySelector(".itemInfo").classList.toggle("show");
                      document.querySelector(".itemInfo-title").innerHTML = event.target.firstChild.textContent;
                      document.querySelector(".id-hidden").innerHTML = event.target.firstChild.nextSibling.textContent;
                      document.querySelector(".itemInfo-description").innerHTML = event.target.lastChild.textContent;
                    }}>
                      {e.name}
                      <div hidden>{e.id}</div>
                      <div hidden>{e.description}</div>
                  </button>
                  )
                }
              })} 
            </div>
            {/* AddCard */}
            <button id="addCard-ready" className="addCard" onClick={(e) => {
              if(e.target.previousSibling.previousSibling.textContent === "Ready"){
                var sel = document.createElement('select');
                sel.className = 'select_btn';
                sel.innerHTML = ''
                // Получаем все данные с предыдущего объекта
                dataMock.map(e => {
                  if(e.title === 'backlog'){
                    sel.innerHTML = sel.innerHTML + `<option>${e.name}</option>`
                  }
                })
                // Select при нажатии
                var addCard = document.querySelectorAll('.addCard');
                let items_count;
                addCard.forEach(item => {
                  if(item.parentElement.id === 'backlog'){
                    items_count = item.previousElementSibling.childNodes.length;
                  }
                  if(item.parentElement.id === 'ready' && items_count > 0){
                    item.before(sel);
                    item.style.display = 'none'
                    item.nextElementSibling.style.display = 'block'
                  }
                  if((item.parentElement.id === 'ready' && items_count === 1) || (item.parentElement.id === 'ready' && items_count === 0)){
                    item.onmouseover = () => {
                      item.style.background = 'none'
                      item.style.color = '#5E6C84'
                    }
                  }
                })
              }
            }}>+ Add card</button>
            {/* Submit */}
            <button id="addCardSubmit" className="addCard-submit" onClick={(e) => {
              var newItem;
              var delete_count;
              var add_count;
              dataMock.map(item => {
                // Удаляем данный элемент с пред раздела и добавляем в нужный раздел
                if(item.title === 'backlog' && item.name === e.target.previousElementSibling.previousElementSibling.value){
                  newItem = item;
                  // Удаляем элемент
                  dataMock.findIndex((elem, index) => {
                    if((elem.title === 'backlog') && (elem.name === e.target.previousElementSibling.previousElementSibling.value)){
                      delete_count = index;
                    }
                  })
                  newItem.title = 'ready';
                  // Получение индекса для нового объекта
                  dataMock.findIndex((elem, index) => {
                    if(elem.title === 'inProgress'){
                      add_count = index;
                    }
                  })
                }
              })
              dataMock.splice(add_count,0,newItem)
              dataMock.splice(delete_count,1)
              // Очищаем все items
              clean()
              // Обновляем dataMock
              refresh()
              // Кнопки
              var addCardSubmit = document.querySelectorAll('.addCard-submit');
              addCardSubmit.forEach(item => {
                if(item.parentElement.id === 'ready'){
                  item.style.display = 'none'
                  document.querySelector('select').remove();
                  item.previousElementSibling.style.display = 'block'
                }
              })
            }}>Submit</button>
          </div>


          {/* inProgress */}
          <div id="inProgress" className="main-grid-item">
            <div className="main-grid-title">In Progress</div>
            <div className="itemList">
              {/* Добавление элементов */}
              {dataMock.map(e => {
                if(e.title === 'inProgress'){
                  return (
                  <button className="item" onClick={(event) => {
                      document.querySelector(".main-grid").classList.toggle("show");
                      document.querySelector(".itemInfo").classList.toggle("show");
                      document.querySelector(".itemInfo-title").innerHTML = event.target.firstChild.textContent;
                      document.querySelector(".id-hidden").innerHTML = event.target.firstChild.nextSibling.textContent;
                      document.querySelector(".itemInfo-description").innerHTML = event.target.lastChild.textContent;
                    }}>
                      {e.name}
                      <div hidden>{e.id}</div>
                      <div hidden>{e.description}</div>
                  </button>
                  )
                }
              })} 
            </div>
            {/* Add Card */}
            <button id="addCard-inProgress" className="addCard" onClick={(e) => {
              if(e.target.previousSibling.previousSibling.textContent === "In Progress"){
                var sel = document.createElement('select');
                sel.className = 'select_btn';
                sel.innerHTML = ''
                // Получаем все данные с предыдущего объекта
                dataMock.map(e => {
                  if(e.title === 'ready'){
                    sel.innerHTML = sel.innerHTML + `<option>${e.name}</option>`
                  }
                })
                // Select при нажатии
                var addCard = document.querySelectorAll('.addCard');
                let items_count;
                addCard.forEach(item => {
                  if(item.parentElement.id === 'ready'){
                    items_count = item.previousElementSibling.childNodes.length;
                  }
                  if(item.parentElement.id === 'inProgress' && items_count > 0){
                    item.before(sel);
                    item.style.display = 'none'
                    item.nextElementSibling.style.display = 'block'
                  }
                  if((item.parentElement.id === 'inProgress' && items_count === 1) || (item.parentElement.id === 'inProgress' && items_count === 0)){
                    item.onmouseover = () => {
                      item.style.background = 'none'
                      item.style.color = '#5E6C84'
                    }
                  }
                })
              }
            }}>+ Add card</button>
            {/* Submit */}
            <button id="addCardSubmit" className="addCard-submit" onClick={(e) => {
              var newItem;
              var delete_count;
              var add_count;
              dataMock.map(item => {
                // Удаляем данный элемент с пред раздела и добавляем в нужный раздел
                if(item.title === 'ready' && item.name === e.target.previousElementSibling.previousElementSibling.value){
                  newItem = item;
                  // Удаляем элемент
                  dataMock.findIndex((elem, index) => {
                    if((elem.title === 'ready') && (elem.name === e.target.previousElementSibling.previousElementSibling.value)){
                      delete_count = index;
                    }
                  })
                  newItem.title = 'inProgress';
                  // Получение индекса для нового объекта
                  dataMock.findIndex((elem, index) => {
                    if(elem.title === 'finished'){
                      add_count = index;
                    }
                  })
                }
              })
              dataMock.splice(add_count,0,newItem)
              dataMock.splice(delete_count,1)
              // Очищаем все items
              clean()
              // Обновляем dataMock
              refresh()
              // Кнопки
              var addCardSubmit = document.querySelectorAll('.addCard-submit');
              addCardSubmit.forEach(item => {
                if(item.parentElement.id === 'inProgress'){
                  item.style.display = 'none'
                  document.querySelector('select').remove();
                  item.previousElementSibling.style.display = 'block'
                }
              })
            }}>Submit</button>
          </div>


          {/* finished */}
          <div id="finished" className="main-grid-item">
            <div className="main-grid-title">Finished</div>
            <div className="itemList">
              {/* Добавление элементов */}
              {dataMock.map(e => {
                if(e.title === 'finished'){
                  return (
                  <button className="item" onClick={(event) => {
                      document.querySelector(".main-grid").classList.toggle("show");
                      document.querySelector(".itemInfo").classList.toggle("show");
                      document.querySelector(".itemInfo-title").innerHTML = event.target.firstChild.textContent;
                      document.querySelector(".id-hidden").innerHTML = event.target.firstChild.nextSibling.textContent;
                      document.querySelector(".itemInfo-description").innerHTML = event.target.lastChild.textContent;
                    }}>
                      {e.name}
                      <div hidden>{e.id}</div>
                      <div hidden>{e.description}</div>
                  </button>
                  )
                }
              })} 
            </div>
            {/* Add Card */}
            <button id="addCard-finished" className="addCard" onClick={(e) => {
              if(e.target.previousSibling.previousSibling.textContent === "Finished"){
                var sel = document.createElement('select');
                sel.className = 'select_btn';
                sel.innerHTML = ''
                // Получаем все данные с предыдущего объекта
                dataMock.map(e => {
                  if(e.title === 'inProgress'){
                    sel.innerHTML = sel.innerHTML + `<option>${e.name}</option>`
                  }
                })
                // Select при нажатии
                var addCard = document.querySelectorAll('.addCard');
                let items_count;
                addCard.forEach(item => {
                  if(item.parentElement.id === 'inProgress'){
                    items_count = item.previousElementSibling.childNodes.length;
                  }
                  if(item.parentElement.id === 'finished' && items_count > 0){
                    item.before(sel);
                    item.style.display = 'none'
                    item.nextElementSibling.style.display = 'block'
                  }
                  if((item.parentElement.id === 'finished' && items_count === 1) || (item.parentElement.id === 'finished' && items_count === 0)){
                    item.onmouseover = () => {
                      item.style.background = 'none'
                      item.style.color = '#5E6C84'
                    }
                  }
                })
              }
            }}>+ Add card</button>
            {/* Submit */}
            <button id="addCardSubmit" className="addCard-submit" onClick={(e) => {
              var newItem;
              var delete_count;
              dataMock.map(item => {
                // Удаляем данный элемент с пред раздела и добавляем в нужный раздел
                if(item.title === 'inProgress' && item.name === e.target.previousElementSibling.previousElementSibling.value){
                  newItem = item;
                  // Удаляем элемент
                  dataMock.findIndex((elem, index) => {
                    if((elem.title === 'inProgress') && (elem.name === e.target.previousElementSibling.previousElementSibling.value)){
                      delete_count = index;
                    }
                  })
                  newItem.title = 'finished';
                }
              })
              dataMock.push(newItem)
              dataMock.splice(delete_count,1)
              // Очищаем все items
              clean()
              // Обновляем dataMock
              refresh()
              //Обновляем footer tasks
              footerTask()
              // Кнопки
              var addCardSubmit = document.querySelectorAll('.addCard-submit');
              addCardSubmit.forEach(item => {
                if(item.parentElement.id === 'finished'){
                  item.style.display = 'none'
                  document.querySelector('select').remove();
                  item.previousElementSibling.style.display = 'block'
                }
              })
            }}>Submit</button>
          </div>

        </div>
      </div>
    )
  }
}
