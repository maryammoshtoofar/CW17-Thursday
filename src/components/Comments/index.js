import React, { Component } from 'react';
class Comments extends Component {
    state = {  } 
    render() { 
      // const currentComment=this.props.comments
      // console.log(currentComment);
        return (
          <>
            <h4>Comments</h4>
            {this.props.comments.map(comment=><p>{comment.body}</p>)}
          </>
        );
    }
}
 
export default Comments;