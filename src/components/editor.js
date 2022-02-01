import React from 'react';
import styles from './editor.scss';

class Editor extends React.Component {
    render(){
        return (
            <div>
            <h2 className = 'sub-title'>Editor</h2>
            <textarea value = {this.props.html} onChange={this.props.handleChange}>
            </textarea>
            </div>
        )
    }
};

export default Editor;