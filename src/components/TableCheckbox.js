import React, { Fragment, useEffect, useRef, forwardRef } from 'react'
//import CheckBoxStyled from '../../components_style/CheckBoxStyled'
import Checkbox from '@material-ui/core/Checkbox'


const TableCheckbox = forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef()
    const resolvedRef = ref || defaultRef
    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])
    return (
      <Fragment>
        <Checkbox ref={resolvedRef} {...rest} />
      </Fragment>
    )
  }
)

export default TableCheckbox