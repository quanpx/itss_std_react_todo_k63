/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({item}) {

  const handleClick = (e) =>
    {
       var element = e.target.parentNode;
      element.classList.toggle("has-text-grey-light")
      if(item.done)
      {
       item.done = false
      }else
      {
        item.done = true
      }
      
      console.log(item)
  
    }
  return (
    <label className="panel-block" >
            <input type="checkbox" value={item.done} onClick={handleClick} />
            {item.text}
        </label>
  );
}

export default TodoItem;