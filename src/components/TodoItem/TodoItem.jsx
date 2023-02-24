import React from 'react';
import Col from "react-bootstrap/Col";
import styles from './style.module.scss';
import Button from "react-bootstrap/Button";

const TodoItem = (props) => {
    const {title, description, id, onDelete, redirectHandler, cols} = props;

    return (
        <Col xs={cols}>
            <div className={styles.taskWrapper}>
                <div className={styles.taskHeading}>{title}</div>
                <div className={styles.taskDescription}>{description}
                    <hr/>
                    <small>id: {id}</small>
                </div>

                <div className='mt-4'>
                {onDelete && <Button type="submit" variant="danger" onClick={onDelete}>Delete</Button>}

                {redirectHandler && <Button className='ms-1' type="submit" variant="success" onClick={redirectHandler}>Edit</Button>}
                </div>
            </div>
        </Col>
    );
};


TodoItem.defaultProps = {
    cols: 4
}

export default TodoItem;