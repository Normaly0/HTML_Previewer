import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action/action'

import Editor from '../components/editor';
import Previewer from '../components/previewer'
import styles from './container.scss';


class Container extends React.Component {
    render(){

        return (
            <div className = "container">
                <h1 className = "title">Markdown Previewer</h1>
            <div className = "editor">
            <Editor 
            html = {this.props.html}
            handleChange = {this.props.updateHTML}
            />
            </div>
            <div className = "page">
            <Previewer html = {this.props.html} />
            </div>
            <p className = "credit">Coded by Normaly</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(Container);