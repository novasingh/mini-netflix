import {useEffect, useCallback} from "react";
import {connect} from "react-redux";
import {useSnackbar} from "notistack";

const Snackbar = ({show, message, options}) => {
  const {enqueueSnackbar} = useSnackbar();

  const handleSnackbar = useCallback(() => {
    if (show) {
      enqueueSnackbar(message, options);
    }
  }, [show, message, options, enqueueSnackbar]);

  useEffect(() => {
    handleSnackbar();
  }, [handleSnackbar]);

  return null;
};

const mapStateToProps = state => ({
  show: state.alert.show,
  message: state.alert.message,
  options: state.alert.options
});

export default connect(mapStateToProps)(Snackbar);