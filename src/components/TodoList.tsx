import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodoList:React.FC = () => {
    const {todos,limit,loading,page,error} = useTypedSelector(state=>state.todo);
    const {fetchTodos}=useActions()

    useEffect(()=>{
        fetchTodos(page,limit)
    },[])

    if(loading){
        return <h1>Идёт загрузка...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo=>
                <div key={todo.id}>{todo.id} - {todo.name}</div>    
            )}        
        </div>
    );
};

export default TodoList;