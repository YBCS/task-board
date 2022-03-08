import { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import logo from '../logo.svg'
import { seedData, getTaskListCollections } from '../services/task'
import { getPicture } from '../services/image'

const HeadNav = () => {
  const [photo, setPhoto] = useState(null)
  useEffect(() => {
    getPicture().then((p) => {
      setPhoto(p)
    })
  }, [])

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="50"
              className="d-inline-block align-top App-logo"
            />{' '}
            Taskboard
          </Navbar.Brand>
        </Container>
        <Nav>
          <img
            alt=""
            src={photo ? photo.download_url : logo}
            height="60"
            className={
              photo
                ? 'd-inline-block align-top'
                : 'd-inline-block align-top App-logo'
            }
          />{' '}
        </Nav>
      </Navbar>
    </>
  )
}

const Taskboard = ({ user }) => {
  const [TLC, setTLC] = useState(null)
  useEffect(() => {
    seedData()
    if (user) {
      setTLC(getTaskListCollections(user.username))
    }
  }, [user])

  if (TLC) {
    // add validators for this
    const task_list = TLC[0].task_list
    return (
      <div>
        <HeadNav />
        {task_list.map((task_list, idx) => {
          // console.log('tsk here is ', tsk)
          return (
            <Card key={idx} style={{ width: '18rem' }} className="mb-2">
              <Card.Body>
                <Card.Title>{task_list.task_list_name} </Card.Title>
                {task_list.task.map((task, idx) => {
                  return <li key={idx}>{task.header}</li>
                })}
              </Card.Body>
            </Card>
          )
        })}
      </div>
    )
  } else {
    return <div>loading...</div>
  }
}

export default Taskboard
