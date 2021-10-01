import React from "react";
import "CapFolder.css"

type CapFolderProps = {
    name: string
    count: number
}

type CapFolderState = {
}

export class CapFolder extends React.Component<CapFolderProps, CapFolderState> {
    render() {
        return (
            <div>
            <div>{this.props.name}</div>
            <div>{this.props.count}</div>
            </div>
        )
    }
}