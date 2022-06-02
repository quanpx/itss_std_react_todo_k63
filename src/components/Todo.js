import React, { useState,useEffect } from 'react';
import "../styles/main.css"

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, putItems] = useState([
      /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);

  const [item,setItem]=useState({key:getKey(),text:"",done:false})
  const [filterData,setFilterData]=useState([])

  useEffect(()=>{filter()},[])
  const handleChange = (e) =>
    {
      let item = e.target.value;
      setItem({...item,"text":item})
    
    }
  const onKeyDown = (e) =>
    {
       if (e.key === 'Enter') {
         putItems([...items,item]);
     
    }
    }
  const filter = (type=null) =>
    {
      if(type===null)
      {
        setFilterData(items)
      }else
      {
        let filterTemp = items.filter(item => item.done === type)
        setFilterData(filterTemp)
      }
    }
  const handleClick = () =>
    {
      putItems([...items,item]);
    }
  return (
    <div className="panel">
       <div >
       <input type="text" onChange={handleChange} onKeyDown = {onKeyDown}/>
      </div>

      
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <a onClick ={()=>filter()}>All</a> &nbsp;&nbsp;
       <a onClick ={()=>filter(true)}>Completed</a>&nbsp;&nbsp;
       <a onClick ={()=>filter(false)}>Uncompleted</a>
      <div>
        {filterData.map(item => (
   
         <TodoItem  key={item.key} item={item}></TodoItem>
      
         
      ))}
      </div>
      
      <div className="panel-block">
        {filterData.length} items
      </div>
     
     
  
    </div>
  );
}

export default Todo;