import React from 'react';
import { Card, Button } from 'react-bootstrap'
const Hat = ({ name, id, title, imageUrl, price }) => {
    return (
        <div className="text-center">
            <Card >
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
                    <Card.Text>
                        <img alt="" src={`${imageUrl}`} width='100px' />
                    </Card.Text>
                    <span style={{ color: 'pink' }}>Price  <strong style={{ color: 'orange' }}>{price}$</strong></span>
                    <Card.Link href="#">{id}</Card.Link>
                    <Button className="btn btn-dark center" style={{ alignItems: 'center', margin: '0 auto' }}>Buy it now</Button>
                </Card.Body>
            </Card>
        </div >
    )
};

export default Hat;