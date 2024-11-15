import PropTypes from 'prop-types'

const MensajeError = ({error}) => {
  return (
    <p className="alert alert-danger">{error}</p>
  )
}

MensajeError.propTypes = {
    error: PropTypes.string.isRequired
    }


export default MensajeError
