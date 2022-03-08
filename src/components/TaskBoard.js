import { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import logo from '../logo.svg'
import taskService from '../services/task'
import imageService from '../services/image'


const HeadNav = () => {
  const [photo, setPhoto] = useState(null)
  useEffect(() => {
      imageService.getPicture().then(p => {
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
              className="d-inline-block align-top"
            />{' '}
            Taskboard
          </Navbar.Brand>
        </Container>
        <Nav>
          {/* to replace this image */}
          <img
            alt=""
            src={photo ? photo.download_url : logo}
            width="70"
            className="d-inline-block align-top"
          />{' '}
        </Nav>
      </Navbar>
    </>
  )
}

const Taskboard = ({ user }) => {
  const [TLC, setTLC] = useState(null)
  useEffect(() => {
    taskService.seedData()
    if (user) {
      setTLC(taskService.getTaskListCollections(user.username))
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
