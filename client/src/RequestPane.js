import React, {Component} from 'react'
import {lastId, incrementLastId, requests, items} from './Globals'
import {Tabs, Tab} from 'react-bootstrap'
import RequestList from './RequestList'
import {connect, PromiseState} from 'react-refetch'

class RequestPane extends Component {
  render() {
    const {requestsFetch} = this.props;
    var activeRequests = (<RequestList list={[]}/>);
    if (requestsFetch.pending) {
      const activeRequests = (<RequestList list={[]}/>);
    } else if (requestsFetch.rejected) {
      activeRequests = (<RequestList list={[]}/>);
    } else if (requestsFetch.fulfilled) {
      activeRequests = (<RequestList list={requestsFetch.value}/>);
    }
    console.log(requestsFetch);
    return (<div className="RequestPane">
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Active Requests">
          {activeRequests}
        </Tab>
        <Tab eventKey={2} title="History">
          <RequestList list={[]}/>
        </Tab>
      </Tabs>
    </div>);
  }
}

export default connect(props => ({
  requestsFetch: {
    url: `/api/users/${props.userId}/requests/`,
    refreshInterval: 2000
  }
}))(RequestPane)
