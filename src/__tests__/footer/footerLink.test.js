import React from "react";
import { shallow } from "enzyme";
import FooterLink from "../../components/footer/footerLink";
import { checkProps, findTestByAttr } from "../../Util/test/index";

describe("FooterLink", () => {
  describe("Render", () => {
      let wrapper;
    beforeEach(() => {
      const props = {
        href: "/",
        text: "example",
        iconName: "fas fa-envelope",
        icon: false
      };
      wrapper = shallow(<FooterLink {...props}/>)
    });
    it("should not crash", () => {
      const component = findTestByAttr(wrapper, 'footer_link')
      expect(component.length).toBe(1);
    });
  });
  describe("Checking proptypes", () => {
    it("should not thrown a warning", () => {
      const expectedProps = {
        href: "/",
        text: "example",
        iconName: "fas fa-envelope",
        icon: false
      };
      const propsErr = checkProps(FooterLink, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});
