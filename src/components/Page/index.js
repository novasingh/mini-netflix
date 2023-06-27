import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Page = forwardRef(
  ({ children, title = "", padding, className, ...rest }, ref) => {
    return (
      <main ref={ref} {...rest}>
        <Helmet>
          <title>
            {title}
            {process.env.REACT_APP_SITE_NAME
              ? ` | ${process.env.REACT_APP_SITE_NAME}`
              : ""}
          </title>
        </Helmet>
          {children}
      </main>
    );
  }
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  padding: PropTypes.bool,
  className: PropTypes.string,
};

Page.defaultProps = {
  padding: true,
  className: "",
};

export default Page;
