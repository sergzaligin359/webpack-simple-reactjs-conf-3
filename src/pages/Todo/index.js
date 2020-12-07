import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { fetchTodo } from '@actions';

const Todo = ({ todos }) => {
  console.log('process.env', process.env.NODE_ENV);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('render');
    dispatch(fetchTodo());
  }, []);

  // const handlerShowTodos = () => {
  //   dispatch(fetchTodo());
  // };

  return(
    <div>
      <h1>Todos page</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/todo">Todo</Link></li>
        </ul>
      </nav>

      {/* <button onClick={handlerShowTodos}>Show todos</button> */}

      <div>
        {
          todos && todos.map((el, index) => <h3 key={el.id}>{index+1}. {el.title}</h3>)
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todo.todo
});

export default connect(mapStateToProps, {} )(Todo);