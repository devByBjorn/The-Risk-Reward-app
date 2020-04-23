import React, { Fragment } from 'react'
import Checkbox from '@material-ui/core/Checkbox'


const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef
    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])
    return (
      <Fragment>
        <Checkbox ref={resolvedRef} {...rest} />
      </Fragment>
    )
  }
)

export default IndeterminateCheckbox