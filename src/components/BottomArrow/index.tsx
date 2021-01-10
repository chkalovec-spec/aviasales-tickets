import classes from './style.module.scss'

type BottomArrowProps = {
  onClick?: () => void
}

export const BottomArrow: React.FC<BottomArrowProps> = ({ onClick: onClickHandler }) => {
  return (
    <>
      <svg className={classes.arrow} onClick={onClickHandler}>
        <polygon
          className={classes.top}
          points='37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 '
        />
        <polygon
          className={classes.middle}
          points='37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 '
        />
        <polygon
          className={classes.bottom}
          points='37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 '
        />
      </svg>
    </>
  )
}
