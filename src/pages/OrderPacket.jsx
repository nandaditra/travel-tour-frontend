import '../index.css'
import { Button, Form } from 'react-bootstrap'

export default function OrderPacket() {
    return (
            <Form className="bg-white">
               <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Your Name</Form.Label>
                 <></>
               </Form.Group>
               <Button>Cancel</Button>
               <Button>Book</Button>
            </Form>
    )
}