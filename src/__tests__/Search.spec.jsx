import React from "react";
//enzyme is going to stub out all the childern as well
import { shallow } from "enzyme";
import Search from "../components/search";

test("Search renders correctly", () => {
	const component = shallow(<Search />);
	expect(component).toMatchSnapshot();
});
S;
