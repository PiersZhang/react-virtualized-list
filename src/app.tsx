import * as React from "react";
import {render} from "react-dom";
import TinyVirtual from './components/tiny-virtual'
import ImgDynamicVirtual from "./components/react-virtual/imgDynamicBaseList"
import TextDynamicList from "./components/react-virtual/textDynamicList"
import InfiniteList from "./components/react-virtual/infiniteList"
import ReactVirtual from "./components/react-virtual/react-virtual/index";
import { List } from 'react-virtualized';
import * as loremIpsum from "lorem-ipsum"
const rootEl = document.getElementById("root");
render(
	// <TextDynamicList/>,//<InfiniteList/> or <ImgDynamicVirtual/> or <TinyVirtual/>
	<ReactVirtual></ReactVirtual>,
	rootEl
)
