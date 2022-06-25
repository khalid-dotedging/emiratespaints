import React, { useState, useEffect } from "react";

const FullLayout = ({ children, ...rest }) => {
  const [spinner, setSpinner] = useState(false);
  const [tabProps, setTabProps] = useState(1);
  const [selectedColorProps, setSelectedColorProps] = useState([]);
  const [uploadImageProps, setUploadImageProps] = useState();


  console.log(selectedColorProps);
  const passableParams = {
    setTabProps,
    tabProps,
    setSpinner,
    spinner,
    setSelectedColorProps,
    selectedColorProps,
    setUploadImageProps,
    uploadImageProps,
  };
  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, passableParams);
    }
    return child;
  });

  return (
    <div className="main">
      <main>{childrenWithProps}</main>
    </div>
  );
};

export default FullLayout;
