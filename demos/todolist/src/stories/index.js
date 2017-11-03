import CreateTodo from '../components/CreateTodo';
import FilterTodos from '../components/FilterTodos';
import React from 'react';
import Todo from '../components/Todo';
import TodoList from '../components/TodoList';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {storiesOf} from '@storybook/react';
import {todos} from "./sampleData";

storiesOf('Todo', module).add('incomplete', () => <Todo
    todo={{
    id: 1,
    text: "Get some milk",
    complete: false
}}
    onCheck={action('clicked')}/>).add('complete', () => <Todo
    todo={{
    id: 1,
    text: "Get some milk",
    complete: true
}}
    onCheck={action('clicked')}/>)

storiesOf('TodoList', module).add('with todos', () => <TodoList onCheckTodo={action('clicked')} todos={todos}/>);

storiesOf('CreateTodo', module).add('createTodo', () => <CreateTodo onCreate={action('created')}/>);

storiesOf('FilterTodos', module).add('with show all selected', () => (<FilterTodos
    currentFilter="all"
    onChangeFilter={action('filterChanged')}/>))
