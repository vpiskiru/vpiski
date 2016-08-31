import React, {Component} from "react";
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import { connect } from 'react-redux';

class EventList extends Component {
  render() {
    return (
      <div>
        <List>
          {this.props.events.map(data=>
            <ListItem
              key={data.userName}
              primaryText={data.userName}
              secondaryText={data.descriptor}
              leftAvatar={<Avatar src={data.avatar} />}
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