import * as React from 'react';
import { Component } from 'react';
import { InfiniteLoader, List } from 'react-virtualized';
import * as loremIpsum from "lorem-ipsum"
import { array } from 'prop-types';


const rowCount = 20000;
const list = Array(rowCount).fill('aaa').map(()=>{
    return loremIpsum({
        count: 1,
        units: 'sentences',
        sentenceLowerBound: 3,
        sentenceUpperBound: 3
        })
})
function rowRenderer ({key, index, style}) {
    return (
        <div key={key} style={style}>
            {list[index]}
        </div>
    )
}
export default class ReactVirtualList extends Component {
    
    render() {
        return (
            <div style={{height:"800px",width:"800px",overflow:"auto"}}>
                {/* <List
                width={800}
                height={800}
                rowCount={list.length}
                rowHeight={20}
                rowRenderer={rowRenderer}/> */}
                
                {
                    Array.from(list, (item, index) => {
                        return (
                            <div className="row-item" key={index}>
                                {item}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}