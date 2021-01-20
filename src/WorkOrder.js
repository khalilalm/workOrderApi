import React from "react";
import WorkOrder from "./WorkerOrders.js";
class WorkOrders extends React.Component {
renderOrders = () => {
    if (this.props.orders.length > 0) {
    
      let orders = this.props.orders

      if (this.props.filtered === true && this.props.foundWorker !== undefined) {
        orders = this.props.orders.filter(order => {
          return order.workerId === this.props.foundWorker.id
        })
      }
      return orders.map(order => {
        return <WorkOrder order={order} workers={this.props.workers} sort={this.props.sort}/>
      })
    }
  }
render() {
    return (
      <div className="workOrders">
        {this.renderOrders()}
      </div>
    )
  }
}
export default WorkOrders