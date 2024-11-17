import React from 'react';

function TodoFormContainer({children}: {children: React.ReactNode}) {
    return (
        <div className={"todo-details-container"}>{
            children
        }</div>
            );
            }

            export default TodoFormContainer;
