import React, { Component } from "react";
import {Card, CardImg, CardBody,  CardText, CardTitle} from 'reactstrap';

class Dishdetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedDishDetail: this.props.detailDish
        };
    }

    renderDish(dish){
        if (dish!=null){
            return(
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
            
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(comments){
        if(comments != null){
            const cmnt = comments.map(comment => {
                return(
                    <li key={comment.id}>
                        <p>comment.comment</p>
                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}</p>
                    </li>
                );
            });
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {cmnt}
                    </ul>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
    render(){
        const dish = this.props.dish
        if(dish == null){
            return(
                <div></div>
            )
        }
        else{
            const distItem = this.renderDish(dish);
            const dishComment = this.renderComments(dish.comments);
            
            return(
                <div className="row">
                    {distItem}
                    {dishComment}

                </div>
            )
        }
    }

}


export default Dishdetail;