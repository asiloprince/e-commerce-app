import PropTypes from "prop-types";

const Message = ({ variant, children }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "success":
        return "bg-green-500 text-white";
      case "error":
        return "bg-red-500 text-white";
      case "warning":
        return "bg-yellow-500 text-white";
      default:
        return "bg-blue-500 text-white";
    }
  };

  return (
    <div className={`px-4 py-2 rounded ${getVariantClasses()}`}>{children}</div>
  );
};

Message.propTypes = {
  variant: PropTypes.oneOf(["success", "error", "warning"]),
  children: PropTypes.node.isRequired,
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
