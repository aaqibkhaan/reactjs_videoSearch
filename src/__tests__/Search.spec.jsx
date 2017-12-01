import React from "react";
import { shallow } from "enzyme";
import preload from "../data.json";
import Search from "../components/search";
import ShowCard from "../components/ShowCard";

test("Search renders correctly", () => {
	const component = shallow(<Search />);
	expect(component).toMatchSnapshot();
});

test("Search should render correct amount of shows", () => {
	const component = shallow(<Search />);
	expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test("", () => {});
