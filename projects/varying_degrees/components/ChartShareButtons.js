import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import EmbedIcon from '../assets/img/embed';
import DownloadIcon from '../assets/img/download';
// import { generatePng } from '../utilites/generatePng';

class ChartShare extends React.Component {
    constructor(props) {
        super(props);
           
        this.state = {
            showEmbedPopup: false,
        }
    }

    showEmbedPopup() {
        $(document).click((e) => {this.hideEmbedPopup(e); });
        this.setState({
            showEmbedPopup: true
        });
    }

    hideEmbedPopup(e) {
        this.setState({
            showEmbedPopup: false
        });
        $(document).unbind("click");
    }

    render() {
        const {showEmbedPopup} = this.state;
        const {topic, question, subquestionIndex, filter} = this.props;

        const filterId = filter.id || +filter.id == 0 ? filter.id : "all";

        const embedPopupUrl = "https://varyingdegrees.newamerica.org/?topic=" + topic + "&question=" + question + "&subquestion=" + subquestionIndex + "&filter=" + filterId;
        const iframeCode = "<iframe src='" + embedPopupUrl + "' width='100%' height='500px'></iframe>";
        const imageUrl = "https://na-data-projects.s3.amazonaws.com/images/varyingdegrees/" + topic + "/" + question + "/" + subquestionIndex + "/" + filterId + ".png"
        return (
            <div className="chart-module__share">
                <a className="chart-module__share__button embed" onClick={() => { console.log("clicked!"); return this.showEmbedPopup();}}><EmbedIcon /></a>
                <a href={ imageUrl } target="_blank" className="chart-module__share__button download"><DownloadIcon /></a>
                {showEmbedPopup &&
                    <div className="chart-module__share__embed-popup" ref="embed-popup" onClick={(e) => { e.stopPropagation(); e.nativeEvent.stopImmediatePropagation(); }}>{ iframeCode }</div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      topic: state.topic,
      question: state.question,
      filter: state.filter,
    };
};

export default connect(
  mapStateToProps,
)(ChartShare);