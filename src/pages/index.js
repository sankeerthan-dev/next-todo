import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [todo, setTodo] = useState([])
  const [todoText, setTodoText] = useState('')
  const [newID, setNewID] = useState(1)
  const handleClick = (id) => (setTodo(todo.filter((task) => task.id !== id)))
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.inputarea}>
          <input onChange={(e) => { setTodoText(e.target.value) }} type={'text'} placeholder="Enter TODO" />
          <button onClick={(e) => { setTodo([...todo, { id: newID, text: todoText }]); setNewID((prev) => prev + 1) }}>Add Todo</button>
        </div>
        <div className={styles.todoWrapper}>
          {
            todo.map((item) => (
              <div className={styles.todoList} key={item.id} onClick={() => handleClick(item.id)}>
                <p>{item.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
