import React, {Component} from "react";
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import { connect } from 'react-redux';
import {browserHistory} from "react-router";

class EventList extends Component {

  onClick(item){
    browserHistory.push("/meetingView?id="+item.userName);
  }

  render() {
    return (
      <div>
        <List>
          {this.props.events.map(item=>
            <ListItem
              onClick={this.onClick.bind(this,item)}
              key={item.userName}
              primaryText={item.userName}
              secondaryText={item.descriptor}
              leftAvatar={<Avatar src={item.avatar} />}
              rightIcon={<CommunicationChatBubble />}
            />
          )}
        </List>
      </div>
    );
  }
};


function mapStateToProps (state) {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps)(EventList);