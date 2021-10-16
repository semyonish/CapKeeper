import React from "react";

type StockRowProps = {
    name: string
    count: number
    value: number
    change: number
}

type StockRowState = {
}

export class StockRow extends React.Component<StockRowProps, StockRowState> {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.count}</td>
                <td>{this.props.value}</td>
                <td>{this.props.change}</td>
            </tr>
        )
    }
}