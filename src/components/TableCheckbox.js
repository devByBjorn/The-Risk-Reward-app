import React, { Fragment, useEffect, useRef, forwardRef } from 'react'
import CheckBoxStyled from '../components_style/CheckBoxStyled'
import Checkbox from '@material-ui/core/Checkbox'

const TableCheckBox = forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef()
    const resolvedRef = ref || defaultRef
    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])
    return (
      <Fragment>
        <CheckBoxStyled ref={resolvedRef} {...rest} />
      </Fragment>
    )
  }
)

export default TableCheckBox