import checkPropTypes from "check-prop-types";

export const findTestByAttr = (comp, atrr) => {
  const wrapper = comp.find(`[data-test='${atrr}']`);
  return wrapper;
};

export const checkProps = (comp, expectedProps) => {
  const propsErr = checkPropTypes(
    comp.propTypes,
    expectedProps,
    "props",
    comp.name
  );
  return propsErr;
};
