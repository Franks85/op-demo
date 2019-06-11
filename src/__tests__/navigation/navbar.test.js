import React from "react";
import { shallow } from "enzyme";
import Navbar from "../../components/navigation/navbar";
import { checkProps, findTestByAttr } from "../../Util/test/index";

describe("Navbar", () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      linkLeft: [
        {
          title: "title 1",
          href: "href"
        },
        {
          title: "title 2",
          href: "href"
        }
      ],
      linkRight: [
        {
          title: "title 1",
          href: "href"
        },
        {
          title: "title 2",
          href: "href"
        }
      ]
    };
    wrapper = shallow(<Navbar {...props} />);
  });
  describe("Render", () => {
    it("should not crash", () => {
      const component = findTestByAttr(wrapper, "navbar");
      expect(component.length).toBe(1);
    });
  });
  describe("Checking proptypes", () => {
    it("should not thrown a warning", () => {
      const propsErr = checkProps(Navbar, props);
      expect(propsErr).toBeUndefined();
    });
  });
  describe('Methods', () => {
      it('toggle should update state as expected', () => {
          const classInstance = wrapper.instance();
          classInstance.toggle();
          const newState = classInstance.state.isOpen;
          expect(newState).toBe(true);
      });
  });
});
