import React from "react";
// import "CapFolder.css"
import {StockRow} from "./StockRow";

type CapFolderProps = {
    name: string
    count: number
}

type CapFolderState = {
    stocksVisible: boolean
}

export class CapFolder extends React.Component<CapFolderProps, CapFolderState> {
    constructor(props: CapFolderProps) {
        super(props);
        this.state = {stocksVisible: true};
        // this.showBtnClick = this.showBtnClick.bind(this)
    }

    showBtnClick() {
        this.setState({stocksVisible: !this.state.stocksVisible})
    }

    render() {
        return (
            <div>
                <div>{this.props.name}</div>
                <div>{this.props.count}</div>
                <button onClick={(e) => this.showBtnClick()}>
                    {this.state.stocksVisible ? "Скрыть" : "Показать"}
                </button>
                {this.state.stocksVisible &&
                <table>
                    <tr>
                        <th>Название</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th>Изменение</th>
                    </tr>
                    <StockRow name={"Apple"} count={3} value={143} change={-0.2} />
                </table>}
            </div>
        )
    }
}