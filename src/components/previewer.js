import React from 'react';
import styles from './previewer.scss'

class Previewer extends React.Component {
    render(){

        let markup = this.props.html;

        function createMarkup() {
            return {__html: markup};
        }

        return (
                <div>
                    <h2 className = 'sub-title-two'>Previewer</h2>
                    <div className = 'previewer' dangerouslySetInnerHTML={createMarkup()}/>
                </div>
            )
        }
        
    }

export default Previewer;